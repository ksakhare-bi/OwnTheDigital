import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogPostContent, type BlogPostDetailView } from "@/components/blog/blog-post-content";
import { getBlogPostBySlug, blogPostDetails } from "@/content/blog";
import { getPublishedBlogBySlug, listPublishedBlogs } from "@/services/blogs.service";
import { normalizeBlogContent } from "@/utils/content-parser";
import { RelatedBlogItem } from "@/types/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  // Fetch from Admin API
  const blog = await getPublishedBlogBySlug(slug);
  if (blog) {
    const title = blog.seo?.title || blog.title;
    const description = blog.seo?.description || blog.excerpt;
    const canonicalUrl = blog.seo?.canonicalUrl || `https://ownthedigital.com/blogs/${blog.slug}`;
    const ogImage = blog.social?.ogImage || blog.featuredImage?.url || blog.image;
    const ogTitle = blog.social?.ogTitle || title;
    const ogDescription = blog.social?.ogDescription || description;
    const twitterCard = blog.social?.twitterCard || "summary_large_image";
    const twitterTitle = blog.social?.twitterTitle || title;
    const twitterDescription = blog.social?.twitterDescription || description;
    const twitterImage = blog.social?.twitterImage || ogImage;
    const authorName = typeof blog.author === "string" ? blog.author : blog.author?.name || "Own The Digital Team";


    return {
      title,
      description,
      alternates: {
        canonical: canonicalUrl,
      },
      robots: {
        index: blog.seo?.robotsIndex ?? true,
        follow: blog.seo?.robotsFollow ?? true,
      },
      openGraph: {
        title: ogTitle,
        description: ogDescription,
        url: blog.social?.ogUrl || canonicalUrl,
        type: "article",
        publishedTime: blog.publishedAt ? new Date(blog.publishedAt).toISOString() : undefined,
        modifiedTime: blog.updatedAt ? new Date(blog.updatedAt).toISOString() : undefined,
        authors: [authorName],
        tags: blog.tags || [],
        images: ogImage
          ? [
              {
                url: ogImage,
                width: 1200,
                height: 630,
                alt: blog.featuredImage?.altText || blog.title,
              },
            ]
          : [],
      },
      twitter: {
        card: twitterCard,
        title: twitterTitle,
        description: twitterDescription,
        images: twitterImage ? [twitterImage] : [],
      },
    };
  }

  // Fallback to static
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Blog Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: post.image ? [{ url: post.image, width: 1200, height: 630, alt: post.title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  // Fetch from Admin API
  const blog = await getPublishedBlogBySlug(slug);
  if (blog) {
    const formattedDate = blog.publishedAt
      ? new Date(blog.publishedAt).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : "";

    const authorName =
      typeof blog.author === "string"
        ? blog.author
        : blog.author?.name || "Own The Digital Team";

    const canonicalUrl = blog.seo?.canonicalUrl || `https://ownthedigital.com/blogs/${blog.slug}`;
    const schemaType = blog.seo?.schemaType || blog.schemaSettings?.type || "BlogPosting";
    const featuredImgUrl = blog.featuredImage?.url || blog.image;

    // Structured Data JSON-LD
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": schemaType,
      headline: blog.schemaSettings?.headline || blog.title,
      description: blog.schemaSettings?.description || blog.seo?.description || blog.excerpt,
      image: featuredImgUrl
        ? [
            {
              "@type": "ImageObject",
              url: featuredImgUrl,
              caption: blog.featuredImage?.caption || blog.title,
              description:
                blog.featuredImage?.description ||
                blog.featuredImage?.altText ||
                blog.excerpt,
            },
          ]
        : [],
      datePublished: blog.publishedAt ? new Date(blog.publishedAt).toISOString() : new Date().toISOString(),
      dateModified: blog.updatedAt ? new Date(blog.updatedAt).toISOString() : new Date().toISOString(),
      author: [
        {
          "@type": "Person",
          name: authorName,
        },
      ],
      publisher: {
        "@type": "Organization",
        name: "Own The Digital",
        url: "https://ownthedigital.com",
        logo: {
          "@type": "ImageObject",
          url: "https://ownthedigital.com/logo.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": canonicalUrl,
      },

      keywords: blog.seo?.keywords?.length ? blog.seo.keywords.join(", ") : blog.tags?.join(", "),
      articleSection: blog.category,
    };

    // Resolve all published blogs for related items and next suggested
    const allBlogs = await listPublishedBlogs();

    // Resolve related blogs (only display if there are at least 3 posts)
    let resolvedRelated: RelatedBlogItem[] = [];
    if (blog.relatedBlogs && blog.relatedBlogs.length >= 3) {
      resolvedRelated = blog.relatedBlogs.map((b) => ({
        id: b.id ? String(b.id) : undefined,
        title: String(b.title || ""),
        slug: String(b.slug || ""),
        excerpt: b.excerpt ? String(b.excerpt) : "",
        image: b.image ? String(b.image) : "/images/home/service-performance.png",
        category: b.category ? String(b.category) : "",
      }));
    } else {
      const others = allBlogs.filter((b) => b.slug !== slug);
      if (others.length >= 3) {
        resolvedRelated = others.slice(0, 3).map((b) => ({
          id: b.id ? String(b.id) : undefined,
          title: String(b.title || ""),
          slug: String(b.slug || ""),
          excerpt: b.excerpt ? String(b.excerpt) : "",
          image: b.featuredImage?.url || b.image || "/images/home/service-performance.png",
          category: b.category ? String(b.category) : "",
        }));
      }
    }

    const mappedPost: BlogPostDetailView = JSON.parse(
      JSON.stringify({
        slug: String(blog.slug || ""),
        title: String(blog.title || ""),
        image: String(featuredImgUrl || "/images/home/about-company.png"),
        featuredImage: blog.featuredImage
          ? {
              url: String(blog.featuredImage.url || ""),
              altText: String(blog.featuredImage.altText || ""),
              title: String(blog.featuredImage.title || ""),
              caption: String(blog.featuredImage.caption || ""),
              name: String(blog.featuredImage.name || ""),
              description: String(blog.featuredImage.description || ""),
            }
          : undefined,
        excerpt: String(blog.excerpt || ""),
        publishedAt: formattedDate.toUpperCase(),
        category: String(blog.category || "Artificial Intelligence"),
        readTime: String(blog.readTime || "5 Mins"),
        author:
          typeof blog.author === "string"
            ? blog.author
            : blog.author?.name
              ? { name: String(blog.author.name) }
              : authorName,
        tags: Array.isArray(blog.tags) ? blog.tags.map(String) : ["AI Models", "LLM"],
        content: normalizeBlogContent(blog.content),
        intro: blog.intro ? String(blog.intro) : undefined,
        sections: Array.isArray(blog.sections)
          ? blog.sections.map((s) => ({
              heading: String(s.heading || ""),
              description: String(s.description || ""),
              bullets: Array.isArray(s.bullets) ? s.bullets.map(String) : [],
            }))
          : [],
        relatedBlogs: resolvedRelated,
        embeddedLinks: Array.isArray(blog.embeddedLinks)
          ? blog.embeddedLinks.map((el) => ({
              url: String(el.url || ""),
              title: String(el.title || ""),
              description: el.description ? String(el.description) : "",
              category: el.category ? String(el.category) : "Resource",
            }))
          : [],
      })
    );

    // Resolve next suggested blog
    const index = allBlogs.findIndex((b) => b.slug === slug);
    const nextBlog =
      allBlogs.length > 1 && index !== -1
        ? allBlogs[(index + 1) % allBlogs.length]
        : blogPostDetails.find((p) => p.slug !== slug) || blogPostDetails[0] || blog;

    const formattedNextDate = nextBlog.publishedAt
      ? new Date(nextBlog.publishedAt).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : "";

    const mappedSuggestedPost: BlogPostDetailView = JSON.parse(
      JSON.stringify({
        slug: String(nextBlog.slug || ""),
        title: String(nextBlog.title || ""),
        image: String(nextBlog.image || "/images/home/about-company.png"),
        featuredImage:
          "featuredImage" in nextBlog && nextBlog.featuredImage
            ? {
                url: String(nextBlog.featuredImage.url || ""),
                altText: String(nextBlog.featuredImage.altText || ""),
                title: String(nextBlog.featuredImage.title || ""),
                caption: String(nextBlog.featuredImage.caption || ""),
                name: String(nextBlog.featuredImage.name || ""),
                description: String(nextBlog.featuredImage.description || ""),
              }
            : undefined,
        excerpt: String(nextBlog.excerpt || ""),
        publishedAt: formattedNextDate.toUpperCase(),
        category: nextBlog.category ? String(nextBlog.category) : undefined,
        readTime: nextBlog.readTime ? String(nextBlog.readTime) : undefined,
        author:
          "author" in nextBlog && typeof nextBlog.author === "string"
            ? nextBlog.author
            : "author" in nextBlog && typeof nextBlog.author === "object" && nextBlog.author && "name" in nextBlog.author
              ? { name: String((nextBlog.author as { name?: unknown }).name) }
              : undefined,
        tags: Array.isArray(nextBlog.tags) ? nextBlog.tags.map(String) : ["Digital Marketing", "Strategy"],
        intro: nextBlog.intro ? String(nextBlog.intro) : undefined,
        sections: Array.isArray(nextBlog.sections)
          ? nextBlog.sections.map((s) => ({
              heading: String(s.heading || ""),
              description: String(s.description || ""),
              bullets: Array.isArray(s.bullets) ? s.bullets.map(String) : [],
            }))
          : [],
      })
    );


    return (
      <>
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <BlogPostContent post={mappedPost} suggestedPost={mappedSuggestedPost} />
      </>
    );
  }

  // Fallback to static
  const post = getBlogPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const staticIndex = blogPostDetails.findIndex((p) => p.slug === slug);
  const nextStaticPost =
    blogPostDetails.length > 1
      ? blogPostDetails[(staticIndex + 1) % blogPostDetails.length]
      : post;

  return <BlogPostContent post={post} suggestedPost={nextStaticPost} />;
}


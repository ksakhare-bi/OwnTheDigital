import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogPostContent } from "@/components/blog/blog-post-content";
import { getBlogPostBySlug, blogPostDetails } from "@/content/blog";
import { getPublishedBlogBySlug, listPublishedBlogs } from "@/services/blogs.service";

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
    return {
      title: blog.title,
      description: blog.excerpt,
      openGraph: {
        title: blog.title,
        description: blog.excerpt,
        type: "article",
        images: blog.image ? [{ url: blog.image, width: 1200, height: 630, alt: blog.title }] : [],
      },
      twitter: {
        card: "summary_large_image",
        title: blog.title,
        description: blog.excerpt,
        images: blog.image ? [blog.image] : [],
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

export default async function BlogPostPage({ params } : BlogPostPageProps) {
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

    const mappedPost = {
      slug: blog.slug,
      title: blog.title,
      image: blog.image || "/images/home/about-company.png",
      excerpt: blog.excerpt,
      publishedAt: formattedDate.toUpperCase(),
      tags: blog.tags || ["Digital Marketing", "Strategy"],
      intro: blog.intro,
      sections: blog.sections || [],
    };

    // Resolve next suggested blog
    const allBlogs = await listPublishedBlogs();
    const index = allBlogs.findIndex((b) => b.slug === slug);
    const nextBlog =
      allBlogs.length > 1 && index !== -1
        ? allBlogs[(index + 1) % allBlogs.length]
        : blogPostDetails[0] || blog;

    const formattedNextDate = nextBlog.publishedAt
      ? new Date(nextBlog.publishedAt).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : "";

    const mappedSuggestedPost = {
      slug: nextBlog.slug,
      title: nextBlog.title,
      image: nextBlog.image || "/images/home/about-company.png",
      excerpt: nextBlog.excerpt,
      publishedAt: formattedNextDate.toUpperCase(),
      tags: nextBlog.tags || ["Digital Marketing", "Strategy"],
      intro: nextBlog.intro,
      sections: nextBlog.sections || [],
    };

    return (
      <BlogPostContent post={mappedPost} suggestedPost={mappedSuggestedPost} />
    );
  }

  // Fallback to static
  const post = getBlogPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const staticIndex = blogPostDetails.findIndex((p) => p.slug === slug);
  const nextStaticPost = blogPostDetails.length > 1
    ? blogPostDetails[(staticIndex + 1) % blogPostDetails.length]
    : post;

  return <BlogPostContent post={post} suggestedPost={nextStaticPost} />;
}

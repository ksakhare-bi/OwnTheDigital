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
  
  // Try DB first
  const dbBlog = await getPublishedBlogBySlug(slug);
  if (dbBlog) {
    return {
      title: dbBlog.title,
      description: dbBlog.excerpt,
    };
  }

  // Fallback to static
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return { title: "Blog Post" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params } : BlogPostPageProps) {
  const { slug } = await params;
  
  // Try DB first
  const dbBlog = await getPublishedBlogBySlug(slug);
  if (dbBlog) {
    const formattedDate = dbBlog.publishedAt
      ? new Date(dbBlog.publishedAt).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : "";

    const mappedPost = {
      slug: dbBlog.slug,
      title: dbBlog.title,
      image: dbBlog.image || "/images/home/about-company.png",
      excerpt: dbBlog.excerpt,
      publishedAt: formattedDate.toUpperCase(),
      tags: dbBlog.tags || ["Digital Marketing", "Strategy"],
      intro: dbBlog.intro,
      sections: dbBlog.sections || [],
    };

    // Resolve next suggested blog
    const allBlogs = await listPublishedBlogs();
    const index = allBlogs.findIndex((b) => b.slug === slug);
    const nextBlog = (allBlogs.length > 1 && index !== -1)
      ? allBlogs[(index + 1) % allBlogs.length]
      : (blogPostDetails[0] || dbBlog);

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

    return <BlogPostContent post={mappedPost} suggestedPost={mappedSuggestedPost} />;
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

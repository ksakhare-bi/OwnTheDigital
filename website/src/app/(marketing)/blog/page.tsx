import type { Metadata } from "next";

import { BlogContent } from "@/components/blog/blog-content";
import { listPublishedBlogs } from "@/services/blogs.service";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Insights on SEO, digital marketing, and growth strategy from Own the Digital.",
  openGraph: {
    title: "Blogs | Own the Digital",
    description: "Insights on SEO, digital marketing, and growth strategy from Own the Digital.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs | Own the Digital",
    description: "Insights on SEO, digital marketing, and growth strategy from Own the Digital.",
  },
};

export const dynamic = "force-dynamic";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const page = resolvedSearchParams.page ? parseInt(resolvedSearchParams.page, 10) : 1;
  const blogs = await listPublishedBlogs();
  return <BlogContent blogs={blogs} currentPage={page} />;
}

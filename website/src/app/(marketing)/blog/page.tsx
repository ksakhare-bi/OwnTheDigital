import type { Metadata } from "next";

import { BlogContent } from "@/components/blog/blog-content";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Insights on SEO, digital marketing, and growth strategy from Own the Digital.",
};

export default function BlogPage() {
  return <BlogContent />;
}

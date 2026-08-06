import { BlogTable } from "@/components/blogs/blog-table";
import { AdminShell } from "@/components/layout/admin-shell";
import type { Blog } from "@/types/blog";

export default function BlogsPage() {
  // Swap to `listBlogs()` from `@/services/blogs.service` once MongoDB is connected.
  const blogs: Blog[] = [];

  return (
    <AdminShell
      title="Blogs"
      actionHref="/blogs/new"
      actionLabel="Create blog"
    >
      <BlogTable blogs={blogs} />
    </AdminShell>
  );
}

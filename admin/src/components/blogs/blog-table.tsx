import { EmptyState } from "@/components/ui/empty-state";
import { formatDate } from "@/utils/format-date";
import type { Blog } from "@/types/blog";
import Link from "next/link";

type BlogTableProps = {
  blogs: Blog[];
};

export function BlogTable({ blogs }: BlogTableProps) {
  if (blogs.length === 0) {
    return (
      <EmptyState
        title="No blogs yet"
        description="Create your first blog post to get started."
      />
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white">
      <table className="min-w-full divide-y divide-zinc-200 text-sm">
        <thead className="bg-zinc-50 text-left text-zinc-500">
          <tr>
            <th className="px-4 py-3 font-medium">Title</th>
            <th className="px-4 py-3 font-medium">Status</th>
            <th className="px-4 py-3 font-medium">Author</th>
            <th className="px-4 py-3 font-medium">Updated</th>
            <th className="px-4 py-3 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-100">
          {blogs.map((blog) => (
            <tr key={blog.id} className="text-zinc-800">
              <td className="px-4 py-3">
                <div className="font-medium">{blog.title}</div>
                <div className="text-xs text-zinc-500">/{blog.slug}</div>
              </td>
              <td className="px-4 py-3">
                <span
                  className={
                    blog.published
                      ? "rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700"
                      : "rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700"
                  }
                >
                  {blog.published ? "Published" : "Draft"}
                </span>
              </td>
              <td className="px-4 py-3">{blog.author}</td>
              <td className="px-4 py-3">{formatDate(blog.updatedAt)}</td>
              <td className="px-4 py-3">
                <Link
                  href={`/blogs/${blog.id}/edit`}
                  className="font-medium text-blue-600 hover:text-blue-700"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

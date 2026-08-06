import { AdminShell } from "@/components/layout/admin-shell";

export default function NewBlogPage() {
  return (
    <AdminShell title="Create blog">
      <div className="rounded-lg border border-zinc-200 bg-white p-6">
        <p className="text-sm text-zinc-500">
          Blog create form (React Hook Form + Zod) will be added in the next
          iteration.
        </p>
      </div>
    </AdminShell>
  );
}

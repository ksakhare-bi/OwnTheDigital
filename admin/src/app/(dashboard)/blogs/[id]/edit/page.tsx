import { AdminShell } from "@/components/layout/admin-shell";

type EditBlogPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditBlogPage({ params }: EditBlogPageProps) {
  const { id } = await params;

  return (
    <AdminShell title="Edit blog">
      <div className="rounded-lg border border-zinc-200 bg-white p-6">
        <p className="text-sm text-zinc-500">
          Edit form for blog <span className="font-medium text-zinc-800">{id}</span>{" "}
          will be wired to MongoDB next.
        </p>
      </div>
    </AdminShell>
  );
}

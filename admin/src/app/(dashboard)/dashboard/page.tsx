import { AdminShell } from "@/components/layout/admin-shell";

export default function DashboardPage() {
  return (
    <AdminShell title="Dashboard">
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-zinc-200 bg-white p-5">
          <p className="text-sm text-zinc-500">Total blogs</p>
          <p className="mt-2 text-3xl font-semibold">—</p>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white p-5">
          <p className="text-sm text-zinc-500">Published</p>
          <p className="mt-2 text-3xl font-semibold">—</p>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white p-5">
          <p className="text-sm text-zinc-500">Drafts</p>
          <p className="mt-2 text-3xl font-semibold">—</p>
        </div>
      </div>
      <p className="mt-6 text-sm text-zinc-500">
        CMS starter for Own the Digital. Blog CRUD, auth sessions, and image
        uploads will be wired next.
      </p>
    </AdminShell>
  );
}

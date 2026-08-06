import { AdminHeader } from "@/components/layout/admin-header";
import { AdminSidebar } from "@/components/layout/admin-sidebar";

type AdminShellProps = {
  title: string;
  actionHref?: string;
  actionLabel?: string;
  children: React.ReactNode;
};

export function AdminShell({
  title,
  actionHref,
  actionLabel,
  children,
}: AdminShellProps) {
  return (
    <div className="flex min-h-screen bg-zinc-50 text-zinc-900">
      <AdminSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <AdminHeader
          title={title}
          actionHref={actionHref}
          actionLabel={actionLabel}
        />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}

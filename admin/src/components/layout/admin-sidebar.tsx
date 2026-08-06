import Link from "next/link";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/blogs", label: "Blogs" },
] as const;

export function AdminSidebar() {
  return (
    <aside className="flex w-56 shrink-0 flex-col border-r border-zinc-200 bg-white">
      <div className="border-b border-zinc-200 px-5 py-4">
        <p className="text-xs font-medium tracking-wide text-zinc-500 uppercase">
          Own the Digital
        </p>
        <p className="text-lg font-semibold text-zinc-900">Admin</p>
      </div>
      <nav className="flex flex-col gap-1 p-3">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-md px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

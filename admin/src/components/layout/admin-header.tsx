import Link from "next/link";

type AdminHeaderProps = {
  title: string;
  actionHref?: string;
  actionLabel?: string;
};

export function AdminHeader({
  title,
  actionHref,
  actionLabel,
}: AdminHeaderProps) {
  return (
    <header className="flex items-center justify-between border-b border-zinc-200 bg-white px-6 py-4">
      <h1 className="text-xl font-semibold text-zinc-900">{title}</h1>
      {actionHref && actionLabel ? (
        <Link
          href={actionHref}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          {actionLabel}
        </Link>
      ) : null}
    </header>
  );
}

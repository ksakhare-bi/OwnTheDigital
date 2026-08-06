import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-xl border border-zinc-200 bg-white p-8 shadow-sm">
        <p className="text-xs font-medium tracking-wide text-zinc-500 uppercase">
          Own the Digital
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-zinc-900">Admin login</h1>
        <p className="mt-2 text-sm text-zinc-500">
          Authentication wiring comes next. Continue to the dashboard shell for
          now.
        </p>
        <Link
          href="/dashboard"
          className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Continue to dashboard
        </Link>
      </div>
    </div>
  );
}

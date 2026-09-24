
export function getAdminApiUrl(): string {
  const url =
    process.env.ADMIN_API_URL ||
    process.env.NEXT_PUBLIC_ADMIN_URL ||
    "http://localhost:3001";

  return url.replace(/\/$/, "");
}

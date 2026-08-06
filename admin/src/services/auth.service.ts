/**
 * Auth service stubs — wire session strategy (e.g. NextAuth / custom cookies) next.
 */

import type { AdminUser, LoginInput } from "@/types/auth";

export async function loginAdmin(_input: LoginInput): Promise<AdminUser | null> {
  void _input;
  throw new Error("loginAdmin is not implemented yet");
}

export async function logoutAdmin(): Promise<void> {
  throw new Error("logoutAdmin is not implemented yet");
}

export async function getCurrentAdmin(): Promise<AdminUser | null> {
  return null;
}

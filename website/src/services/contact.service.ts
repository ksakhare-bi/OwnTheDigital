import type { Contact, CreateContactInput } from "@/types/contact";
import { getAdminApiUrl } from "@/utils/api";


export async function createContactSubmission(
  input: CreateContactInput
): Promise<Contact> {
  const apiUrl = getAdminApiUrl();

  const res = await fetch(`${apiUrl}/api/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(input),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    const errorMessage =
      errorData?.error ||
      `Failed to submit contact to admin API (status: ${res.status})`;
    throw new Error(errorMessage);
  }

  const json = await res.json();
  return json.data;
}

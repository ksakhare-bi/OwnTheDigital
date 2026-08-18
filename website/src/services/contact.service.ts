import { connectToDatabase } from "@/lib/db";
import { ContactModel } from "@/models/contact.model";
import type { Contact, CreateContactInput } from "@/types/contact";

type DbContactDoc = {
  _id: { toString(): string };
  name: string;
  email: string;
  phone?: string;
  message: string;
  status: "new" | "read" | "replied" | "archived";
  createdAt: Date;
  updatedAt: Date;
};

function mapContact(doc: DbContactDoc): Contact {
  return {
    id: doc._id.toString(),
    name: doc.name,
    email: doc.email,
    phone: doc.phone || "",
    message: doc.message,
    status: doc.status || "new",
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt,
  };
}

export async function createContactSubmission(
  input: CreateContactInput,
): Promise<Contact> {
  await connectToDatabase();

  const contact = await ContactModel.create({
    name: input.name,
    email: input.email.toLowerCase(),
    phone: input.phone || "",
    message: input.message,
    status: "new",
  });

  return mapContact(contact as unknown as DbContactDoc);
}

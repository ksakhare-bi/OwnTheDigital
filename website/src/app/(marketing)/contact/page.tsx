import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Own the Digital. Drop us a line, write us an email, or send us a text. We're here for you.",
  openGraph: {
    title: "Contact | Own the Digital",
    description: "Get in touch with Own the Digital. Drop us a line, write us an email, or send us a text. We're here for you.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Own the Digital",
    description: "Get in touch with Own the Digital. Drop us a line, write us an email, or send us a text. We're here for you.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}

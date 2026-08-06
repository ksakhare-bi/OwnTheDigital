import type { Metadata } from "next";

import { ServicesContent } from "@/components/services/services-content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Own the Digital services spanning search visibility, performance marketing, digital marketing, web development, AI marketing, and AI video production.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}

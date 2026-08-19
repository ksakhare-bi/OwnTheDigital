import type { Metadata } from "next";

import { AboutContent } from "@/components/about/about-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the Own the Digital team and discover how we help businesses earn visibility, trust, and measurable growth.",
  openGraph: {
    title: "About | Own the Digital",
    description: "Meet the Own the Digital team and discover how we help businesses earn visibility, trust, and measurable growth.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Own the Digital",
    description: "Meet the Own the Digital team and discover how we help businesses earn visibility, trust, and measurable growth.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}

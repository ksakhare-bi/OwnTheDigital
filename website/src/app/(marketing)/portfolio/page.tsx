import type { Metadata } from "next";

import { PortfolioContent } from "@/components/portfolio/portfolio-content";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore results-driven AI marketing and performance marketing projects by Own the Digital.",
  openGraph: {
    title: "Portfolio | Own the Digital",
    description: "Explore results-driven AI marketing and performance marketing projects by Own the Digital.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Own the Digital",
    description: "Explore results-driven AI marketing and performance marketing projects by Own the Digital.",
  },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}

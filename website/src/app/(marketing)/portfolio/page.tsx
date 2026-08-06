import type { Metadata } from "next";

import { PortfolioContent } from "@/components/portfolio/portfolio-content";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore results-driven AI marketing and performance marketing projects by Own the Digital.",
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}

export type ServiceDefinition = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  /** Figma desktop frame node id for design-to-code */
  figmaNodeId: string;
};

/**
 * Maps to desktop service frames on Figma page "Final" (158:763).
 */
export const services: ServiceDefinition[] = [
  {
    slug: "ai-marketing",
    title: "AI Marketing",
    shortTitle: "AI Marketing",
    description:
      "AI-powered marketing systems that scale content and campaigns.",
    figmaNodeId: "521:5563",
  },
  {
    slug: "search-visibility",
    title: "Search Visibility",
    shortTitle: "SEO / SEM",
    description: "Grow organic and paid search visibility that converts.",
    figmaNodeId: "521:4264",
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    shortTitle: "Performance",
    description: "Paid acquisition focused on measurable ROI.",
    figmaNodeId: "521:4594",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortTitle: "Digital",
    description: "Full-funnel digital marketing for brand growth.",
    figmaNodeId: "521:4917",
  },
  {
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web",
    description: "Modern websites and product experiences that convert.",
    figmaNodeId: "521:5240",
  },
  {
    slug: "ai-video-production",
    title: "AI Video Production",
    shortTitle: "AI Video",
    description: "Faster, scalable brand video production with AI.",
    figmaNodeId: "521:3940",
  },
];

export function getServiceBySlug(slug: string): ServiceDefinition | undefined {
  return services.find((service) => service.slug === slug);
}

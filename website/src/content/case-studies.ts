export type CaseStudyDefinition = {
  slug: string;
  title: string;
  client: string;
  summary: string;
  /** Figma desktop frame node id for design-to-code */
  figmaNodeId: string;
};

/**
 * Maps to desktop case-study frames on Figma page "Final" (158:763).
 */
export const caseStudies: CaseStudyDefinition[] = [
  {
    slug: "fittpulse",
    title: "FittPulse — Fitness & Wellness Content Platform",
    client: "FittPulse",
    summary: "Fitness and wellness content platform growth case study.",
    figmaNodeId: "521:9218",
  },
  {
    slug: "urbanroots",
    title: "UrbanRoots",
    client: "UrbanRoots",
    summary: "Brand and digital growth case study.",
    figmaNodeId: "521:9386",
  },
  {
    slug: "cloudscale",
    title: "CloudScale",
    client: "CloudScale",
    summary: "Performance and scale case study.",
    figmaNodeId: "521:9568",
  },
  {
    slug: "glowskinn",
    title: "Glowskinn",
    client: "Glowskinn",
    summary: "Beauty brand results case study.",
    figmaNodeId: "521:8998",
  },
];

export function getCaseStudyBySlug(
  slug: string,
): CaseStudyDefinition | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export type PortfolioProject = {
  slug: string;
  name: string;
  category: string;
  timeline: string;
  description: string;
  layout: "summary-first" | "art-first";
  artImage: string;
  summaryImage: string;
  summaryBaseImage?: string;
  services: string[];
  outcomes: string[];
};

export type PortfolioSection = {
  title: string;
  serviceHref: string;
  projects: PortfolioProject[];
};

export const portfolioSections: PortfolioSection[] = [
  {
    title: "AI Marketing",
    serviceHref: "/services/ai-marketing",
    projects: [
      {
        slug: "glowskinn",
        name: "GlowSkinn",
        category: "Premium D2C Skincare Brand",
        timeline: "6–10 months",
        description:
          "AI-powered marketing automation and chatbot implementation for a premium D2C skincare brand to improve conversions, customer engagement, and operational efficiency.",
        layout: "summary-first",
        artImage: "/images/home/portfolio-glowskinn-art.png",
        summaryImage: "/images/home/portfolio-glowskinn-summary.png",
        summaryBaseImage:
          "/images/home/portfolio-glowskinn-summary-base.png",
        services: [
          "AI marketing automation",
          "AI chatbot deployment",
          "Customer journey personalization",
          "AI-powered ad optimization",
        ],
        outcomes: [
          "34% repeat purchase rate",
          "72% fewer support tickets",
          "39% lower customer acquisition cost",
          "23% cart recovery rate",
        ],
      },
      {
        slug: "fittpulse",
        name: "FittPulse",
        category: "Fitness & Wellness Content Platform",
        timeline: "6 months",
        description:
          "AI-powered video creation and content automation for a fitness and wellness platform to scale content production, improve engagement, and reduce production costs.",
        layout: "art-first",
        artImage: "/images/home/portfolio-fitpulse-art.png",
        summaryImage: "/images/home/portfolio-fitpulse-summary.png",
        services: [
          "AI video creation pipeline",
          "AI content generation",
          "AI-powered SEO optimization",
          "Cross-platform content repurposing",
        ],
        outcomes: [
          "120+ videos produced monthly",
          "92% lower video production cost",
          "47K average Reel views",
          "520K social media followers",
        ],
      },
    ],
  },
  {
    title: "Performance Marketing",
    serviceHref: "/services/performance-marketing",
    projects: [
      {
        slug: "urbanroots",
        name: "UrbanRoots",
        category: "Sustainable Home & Living D2C Brand",
        timeline: "6 months",
        description:
          "AI-powered Google Ads and Meta Ads strategy for a sustainable D2C brand to improve ROAS, reduce acquisition costs, and scale revenue through intelligent advertising.",
        layout: "art-first",
        artImage: "/images/home/portfolio-urbanroots-art.png",
        summaryImage: "/images/home/portfolio-urbanroots-summary.png",
        services: [
          "Google Ads optimization",
          "Meta Ads campaign scaling",
          "AI-powered budget optimization",
          "Dynamic creative & audience optimization",
        ],
        outcomes: [
          "5.8:1 Meta Ads ROAS",
          "6.2:1 Google Ads ROAS",
          "65% lower customer acquisition cost",
          "6X increase in ad-driven revenue",
        ],
      },
      {
        slug: "cloudscale",
        name: "CloudScale",
        category: "B2B SaaS for Supply Chain Management",
        timeline: "6–10 months",
        description:
          "AI-powered LinkedIn and X (Twitter) advertising strategy for a B2B SaaS company to generate high-quality leads, shorten the sales cycle, and accelerate pipeline growth.",
        layout: "summary-first",
        artImage: "/images/home/portfolio-cloudscale-art.png",
        summaryImage: "/images/home/portfolio-cloudscale-summary.png",
        services: [
          "LinkedIn ABM campaigns",
          "X (Twitter) demand generation",
          "AI-powered lead scoring",
          "Personalized nurture automation",
        ],
        outcomes: [
          "77% lower LinkedIn cost per lead",
          "31% lead-to-SQL conversion rate",
          "18.4K X (Twitter) followers",
          "$8.7M quarterly paid pipeline",
        ],
      },
    ],
  },
];

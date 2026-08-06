export type BlogPostCard = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  image: string;
  publishedAt: string;
};

export type BlogDetailSection = {
  heading: string;
  description: string;
  bullets?: string[];
};

export type BlogPostDetail = BlogPostCard & {
  tags: string[];
  intro: string;
  sections: BlogDetailSection[];
  ctaTags: string[];
};

/** Static listing content matched to the Figma Blog Page frame. */
export const blogPosts: BlogPostCard[] = [
  {
    slug: "doing-strategies-that-work-seo",
    title: "Doing Strategies That Work",
    category: "SEO",
    readTime: "5 Mins",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
    image: "/images/home/service-performance.png",
    publishedAt: "30TH APRIL, 2026",
  },
  {
    slug: "doing-strategies-that-work-marketing",
    title: "Doing Strategies That Work",
    category: "Marketing, Digital, Strategy",
    readTime: "5 Mins",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
    image: "/images/home/service-performance.png",
    publishedAt: "30TH APRIL, 2026",
  },
  {
    slug: "strategies-that-work-growth",
    title: "Doing Strategies That Work",
    category: "SEO",
    readTime: "5 Mins",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
    image: "/images/home/service-performance.png",
    publishedAt: "30TH APRIL, 2026",
  },
  {
    slug: "doing-that-work-growth",
    title: "Doing Strategies That Work",
    category: "SEO",
    readTime: "5 Mins",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
    image: "/images/home/service-performance.png",
    publishedAt: "30TH APRIL, 2026",
  },
  {
    slug: "doing-strategies-work-growth",
    title: "Doing Strategies That Work",
    category: "SEO",
    readTime: "5 Mins",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
    image: "/images/home/service-performance.png",
    publishedAt: "30TH APRIL, 2026",
  },
  {
    slug: "doing-strategies-that-growth",
    title: "Doing Strategies That Work",
    category: "SEO",
    readTime: "5 Mins",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
    image: "/images/home/service-performance.png",
    publishedAt: "30TH APRIL, 2026",
  },
];

const sharedDetailSections: BlogDetailSection[] = [
  {
    heading: "Content Marketing",
    description:
      "Create valuable content that attracts, educates, and converts your audience into loyal customers.",
    bullets: [
      "Blog posts, guides, and educational resources",
      "Content calendars aligned to business goals",
    ],
  },
  {
    heading: "Search Engine Optimization",
    description:
      "Improve organic visibility so the right customers can discover your brand on Google and AI search.",
    bullets: [
      "On-page and technical SEO improvements",
      "Keyword strategy mapped to buyer intent",
    ],
  },
  {
    heading: "Social Media Marketing",
    description:
      "Build presence and engagement across the platforms where your audience already spends time.",
    bullets: [
      "Platform-specific content and community management",
      "Campaigns designed for reach and conversion",
    ],
  },
  {
    heading: "Email Marketing",
    description:
      "Nurture leads and customers with targeted email journeys that drive repeat engagement.",
    bullets: [
      "Segmentation and personalized messaging",
      "Automated flows for onboarding and retention",
    ],
  },
  {
    heading: "Pay-Per-Click Advertising",
    description:
      "Launch paid campaigns that capture high-intent demand and deliver measurable ROI.",
    bullets: [
      "Google Ads and paid social campaign setup",
      "Continuous testing for lower acquisition cost",
    ],
  },
  {
    heading: "Affiliate Marketing",
    description:
      "Expand distribution by partnering with creators and publishers who already reach your buyers.",
    bullets: [
      "Partner discovery and program structure",
      "Tracking, offers, and performance management",
    ],
  },
  {
    heading: "Influencer Marketing",
    description:
      "Collaborate with trusted voices to strengthen brand credibility and accelerate awareness.",
    bullets: [
      "Creator selection based on audience fit",
      "Campaign briefs and performance reporting",
    ],
  },
  {
    heading: "Video Marketing",
    description:
      "Use short-form and long-form video to explain your offer and increase engagement.",
    bullets: [
      "Script-to-video production workflows",
      "Distribution across social and paid channels",
    ],
  },
  {
    heading: "Conversion Rate Optimization",
    description:
      "Turn more visitors into leads and customers by improving every step of the funnel.",
    bullets: [
      "Landing page and funnel experimentation",
      "UX insights backed by analytics data",
    ],
  },
  {
    heading: "Analytics and Tracking",
    description:
      "Measure what matters so every campaign decision is guided by clear performance data.",
    bullets: [
      "KPI dashboards and attribution setup",
      "Monthly insights with recommended next actions",
    ],
  },
  {
    heading: "Conclusion",
    description:
      "When strategy, creative, and measurement work together, digital marketing becomes a reliable growth system—not a set of disconnected tactics.",
  },
];

/** Static detail content matched to the Figma Open Blog frame. */
export const blogPostDetails: BlogPostDetail[] = blogPosts.map((post) => ({
  ...post,
  tags: ["Digital Marketing", "Strategy"],
  intro:
    "Digital marketing works best when every channel supports one clear growth goal. This guide breaks down the strategies that help brands get discovered, earn trust, and convert attention into measurable results.",
  sections: sharedDetailSections,
  ctaTags: ["Graphic + SEO", "Real Time Metrics"],
}));

export const blogPagination = {
  totalPages: 5,
  currentPage: 1,
} as const;

export function getBlogPostBySlug(slug: string): BlogPostDetail | undefined {
  return blogPostDetails.find((post) => post.slug === slug);
}

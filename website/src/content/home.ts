export type HomeService = {
  title: string;
  eyebrow: string;
  description: string;
  items: string[];
  image: string;
  href: string;
};

export type ClientLogo = {
  alt: string;
  src: string;
  width: number;
  height: number;
  hasShadow?: boolean;
};

export const clientLogos: ClientLogo[] = [
  {
    alt: "IBM",
    src: "/images/home/client-1.png",
    width: 122,
    height: 54,
    hasShadow: true,
  },
  {
    alt: "Sectrio",
    src: "/images/home/client-2.png",
    width: 205,
    height: 47,
    hasShadow: true,
  },
  {
    alt: "Third Wave Coffee",
    src: "/images/home/client-3.png",
    width: 112,
    height: 65,
    hasShadow: true,
  },
  {
    alt: "Pantaloons",
    src: "/images/home/client-4.png",
    width: 192,
    height: 52,
    hasShadow: true,
  },
  {
    alt: "Maharashtra Times",
    src: "/images/home/client-5.png",
    width: 232,
    height: 37,
    hasShadow: true,
  },
  {
    alt: "Racanaa Energy",
    src: "/images/home/client-6.png",
    width: 211,
    height: 57,
  },
  {
    alt: "Pratmoksha",
    src: "/images/home/client-7.png",
    width: 198,
    height: 64,
  },
  {
    alt: "Aubree",
    src: "/images/home/client-8.png",
    width: 162,
    height: 50,
  },
];

export const homeServices: HomeService[] = [
  {
    title: "Search Visibility",
    eyebrow: "SEO • AEO • GEO • Local SEO • Technical SEO",
    description:
      "Get discovered where your customers search from Google to AI-powered search engines.",
    items: [
      "Search Engine Optimization (SEO)",
      "Answer Engine Optimization (AEO)",
      "Generative Engine Optimization (GEO)",
    ],
    image: "/images/home/service-search.png",
    href: "/services/search-visibility",
  },
  {
    title: "Performance Marketing",
    eyebrow: "Google Ads • Meta Ads • LinkedIn Ads • X Ads • AI Advertising",
    description:
      "Launch data-driven ad campaigns that maximize leads, sales, and return on investment.",
    items: [
      "Google Ads",
      "Meta Ads",
      "LinkedIn Ads",
      "X (Twitter) Ads",
      "AI-Powered Advertising",
    ],
    image: "/images/home/service-performance.png",
    href: "/services/performance-marketing",
  },
  {
    title: "Digital Marketing",
    eyebrow:
      "Social Media • Content Marketing • ORM • Brand Growth • Engagement",
    description:
      "Build a strong online presence with content, social media, and brand reputation management.",
    items: [
      "Social Media Marketing",
      "Content Marketing",
      "Online Reputation Management",
    ],
    image: "/images/home/service-digital.png",
    href: "/services/digital-marketing",
  },
  {
    title: "Web Design & Development",
    eyebrow:
      "Business Websites • E-commerce • Landing Pages • UI/UX • Maintenance",
    description:
      "Create fast, scalable websites designed to convert visitors into customers.",
    items: [
      "Business Website Development",
      "E-commerce Development",
      "Landing Page Development",
      "Website Maintenance",
      "UI/UX Design",
    ],
    image: "/images/home/service-web.png",
    href: "/services/web-development",
  },
  {
    title: "AI Marketing",
    eyebrow: "AI Content • AI Video • Automation • AI Workflows • Chatbots",
    description:
      "Leverage AI to automate marketing, create content faster, and scale customer engagement.",
    items: [
      "AI Video Creation",
      "AI Content Creation",
      "AI Marketing Automation",
      "AI Chatbots",
    ],
    image: "/images/home/service-ai.png",
    href: "/services/ai-marketing",
  },
];

export const advantages = [
  {
    number: "01",
    title: "Real Growth",
    description:
      "We focus on leads, sales, and measurable business results, not vanity metrics.",
    result: "↑ Across performance campaigns",
  },
  {
    number: "02",
    title: "Full Visibility",
    description:
      "From Google to ads and AI search, we make sure your brand is everywhere customers are looking.",
    result: "↑ Ranked in AI-generated answers",
  },
  {
    number: "03",
    title: "Custom Strategy",
    description:
      "Every plan is built around your business goals, not a one-size-fits-all template.",
    result: "↑ Campaigns that suit your niche",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Free Audit",
    description:
      "We audit your current digital presence across all channels—no cost or commitment required.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "A custom roadmap tailored to your goals, budget, and target market—India, US, or both.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "We launch campaigns, manage content, and optimize weekly for peak performance and ROI.",
  },
  {
    number: "04",
    title: "Scale",
    description:
      "Clear monthly reports with insights, learnings, and the next strategic growth move.",
  },
];

export const projects = [
  {
    slug: "glowskinn",
    name: "GlowSkinn",
    category: "Premium D2C Skincare Brand",
    timeline: "6–10 months",
    description:
      "AI-powered marketing automation and chatbot implementation for a premium D2C skincare brand to improve conversions, customer engagement, and operational efficiency.",
    artImage: "/images/home/glowskinn-art.png",
    summaryImage: "/images/home/glowskinn-detail.png",
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
    slug: "urbanroots",
    name: "UrbanRoots",
    category: "Sustainable Home & Living D2C Brand",
    timeline: "6 months",
    description:
      "AI-powered Google Ads and Meta Ads strategy for a sustainable D2C brand to improve ROAS, reduce acquisition costs, and scale revenue through intelligent advertising.",
    artImage: "/images/home/urbanroots-art.png",
    summaryImage: "/images/home/urbanroots-detail.png",
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
];

export const testimonials = [
  {
    title: "Fast Delivery of a High-Quality Website",
    quote:
      "We were thrilled with how quickly Own the Digital delivered our new website. Despite the tight timeline, they produced an exceptional site that met all our needs.",
    name: "Mahesh Bhatia",
    company: "Third Wave Coffee",
    image: "/images/home/testimonial-mahesh.png",
  },
  {
    title: "Excellent Customer Service and Support",
    quote:
      "The team was responsive, transparent, and consistently focused on the right outcomes throughout our engagement.",
    name: "Kashish Mahajan",
    company: "Maharashtra Times",
    image: "/images/home/testimonial-kashish.png",
  },
  {
    title: "Great Value with High-Quality Development",
    quote:
      "They combined strategic thinking with excellent execution and delivered a digital experience that supports real business growth.",
    name: "Michelle Johnson",
    company: "Pantaloons",
    image: "/images/home/testimonial-michelle.png",
  },
];

export const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We help businesses with Google Business Profile optimization, performance marketing, SEO (AEO/GEO), social media marketing, web development, and AI marketing.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Yes. Our strategies are tailored to the stage, goals, and budget of each business—from ambitious startups to established brands.",
  },
  {
    question: "What makes you different from other agencies?",
    answer:
      "We combine data, creativity, and AI while staying focused on measurable outcomes such as leads, sales, visibility, and ROI.",
  },
  {
    question: "Do you offer custom strategies?",
    answer:
      "Every engagement starts with an audit and a roadmap built around your market, audience, budget, and business goals.",
  },
  {
    question: "How can I track performance?",
    answer:
      "You receive clear performance reporting with results, insights, learnings, and recommended next steps.",
  },
];

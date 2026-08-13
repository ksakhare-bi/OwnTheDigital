export type ServiceDetail = {
  slug: string;
  title: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  whatIsTitle: string;
  whatIsDescription: string;
  whatIsImage: string;
  whoIsItFor: string[];
  commonChallenges: string[];
  benefits: string[];
  howWeWork: {
    number: string;
    title: string;
    description: string;
  }[];
  whatsIncluded: {
    title: string;
    bullets: string[];
  }[];
  tools: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  projectSlugs?: string[];
  finalCtaQuestion: string;
};

export const serviceDetailsList: ServiceDetail[] = [
  {
    slug: "ai-marketing",
    title: "AI Marketing",
    tagline: "AI MARKETING THAT HELPS",
    heroHeadline: "YOUR BUSINESS SCALE SMARTER",
    heroSubheadline: "Harness the power of AI to create content faster, automate workflows, optimize campaigns, and deliver personalized customer experiences that drive measurable growth",
    whatIsTitle: "WHAT IS AI MARKETING?",
    whatIsDescription: "AI Marketing uses artificial intelligence to streamline marketing processes, improve decision-making, and enhance customer engagement. From AI-generated content and videos to intelligent automation and workflow optimization, we help businesses work more efficiently while delivering better marketing results.",
    whatIsImage: "/images/home/about-expertise.png",
    whoIsItFor: [
      "STARTUPS & SCALE-UPS",
      "MARKETING TEAMS",
      "E-COMMERCE BRANDS",
      "AGENCIES",
      "SMALL & MEDIUM BUSINESSES",
      "ENTERPRISES"
    ],
    commonChallenges: [
      "TIME-CONSUMING CONTENT CREATION",
      "MANUAL MARKETING WORKFLOWS",
      "LOW TEAM PRODUCTIVITY",
      "INCONSISTENT CUSTOMER ENGAGEMENT",
      "DIFFICULTY SCALING CAMPAIGNS"
    ],
    benefits: [
      "CREATE CONTENT FASTER",
      "AUTOMATE REPETITIVE TASKS",
      "INCREASE MARKETING EFFICIENCY",
      "PERSONALIZE CUSTOMER EXPERIENCES",
      "SCALE CAMPAIGNS WITH AI"
    ],
    howWeWork: [
      {
        number: "01",
        title: "Discover & Assess",
        description: "We evaluate your existing marketing processes, identify automation opportunities, and understand your business goals."
      },
      {
        number: "02",
        title: "Strategy & Implementation",
        description: "We develop an AI-powered marketing strategy and integrate the right tools, workflows, and automation."
      },
      {
        number: "03",
        title: "Create & Automate",
        description: "From AI-generated content and videos to workflow automation, we implement solutions that improve efficiency and consistency."
      },
      {
        number: "04",
        title: "Optimize & Scale",
        description: "We continuously monitor performance, refine AI workflows, and optimize campaigns to maximize results as your business grows."
      }
    ],
    whatsIncluded: [
      {
        title: "AI CONTENT & CREATIVITY",
        bullets: [
          "AI Content Creation",
          "AI Copywriting",
          "AI Video Creation",
          "AI Image Generation",
          "Content Repurposing"
        ]
      },
      {
        title: "AUTOMATION & WORKFLOWS",
        bullets: [
          "Marketing Automation",
          "Email Automation",
          "Lead Nurturing Workflows",
          "AI Workflow Integration",
          "Prompt Engineering"
        ]
      },
      {
        title: "OPTIMIZATION & GROWTH",
        bullets: [
          "AI Campaign Optimization",
          "Performance Monitoring",
          "Workflow Optimization",
          "AI Strategy Consulting",
          "AI Chatbots (Coming Soon)"
        ]
      }
    ],
    tools: [
      "CHATGPT",
      "CLAUDE",
      "MIDJOURNEY",
      "HUBSPOT AI",
      "ZAPIER",
      "RUNWAY"
    ],
    faqs: [
      {
        question: "What is AI Marketing?",
        answer: "AI Marketing uses artificial intelligence to automate marketing tasks, generate content, analyze data, and optimize campaigns for better performance."
      },
      {
        question: "Can AI replace my marketing team?",
        answer: "No, AI is designed to empower and assist teams to work more efficiently, automating tedious processes so people can focus on strategy and creativity."
      },
      {
        question: "Which AI tools do you use?",
        answer: "We use top-tier tools including ChatGPT, Claude, Midjourney, Zapier, Runway, and custom APIs based on specific workflow needs."
      },
      {
        question: "Can AI generate content for my brand?",
        answer: "Yes, we design custom templates and prompts configured to match your brand's unique tone of voice and visual branding guidelines."
      },
      {
        question: "Can you automate my existing marketing workflows?",
        answer: "Absolutely. We build integrations that link your CRM, email providers, and social channels with automated AI processing."
      }
    ],
    projectSlugs: ["glowskinn", "urbanroots"],
    finalCtaQuestion: "IS AI MARKETING SUITABLE FOR SMALL BUSINESSES?"
  },
  {
    slug: "search-visibility",
    title: "Search Visibility",
    tagline: "INCREASE YOUR VISIBILITY",
    heroHeadline: "ACROSS GOOGLE & AI SEARCH",
    heroSubheadline: "Help your business rank higher on search engines and become discoverable in AI-powered platforms like ChatGPT, Gemini, and Perplexity.",
    whatIsTitle: "WHAT IS SEARCH VISIBILITY?",
    whatIsDescription: "Search visibility is the process of ensuring your business appears where customers search, whether on Google, Bing, or AI-powered search engines. We combine Search Engine Optimization (SEO), Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO) to help your brand stay visible across traditional and AI-driven search experiences.",
    whatIsImage: "/images/home/about-expertise.png", // fallback placeholder image
    whoIsItFor: [
      "B2B & B2C BUSINESSES",
      "SAAS COMPANIES",
      "E-COMMERCE BRANDS",
      "HEALTHCARE PROVIDERS",
      "PROFESSIONAL SERVICE FIRMS",
      "STARTUPS"
    ],
    commonChallenges: [
      "LOW ORGANIC TRAFFIC",
      "POOR KEYWORD RANKINGS",
      "DECLINING VISIBILITY",
      "AI SEARCH NOT MENTIONING YOUR BRAND",
      "LOW-QUALITY WEBSITE TRAFFIC"
    ],
    benefits: [
      "HIGHER GOOGLE RANKINGS",
      "INCREASED ORGANIC TRAFFIC",
      "MORE QUALIFIED LEADS",
      "BETTER BRAND AUTHORITY",
      "LONG-TERM SUSTAINABLE GROWTH",
      "VISIBILITY IN AI SEARCH RESULTS"
    ],
    howWeWork: [
      {
        number: "01",
        title: "Discover & Audit",
        description: "We analyze your website, competitor keyword health, and identify direct search growth opportunities."
      },
      {
        number: "02",
        title: "Strategy & Planning",
        description: "We develop a custom SEO, AEO, and GEO strategy based on your current exposure, system goals, and business goals."
      },
      {
        number: "03",
        title: "Optimize & Execute",
        description: "We implement technical SEO modifications, build authoritative content pages, and optimize for AI search engines."
      },
      {
        number: "04",
        title: "Monitor & Grow",
        description: "We monitor keyword performance, domain authority growth, and track brand visibility in AI responses to scale."
      }
    ],
    whatsIncluded: [
      {
        title: "SEARCH STRATEGY",
        bullets: [
          "Comprehensive SEO Audit",
          "Competitor Analysis",
          "Keyword & Search Intent Research",
          "Content Gap Analysis",
          "Search Visibility Roadmap"
        ]
      },
      {
        title: "ON-PAGE OPTIMIZATION",
        bullets: [
          "Technical SEO Improvements",
          "Metadata & Schema Markup",
          "Internal Linking Strategy",
          "Content Optimization",
          "User Experience Optimization"
        ]
      },
      {
        title: "AI SEARCH OPTIMIZATION",
        bullets: [
          "Answer Engine Optimization (AEO)",
          "Generative Engine Optimization (GEO)",
          "AI-friendly Content Structuring",
          "Structured Support Optimization",
          "Knowledge Panel & Entity Optimization"
        ]
      },
      {
        title: "AUTHORITY & GROWTH",
        bullets: [
          "Local SEO Optimization",
          "Link Building Strategy",
          "Google Business Profile Optimization",
          "Performance Monitoring",
          "Monthly SEO Reporting & Analysis"
        ]
      }
    ],
    tools: [
      "GOOGLE SEARCH CONSOLE",
      "GOOGLE ANALYTICS 4 (GA4)",
      "AHREFS",
      "SEMRUSH",
      "SCREAMING FROG SEO SPIDER",
      "GOOGLE GEMINI / CHATGPT"
    ],
    faqs: [
      {
        question: "What is Search Visibility?",
        answer: "Search Visibility is the measure of how visible your business is in organic search results. We optimize for both traditional search engines (Google, Bing) and next-gen AI search engines (ChatGPT, Perplexity, Gemini)."
      },
      {
        question: "What is the difference between SEO, AEO, and GEO?",
        answer: "SEO optimizes for standard search engine results pages. AEO (Answer Engine Optimization) focuses on prompt-answer engine queries. GEO (Generative Engine Optimization) ensures generative AI models select and reference your website context when generating responses."
      },
      {
        question: "How long does it take to see SEO results?",
        answer: "Typically, search visibility optimizations take 3 to 6 months to start showing noticeable impact on search rankings and organic traffic growth."
      },
      {
        question: "Do you provide monthly reports?",
        answer: "Yes, we share detailed monthly performance reports tracking keyword rankings, search impressions, organic traffic metrics, and AI engine mentions."
      },
      {
        question: "Can you optimize my existing website?",
        answer: "Absolutely. We perform complete website audits and optimize copy, structure, tags, load speeds, and integrations to lift search performance."
      }
    ],
    projectSlugs: ["urbanroots", "cloudscale"],
    finalCtaQuestion: "READY TO BE FOUND WHERE YOUR CUSTOMERS SEARCH?"
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    tagline: "PERFORMANCE MARKETING THAT",
    heroHeadline: "DRIVES MEASURABLE GROWTH",
    heroSubheadline: "Reach the right audience, maximize your ad spend, and generate measurable business growth with data-driven advertising campaigns.",
    whatIsTitle: "WHAT IS PERFORMANCE MARKETING?",
    whatIsDescription: "Performance Marketing is a results-driven approach to digital advertising where every campaign is optimized to achieve measurable outcomes whether that's generating leads, increasing sales, or maximizing return on ad spend (ROAS). Using real-time data and continuous optimization, we ensure every marketing dollar works harder for your business.",
    whatIsImage: "/images/home/about-expertise.png", // fallback placeholder image
    whoIsItFor: [
      "STARTUPS & SCALE-UPS",
      "E-COMMERCE BRANDS",
      "B2B COMPANIES",
      "HEALTHCARE & EDUCATION",
      "SAAS BUSINESSES",
      "PROFESSIONAL SERVICE FIRMS"
    ],
    commonChallenges: [
      "HIGH COST PER LEAD (CPL)",
      "LOW CONVERSION RATES",
      "POOR RETURN ON AD SPEND (ROAS)",
      "WASTED ADVERTISING BUDGET",
      "DIFFICULTY SCALING CAMPAIGNS"
    ],
    benefits: [
      "GENERATE HIGH-QUALITY LEADS",
      "INCREASE RETURN ON AD SPEND (ROAS)",
      "LOWER CUSTOMER ACQUISITION COST (CAC)",
      "REACH THE RIGHT AUDIENCE",
      "SCALE CAMPAIGNS WITH CONFIDENCE",
      "REAL-TIME PERFORMANCE INSIGHTS"
    ],
    howWeWork: [
      {
        number: "01",
        title: "Discover & Strategize",
        description: "We understand your business goals, audience, competitors, and budget to build a tailored advertising strategy."
      },
      {
        number: "02",
        title: "Build & Launch",
        description: "We set up campaigns, define audience targeting, create compelling ad creatives, and implement conversion tracking."
      },
      {
        number: "03",
        title: "Optimize & Scale",
        description: "Using real-time performance data, we continuously refine bidding, targeting, creatives, and budgets to maximize ROI."
      },
      {
        number: "04",
        title: "Measure & Report",
        description: "Receive transparent reports with actionable insights and strategic recommendations to improve performance month-over-month."
      }
    ],
    whatsIncluded: [
      {
        title: "CAMPAIGN STRATEGY & SETUP",
        bullets: [
          "Advertising Strategy",
          "Audience Research",
          "Campaign Structure",
          "Conversion Tracking Setup",
          "Pixel & Tag Installation"
        ]
      },
      {
        title: "CAMPAIGN MANAGEMENT",
        bullets: [
          "Google Ads Management",
          "Meta Ads Management",
          "LinkedIn Ads Management",
          "X (Twitter) Ads Management",
          "AI-Powered Campaign Optimization"
        ]
      },
      {
        title: "OPTIMIZATION & REPORTING",
        bullets: [
          "A/B Testing",
          "Budget Optimization",
          "Performance Monitoring",
          "Monthly Performance Reports"
        ]
      }
    ],
    tools: [
      "GOOGLE ADS",
      "META ADS MANAGER",
      "GOOGLE ANALYTICS 4 (GA4)",
      "LOOKER STUDIO",
      "GOOGLE AI CAMPAIGNS",
      "META ADVANTAGE+"
    ],
    faqs: [
      {
        question: "Which advertising platform is right for my business?",
        answer: "It depends on your goals, audience, and budget. We recommend the best platforms based on your business objectives and target market."
      },
      {
        question: "How much should I spend on paid advertising?",
        answer: "We recommend a starting budget based on your industry, target audience size, and cost per click. You can scale budgets as campaigns deliver results."
      },
      {
        question: "How soon can I expect results?",
        answer: "Initial traffic and engagement happen almost immediately, but finding the optimal performance sweet-spot takes 2 to 4 weeks of testing and refining."
      },
      {
        question: "Do you manage existing ad accounts?",
        answer: "Yes, we can perform an audit of your current ad setup, refine the structure, optimize targeting, and manage the accounts going forward."
      },
      {
        question: "Will I receive performance reports?",
        answer: "Absolutely. We share custom Looker Studio dashboards and detailed reports tracking impressions, clicks, conversions, acquisition cost, and return on ad spend."
      }
    ],
    projectSlugs: ["urbanroots", "cloudscale"],
    finalCtaQuestion: "READY TO TURN AD SPEND INTO BUSINESS GROWTH?"
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    tagline: "DIGITAL MARKETING THAT",
    heroHeadline: "BUILDS BRANDS & DRIVES GROWTH",
    heroSubheadline: "Connect with your audience through strategic content, social media, and reputation management that builds trust, increases engagement, and drives measurable business growth.",
    whatIsTitle: "WHAT IS DIGITAL MARKETING?",
    whatIsDescription: "Digital Marketing is a comprehensive approach to promoting your business across online channels. By combining social media marketing, content marketing, and online reputation management, we help you attract, engage, and retain customers while building a strong digital presence.",
    whatIsImage: "/images/home/about-expertise.png", // fallback placeholder image
    whoIsItFor: [
      "STARTUPS & SCALE-UPS",
      "E-COMMERCE BRANDS",
      "B2B COMPANIES",
      "HEALTHCARE & EDUCATION",
      "HOSPITALITY & RETAIL",
      "PROFESSIONAL SERVICE FIRMS"
    ],
    commonChallenges: [
      "LOW BRAND AWARENESS",
      "INCONSISTENT SOCIAL MEDIA PRESENCE",
      "POOR AUDIENCE ENGAGEMENT",
      "LIMITED CONTENT STRATEGY",
      "NEGATIVE ONLINE REVIEWS"
    ],
    benefits: [
      "INCREASE BRAND AWARENESS",
      "BUILD CUSTOMER TRUST & CREDIBILITY",
      "DRIVE CONSISTENT ENGAGEMENT",
      "GROW YOUR ONLINE COMMUNITY",
      "STRENGTHEN YOUR BRAND REPUTATION"
    ],
    howWeWork: [
      {
        number: "01",
        title: "Strengthen Your Brand Reputation",
        description: "We understand your brand, audience, competitors, and marketing goals to build a tailored digital roadmap."
      },
      {
        number: "02",
        title: "Plan & Create",
        description: "We develop content calendars, design creative strategies, and produce assets aligned with your brand identity."
      },
      {
        number: "03",
        title: "Execute & Engage",
        description: "We publish content, manage social channels, engage with your audience, and monitor brand conversations."
      },
      {
        number: "04",
        title: "Analyze & Optimize",
        description: "We track performance metrics, gather insights, and continuously refine campaigns for better engagement and ROI."
      }
    ],
    whatsIncluded: [
      {
        title: "STRATEGY & PLANNING",
        bullets: [
          "Digital Marketing Strategy",
          "Content Calendar",
          "Audience & Competitor Research",
          "Brand Messaging"
        ]
      },
      {
        title: "CONTENT & SOCIAL MEDIA",
        bullets: [
          "Social Media Management",
          "Content Creation",
          "Community Engagement",
          "Campaign Management"
        ]
      },
      {
        title: "GROWTH & REPUTATION",
        bullets: [
          "Online Reputation Management (ORM)",
          "Performance Reporting",
          "Growth Recommendations",
          "Brand Monitoring"
        ]
      }
    ],
    tools: [
      "META BUSINESS SUITE",
      "LINKEDIN",
      "GOOGLE ANALYTICS 4 (GA4)",
      "META INSIGHTS",
      "CHATGPT",
      "HOOTSUITE"
    ],
    faqs: [
      {
        question: "How often will you post content?",
        answer: "Posting frequency depends on your selected package and marketing strategy, typically ranging from 3 to 7 posts per week."
      },
      {
        question: "Do you create the content and designs?",
        answer: "Yes, our team manages the entire process including creative copywriting, graphic design, and custom templates."
      },
      {
        question: "Can you manage online reviews and reputation?",
        answer: "Absolutely. We track mentions of your brand online, manage customer reviews, and craft constructive responses to maintain a positive brand reputation."
      },
      {
        question: "Do you manage existing ad accounts?",
        answer: "Yes, we can perform an audit of your current ad setup, refine the structure, optimize targeting, and manage the accounts going forward."
      },
      {
        question: "Will I receive performance reports?",
        answer: "Yes, we share detailed monthly performance reports tracking impressions, clicks, conversions, and growth metrics."
      }
    ],
    projectSlugs: ["glowskinn", "urbanroots"],
    finalCtaQuestion: "READY TO GROW YOUR BRAND ONLINE?"
  },
  {
    slug: "web-development",
    title: "Web Design & Development",
    tagline: "WEBSITES DESIGNED",
    heroHeadline: "TO GROW YOUR BUSINESS",
    heroSubheadline: "We design and develop fast, responsive, and conversion-focused websites that deliver exceptional user experiences and help turn visitors into customers.",
    whatIsTitle: "WHAT IS WEB DESIGN & DEVELOPMENT?",
    whatIsDescription: "Your website is often the first impression of your business. We create modern, user-centric websites that combine beautiful design, seamless functionality, and high performance to support your business goals. From business websites and e-commerce stores to landing pages and UI/UX design, we build digital experiences that convert.",
    whatIsImage: "/images/home/about-expertise.png", 
    whoIsItFor: [
      "STARTUPS & SCALE-UPS",
      "E-COMMERCE BRANDS",
      "SMALL & MEDIUM BUSINESSES",
      "HEALTHCARE & EDUCATION",
      "HOSPITALITY & RETAIL",
      "SAAS COMPANIES"
    ],
    commonChallenges: [
      "OUTDATED WEBSITE DESIGN",
      "POOR USER EXPERIENCE",
      "SLOW WEBSITE PERFORMANCE",
      "LOW CONVERSION RATES",
      "MOBILE RESPONSIVENESS ISSUES"
    ],
    benefits: [
      "MODERN & PROFESSIONAL BRAND PRESENCE",
      "BETTER USER EXPERIENCE (UX)",
      "HIGHER CONVERSION RATES",
      "FAST & RESPONSIVE PERFORMANCE",
      "SEO-FRIENDLY DEVELOPMENT",
      "SCALABLE & EASY-TO-MANAGE WEBSITES"
    ],
    howWeWork: [
      {
        number: "01",
        title: "Discover & Plan",
        description: "We understand your business goals, audience, and project requirements to define the website structure and user journey."
      },
      {
        number: "02",
        title: "Design & Prototype",
        description: "Our team creates intuitive wireframes, modern UI designs, and interactive prototypes focused on usability and conversions."
      },
      {
        number: "03",
        title: "Develop & Launch",
        description: "We build responsive, high-performance websites, integrate required functionality, and ensure quality through thorough testing."
      },
      {
        number: "04",
        title: "Optimize & Support",
        description: "After launch, we monitor performance, provide ongoing maintenance, and continuously optimize your website for growth."
      }
    ],
    whatsIncluded: [
      {
        title: "DESIGN & STRATEGY",
        bullets: [
          "Website Strategy",
          "Information Architecture",
          "Wireframing",
          "UI/UX Design",
          "Responsive Design"
        ]
      },
      {
        title: "DEVELOPMENT",
        bullets: [
          "Business Website Development",
          "E-commerce Development",
          "Landing Page Development",
          "CMS Integration",
          "Performance Optimization"
        ]
      },
      {
        title: "LAUNCH & SUPPORT",
        bullets: [
          "Website Testing",
          "SEO-Ready Setup",
          "Website Maintenance",
          "Security & Updates",
          "Performance Monitoring"
        ]
      }
    ],
    tools: [
      "FIGMA",
      "ADOBE SUITE",
      "WORDPRESS",
      "REACT",
      "NEXT.JS",
      "SHOPIFY"
    ],
    faqs: [
      {
        question: "How long does it take to build a website?",
        answer: "Most business websites take between 4 to 8 weeks, depending on the project's complexity and required features."
      },
      {
        question: "Will my website be mobile-friendly?",
        answer: "Absolutely. Every website we build is fully responsive, ensuring it looks and works perfectly on desktops, tablets, and mobile devices."
      },
      {
        question: "Can you redesign my existing website?",
        answer: "Yes, we can perform a complete redesign of your website to improve its visual design, user experience, performance, and conversion rates."
      },
      {
        question: "Do you provide website maintenance?",
        answer: "Yes, we offer ongoing maintenance and support packages to keep your website secure, updated, and performing at its best."
      },
      {
        question: "Will my website be SEO-friendly?",
        answer: "Yes, we follow SEO best practices during development, optimizing page structure, load speeds, and metadata to help your site rank better."
      }
    ],
    projectSlugs: ["glowskinn", "urbanroots"],
    finalCtaQuestion: "READY TO BUILD A WEBSITE THAT CONVERTS?"
  }
];

export function getServiceDetailBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetailsList.find((service) => service.slug === slug);
}

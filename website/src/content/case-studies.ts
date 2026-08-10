export type CaseStudyChallenge = {
  title: string;
  description: string;
};

export type CaseStudySolution = {
  title: string;
  items: {
    label: string;
    description: string;
  }[];
};

export type CaseStudyMetric = {
  value: string;
  label: string;
  description: string;
};

export type CaseStudyTestimonial = {
  quote: string;
  author: string;
  role: string;
};

export type DetailedCaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  problemIntro: string;
  challenges: CaseStudyChallenge[];
  solutionIntro: string;
  solutions: CaseStudySolution[];
  resultsIntro: string;
  metrics: CaseStudyMetric[];
  testimonial: CaseStudyTestimonial;
  summary: string;
};

export type CaseStudyDefinition = {
  slug: string;
  title: string;
  client: string;
  summary: string;
  /** Figma desktop frame node id for design-to-code */
  figmaNodeId: string;
};

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

export const detailedCaseStudies: DetailedCaseStudy[] = [
  {
    slug: "fittpulse",
    title: "FITTPULSE - FITNESS & WELLNESS CONTENT PLATFORM",
    tagline: "AI VIDEO CREATION & AI CONTENT CREATION",
    overview: "FitPulse is a digital fitness platform offering workout programs, nutrition guides, and wellness content to over 500,000 active users across India and Southeast Asia. With a lean content team of just four people, they were struggling to maintain the content velocity required to compete in the hyper-active fitness social media space. Their audience demanded daily workout clips, motivational content, nutrition tips, and trainer-led videos but production timelines and budgets made this impossible at scale.",
    problemIntro: "FittPulse approached Own the Digital with the following challenges:",
    challenges: [
      {
        title: "Content Production Bottleneck",
        description: "Their content team could produce only 8-10 videos per month due to filming, editing, and post-production constraints. Competitors were publishing 5-7 pieces of content daily across platforms.",
      },
      {
        title: "Inconsistent Brand Voice Across Platforms",
        description: "Blog posts, social captions, and workout guides lacked a unified brand voice, written by different team members without a unified tone or SEO strategy.",
      },
      {
        title: "High Video Production Costs",
        description: "Trainer-led video shoots cost ₹15,000–₹20,000 to produce, making it impossible to scale content creation monthly.",
      },
      {
        title: "Low Social Engagement & Shareability",
        description: "Static images and text-heavy blogs failed to resonate with the target audience, resulting in lower view-through rates and poor traffic acquisition.",
      },
    ],
    solutionIntro: "To address these challenges, Own the Digital implemented AI-powered automation across marketing and customer support.",
    solutions: [
      {
        title: "AI Video Creation Pipeline",
        items: [
          {
            label: "AI Avatars & Video Synthesis",
            description: "Created a persistent library of AI-generated trainer avatars and realistic text-to-speech in Hindi, English, Tamil to produce workout demonstrations, form corrections, and instructional content.",
          },
          {
            label: "Intelligent Video Editing",
            description: "Used AI editing tools to auto-generate platform-optimized cuts (9:16 for YouTube Shorts, Instagram Reels, TikToks) from a single long-form workout session.",
          },
          {
            label: "Dynamic Thumbnails & Captions",
            description: "Auto-generated click-optimized thumbnails and multi-lingual optimized transcripts & subtitles in 5 languages for accessibility and algorithmic reach.",
          },
        ],
      },
      {
        title: "AI Content Creation & SEO Engine",
        items: [
          {
            label: "AI-Assisted Blog & Long-Form Content",
            description: "Deployed AI writing workflows to produce research-backed, SEO-optimized articles on nutrition, workout science, and mental wellness, requiring human-in-the-loop editors for accuracy and brand voice.",
          },
          {
            label: "Social Media Content Automation",
            description: "Built an automated calendar that auto-generated platform-specific captions, hashtag clusters, and carousel scripts based on trending fitness topics and brand assets.",
          },
          {
            label: "Personalized User Content",
            description: "Integrated AI to generate personalized workout summaries, progress celebration posts, and nutrition tips push notifications tailored to each user's fitness journey.",
          },
        ],
      },
      {
        title: "Cross-Platform Content Syndication",
        items: [
          {
            label: "Automated Repurposing",
            description: "One long-form AI trainer video became 4 social posts, 2 tweets, 1 email newsletter, and 1 push notification, all optimized for each channel's unique algorithm and audience behavior.",
          },
        ],
      },
    ],
    resultsIntro: "Our Comprehensive Approach Led To Significant Improvements in The Client's Online Performance",
    metrics: [
      {
        value: "120+",
        label: "VIDEOS PRODUCED MONTHLY",
        description: "Scaled content production from just 8-10 videos to 120+ videos per month within 6 months.",
      },
      {
        value: "₹4,200",
        label: "COST PER VIDEO",
        description: "Reduced production costs from ₹15,000 to ₹4,200 per video within 6 months using AI-powered workflows.",
      },
      {
        value: "520K",
        label: "SOCIAL MEDIA FOLLOWERS",
        description: "Grew the social media community from 150K to 520K followers inside 6 months with consistent AI-powered content creation.",
      },
      {
        value: "47K",
        label: "AVERAGE REEL VIEWS",
        description: "Increased average Reel views from 3,500 to 47,000 views within 6 weeks through viral-driven content optimization.",
      },
    ],
    testimonial: {
      quote: "We were struggling to post twice a week but video production is now fully automated. We publish multiple videos daily across platforms with the same tiny team. The AI avatars and videos are creative, it's unbelievable.",
      author: "HEAD OF CONTENT",
      role: "FITTPULSE",
    },
    summary: "By Addressing The Client's Specific Challenges With A Tailored Digital Marketing Strategy, We Were Able To Significantly Enhance Their Online Presence, Drive More Traffic, And Boost Sales. This Case Study Illustrates The Power Of A Well-Rounded Digital Marketing Approach In Transforming An E-Commerce Business.",
  },
  {
    slug: "glowskinn",
    title: "GLOWSKINN",
    tagline: "AI MARKETING AUTOMATION & AI CHATBOTS",
    overview: "GlowSkin is a fast-growing direct-to-consumer skincare brand offering science-backed, clean beauty products for millennials and Gen Z. With a product line spanning serums, moisturizers, and targeted treatments, the brand had built a loyal social following but struggled to convert that engagement into scalable, repeatable revenue. Their marketing team was overwhelmed by manual campaign execution, and their customer support team couldn't keep pace with pre-purchase questions and post-purchase care.",
    problemIntro: "GlowSkin approached Own the Digital with the following challenges:",
    challenges: [
      {
        title: "Fragmented Customer Journey",
        description: "Despite strong top-of-funnel traffic from Instagram and Google Ads, leads were dropping off between discovery and purchase. There was no intelligent system to nurture visitors based on their skin type, concerns, or browsing behavior.",
      },
      {
        title: "Overwhelmed Support Team",
        description: "The customer support team was drowning in repetitive queries \"Which serum is right for oily skin?\", \"How do I use this with retinol?\", \"Where is my order?\" leading to delayed responses and frustrated potential buyers abandoning their carts.",
      },
      {
        title: "Low Repeat Purchase Rate",
        description: "While first-time buyers were converting at a modest rate, GlowSkin had no automated post-purchase engagement strategy. Customers bought once and disappeared, leaving significant lifetime value on the table.",
      },
      {
        title: "Manual Campaign Execution",
        description: "The marketing team spent 20+ hours per week manually segmenting email lists, scheduling social posts, and adjusting ad bids. Campaigns were reactive rather than predictive, missing key moments in the customer lifecycle.",
      },
    ],
    solutionIntro: "To address these challenges, Own the Digital implemented AI-powered automation across marketing and customer support.",
    solutions: [
      {
        title: "AI-Powered Marketing Automation Funnel",
        items: [
          {
            label: "Dynamic Segmentation",
            description: "AI analyzed browse behavior, purchase history, and quiz responses to auto-segment customers into micro-personas.",
          },
          {
            label: "Lifecycle Automation",
            description: "Welcome sequences, replenishment reminders, win-back campaigns, and cross-sell flows triggered by AI.",
          },
          {
            label: "Predictive Ad Bidding",
            description: "AI optimized Meta and Google Ads by reallocating budgets toward high-intent audiences.",
          },
        ],
      },
      {
        title: "Intelligent AI Chatbot Deployment",
        items: [
          {
            label: "Conversational Product Discovery",
            description: "Through an AI-powered skin quiz.",
          },
          {
            label: "24/7 Order & Support Automation",
            description: "For tracking, returns, and ingredient queries.",
          },
          {
            label: "Seamless Human Handoff",
            description: "With full customer history for complex conversations.",
          },
        ],
      },
      {
        title: "AI-Driven Replenishment & Loyalty Engine",
        items: [
          {
            label: "Predicted replenishment cycles.",
            description: "",
          },
          {
            label: "Personalized reorder reminders.",
            description: "",
          },
          {
            label: "Loyalty rewards with one-click reorder incentives.",
            description: "",
          },
        ],
      },
    ],
    resultsIntro: "Our Comprehensive Approach Led To Significant Improvements in The Client's Online Performance:",
    metrics: [
      {
        value: "34% ↑",
        label: "REPEAT PURCHASE RATE",
        description: "Shifted from 12% to 34% within 6 months through AI-powered lifecycle automation and personalized customer journeys.",
      },
      {
        value: "23% ↑",
        label: "CART ABANDONMENT RECOVERY",
        description: "Improved from 8% to 23% within 6 months using AI-triggered recovery campaigns and personalized reminders.",
      },
      {
        value: "72% ↓",
        label: "SUPPORT TICKET VOLUME",
        description: "Reduced from 1,200 to 340 tickets per week within 6 months with 24/7 AI chatbot automation.",
      },
      {
        value: "22 HRS/WEEK",
        label: "MARKETING HOURS SAVED",
        description: "Saved over 22 hours every week by automating campaign management, segmentation, and optimization.",
      },
      {
        value: "39% ↓",
        label: "CUSTOMER ACQUISITION COST",
        description: "Reduced acquisition cost from ₹1,850 to ₹1,120 within 6 months through predictive AI bidding and audience optimization.",
      },
    ],
    testimonial: {
      quote: "Own the Digital didn't just automate our marketing they gave us a system that thinks, learns, and sells while we sleep. GlowGuide now handles more conversations in a day than our entire team used to handle in a week.",
      author: "MARKETING DIRECTOR",
      role: "GLOWSKINN",
    },
    summary: "By Addressing The Client's Specific Challenges With A Tailored Digital Marketing Strategy, We Were Able To Significantly Enhance Their Online Presence, Drive More Traffic, And Boost Sales. This Case Study Illustrates The Power Of A Well-Rounded Digital Marketing Approach In Transforming An E-Commerce Business.",
  },
  {
    slug: "urbanroots",
    title: "URBANROOTS — SUSTAINABLE HOME & LIVING D2C BRAND",
    tagline: "GOOGLE ADS, META ADS & AI-POWERED ADVERTISING",
    overview: "UrbanRoots is a direct-to-consumer home and living brand specializing in eco-friendly furniture, organic bedding, and sustainable kitchenware. Operating in a crowded marketplace dominated by mass-market giants, they had built a passionate niche community but struggled to scale profitably beyond their organic Instagram following. Their paid media was bleeding budget on broad audiences with little return, and they needed a precision-driven performance engine to match their mission-driven brand.",
    problemIntro: "UrbanRoots approached Own the Digital with the following challenges:",
    challenges: [
      {
        title: "Skyrocketing Customer Acquisition Costs",
        description: "Their Meta Ads CAC had climbed to ₹3,400 over 12 months due to iOS privacy changes and increased competition. Google Ads were driving traffic but at a 1.1x ROAS that made scaling impossible.",
      },
      {
        title: "Poor Audience Targeting & Ad Fatigue",
        description: "They were running the same 3-4 static assets across all audiences. Ad fatigue set in within 10 days, CTR dropped below 0.8%, and frequency scores were hitting 4.5+ without conversion.",
      },
      {
        title: "No Cross-Channel Attribution",
        description: "Google and Meta were taking credit for the same conversions. The team couldn't determine which channel was actually driving first-time purchases versus repeat buys, leading to duplicate ad spend and blind budget allocation.",
      },
      {
        title: "Scaling Without Profitability",
        description: "Every attempt to increase daily spend beyond ₹25,000 resulted in a proportional drop in ROAS. They were stuck in a \"spend more, earn less\" loop with no predictive model to guide safe scaling.",
      },
    ],
    solutionIntro: "To address these challenges, Own the Digital implemented AI-powered automation across marketing and customer support.",
    solutions: [
      {
        title: "Google Ads Restructure with AI-Powered Smart Bidding",
        items: [
          {
            label: "Search Campaign Overhaul",
            description: "Rebuilt search campaigns from 12 generic ad groups to 42 keyword clusters. Deployed dynamic search ads with AI-generated responsive headlines matched to high-converting landing pages.",
          },
          {
            label: "Performance Max with Feed Optimization",
            description: "Integrated AI-driven product feed optimization for Shopping campaigns, sub-categorizing products by real-time search demand and competitor pricing.",
          },
          {
            label: "YouTube Video Campaigns",
            description: "Launched targeted in-stream and discovery ads using AI-generated video assets, targeting in-market audiences for sustainable living and home renovation.",
          },
        ],
      },
      {
        title: "Meta Ads Precision Engine",
        items: [
          {
            label: "AI Lookalike Stacking",
            description: "Built stacked lookalike audiences (1%, 3%, 5%) from high-LTV customer segments, refreshed every 14 days using AI predictive modeling.",
          },
          {
            label: "Retargeting Funnel Architecture",
            description: "Designed a 4-stage retargeting flow: View Content → Add to Cart → Initiate Checkout → Past Purchasers, each with tailored creative and offer logic.",
          },
          {
            label: "Dynamic Creative Optimization (DCO)",
            description: "Deployed 60+ creative variations (UGC-style, product demos, founder stories, sustainability explainers) with AI auto-optimization at the ad-set level.",
          },
        ],
      },
      {
        title: "AI-Powered Cross-Channel Advertising",
        items: [
          {
            label: "Predictive Budget Allocation",
            description: "Implemented an AI bidding algorithm that analyzed cross-channel data every 4 hours, automatically shifting budget from underperforming campaigns to high-intent pockets.",
          },
          {
            label: "Creative Fatigue Detection",
            description: "AI monitoring flagged ad fatigue before CTR dropped, triggering auto-rotation of fresh creative variants.",
          },
          {
            label: "Unified Attribution Modeling",
            description: "Deployed a custom data-driven attribution model across Google and Meta, giving UrbanRoots true visibility into the customer journey and eliminating double-counted conversions.",
          },
        ],
      },
    ],
    resultsIntro: "Our Comprehensive Approach Led To Significant Improvements in The Client's Online Performance:",
    metrics: [
      {
        value: "5.8:1",
        label: "META ADS ROAS",
        description: "Improved Meta Ads ROAS from 2.2:1 to 5.8:1 within 6 months through AI-powered audience targeting and creative optimization.",
      },
      {
        value: "6.2:1",
        label: "GOOGLE ADS ROAS",
        description: "Increased Google Ads ROAS from 1.8:1 to 6.2:1 within 6 months using AI smart bidding and campaign restructuring.",
      },
      {
        value: "₹1,180",
        label: "BLENDED CUSTOMER ACQUISITION COST",
        description: "Reduced blended CAC from ₹3,400 to ₹1,180 within 6 months with predictive budget allocation and ad optimization.",
      },
      {
        value: "₹32 LAKH",
        label: "MONTHLY AD SPEND",
        description: "Scaled monthly ad spend from ₹8 lakh to ₹32 lakh while maintaining profitable returns within 8 months.",
      },
      {
        value: "₹1.02 CR",
        label: "MONTHLY AD REVENUE",
        description: "Increased ad-driven monthly revenue from ₹18 lakh to ₹1.02 crore within 8 months.",
      },
      {
        value: "94%",
        label: "ATTRIBUTION ACCURACY",
        description: "Improved cross-channel attribution accuracy from approximately 40% to 94% using AI-driven attribution modeling.",
      },
    ],
    testimonial: {
      quote: "Own the Digital turned our ad spend from a guessing game into a profit machine. The AI doesn't just optimize, it predicts. We scaled 4x in revenue while our CAC dropped by 65%. That's not marketing, that's alchemy.",
      author: "FOUNDER & CEO",
      role: "URBANROOTS",
    },
    summary: "Through the Deployment of Multi-Variate Ad Testing and AI Budget Allocation, UrbanRoots Successfully Scaled Paid Channels, Minimizing Creative Fatigue and Unlocking Sustainable, Profitable Growth."
  },
  {
    slug: "cloudscale",
    title: "CLOUDSCALE — B2B SAAS FOR SUPPLY CHAIN MANAGEMENT",
    tagline: "LINKEDIN ADS, X (TWITTER) ADS & AI-POWERED ADVERTISING",
    overview: "CloudScale is a B2B SaaS platform that helps mid-to-large enterprises optimize their supply chain operations using predictive analytics and real-time inventory tracking. With an average contract value of $45,000 and a sales cycle of 60–90 days, they needed a performance marketing strategy that could identify, nurture, and convert high-intent decision-makers not just generate vanity leads. Their previous agency had delivered thousands of MQLs, but sales complained that 89% were unqualified.",
    problemIntro: "CloudScale approached Own the Digital with the following challenges:",
    challenges: [
      {
        title: "Low-Quality Lead Generation",
        description: "LinkedIn campaigns were generating 100+ leads per month, but only 11% were converting to SQLs. The targeting was too broad, reaching junior analysts instead of decision-making directors and C-level executives.",
      },
      {
        title: "Expensive LinkedIn Cost-Per-Lead",
        description: "At $150+ per lead, LinkedIn was their most expensive channel. Without a reliable filter and clear user routing, the budget was wasted on prospects who would never buy.",
      },
      {
        title: "No Cross-Channel Attribution",
        description: "Google and Meta were taking credit for the same conversions. For sales cycles that took months, there was no way to track first-time touchpoints vs dynamic email/ad nurturing, leading to inefficient budget allocation.",
      },
      {
        title: "Zero Presence on X (Twitter) for B2B Thought Leadership",
        description: "Competitors were dominating industry conversations on X, building authority through threads, graphics, and replies. CloudScale lacked a programmatic strategy to reach tech-forward B2B buyers who run high-impact accounts.",
      },
      {
        title: "Long Sales Cycle with No Mid-Funnel Nurturing",
        description: "Leads stayed in the pipeline for 90+ days. There was no automated personalization for CloudScale's various target accounts, leading to massive drop-offs between demo request and deal close.",
      },
    ],
    solutionIntro: "To address these challenges, Own the Digital implemented AI-powered automation across marketing and customer support.",
    solutions: [
      {
        title: "LinkedIn Ads Precision Targeting & Funnel",
        items: [
          {
            label: "Account-Based Marketing (ABM) Campaigns",
            description: "Built hyper-targeted ABM campaigns matching a list of 2,500 target accounts directly to verified titles (CSCOs, VPs of Logistics, VPs of Supply Chain, Directors of Procurement, etc.).",
          },
          {
            label: "Thought Leadership Sponsored Content",
            description: "Promoted high-value assets — like the '2026 Global Supply Chain Report' — to B2B decision-makers, offering direct value before pitching.",
          },
          {
            label: "Conversational Ads & InMail",
            description: "Deployed personalized ads to invite target profiles to custom webinars, achieving high response rates.",
          },
          {
            label: "Lead Gen Forms with AI Routing",
            description: "Intercepted leads instantly, auto-routing qualified SQLs to sales calendars while placing others into educational email sequences.",
          },
        ],
      },
      {
        title: "X (Twitter) Ads for B2B Authority & Demand Gen",
        items: [
          {
            label: "Promoted Threads & Info-Graphics",
            description: "Launched industry-specific threads analyzing supply chain disruptions. Shared details on competitor analysis and supply chain frameworks.",
          },
          {
            label: "Website Traffic & Retargeting",
            description: "Drove X traffic to high-intent landing pages, then retargeted visitors on LinkedIn.",
          },
          {
            label: "Custom Group Campaigns",
            description: "Targeted B2B decision-makers on X by building custom audiences based on profile handles of competitors and industry forums.",
          },
        ],
      },
      {
        title: "AI-Powered Advertising & Nurture Orchestration",
        items: [
          {
            label: "Predictive Lead Scoring",
            description: "Implemented AI models to score incoming leads based on corporate firmographic and behavioral data.",
          },
          {
            label: "Multi-Touch Attribution",
            description: "Integrated a custom multi-touch attribution model to track exact ad clicks and paths.",
          },
          {
            label: "Automated Account Nurturing",
            description: "Triggered highly personalized email and retargeting ads dynamically based on account lifecycle stage.",
          },
        ],
      },
    ],
    resultsIntro: "Our Comprehensive Approach Led To Significant Improvements in The Client's Online Performance:",
    metrics: [
      {
        value: "$42",
        label: "LINKEDIN COST PER LEAD",
        description: "Reduced LinkedIn cost per lead from $150 to $42 within 6 months through ABM targeting and creative testing.",
      },
      {
        value: "31%",
        label: "LEAD-TO-SQL CONVERSION",
        description: "Increased lead-to-SQL conversion from 11% to 31% within 6 months using AI qualification and active nurturing.",
      },
      {
        value: "18.4K",
        label: "X (TWITTER) FOLLOWERS",
        description: "Expanded community from 1,200 to 18,400 followers for the brand through thought leadership campaigns.",
      },
      {
        value: "34 / MONTH",
        label: "X-DRIVEN DEMO REQUESTS",
        description: "Grew outbound qualified demo requests every month from 2, compared to zero before intervention.",
      },
      {
        value: "61 DAYS",
        label: "AVERAGE SALES CYCLE",
        description: "Reduced the sales cycle length from 87 days to 61 days with dynamic mid-funnel personalization.",
      },
      {
        value: "$8.7M",
        label: "PAID PIPELINE GENERATED",
        description: "Attributed qualified pipeline from $2.1M to $8.7M within 8 months using multi-channel performance marketing.",
      },
      {
        value: "$68",
        label: "COST PER QUALIFIED LEAD (BLENDED)",
        description: "Blended cost per qualified lead reduced from $220 to $68.",
      },
      {
        value: "89%",
        label: "AI LEAD SCORING ACCURACY",
        description: "AI-powered lead scoring achieved 89% accuracy in predicting sales outcomes.",
      },
    ],
    testimonial: {
      quote: "Other agencies gave us leads. Own the Digital gave us pipeline. The AI lead scoring saved our sales team 15 hours a week, and advertising on X got us into boardrooms we couldn't reach before. Our outbound demo requests went from 2 to over 34 a month.",
      author: "VP OF MARKETING",
      role: "CLOUDSCALE",
    },
    summary: "By Combining Precision LinkedIn Account Targeting and AI-Driven Lead Scoring, CloudScale Dramatically Shortened Sales Cycles, Reduced CPL, and Built a Highly Lucrative Enterprise Sales Pipeline.",
  }
];

export function getCaseStudyBySlug(
  slug: string,
): CaseStudyDefinition | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getDetailedCaseStudyBySlug(
  slug: string,
): DetailedCaseStudy | undefined {
  return detailedCaseStudies.find((study) => study.slug === slug);
}

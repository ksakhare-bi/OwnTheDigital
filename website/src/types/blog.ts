export type BlogSection = {
  heading: string;
  description: string;
  bullets?: string[];
};

export type Blog = {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  excerpt: string;
  image: string;
  tags: string[];
  intro: string;
  sections: BlogSection[];
  ctaTags: string[];
  published: boolean;
  publishedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
};

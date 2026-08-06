export type Blog = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  author: string;
  published: boolean;
  publishedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateBlogInput = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  author: string;
  published?: boolean;
};

export type UpdateBlogInput = Partial<CreateBlogInput> & {
  publishedAt?: Date | null;
};

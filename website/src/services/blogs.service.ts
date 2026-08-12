import { connectToDatabase } from "@/lib/db";
import { BlogModel } from "@/models/blog.model";
import type { Blog } from "@/types/blog";

type DbBlogDoc = {
  _id: { toString(): string };
  title: string;
  slug: string;
  category: string;
  readTime: string;
  excerpt: string;
  image: string;
  tags?: string[];
  intro: string;
  sections?: { heading: string; description: string; bullets?: string[] }[];
  ctaTags?: string[];
  published: boolean;
  publishedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
};

function mapBlog(doc: DbBlogDoc): Blog {
  return {
    id: doc._id.toString(),
    title: doc.title,
    slug: doc.slug,
    category: doc.category,
    readTime: doc.readTime,
    excerpt: doc.excerpt,
    image: doc.image,
    tags: doc.tags || [],
    intro: doc.intro,
    sections: doc.sections || [],
    ctaTags: doc.ctaTags || [],
    published: doc.published,
    publishedAt: doc.publishedAt ?? null,
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt,
  };
}

/** Public site: published blogs only. */
export async function listPublishedBlogs(): Promise<Blog[]> {
  await connectToDatabase();
  const blogs = await BlogModel.find({ published: true })
    .sort({ publishedAt: -1 })
    .lean();
  return (blogs as unknown as DbBlogDoc[]).map(mapBlog);
}

export async function getPublishedBlogBySlug(
  slug: string,
): Promise<Blog | null> {
  await connectToDatabase();
  const blog = await BlogModel.findOne({ slug, published: true }).lean();
  return blog ? mapBlog(blog as unknown as DbBlogDoc) : null;
}

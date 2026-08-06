import { connectToDatabase } from "@/lib/db";
import { BlogModel } from "@/models/blog.model";
import type { Blog } from "@/types/blog";

function mapBlog(doc: {
  _id: { toString(): string };
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
}): Blog {
  return {
    id: doc._id.toString(),
    title: doc.title,
    slug: doc.slug,
    excerpt: doc.excerpt,
    content: doc.content,
    featuredImage: doc.featuredImage || undefined,
    author: doc.author,
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
  return blogs.map(mapBlog);
}

export async function getPublishedBlogBySlug(
  slug: string,
): Promise<Blog | null> {
  await connectToDatabase();
  const blog = await BlogModel.findOne({ slug, published: true }).lean();
  return blog ? mapBlog(blog) : null;
}

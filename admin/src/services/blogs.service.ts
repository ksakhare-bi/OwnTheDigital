import { connectToDatabase } from "@/lib/db";
import { BlogModel } from "@/models/blog.model";
import type { Blog, CreateBlogInput, UpdateBlogInput } from "@/types/blog";

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

export async function listBlogs(): Promise<Blog[]> {
  await connectToDatabase();
  const blogs = await BlogModel.find().sort({ updatedAt: -1 }).lean();
  return blogs.map(mapBlog);
}

export async function getBlogById(id: string): Promise<Blog | null> {
  await connectToDatabase();
  const blog = await BlogModel.findById(id).lean();
  return blog ? mapBlog(blog) : null;
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  await connectToDatabase();
  const blog = await BlogModel.findOne({ slug }).lean();
  return blog ? mapBlog(blog) : null;
}

export async function createBlog(input: CreateBlogInput): Promise<Blog> {
  await connectToDatabase();

  const published = Boolean(input.published);
  const blog = await BlogModel.create({
    ...input,
    published,
    publishedAt: published ? new Date() : null,
  });

  return mapBlog(blog);
}

export async function updateBlog(
  id: string,
  input: UpdateBlogInput,
): Promise<Blog | null> {
  await connectToDatabase();

  const existing = await BlogModel.findById(id);
  if (!existing) {
    return null;
  }

  const nextPublished =
    typeof input.published === "boolean" ? input.published : existing.published;

  existing.set({
    ...input,
    published: nextPublished,
    publishedAt: nextPublished
      ? (existing.publishedAt ?? new Date())
      : null,
  });

  await existing.save();
  return mapBlog(existing);
}

export async function deleteBlog(id: string): Promise<boolean> {
  await connectToDatabase();
  const result = await BlogModel.findByIdAndDelete(id);
  return Boolean(result);
}

export async function setBlogPublished(
  id: string,
  published: boolean,
): Promise<Blog | null> {
  return updateBlog(id, {
    published,
    publishedAt: published ? new Date() : null,
  });
}

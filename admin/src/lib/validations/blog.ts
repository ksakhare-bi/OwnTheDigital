import { z } from "zod";

export const createBlogSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  slug: z
    .string()
    .min(3, "Slug must be at least 3 characters")
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use lowercase kebab-case slug"),
  excerpt: z.string().min(10, "Excerpt must be at least 10 characters"),
  content: z.string().min(20, "Content must be at least 20 characters"),
  featuredImage: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  author: z.string().min(2, "Author is required"),
  published: z.boolean().optional(),
});

export const updateBlogSchema = createBlogSchema.partial();

export type CreateBlogSchema = z.infer<typeof createBlogSchema>;
export type UpdateBlogSchema = z.infer<typeof updateBlogSchema>;

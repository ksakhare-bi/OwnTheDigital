import type { Blog } from "@/types/blog";
import { getAdminApiUrl } from "@/utils/api";


/** Public site: fetch published blogs from Admin API */
export async function listPublishedBlogs(): Promise<Blog[]> {
  const primaryUrl = getAdminApiUrl();
  const urlsToTry = [primaryUrl];

  if (process.env.NODE_ENV !== "production" && !primaryUrl.includes("localhost:3001")) {
    urlsToTry.push("http://localhost:3001");
  }

  for (const apiUrl of urlsToTry) {
    try {
      const res = await fetch(`${apiUrl}/api/blogs?published=true`, {
        cache: "no-store",
        headers: {
          Accept: "application/json",
        },
      });

      if (!res.ok) continue;

      const json = await res.json();
      if (Array.isArray(json.data) && json.data.length > 0) {
        return json.data;
      }
    } catch (error) {
      console.warn(`Failed fetching blogs from ${apiUrl}:`, error);
    }
  }

  return [];
}

/** Public site: fetch single published blog by slug from Admin API */
export async function getPublishedBlogBySlug(
  slug: string
): Promise<Blog | null> {
  const primaryUrl = getAdminApiUrl();
  const urlsToTry = [primaryUrl];

  if (process.env.NODE_ENV !== "production" && !primaryUrl.includes("localhost:3001")) {
    urlsToTry.push("http://localhost:3001");
  }

  let partialBlog: Blog | null = null;

  for (const apiUrl of urlsToTry) {
    try {
      const res = await fetch(`${apiUrl}/api/blogs/${encodeURIComponent(slug)}`, {
        cache: "no-store",
        headers: {
          Accept: "application/json",
        },
      });

      if (!res.ok) {
        continue;
      }

      const json = await res.json();
      const blog = json.data as Blog | undefined;
      if (blog) {
        // If this blog contains rich content, return immediately
        if (blog.content) {
          return blog;
        }
        partialBlog = blog;
      }
    } catch (error) {
      console.warn(`Failed fetching blog "${slug}" from ${apiUrl}:`, error);
    }
  }

  return partialBlog;
}


import type { Blog } from "@/types/blog";
import { getAdminApiUrl } from "@/utils/api";


/** Public site: fetch published blogs from Admin API */
export async function listPublishedBlogs(): Promise<Blog[]> {
  try {
    const apiUrl = getAdminApiUrl();
    const res = await fetch(`${apiUrl}/api/blogs?published=true`, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      console.warn(`Admin API /api/blogs responded with status: ${res.status}`);
      return [];
    }

    const json = await res.json();
    return Array.isArray(json.data) ? json.data : [];
  } catch (error) {
    console.error("Failed to fetch blogs from Admin API:", error);
    return [];
  }
}

/** Public site: fetch single published blog by slug from Admin API */
export async function getPublishedBlogBySlug(
  slug: string
): Promise<Blog | null> {
  try {
    const apiUrl = getAdminApiUrl();
    const res = await fetch(`${apiUrl}/api/blogs/${encodeURIComponent(slug)}`, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      if (res.status !== 404) {
        console.warn(
          `Admin API /api/blogs/${slug} responded with status: ${res.status}`
        );
      }
      return null;
    }

    const json = await res.json();
    return json.data || null;
  } catch (error) {
    console.error(`Failed to fetch blog "${slug}" from Admin API:`, error);
    return null;
  }
}


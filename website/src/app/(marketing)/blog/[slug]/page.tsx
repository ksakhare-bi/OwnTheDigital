import { PagePlaceholder } from "@/components/shared/page-placeholder";
import { figmaFile } from "@/content/figma";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  return (
    <PagePlaceholder
      title="Blog post"
      description={`Detail view for slug "${slug}". Will load published content via getPublishedBlogBySlug.`}
      figmaNodeId={figmaFile.frames.blogPost}
    />
  );
}

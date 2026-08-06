import { PagePlaceholder } from "@/components/shared/page-placeholder";
import { figmaFile } from "@/content/figma";

export default function BlogPage() {
  return (
    <PagePlaceholder
      title="Blog"
      description="Published posts from MongoDB (read-only). Listing UI comes next."
      figmaNodeId={figmaFile.frames.blog}
    />
  );
}

import { PagePlaceholder } from "@/components/shared/page-placeholder";
import { figmaFile } from "@/content/figma";

export default function ContactPage() {
  return (
    <PagePlaceholder
      title="Contact"
      description="Contact form + company details. Shortest marketing page in Figma."
      figmaNodeId={figmaFile.frames.contact}
    />
  );
}

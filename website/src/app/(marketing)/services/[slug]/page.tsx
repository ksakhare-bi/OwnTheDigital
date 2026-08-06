import { notFound } from "next/navigation";
import { PagePlaceholder } from "@/components/shared/page-placeholder";
import { getServiceBySlug, services } from "@/content/services";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <PagePlaceholder
      title={service.title}
      description={`${service.description} Shared template: hero + stats, offerings, why us, how we work, tools, FAQ, CTA.`}
      figmaNodeId={service.figmaNodeId}
    />
  );
}

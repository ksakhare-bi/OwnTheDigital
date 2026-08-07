import { notFound } from "next/navigation";
import { ServiceDetailContent } from "@/components/services/service-detail-content";
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

  return <ServiceDetailContent slug={slug} />;
}

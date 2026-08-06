import { notFound } from "next/navigation";
import { PagePlaceholder } from "@/components/shared/page-placeholder";
import { caseStudies, getCaseStudyBySlug } from "@/content/case-studies";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <PagePlaceholder
      title={study.title}
      description={`${study.summary} Typical sections: challenge, approach, results, pricing/plans where designed.`}
      figmaNodeId={study.figmaNodeId}
    />
  );
}

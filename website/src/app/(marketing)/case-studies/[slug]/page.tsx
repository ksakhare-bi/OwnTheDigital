import { notFound } from "next/navigation";
import { CaseStudyContent } from "@/components/case-studies/case-study-content";
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

  return <CaseStudyContent slug={slug} />;
}

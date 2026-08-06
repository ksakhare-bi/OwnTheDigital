import Link from "next/link";
import { PagePlaceholder } from "@/components/shared/page-placeholder";
import { caseStudies } from "@/content/case-studies";

export default function CaseStudiesIndexHint() {
  return (
    <div>
      <PagePlaceholder
        title="Case studies"
        description="Detailed result stories linked from Portfolio. Use /case-studies/[slug]."
      />
      <ul className="mx-auto grid max-w-[1392px] gap-4 px-4 pb-20 sm:grid-cols-2 sm:px-6">
        {caseStudies.map((study) => (
          <li key={study.slug}>
            <Link
              href={`/case-studies/${study.slug}`}
              className="block rounded-lg border border-border bg-surface p-5 transition hover:border-primary"
            >
              <h2 className="text-lg font-semibold text-navy">{study.title}</h2>
              <p className="mt-2 text-sm text-body">{study.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

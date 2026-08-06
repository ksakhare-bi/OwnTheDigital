import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioSections, type PortfolioProject } from "@/content/portfolio";
import { cn } from "@/lib/utils";

function ProjectMeta({ label, value }: { label: string; value: string }) {
  return (
    <Badge className="h-auto rounded-full border-0 bg-surface-tint px-4 py-2.5 text-base leading-[1.5] font-normal whitespace-normal text-navy hover:bg-surface-tint xl:text-lg">
      {label}
      <span className="mx-2 size-1 shrink-0 rounded-full bg-primary" />
      <strong className="font-medium text-md text-primary">{value}</strong>
    </Badge>
  );
}

function DetailCard({
  title,
  items,
  compact,
}: {
  title: string;
  items: string[];
  compact: boolean;
}) {
  return (
    <div
      className={cn(
        "shrink-0 rounded-[14px] border border-border bg-background",
        compact
          ? title === "What We Did"
            ? "p-5 xl:h-[301px]"
            : "p-5 xl:h-[277px]"
          : "p-5 xl:h-[317px] xl:p-10",
      )}
    >
      <h4 className="text-lg leading-[1.5] font-bold text-navy uppercase">
        {title}
      </h4>
      <div className="mt-5 flex flex-wrap gap-2.5">
        {items.map((item) => (
          <Badge
            key={item}
            variant="secondary"
            className="h-auto rounded-full bg-surface-tint px-4 py-2 font-mono text-sm leading-6 font-bold whitespace-normal text-navy xl:text-base xl:whitespace-nowrap"
          >
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
}

function SummaryCard({
  project,
  compact,
}: {
  project: PortfolioProject;
  compact: boolean;
}) {
  return (
    <div
      className={cn(
        "flex min-h-[540px] flex-col gap-10 rounded-[14px] bg-background p-6",
        compact
          ? "xl:h-[660px] xl:p-6"
          : "border border-border xl:h-[740px] xl:p-6",
      )}
    >
      {!compact && (
        <div className="flex items-center justify-between gap-3">
          <h4 className="text-2xl leading-[1.5] font-bold text-primary uppercase">
            {project.name}
          </h4>
          <Link
            href={`/case-studies/${project.slug}`}
            className={cn(
              buttonVariants(),
              "h-10 rounded-full px-5 text-base",
            )}
          >
            View Project
          </Link>
        </div>
      )}
      <div className="flex flex-wrap gap-3">
        <ProjectMeta 
          label="Category" 
          value={project.category} 
        />
        <ProjectMeta
          label={compact ? "Timeline" : "Time Taken"}
          value={project.timeline}
        />
      </div>
      <p className="text-lg leading-[1.5] text-body">{project.description}</p>
      <div
        className={cn(
          "relative mt-auto overflow-hidden",
          compact ? "h-[232px]" : "h-[165px]",
        )}
      >
        {project.summaryBaseImage && (
          <Image
            src={project.summaryBaseImage}
            alt=""
            fill
            sizes="324px"
            className="object-cover"
          />
        )}
        <Image
          src={project.summaryImage}
          alt={`${project.name} project detail`}
          fill
          sizes={compact ? "304px" : "324px"}
          className={cn(
            "object-cover",
            !compact && "object-[center_70%]",
          )}
        />
      </div>
    </div>
  );
}

function DetailColumn({
  project,
  compact,
}: {
  project: PortfolioProject;
  compact: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        compact ? "xl:h-[684px]" : "xl:h-[740px]",
      )}
    >
      <DetailCard title="What We Did" items={project.services} compact={compact} />
      <DetailCard title="Outcome" items={project.outcomes} compact={compact} />
      <Link
        href="/contact"
        className={cn(
          buttonVariants(),
          "h-16 rounded-full px-8 font-mono text-lg font-semibold",
          "mt-auto w-full font-bold xl:text-xl",
        )}
      >
        Get a free Audit
      </Link>
    </div>
  );
}

function ProjectHeader({ project }: { project: PortfolioProject }) {
  return (
    <div className="flex min-h-[78px] items-center justify-between gap-5">
      <h3 className="text-3xl leading-[1.5] font-bold text-primary uppercase sm:text-5xl xl:text-[52px]">
        {project.name}
      </h3>
      <Link
        href={`/case-studies/${project.slug}`}
        className={cn(buttonVariants(), "h-16 rounded-full px-8 font-mono text-lg font-semibold")}
      >
        View Project
      </Link>
    </div>
  );
}

function PortfolioProjectCard({ project }: { project: PortfolioProject }) {
  const compact = project.layout === "art-first";
  const artHeight = project.slug === "fittpulse" ? "xl:h-[740px]" : "xl:h-[660px]";

  return (
    <article className="space-y-5">
      <ProjectHeader project={project} />
      {compact ? (
        <Card className="overflow-hidden rounded-[20px] border-2 border-border bg-background py-0 shadow-none">
          <CardContent className="grid gap-5 p-5 md:grid-cols-2 xl:grid-cols-[500.735px_383.5px_383.5px] xl:p-10">
            <div
              className={cn(
                "relative min-h-[540px] overflow-hidden rounded-[44px]",
                artHeight,
              )}
            >
              <Image
                src={project.artImage}
                alt={`${project.name} campaign artwork`}
                fill
                sizes="501px"
                className="object-cover object-top"
                priority={project.slug === "fittpulse"}
              />
            </div>
            <SummaryCard project={project} compact />
            <div className="md:col-span-2 xl:col-span-1">
              <DetailColumn project={project} compact />
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="overflow-hidden rounded-[20px] border-0 bg-transparent py-0 shadow-none">
          <CardContent className="grid gap-5 p-5 md:grid-cols-2 xl:grid-cols-[404px_403px_500.735px]">
            <SummaryCard project={project} compact={false} />
            <DetailColumn project={project} compact={false} />
            <div className="relative min-h-[540px] overflow-hidden rounded-[44px] md:col-span-2 xl:col-span-1 xl:h-[740px]">
              <Image
                src={project.artImage}
                alt={`${project.name} full project artwork`}
                fill
                sizes="501px"
                className="object-cover object-top"
                priority={project.slug === "glowskinn"}
              />
            </div>
          </CardContent>
        </Card>
      )}
    </article>
  );
}

export function PortfolioContent() {
  return (
    <main className="mx-auto flex w-full max-w-[1416px] flex-col gap-[98px] px-4 pt-[98px] pb-24 sm:px-6 xl:px-0">
      <h1 className="text-center text-5xl leading-none font-bold tracking-tight text-primary uppercase lg:text-[78px] sm:-mb-6">
        Portfolio
      </h1>

      <section className="rounded-[20px] border border-border bg-background p-6 text-center sm:p-10 xl:p-[50px]">
        <div className="mx-auto flex max-w-[1316px] flex-col items-center gap-10">
          <h2 className="text-4xl leading-none font-bold tracking-[0.03em] text-primary uppercase sm:text-5xl lg:text-[72px]">
            Results That Speak Louder Than Promises.
          </h2>
          <p className="text-lg tracking-[0.03em] text-black sm:text-xl">
            Every project is built around one goal—helping businesses grow
            through strategy, creativity, and performance-driven marketing.
          </p>
          <Link
            href="/contact"
            className={cn(buttonVariants(), "h-16 rounded-full px-8 font-mono text-lg font-semibold")}
          >
            Let&apos;s Build Yours
          </Link>
        </div>
      </section>

      {portfolioSections.map((section) => (
        <section key={section.title} className="space-y-20">
          <div className="flex min-h-[78px] items-center justify-between gap-5">
            <h2 className="text-3xl leading-[1.5] font-bold text-primary uppercase sm:text-5xl xl:text-[52px]">
              {section.title}
            </h2>
            <Link
              href={section.serviceHref}
              className={cn(buttonVariants(), "h-16 rounded-full px-8 font-mono text-lg font-semibold")}
            >
              View Service
            </Link>
          </div>
          <div className="space-y-[98px]">
            {section.projects.map((project) => (
              <PortfolioProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

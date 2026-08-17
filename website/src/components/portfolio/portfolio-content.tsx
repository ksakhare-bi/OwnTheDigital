import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioSections, type PortfolioProject } from "@/content/portfolio";
import { cn } from "@/lib/utils";

function ProjectMeta({ label, value }: { label: string; value: string }) {
  return (
    <span className="inline-block h-auto max-w-full rounded-full bg-surface-tint px-3 py-1.5 text-xs font-normal text-navy sm:px-6 sm:py-2.5 sm:text-base xl:text-lg text-left align-middle">
      <span>{label}</span>
      <span className="mx-1.5 inline-block size-1 align-middle rounded-full bg-primary sm:mx-2" />{" "}
      <strong className="font-semibold text-primary text-left">{value}</strong>
    </span>
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
        "max-w-full min-w-0 overflow-hidden rounded-[14px] border border-border bg-background xl:shrink-0",
        compact
          ? title === "What We Did"
            ? "p-4 sm:p-5 xl:min-h-[301px]"
            : "p-4 sm:p-5 xl:min-h-[277px]"
          : "p-4 sm:p-5 xl:min-h-[317px] xl:p-10",
      )}
    >
      <h4 className="text-base font-bold text-navy uppercase sm:text-lg">
        {title}
      </h4>
      <div className="mt-3 flex flex-wrap gap-2 sm:mt-5 sm:gap-2.5">
        {items.map((item) => (
          <span
            key={item}
            className="inline-flex h-auto items-center justify-center rounded-full bg-surface-tint px-3 py-1.5 font-mono text-xs font-bold text-navy sm:px-4 sm:py-2 sm:text-sm xl:text-base max-w-full whitespace-normal break-words text-left"
          >
            {item}
          </span>
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
        "flex min-w-0 flex-col gap-4 rounded-[14px] bg-background p-4 sm:min-h-[540px] sm:gap-10 sm:p-6",
        compact
          ? "border border-border sm:border-0 lg:min-h-[530px] xl:min-h-[660px] xl:p-6"
          : "border border-border lg:min-h-[600px] xl:min-h-[740px] xl:p-6",
      )}
    >
      {!compact && (
        <div className="hidden sm:flex items-center justify-between gap-3">
          <h4 className="text-xl font-bold text-primary uppercase sm:text-2xl">
            {project.name}
          </h4>
          <Link
            href={`/case-studies/${project.slug}`}
            className={cn(
              buttonVariants(),
              "h-8 rounded-full px-3.5 font-mono text-xs sm:h-10 sm:px-5 sm:text-base",
            )}
          >
            View Project
          </Link>
        </div>
      )}
      <div className="flex flex-wrap gap-2 sm:gap-3">
        <ProjectMeta
          label="Category"
          value={project.category}
        />
        <ProjectMeta
          label={compact ? "Timeline" : "Time Taken"}
          value={project.timeline}
        />
      </div>
      <p className="text-sm leading-relaxed text-body sm:text-lg">{project.description}</p>
      <div
        className={cn(
          "relative mt-auto overflow-hidden rounded-xl sm:rounded-none",
          compact ? "h-[140px] sm:h-[232px]" : "h-[120px] sm:h-[165px]",
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
        "flex min-w-0 flex-col gap-4 sm:gap-5 mb-12 sm:mb-0",
        compact ? "xl:min-h-[684px]" : "xl:min-h-[740px]",
      )}
    >
      <DetailCard title="What We Did" items={project.services} compact={compact} />
      <DetailCard title="Outcome" items={project.outcomes} compact={compact} />
      <Link
        href="/contact"
        className={cn(
          buttonVariants(),
          "h-11 w-fit rounded-full px-6 font-mono text-sm font-bold sm:h-12 sm:w-full sm:px-6 sm:text-sm lg:h-12 lg:px-6 lg:text-sm xl:h-16 xl:px-8 xl:text-xl text-center mx-auto sm:mt-auto",
        )}
      >
        Get a free Audit
      </Link>
    </div>
  );
}

function ProjectHeader({ project }: { project: PortfolioProject }) {
  return (
    <div className="flex items-center justify-between gap-3 sm:min-h-[78px] sm:gap-5">
      <h3 className="text-xl leading-[1.3] font-bold text-primary uppercase sm:text-3xl lg:text-[40px] xl:text-[52px]">
        {project.name}
      </h3>
      <Link
        href={`/case-studies/${project.slug}`}
        className={cn(
          buttonVariants(),
          "h-8 shrink-0 rounded-full px-3 font-mono text-xs sm:h-12 sm:px-6 sm:text-sm lg:h-12 lg:px-6 lg:text-sm xl:h-16 xl:px-8 xl:text-lg",
        )}
      >
        View Project
      </Link>
    </div>
  );
}

export function PortfolioProjectCard({ project }: { project: PortfolioProject }) {
  const compact = project.layout === "art-first";
  const artHeight = project.slug === "fittpulse" ? "xl:min-h-[740px]" : "xl:min-h-[660px]";

  return (
    <article className="space-y-3 sm:space-y-2">
      <ProjectHeader project={project} />
      {compact ? (
        <Card className="overflow-hidden border-0 ring-0 bg-transparent py-0 shadow-none sm:border sm:border-border sm:bg-background sm:ring-1 sm:ring-foreground/10 sm:rounded-[20px]">
          <CardContent className="grid gap-4 p-0 sm:gap-5 sm:p-5 md:grid-cols-2 xl:grid-cols-[1fr_0.9fr_1fr] xl:p-10 sm:pt-0">
            <div
              className={cn(
                "relative order-1 xl:order-3 aspect-[4/5] min-h-0 overflow-hidden rounded-[20px] sm:aspect-auto sm:min-h-[540px] sm:rounded-[44px]",
                artHeight,
              )}
            >
              <Image
                src={project.artImage}
                alt={`${project.name} campaign artwork`}
                fill
                sizes="(max-width: 1280px) 100vw, 501px"
                className="object-cover object-top"
                priority={project.slug === "fittpulse"}
              />
            </div>
            <div className="order-2 xl:order-1">
              <SummaryCard project={project} compact />
            </div>
            <div className="order-3 xl:order-2 md:col-span-2 xl:col-span-1">
              <DetailColumn project={project} compact />
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="overflow-hidden border-0 ring-0 bg-transparent py-0 shadow-none sm:border sm:border-border sm:bg-background sm:ring-1 sm:ring-foreground/10 sm:rounded-[20px]">
          <CardContent className="grid gap-4 p-0 sm:gap-5 sm:p-5 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1.24fr]">
            <div className="relative aspect-[4/5] min-w-0 min-h-0 overflow-hidden rounded-[20px] sm:aspect-auto sm:min-h-[540px] sm:rounded-[44px] md:col-span-2 xl:col-span-1 xl:min-h-[740px] sm:order-last">
              <Image
                src={project.artImage}
                alt={`${project.name} full project artwork`}
                fill
                sizes="(max-width: 1280px) 100vw, 501px"
                className="object-cover object-top"
                priority={project.slug === "glowskinn"}
              />
            </div>
            <SummaryCard project={project} compact={false} />
            <DetailColumn project={project} compact={false} />
          </CardContent>
        </Card>
      )}
    </article>
  );
}

export function PortfolioContent() {
  return (
    <main className="mx-auto flex w-full max-w-[1416px] flex-col gap-8 px-4 pt-6 pb-0 sm:gap-[98px] sm:px-6 sm:pt-[98px] sm:pb-12">
      <section className="rounded-[20px] border border-border bg-background p-5 text-center sm:p-10 xl:p-[50px]">
        <div className="mx-auto flex max-w-[1316px] flex-col items-center gap-4 sm:gap-10">
          <h2 className="text-2xl leading-[1.1] font-bold tracking-[0.03em] text-primary uppercase sm:text-5xl lg:text-[72px]">
            Results That Speak Louder Than Promises.
          </h2>
          <p className="text-xs max-w-[935px] leading-relaxed tracking-[0.03em] text-black sm:text-xl">
            Every project is built around one goal helping businesses grow through strategy, creativity, and performance-driven marketing.
          </p>
          <Link
            href="/contact"
            className={cn(buttonVariants(), "h-10 rounded-full px-6 font-mono text-xs font-semibold sm:h-16 sm:px-8 sm:text-lg")}
          >
            Let&apos;s Build Yours
          </Link>
        </div>
      </section>

      {portfolioSections.map((section) => (
        <section key={section.title} className="space-y-3 sm:space-y-20">
          <div className="flex items-center justify-center sm:justify-between gap-3 sm:min-h-[78px] sm:gap-5">
            <h2 className="text-2xl leading-tight font-bold text-primary uppercase text-center sm:text-left sm:text-5xl xl:text-[52px]">
              {section.title}
            </h2>
            <Link
              href={section.serviceHref}
              className={cn(buttonVariants(), "hidden sm:inline-flex h-16 rounded-full px-8 font-mono text-lg font-semibold")}
            >
              View Service
            </Link>
          </div>
          <div className="space-y-4 sm:space-y-[98px]">
            {section.projects.map((project) => (
              <PortfolioProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioSections, type PortfolioProject } from "@/content/portfolio";
import { cn } from "@/lib/utils";

function ProjectMeta({ label, value }: { label: string; value: string }) {
  return (
    <Badge className="h-auto max-w-full rounded-full border-0 bg-surface-tint px-3 py-1.5 text-xs font-normal text-navy hover:bg-surface-tint sm:px-4 sm:py-2.5 sm:text-base xl:text-lg">
      <span className="shrink-0">{label}</span>
      <span className="mx-1.5 size-1 shrink-0 rounded-full bg-primary sm:mx-2" />
      <strong className="font-semibold text-primary">{value}</strong>
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
        "max-w-full overflow-hidden rounded-[14px] border border-border bg-background xl:shrink-0",
        compact
          ? title === "What We Did"
            ? "p-4 sm:p-5 xl:h-[301px]"
            : "p-4 sm:p-5 xl:h-[277px]"
          : "p-4 sm:p-5 xl:h-[317px] xl:p-10",
      )}
    >
      <h4 className="text-base font-bold text-navy uppercase sm:text-lg">
        {title}
      </h4>
      <div className="mt-3 flex flex-wrap gap-2 sm:mt-5 sm:gap-2.5">
        {items.map((item) => (
          <Badge
            key={item}
            variant="secondary"
            className="h-auto rounded-full bg-surface-tint px-3 py-1.5 font-mono text-xs font-bold text-navy sm:px-4 sm:py-2 sm:text-sm xl:text-base max-w-full break-words"
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
        "flex flex-col gap-4 rounded-[14px] bg-background p-4 sm:min-h-[540px] sm:gap-10 sm:p-6",
        compact
          ? "border border-border sm:border-0 xl:h-[660px] xl:p-6"
          : "border border-border xl:h-[740px] xl:p-6",
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
        "flex flex-col gap-4 sm:gap-5 mb-12 sm:mb-0",
        compact ? "xl:h-[684px]" : "xl:h-[740px]",
      )}
    >
      <DetailCard title="What We Did" items={project.services} compact={compact} />
      <DetailCard title="Outcome" items={project.outcomes} compact={compact} />
      <Link
        href="/contact"
        className={cn(
          buttonVariants(),
          "h-11 w-fit rounded-full px-6 font-mono text-sm font-bold sm:h-16 sm:w-full sm:px-8 sm:text-lg xl:text-xl text-center mx-auto sm:mt-auto",
        )}
      >
        Get a free Audit
      </Link>
    </div>
  );
}

function ProjectHeader({ project }: { project: PortfolioProject }) {
  return (
    <div className="hidden sm:flex items-center justify-between gap-3 sm:min-h-[78px] sm:gap-5">
      <h3 className="text-xl leading-none font-bold text-primary uppercase sm:text-5xl xl:text-[52px]">
        {project.name}
      </h3>
      <Link
        href={`/case-studies/${project.slug}`}
        className={cn(buttonVariants(), "h-8 shrink-0 rounded-full px-3.5 font-mono text-xs sm:h-16 sm:px-8 sm:text-lg")}
      >
        View Project
      </Link>
    </div>
  );
}

export function PortfolioProjectCard({ project }: { project: PortfolioProject }) {
  const compact = project.layout === "art-first";
  const artHeight = project.slug === "fittpulse" ? "xl:h-[740px]" : "xl:h-[660px]";

  return (
    <article className="space-y-2 sm:space-y-5">
      <ProjectHeader project={project} />
      {compact ? (
        <Card className="overflow-hidden border-0 ring-0 bg-transparent py-0 shadow-none sm:border sm:border-border sm:bg-background sm:ring-1 sm:ring-foreground/10 sm:rounded-[20px]">
          <CardContent className="grid gap-4 p-0 sm:gap-5 sm:p-5 md:grid-cols-2 xl:grid-cols-[1fr_0.9fr_1fr] xl:p-10 sm:pt-0">
            <div className="flex items-center justify-between gap-2 sm:hidden px-1 pt-2 pb-1">
              <h4 className="text-xl font-bold text-primary uppercase min-w-0 truncate">
                {project.name}
              </h4>
              <Link
                href={`/case-studies/${project.slug}`}
                className={cn(
                  buttonVariants(),
                  "h-8 shrink-0 whitespace-nowrap rounded-full px-3 font-mono text-[13px]",
                )}
              >
                View Project
              </Link>
            </div>
            <div
              className={cn(
                "relative aspect-[4/3] min-h-0 overflow-hidden rounded-[20px] sm:aspect-auto sm:min-h-[540px] sm:rounded-[44px]",
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
            <SummaryCard project={project} compact />
            <div className="md:col-span-2 xl:col-span-1">
              <DetailColumn project={project} compact />
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="overflow-hidden border-0 ring-0 bg-transparent py-0 shadow-none sm:border sm:border-border sm:bg-background sm:ring-1 sm:ring-foreground/10 sm:rounded-[20px]">
          <CardContent className="grid gap-4 p-0 sm:gap-5 sm:p-5 md:grid-cols-2 xl:grid-cols-[404px_403px_500.735px]">
            <div className="flex items-center justify-between gap-2 sm:hidden px-1 pt-4 pb-1">
              <h4 className="text-xl font-bold text-primary uppercase min-w-0 truncate">
                {project.name}
              </h4>
              <Link
                href={`/case-studies/${project.slug}`}
                className={cn(
                  buttonVariants(),
                  "h-8 shrink-0 whitespace-nowrap rounded-full px-3 font-mono text-[13px]",
                )}
              >
                View Project
              </Link>
            </div>
            <div className="relative aspect-[4/3] min-h-0 overflow-hidden rounded-[20px] sm:aspect-auto sm:min-h-[540px] sm:rounded-[44px] md:col-span-2 xl:col-span-1 xl:h-[740px] sm:order-last">
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
    <main className="mx-auto flex w-full max-w-[1416px] flex-col gap-8 px-4 pt-6 pb-0 sm:gap-[98px] sm:px-6 sm:pt-[98px] sm:pb-24 xl:px-0">
      <h1 className="text-center text-3xl leading-none font-extrabold tracking-tight text-primary uppercase sm:text-5xl lg:text-[78px] sm:-mb-6">
        Portfolio
      </h1>

      <section className="rounded-[20px] border border-border bg-background p-5 text-center sm:p-10 xl:p-[50px]">
        <div className="mx-auto flex max-w-[1316px] flex-col items-center gap-4 sm:gap-10">
          <h2 className="text-2xl leading-[1.1] font-bold tracking-[0.03em] text-primary uppercase sm:text-5xl lg:text-[72px]">
            Results That Speak Louder Than Promises.
          </h2>
          <p className="text-xs leading-relaxed tracking-[0.03em] text-black sm:text-xl">
            Every project is built around one goal—helping businesses grow
            through strategy, creativity, and performance-driven marketing.
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

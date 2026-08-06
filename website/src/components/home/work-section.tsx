import Image from "next/image";
import Link from "next/link";

import { SectionTitle } from "@/components/home/section-title";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/content/home";
import { cn } from "@/lib/utils";

function DetailGroup({
  title,
  items,
  compact = false,
}: {
  title: string;
  items: string[];
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-[14px] border border-border bg-background xl:shrink-0",
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

function ProjectMeta({ label, value }: { label: string; value: string }) {
  return (
    <Badge className="h-auto rounded-full border-0 bg-surface-tint px-4 py-2.5 text-base leading-[1.5] font-normal whitespace-normal text-navy hover:bg-surface-tint xl:text-lg">
      {label}
      <span className="mx-2 size-1 rounded-full bg-primary" />
      <strong className="font-medium text-primary">{value}</strong>
    </Badge>
  );
}

const auditButtonClass =
  "h-16 w-full rounded-full px-8 font-mono text-lg font-bold xl:text-xl";

export function WorkSection() {
  return (
    <section className="mx-auto max-w-[1392px] px-4 py-24 sm:px-6 xl:px-0 lg:py-32">
      <SectionTitle lead="Our" accent="Work" />
      <div className="mt-20 space-y-20">
        {projects.map((project) => (
          <article key={project.slug}>
            <div className="mb-5 flex min-h-[78px] items-center justify-between gap-5">
              <h3 className="text-3xl leading-[1.5] font-bold text-primary uppercase sm:text-5xl xl:text-[52px]">
                {project.name}
              </h3>
              <Link
                href={`/case-studies/${project.slug}`}
                className={cn(
                  buttonVariants(),
                  "h-12 rounded-full px-6 font-mono text-base sm:h-16 sm:px-8 sm:text-lg",
                )}
              >
                View Project
              </Link>
            </div>

            {project.slug === "glowskinn" ? (
              <Card className="overflow-hidden rounded-[20px] border-0 bg-transparent py-0 shadow-none">
                <CardContent className="grid gap-5 p-5 md:grid-cols-2 xl:grid-cols-[404px_403px_501px]">
                  <div className="flex min-h-[540px] flex-col gap-10 rounded-[14px] border border-border bg-background p-6 xl:h-[740px] xl:p-10">
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
                    <div className="flex flex-wrap gap-3">
                      <ProjectMeta label="Category" value={project.category} />
                      <ProjectMeta
                        label="Time Taken"
                        value={project.timeline}
                      />
                    </div>
                    <p className="text-lg leading-[1.5] text-body">
                      {project.description}
                    </p>
                    <div className="relative mt-auto h-[165px] overflow-hidden">
                      <Image
                        src={project.summaryImage}
                        alt={`${project.name} website detail`}
                        fill
                        sizes="324px"
                        className="object-cover object-[center_70%]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-5 xl:h-[740px]">
                    <DetailGroup title="What We Did" items={project.services} />
                    <DetailGroup title="Outcome" items={project.outcomes} />
                    <Link
                      href="/contact"
                      className={cn(
                        buttonVariants(),
                        auditButtonClass,
                        "mt-auto",
                      )}
                    >
                      Get a free Audit
                    </Link>
                  </div>

                  <div className="relative min-h-[540px] overflow-hidden rounded-[44px] md:col-span-2 xl:col-span-1 xl:h-[740px]">
                    <Image
                      src={project.artImage}
                      alt={`${project.name} full website`}
                      fill
                      sizes="501px"
                      className="object-cover object-top"
                    />
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="overflow-hidden rounded-[20px] border-2 border-border bg-background py-0 shadow-none">
                <CardContent className="grid gap-5 p-5 md:grid-cols-2 xl:grid-cols-[500px_383.5px_383.5px] xl:p-10">
                  <div className="relative min-h-[540px] overflow-hidden rounded-[44px] xl:h-[660px]">
                    <Image
                      src={project.artImage}
                      alt={`${project.name} campaign artwork`}
                      fill
                      sizes="500px"
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="flex min-h-[540px] flex-col gap-10 rounded-[14px] bg-background p-6 xl:h-[660px] xl:p-8">
                    <div className="flex flex-wrap gap-3">
                      <ProjectMeta label="Category" value={project.category} />
                      <ProjectMeta label="Timeline" value={project.timeline} />
                    </div>
                    <p className="text-lg leading-[1.5] text-body">
                      {project.description}
                    </p>
                    <div className="relative mt-auto h-[232px] overflow-hidden">
                      <Image
                        src={project.summaryImage}
                        alt={`${project.name} logo`}
                        fill
                        sizes="304px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-5 md:col-span-2 xl:col-span-1 xl:h-[684px]">
                    <DetailGroup
                      title="What We Did"
                      items={project.services}
                      compact
                    />
                    <DetailGroup
                      title="Outcome"
                      items={project.outcomes}
                      compact
                    />
                    <Link
                      href="/contact"
                      className={cn(
                        buttonVariants(),
                        auditButtonClass,
                        "mt-auto",
                      )}
                    >
                      Get a free Audit
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

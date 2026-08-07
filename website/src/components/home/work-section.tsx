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
        "max-w-full overflow-hidden rounded-[14px] border border-border bg-background xl:shrink-0",
        compact
          ? title === "What We Did"
            ? "p-4 sm:p-5 xl:h-[301px]"
            : "p-4 sm:p-5 xl:h-[277px]"
          : "p-4 sm:p-5 xl:h-[317px] xl:p-10",
      )}
    >
      <h4 className="text-base leading-[1.5] font-bold text-navy uppercase sm:text-lg">
        {title}
      </h4>
      <div className="mt-4 flex flex-wrap gap-2 sm:mt-5 sm:gap-2.5">
        {items.map((item) => (
          <Badge
            key={item}
            variant="secondary"
            className="h-auto rounded-full bg-surface-tint px-3 py-1.5 font-mono text-xs leading-5 font-bold text-navy sm:px-4 sm:py-2 sm:text-sm xl:text-base max-w-full break-words"
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
    <Badge className="h-auto max-w-full rounded-full border-0 bg-surface-tint px-3 py-2 text-xs leading-[1.5] font-normal text-navy hover:bg-surface-tint sm:px-4 sm:py-2.5 sm:text-base xl:text-lg flex-wrap">
      <span className="shrink-0">{label}</span>
      <span className="mx-2 size-1 shrink-0 rounded-full bg-primary" />
      <strong className="font-medium text-primary break-words">{value}</strong>
    </Badge>
  );
}

export function WorkSection() {
  return (
    <section className="mx-auto max-w-[1392px] px-4 py-12 sm:px-6 sm:py-24 xl:px-0 lg:py-32">
      <SectionTitle lead="Our" accent="Work" />
      <div className="mt-10 space-y-14 sm:mt-20 sm:space-y-20">
        {projects.map((project) => (
          <article key={project.slug}>
            <div className="mb-4 flex min-h-0 items-center justify-between gap-3 sm:mb-5 sm:min-h-[78px] sm:gap-5">
              <h3 className="text-2xl leading-[1.3] font-bold text-primary uppercase sm:text-5xl sm:leading-[1.5] xl:text-[52px]">
                {project.name}
              </h3>
              <Link
                href={`/case-studies/${project.slug}`}
                className={cn(
                  buttonVariants(),
                  "h-9 shrink-0 rounded-full px-4 font-mono text-sm sm:h-16 sm:px-8 sm:text-lg",
                )}
              >
                View Project
              </Link>
            </div>

            {project.slug === "glowskinn" ? (
              <Card className="overflow-hidden border-0 ring-0 bg-transparent py-0 shadow-none sm:border sm:border-border sm:bg-background sm:ring-1 sm:ring-foreground/10 sm:rounded-[20px]">
                <CardContent className="grid gap-4 p-0 sm:gap-5 sm:p-5 md:grid-cols-2 xl:grid-cols-[404px_403px_501px]">
                  <div className="relative order-1 aspect-[4/5] min-h-0 overflow-hidden rounded-[20px] sm:min-h-[540px] sm:rounded-[44px] md:col-span-2 xl:order-3 xl:col-span-1 xl:aspect-auto xl:h-[740px]">
                    <Image
                      src={project.artImage}
                      alt={`${project.name} full website`}
                      fill
                      sizes="(max-width: 1280px) 100vw, 501px"
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="order-2 flex min-h-0 flex-col gap-5 rounded-[14px] border border-border bg-background p-4 sm:gap-10 sm:p-6 xl:order-1 xl:h-[740px] xl:p-10">
                    <div className="hidden items-center justify-between gap-3 xl:flex">
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
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      <ProjectMeta label="Category" value={project.category} />
                      <ProjectMeta
                        label="Time Taken"
                        value={project.timeline}
                      />
                    </div>
                    <p className="text-sm leading-[1.5] text-body sm:text-lg">
                      {project.description}
                    </p>
                    <div className="relative mt-auto h-[120px] overflow-hidden sm:h-[165px]">
                      <Image
                        src={project.summaryImage}
                        alt={`${project.name} website detail`}
                        fill
                        sizes="324px"
                        className="object-cover object-[center_70%]"
                      />
                    </div>
                  </div>

                  <div className="order-3 flex flex-col gap-4 sm:gap-5 xl:order-2 xl:h-[740px]">
                    <DetailGroup title="What We Did" items={project.services} />
                    <DetailGroup title="Outcome" items={project.outcomes} />
                    <Link
                      href="/contact"
                      className={cn(
                        buttonVariants(),
                        "h-12 w-fit sm:w-full rounded-full px-6 font-mono text-base font-bold sm:h-16 sm:px-8 sm:text-lg xl:text-xl text-center mx-auto",
                      )}
                    >
                      Get a free Audit
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="overflow-hidden border-0 ring-0 bg-transparent py-0 shadow-none sm:border sm:border-border sm:bg-background sm:ring-1 sm:ring-foreground/10 sm:rounded-[20px]">
                <CardContent className="grid gap-4 p-0 sm:gap-5 sm:p-5 md:grid-cols-2 xl:grid-cols-[1fr_0.9fr_1fr] xl:p-6">
                  <div className="relative order-1 aspect-[4/5] min-h-0 overflow-hidden rounded-[20px] sm:min-h-[540px] sm:rounded-[44px] xl:aspect-auto xl:h-[660px]">
                    <Image
                      src={project.artImage}
                      alt={`${project.name} campaign artwork`}
                      fill
                      sizes="(max-width: 1280px) 100vw, 500px"
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="order-2 flex min-h-0 flex-col gap-5 rounded-[14px] bg-background p-0 sm:gap-10 sm:p-6 xl:h-[660px] xl:p-8">
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      <ProjectMeta label="Category" value={project.category} />
                      <ProjectMeta label="Timeline" value={project.timeline} />
                    </div>
                    <p className="text-sm leading-[1.5] text-body sm:text-lg">
                      {project.description}
                    </p>
                    <div className="relative mt-auto h-[160px] overflow-hidden sm:h-[232px]">
                      <Image
                        src={project.summaryImage}
                        alt={`${project.name} logo`}
                        fill
                        sizes="304px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="order-3 flex flex-col gap-4 sm:gap-5 md:col-span-2 xl:col-span-1 xl:h-[684px]">
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
                        "h-12 w-fit sm:w-full rounded-full px-6 font-mono text-base font-bold sm:h-16 sm:px-8 sm:text-lg xl:text-xl text-center mx-auto",
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

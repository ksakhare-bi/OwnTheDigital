import Image from "next/image";
import Link from "next/link";

import { SectionTitle } from "@/components/home/section-title";
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
        "max-w-full min-w-0 overflow-hidden rounded-[14px] border border-border bg-background lg:shrink-0",
        compact
          ? title === "What We Did"
            ? "p-3 sm:p-4 lg:min-h-[235px] xl:min-h-[301px]"
            : "p-3 sm:p-4 lg:min-h-[211px] xl:min-h-[277px]"
          : "p-3 sm:p-4 lg:min-h-[247px] lg:p-4 xl:min-h-[317px] xl:p-6",
      )}
    >
      <h4 className="text-base leading-[1.5] font-bold text-navy uppercase sm:text-md lg:text-base xl:text-lg">
        {title}
      </h4>
      <div className="mt-4 flex flex-wrap gap-2 sm:mt-5 sm:gap-2.5">
        {items.map((item) => (
          <span
            key={item}
            className="inline-flex h-auto items-center justify-center rounded-full bg-surface-tint px-3 py-1.5 font-mono text-xs leading-5 font-bold text-navy sm:px-4 sm:py-2 sm:text-sm xl:text-base max-w-full whitespace-normal break-words text-left"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectMeta({ label, value }: { label: string; value: string }) {
  return (
    <span className="inline-block h-auto max-w-full rounded-full bg-surface-tint px-3 py-1 text-xs font-normal text-navy sm:px-4 sm:py-2 sm:text-sm xl:text-base text-left align-middle">
      <span>{label}</span>
      <span className="mx-2 inline-block size-1 align-middle rounded-full bg-primary" />{" "}
      <strong className="font-semibold text-primary text-left">{value}</strong>
    </span>
  );
}

export function WorkSection() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-4 pt-8 sm:px-6 sm:pt-10 xl:px-10">
      <SectionTitle lead="Our" accent="Work" />
      <div className="mt-10 space-y-14 sm:mt-10 lg:mt-16 sm:space-y-20">
        {projects.map((project) => (
          <article key={project.slug}>
            <div className="mb-4 flex min-h-0 items-center justify-between gap-3 sm:mb-5 sm:gap-4 md:gap-3">
              <h3 className="min-w-0 flex-1 truncate text-2xl leading-tight font-bold text-primary uppercase sm:text-4xl sm:leading-[1.3] md:text-3xl lg:text-[40px] xl:text-[52px]">
                {project.name}
              </h3>
              <Link
                href={`/case-studies/${project.slug}`}
                className={cn(
                  buttonVariants(),
                  "h-8 shrink-0 rounded-full px-3 font-mono text-xs sm:h-14 sm:px-7 sm:text-base md:h-10 md:px-4 md:text-xs lg:h-12 lg:px-5 lg:text-sm xl:h-16 xl:px-8 xl:text-lg",
                )}
              >
                View Project
              </Link>
            </div>

            {project.slug === "glowskinn" ? (
              <Card className="overflow-hidden border-0 ring-0 bg-transparent py-0 shadow-none sm:border sm:border-border sm:bg-background sm:ring-1 sm:ring-foreground/10 sm:rounded-[20px]">
                <CardContent className="grid gap-3 p-0 sm:gap-4 sm:p-4 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1.24fr]">
                  <div className="relative order-1 aspect-[4/3] min-h-0 overflow-hidden rounded-[20px] sm:min-h-[200px] sm:rounded-[18px] md:rounded-[14px] lg:aspect-[3/4] md:min-h-0 md:col-span-2 lg:order-1 lg:col-span-1 lg:aspect-auto lg:min-h-[600px] xl:min-h-[740px]">
                    <Image
                      src={project.artImage}
                      alt={`${project.name} full website`}
                      fill
                      sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 400px, 501px"
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="order-2 flex min-w-0 min-h-0 flex-col gap-4 rounded-[14px] border border-border bg-background p-2 sm:gap-6 sm:p-3 lg:order-1 lg:min-h-[600px] xl:min-h-[740px] xl:p-4">
                    <div className="hidden flex-wrap items-center justify-between gap-2 lg:flex xl:flex-nowrap xl:gap-3">
                      <h4 className="min-w-0 flex-1 truncate text-xl leading-[1.5] font-bold text-primary uppercase xl:text-2xl">
                        {project.name}
                      </h4>
                      <Link
                        href={`/case-studies/${project.slug}`}
                        className={cn(
                          buttonVariants(),
                          "h-8 shrink-0 rounded-full px-2 font-mono text-xs xl:h-10 xl:px-5 xl:text-base",
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
                    <p className="text-sm leading-[1.5] text-body md:leading-5 lg:text-sm xl:text-base">
                      {project.description}
                    </p>
                    <div className="relative mt-auto h-[120px] overflow-hidden sm:h-[290px] lg:h-[310px] xl:h-[260px]">
                      <Image
                        src={project.summaryImage}
                        alt={`${project.name} website detail`}
                        fill
                        sizes="324px"
                        className="object-cover object-[center_70%]"
                      />
                    </div>
                  </div>

                  <div className="order-3 flex min-w-0 flex-col gap-4 sm:gap-5 lg:order-2 lg:min-h-[600px] xl:min-h-[740px]">
                    <DetailGroup title="What We Did" items={project.services} />
                    <DetailGroup title="Outcome" items={project.outcomes} />
                    <Link
                      href="/contact"
                      className={cn(
                        buttonVariants(),
                        "h-10 w-fit sm:w-full rounded-full px-5 font-mono text-sm font-bold sm:h-14 sm:px-7 sm:text-base md:h-10 md:px-4 md:text-xs lg:h-12 lg:px-5 lg:text-sm xl:h-16 xl:px-8 xl:text-xl text-center mx-auto",
                      )}
                    >
                      Get a free Audit
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="overflow-hidden border-0 ring-0 bg-transparent py-0 shadow-none sm:border sm:border-border sm:bg-background sm:ring-1 sm:ring-foreground/10 sm:rounded-[20px]">
                <CardContent className="grid gap-3 p-0 sm:gap-4 sm:p-4 md:grid-cols-2 lg:grid-cols-[1fr_0.9fr_1fr] lg:p-4 xl:p-5">
                  <div className="relative order-1 aspect-[4/5] min-w-0 min-h-0 overflow-hidden rounded-[20px] sm:min-h-[400px] sm:rounded-[44px] md:min-h-[280px] lg:aspect-auto lg:min-h-[530px] xl:min-h-[660px]">
                    <Image
                      src={project.artImage}
                      alt={`${project.name} campaign artwork`}
                      fill
                      sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 400px, 500px"
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="order-2 flex min-w-0 min-h-0 flex-col gap-4 rounded-[14px] bg-background p-0 sm:gap-6 sm:p-2 lg:min-h-[530px] xl:min-h-[660px] xl:p-5">
                    <div className="flex flex-wrap gap-2 sm:gap-4">
                      <ProjectMeta label="Category" value={project.category} />
                      <ProjectMeta label="Timeline" value={project.timeline} />
                    </div>
                    <p className="text-sm leading-[1.5] text-body md:leading-5 lg:text-sm xl:text-base">
                      {project.description}
                    </p>
                    <div className="relative mt-auto h-[160px] overflow-hidden sm:h-[252px] lg:h-[270px] xl:h-[232px]">
                      <Image
                        src={project.summaryImage}
                        alt={`${project.name} logo`}
                        fill
                        sizes="304px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="order-3 flex min-w-0 flex-col gap-4 sm:gap-5 md:col-span-2 lg:col-span-1 lg:min-h-[550px] xl:min-h-[684px]">
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
                        "h-10 w-fit sm:w-full rounded-full px-5 font-mono text-sm font-bold sm:h-14 sm:px-7 sm:text-base md:h-10 md:px-4 md:text-xs lg:h-12 lg:px-5 lg:text-sm xl:h-16 xl:px-8 xl:text-xl text-center mx-auto",
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

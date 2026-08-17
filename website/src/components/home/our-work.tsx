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
  className,
}: {
  title: string;
  items: string[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col rounded-[14px] border border-border bg-background p-4 sm:p-5", className)}>
      <h4 className="text-sm font-bold text-navy uppercase opacity-80 mb-3">
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="inline-flex items-center justify-center rounded-full bg-surface-tint/50 border border-border/50 px-3 py-1.5 font-mono text-xs font-bold text-navy sm:text-sm whitespace-normal text-left"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function WorkSection() {
  return (
    <section className="mx-auto max-w-[1392px] px-4 pt-16 sm:px-6 sm:pt-24 lg:pt-32">
      <SectionTitle lead="Our" accent="Work" />
      
      <div className="mt-8 space-y-12 sm:mt-12 sm:space-y-16 lg:mt-16 lg:space-y-20">
        {projects.map((project) => (
          <article key={project.slug} className="group">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-4 sm:mb-6">
              <h3 className="min-w-0 flex-1 truncate text-2xl leading-tight font-extrabold text-primary uppercase sm:text-3xl lg:text-[40px]">
                {project.name}
              </h3>
              <Link
                href={`/case-studies/${project.slug}`}
                className={cn(
                  buttonVariants(),
                  "h-10 rounded-full px-6 font-mono text-sm uppercase tracking-wide",
                )}
              >
                View Project
              </Link>
            </div>

            <Card className="overflow-hidden border-none bg-background rounded-[20px] shadow-sm transition-all duration-300">
              <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 p-5 sm:p-6 lg:p-6 lg:py-2">
                
                {/* Column 1: Image + Description */}
                <div className="flex flex-col gap-5">
                  <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden rounded-[44px] bg-surface-tint border border-border/50">
                    <Image
                      src={project.artImage}
                      alt={`${project.name} preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 400px"
                      className="object-cover object-top"
                    />
                  </div>
                  <p className="text-base leading-relaxed text-body sm:text-[17px]">
                    {project.description}
                  </p>
                </div>

                {/* Grouped Columns 2 & 3 for perfect row height matching */}
                <div className="md:col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-8">
                  
                  {/* Row 1, Left: What We Did */}
                  <DetailGroup title="What We Did" items={project.services} className="h-full" />

                  {/* Row 1, Right: Image */}
                  <div className="flex flex-col gap-2 sm:gap-3 h-full">
                    <div className="flex-1 relative min-h-[160px] sm:min-h-[220px] w-full overflow-hidden rounded-[14px] border border-border/50">
                      <Image
                        src={project.summaryImage}
                        alt={`${project.name} detail`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 300px"
                        className="object-cover object-bottom"
                      />
                    </div>
                  </div>

                  {/* Row 2, Left: Outcome */}
                  <DetailGroup title="Outcome" items={project.outcomes} className="h-full" />
                  
                  {/* Row 2, Right: Category + Timeline + Button */}
                  <div className="flex flex-col gap-2 sm:gap-3 h-full">
                    <div className="flex-1 rounded-[14px] border border-border bg-surface-tint/30 p-5 sm:p-4">
                      <h4 className="text-xs sm:text-sm font-bold text-navy uppercase mb-1.5 opacity-80">
                        Category
                      </h4>
                      <p className="text-base sm:text-lg font-bold text-primary leading-tight">
                        {project.category}
                      </p>
                    </div>
                    <div className="flex-1 rounded-[14px] border border-border bg-surface-tint/30 p-5 sm:p-4">
                      <h4 className="text-xs sm:text-sm font-bold text-navy uppercase mb-1.5 opacity-80">
                        Timeline
                      </h4>
                      <p className="text-base sm:text-lg font-bold text-primary leading-tight">
                        {project.timeline}
                      </p>
                    </div>
                    
                    <div className="shrink-0 pt-2 sm:pt-0">
                      <Link
                        href="/contact"
                        className={cn(
                          buttonVariants(),
                          "w-full h-10 sm:h-11 rounded-[18px] text-sm sm:text-lg font-bold uppercase tracking-wide"
                        )}
                      >
                        Get a free Audit
                      </Link>
                    </div>
                  </div>
                </div>

              </CardContent>
            </Card>
          </article>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

import { SectionTitle } from "@/components/home/section-title";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { homeServices } from "@/content/home";
import { cn } from "@/lib/utils";

type ServicesSectionProps = {
  hideTitle?: boolean;
  hideEyebrows?: boolean;
  showExploreLinks?: boolean;
};

export function ServicesSection({
  hideTitle = false,
  hideEyebrows = false,
  showExploreLinks = false,
}: ServicesSectionProps = {}) {
  return (
    <section
      id="services"
      className="mx-auto max-w-[1392px] scroll-mt-24 px-4 pb-8 sm:px-6 sm:pb-0"
    >
      {!hideTitle ? <SectionTitle lead="Our" accent="Services" /> : null}
      <div
        className={cn(
          "space-y-4 sm:space-y-4 md:space-y-3 lg:space-y-8",
          hideTitle ? "mt-0" : "mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16",
        )}
      >
        {homeServices.map((service, index) => {
          const next = homeServices[index + 1];

          return (
            <div key={service.title}>
              <Link href={service.href} className="block transition duration-200 hover:opacity-[0.98]">
                <Card className="overflow-hidden rounded-[14px] border-border bg-background py-0 shadow-none hover:border-primary">
                  <CardContent className="p-4 md:p-4 lg:p-6 xl:px-12 xl:py-[34px]">
                    {!hideEyebrows ? (
                      <Badge className="h-auto max-w-full rounded-full border border-border bg-surface-tint px-3 py-1.5 text-left text-[10px] leading-4 font-bold whitespace-normal text-success uppercase hover:bg-surface-tint sm:text-xs lg:px-3 lg:py-2 lg:text-sm lg:leading-4 xl:px-4 xl:py-3 xl:text-base xl:leading-5">
                        {service.eyebrow}
                      </Badge>
                    ) : (
                      <Badge className="hidden h-auto max-w-full rounded-full border border-border bg-surface-tint px-3 py-1.5 text-left text-xs leading-4 font-bold whitespace-normal text-success uppercase hover:bg-surface-tint sm:inline-flex lg:px-3 lg:py-2 lg:text-sm lg:leading-4 xl:px-4 xl:py-3 xl:text-base xl:leading-5">
                        {service.eyebrow}
                      </Badge>
                    )}

                    <div
                      className={cn(
                        "grid gap-4 sm:mt-4 sm:gap-6 md:mt-3 md:grid-cols-[1.45fr_1fr] md:gap-3 lg:mt-5 lg:grid-cols-[1.38fr_1fr] lg:gap-5 xl:mt-6 xl:grid-cols-[1.32fr_1fr] xl:gap-6",
                        hideEyebrows ? "mt-0" : "mt-3",
                      )}
                    >
                      <div className="flex flex-col">
                        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl sm:h-64 sm:aspect-auto md:h-[180px] lg:h-[280px] xl:h-[339px]">
                          <Image
                            src={service.image}
                            alt={`${service.title} dashboard and campaign preview`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 720px"
                            className="object-cover"
                          />
                        </div>
                        <p className="hidden md:block mt-2 text-xs leading-5 text-body md:mt-2 md:text-xs md:leading-5 lg:mt-3 lg:text-sm lg:leading-6 xl:text-lg xl:leading-7 xl:mt-6">
                          {service.description}
                        </p>
                      </div>

                      <div className="w-full">
                        <h3 className="text-xl leading-[1.35] font-bold text-navy uppercase sm:text-xl sm:leading-[1.4] md:text-lg lg:text-2xl xl:text-3xl">
                          {service.title}
                        </h3>
                        <ul className="mt-3 max-w-[507px] space-y-1.5 sm:mt-4 sm:space-y-2 md:mt-3 md:space-y-1.5 lg:mt-5 lg:space-y-3 xl:space-y-6">
                          {service.items.map((item) => (
                            <li
                              key={item}
                              className="ml-4 list-disc border-b border-border pb-1.5 pl-0 text-xs leading-[1.5] text-navy uppercase marker:text-navy sm:ml-5 sm:pb-3 sm:text-sm md:ml-4 md:text-xs lg:ml-7 lg:pb-3 lg:text-lg xl:ml-9 xl:text-2xl"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <p className="block md:hidden mt-3 text-sm leading-6 text-body sm:mt-4 sm:text-lg sm:leading-7 lg:text-base lg:leading-6 xl:text-lg xl:leading-7 xl:mt-6">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>

              {showExploreLinks && next ? (
                <div className="mt-5 text-center sm:hidden">
                  <Link
                    href={next.href}
                    className="font-mono text-xs font-bold tracking-wide text-primary uppercase hover:underline"
                  >
                    Explore {next.title} Services
                  </Link>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}

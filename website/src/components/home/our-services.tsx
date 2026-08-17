"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ArrowUpRight } from "lucide-react";

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

const ServiceCardItem = ({ service, hideEyebrows }: any) => {
  return (
    <ScrollStackItem>
      <div className="w-full transition-shadow duration-300">
        <div className="block transition duration-200">
          <Card className="transform-gpu overflow-hidden rounded-[14px] border-border bg-background py-0 shadow-[0_-8px_30px_rgb(0,0,0,0.04)] hover:border-primary">
            <CardContent 
              className="p-4 md:p-4 lg:p-6 xl:px-12 xl:py-[34px] transition-opacity duration-75"
              style={{ opacity: "var(--stack-content-opacity, 1)" }}
            >
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
                  "grid gap-4 sm:mt-4 sm:gap-6 md:mt-3 md:grid-cols-[1.15fr_1fr] md:gap-4 lg:mt-5 lg:grid-cols-[1.38fr_1fr] lg:gap-8 xl:mt-6 xl:grid-cols-[1.32fr_1fr] xl:gap-6",
                  hideEyebrows ? "mt-0" : "mt-3",
                )}
              >
                <div className="flex flex-col">
                  <Link href={service.href} className="relative block w-full aspect-[16/10] overflow-hidden rounded-xl sm:h-64 sm:aspect-auto md:h-[260px] lg:h-[330px] xl:h-[360px]">
                    <Image
                      src={service.image}
                      alt={`${service.title} dashboard and campaign preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 720px"
                      className="object-cover"
                    />
                  </Link>
                </div>

                <div className="w-full">
                  <Link href={service.href} className="inline-block transition-opacity hover:opacity-80">
                    <h3 className="text-xl leading-[1.35] font-bold text-navy uppercase sm:text-xl sm:leading-[1.4] md:text-lg lg:text-2xl xl:text-3xl">
                      {service.title}
                    </h3>
                  </Link>
                  <Accordion className="mt-4 ml-2 flex w-full max-w-[507px] flex-col gap-1 sm:mt-5 md:mt-4">
                    {service.items.map((item: any, itemIndex: number) => (
                      <AccordionItem
                        key={item.title}
                        value={`item-${itemIndex}`}
                        className="group/item border-b border-border last:border-0"
                      >
                        <AccordionTrigger className="flex items-center justify-between gap-3 py-3 hover:no-underline lg:gap-4 lg:py-4">
                          <div className="flex items-center gap-3 lg:gap-4">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-navy/80 sm:h-2 sm:w-2"></span>
                            <span className="text-left text-sm font-medium leading-tight text-navy uppercase sm:text-base md:text-sm lg:text-lg xl:text-xl">
                              {item.title}
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pb-4 pl-[22px] sm:pl-[28px] lg:pb-5 lg:pl-[32px]">
                          <div className="flex items-end justify-between gap-4">
                            <span className="text-xs leading-relaxed text-body sm:text-sm lg:text-base">
                              {item.detail}
                            </span>
                            <Link
                              href={service.href}
                              className="shrink-0 rounded-full border border-border bg-surface-tint p-2 text-navy transition-all duration-300 hover:bg-gray-200"
                              aria-label={`Learn more about ${item.title}`}
                            >
                              <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
                            </Link>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>

              <p className="block md:hidden mt-3 text-sm leading-6 text-body sm:mt-4 sm:text-lg sm:leading-7 lg:text-base lg:leading-6 xl:text-lg xl:leading-7 xl:mt-6">
                {service.description}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </ScrollStackItem>
  );
};

export function ServicesSection({
  hideTitle = false,
  hideEyebrows = false,
  showExploreLinks = false,
}: ServicesSectionProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="services"
      ref={containerRef}
      className="mx-auto max-w-[1392px] scroll-mt-24 px-4 pb-8 sm:px-6 sm:pb-0"
    >
      {!hideTitle ? <SectionTitle lead="Our" accent="Services" /> : null}
      <div
        className={cn(
          "w-full",
          hideTitle ? "mt-0" : "mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16",
        )}
      >
        <ScrollStack useWindowScroll={true} itemStackDistance={20} itemDistance={32} baseScale={1} itemScale={0} stackPosition="15%">
          {homeServices.map((service, index) => {
            return (
              <ServiceCardItem
                key={service.title}
                service={service}
                hideEyebrows={hideEyebrows}
              />
            );
          })}
        </ScrollStack>
      </div>
    </section>
  );
}

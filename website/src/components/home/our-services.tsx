"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
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
              className="p-4 sm:p-4 md:p-5 lg:p-6 xl:px-12 xl:py-[34px] transition-opacity duration-75"
              style={{ opacity: "var(--stack-content-opacity, 1)" }}
            >
              {!hideEyebrows ? (
                <Badge className="h-auto max-w-full rounded-full border border-border bg-surface-tint px-2 py-2 text-left text-[11px] leading-4 font-bold whitespace-normal text-success uppercase hover:bg-surface-tint sm:px-3 sm:py-1.5 sm:text-xs lg:px-3 lg:py-2 lg:text-sm lg:leading-4 xl:px-4 xl:py-3 xl:text-base xl:leading-5">
                  {service.eyebrow}
                </Badge>
              ) : (
                <Badge className="hidden h-auto max-w-full rounded-full border border-border bg-surface-tint px-2 py-2 text-left text-[11px] leading-4 font-bold whitespace-normal text-success uppercase hover:bg-surface-tint sm:px-3 sm:py-1.5 sm:inline-flex sm:text-xs lg:px-3 lg:py-2 lg:text-sm lg:leading-4 xl:px-4 xl:py-3 xl:text-base xl:leading-5">
                  {service.eyebrow}
                </Badge>
              )}

              <div
                className={cn(
                  "grid gap-3 sm:gap-6 sm:mt-4 md:mt-3 md:grid-cols-[1.15fr_1fr] md:gap-4 lg:mt-5 lg:grid-cols-[1.38fr_1fr] lg:gap-8 xl:mt-6 xl:grid-cols-[1.32fr_1fr] xl:gap-6",
                  hideEyebrows ? "mt-0" : "mt-2",
                )}
              >
                <div className="flex flex-col">
                  <Link href={service.href} className="relative block w-full h-[150px] sm:h-64 sm:aspect-auto overflow-hidden rounded-xl md:h-[260px] lg:h-[330px] xl:h-[360px]">
                    <Image
                      src={service.image}
                      alt={`${service.title} dashboard and campaign preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 720px"
                      className="object-cover"
                    />
                  </Link>
                </div>

                <div className="w-full px-1 sm:px-0">
                  <Link href={service.href} className="inline-block transition-opacity hover:opacity-80">
                    <h3 className="text-[18px] leading-[1.35] font-bold text-navy uppercase sm:text-xl sm:leading-[1.4] md:text-lg lg:text-xl xl:text-3xl">
                      {service.title}
                    </h3>
                  </Link>
                  <Accordion className="mt-2 ml-1 flex w-full max-w-[507px] flex-col gap-0 sm:gap-1 sm:mt-5 md:mt-4 lg:mt-3 xl:mt-4">
                    {service.items.map((item: any, itemIndex: number) => (
                      <AccordionItem
                        key={item.title}
                        value={`item-${itemIndex}`}
                        className="group/item border-b border-border last:border-0"
                      >
                        <AccordionTrigger className="flex items-center justify-between gap-3 py-2.5 sm:py-3 hover:no-underline lg:gap-3 lg:py-2.5 xl:gap-4 xl:py-4">
                          <div className="flex items-center gap-2 lg:gap-3 xl:gap-4">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-navy/80 sm:h-2 sm:w-2"></span>
                            <span className="text-left text-xs font-medium leading-tight text-navy uppercase sm:text-base md:text-sm lg:text-[17px] xl:text-xl">
                              {item.title}
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pb-2 pl-[18px] sm:pb-3 sm:pl-[28px] lg:pb-3 lg:pl-[28px] xl:pb-5 xl:pl-[32px]">
                          <div className="flex items-end justify-between gap-4">
                            <span className="text-xs leading-relaxed text-body sm:text-sm lg:text-[14px] xl:text-base">
                              {item.detail}
                            </span>
                            <Link
                              href={service.href}
                              className="shrink-0 rounded-full border border-border bg-surface-tint p-2 text-navy transition-all duration-300 hover:bg-gray-200"
                              aria-label={`Learn more about ${item.title}`}
                            >
                              <ArrowUpRight className="h-3 w-3 sm:h-5 sm:w-5 lg:h-4 lg:w-4 xl:h-5 xl:w-5" />
                            </Link>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>

              <p className="block md:hidden px-2 sm:px-0 mt-2 text-sm leading-[1.35] text-body sm:mt-4 sm:text-lg sm:leading-7 lg:text-base lg:leading-6 xl:text-lg xl:leading-7 xl:mt-6">
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
  const titleRef = useRef<HTMLDivElement>(null);
  const pinStartScrollYRef = useRef<number | null>(null);
  const tickingRef = useRef(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check on mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      if (titleRef.current) {
        titleRef.current.style.transform = "";
      }
      pinStartScrollYRef.current = null;
      return;
    }

    const updateTitleTransform = () => {
      tickingRef.current = false;
      const container = containerRef.current;
      const titleEl = titleRef.current;
      if (!container || !titleEl) return;

      const cards = container.querySelectorAll(".scroll-stack-card");
      if (!cards.length) return;

      const lastCard = cards[cards.length - 1] as HTMLElement;
      if (!lastCard) return;

      const stackPositionPx = 140;
      const itemStackDistance = 20;
      const targetPinTop = stackPositionPx + itemStackDistance * (cards.length - 1);

      const lastCardTop = lastCard.getBoundingClientRect().top;

      if (lastCardTop <= targetPinTop + 2) {
        if (pinStartScrollYRef.current === null) {
          pinStartScrollYRef.current = window.scrollY;
        }
        const delta = Math.max(0, window.scrollY - pinStartScrollYRef.current);
        titleEl.style.transform = `translate3d(0, -${delta}px, 0)`;
      } else {
        pinStartScrollYRef.current = null;
        titleEl.style.transform = "translate3d(0, 0, 0)";
      }
    };

    const handleScroll = () => {
      if (!tickingRef.current) {
        tickingRef.current = true;
        requestAnimationFrame(updateTitleTransform);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateTitleTransform();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  return (
    <section
      id="services"
      ref={containerRef}
      className="mx-auto max-w-[1392px] scroll-mt-24 px-4 pb-8 sm:px-6 sm:pb-0 relative"
    >
      {!hideTitle ? (
        <div
          ref={titleRef}
          className={cn(
            "z-30 bg-background/95 backdrop-blur-sm pb-2 pt-4 md:static md:bg-transparent md:p-0",
            isMobile ? "sticky top-[60px]" : "mb-6 text-center sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16"
          )}
        >
          <SectionTitle lead="Our" accent="Services" />
        </div>
      ) : null}
      <div
        className={cn(
          "w-full",
          hideTitle ? "mt-0" : "mt-4 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16",
        )}
      >
        <ScrollStack
          useWindowScroll={true}
          itemStackDistance={20}
          itemDistance={32}
          baseScale={1}
          itemScale={0}
          stackPosition={isMobile ? "140" : "15%"}
        >
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

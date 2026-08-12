import Image from "next/image";
import Link from "next/link";

import { LogoMarquee } from "@/components/home/logo-marquee";
import { SectionTitle } from "@/components/home/section-title";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { clientLogos, homeServices } from "@/content/home";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="mx-auto max-w-[1392px] px-4 pt-4 sm:px-6 sm:pt-14">
      <div className="flex min-h-0 flex-col items-center justify-center overflow-hidden rounded-[16px] border border-border bg-background px-4 py-10 text-center sm:min-h-[530px] sm:rounded-[20px] sm:px-10 sm:py-16 lg:min-h-[460px] lg:px-8 lg:py-12 xl:min-h-[530px] xl:px-10 xl:py-16">
        <h1 className="w-full max-w-[1390px] text-[clamp(1.6rem,6.2vw,70px)] leading-[1.2] font-normal text-black uppercase sm:text-[clamp(1.75rem,calc(5.6vw-8px),70px)] lg:text-[56px] lg:leading-[1.3] xl:text-[70px] xl:leading-[1.5]">
          <span className="block font-light tracking-tight">
            We help businesses win on
          </span>
          <span className="mt-1 block text-[0.90em] tracking-tight font-extrabold text-primary">
            Google, Ads, AI search &amp; social media
          </span>
        </h1>
        <p className="mt-4 max-w-[1185px] text-sm leading-6 font-semibold text-body sm:mt-6 sm:text-xl sm:leading-8 lg:text-xl lg:leading-8 xl:text-2xl xl:leading-9">
          We combine data, creativity, and AI to help brands rank higher, run
          smarter campaigns, and turn traffic into measurable growth.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:mt-10 sm:flex-row lg:mt-8 xl:mt-10">
          <Link
            href="/contact"
            className={cn(
              buttonVariants(),
              "h-12 rounded-full px-7 font-mono text-base font-semibold sm:h-16 sm:px-8 sm:text-lg lg:h-12 lg:px-5 lg:text-sm xl:h-16 xl:px-8 xl:text-lg",
            )}
          >
            Get a free Audit
          </Link>
          <Link
            href="/services"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "hidden h-16 rounded-full border-primary bg-transparent px-8 font-mono text-lg font-semibold text-primary hover:bg-surface-tint hover:text-primary sm:inline-flex lg:h-12 lg:px-5 lg:text-sm xl:h-16 xl:px-8 xl:text-lg",
            )}
          >
            Explore services
          </Link>
        </div>
      </div>
    </section>
  );
}

export function TrustedBySection() {
  return (
    <section
      aria-labelledby="trusted-by-title"
      className="mx-auto max-w-[1392px] overflow-hidden px-4 py-12 sm:px-6 sm:py-20 lg:pt-20 xl:pt-28"
    >
      <SectionTitle
        accent="Trusted"
        lead=""
        className="text-primary [&>span:last-child]:after:ml-2 [&>span:last-child]:after:text-black [&>span:last-child]:after:content-['BY']"
      />
      <h2 id="trusted-by-title" className="sr-only">
        Trusted by leading brands
      </h2>
      <div className="py-8 sm:py-20 lg:py-16 xl:py-20">
        <LogoMarquee logos={clientLogos} />
      </div>
    </section>
  );
}

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
          "space-y-5 sm:space-y-4 lg:space-y-8",
          hideTitle ? "mt-0" : "mt-8 sm:mt-16 lg:mt-12 xl:mt-16",
        )}
      >
        {homeServices.map((service, index) => {
          const next = homeServices[index + 1];

          return (
            <div key={service.title}>
              <Link href={service.href} className="block transition duration-200 hover:opacity-[0.98]">
                <Card className="overflow-hidden rounded-[14px] border-border bg-background py-0 shadow-none hover:border-primary">
                  <CardContent className="p-4 md:p-6 lg:p-6 xl:px-12 xl:py-[34px]">
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
                        "grid gap-4 sm:mt-4 sm:gap-8 md:grid-cols-[1.45fr_1fr] md:gap-4 lg:mt-5 lg:grid-cols-[1.38fr_1fr] lg:gap-5 xl:mt-6 xl:grid-cols-[1.32fr_1fr] xl:gap-6",
                        hideEyebrows ? "mt-0" : "mt-3",
                      )}
                    >
                      <div className="flex flex-col">
                        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl sm:h-80 sm:aspect-auto md:h-[220px] lg:h-[280px] xl:h-[339px]">
                          <Image
                            src={service.image}
                            alt={`${service.title} dashboard and campaign preview`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 720px"
                            className="object-cover"
                          />
                        </div>
                        <p className="hidden md:block mt-3 text-sm leading-6 text-body sm:mt-4 sm:text-lg sm:leading-7 lg:text-base lg:leading-6 xl:text-lg xl:leading-7 xl:mt-6">
                          {service.description}
                        </p>
                      </div>

                      <div className="w-full">
                        <h3 className="text-xl leading-[1.35] font-bold text-navy uppercase sm:text-2xl sm:leading-[1.5] lg:text-2xl xl:text-3xl">
                          {service.title}
                        </h3>
                        <ul className="mt-4 max-w-[507px] space-y-2 sm:mt-6 sm:space-y-3 xl:space-y-6">
                          {service.items.map((item) => (
                            <li
                              key={item}
                              className="ml-5 list-disc border-b border-border pb-2 pl-0 text-sm leading-[1.5] text-navy uppercase marker:text-navy sm:ml-6 sm:pb-3 sm:text-base lg:ml-7 lg:text-lg xl:ml-9 xl:text-2xl"
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

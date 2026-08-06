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
    <section className="mx-auto max-w-[1392px] px-4 pt-8 sm:px-6 sm:pt-14">
      <div className="flex min-h-[530px] flex-col items-center justify-center overflow-hidden rounded-[20px] border border-border bg-background px-5 py-16 text-center sm:px-10 lg:px-10">
        <h1 className="w-full max-w-[1390px] text-[clamp(1.75rem,calc(5.6vw-8px),70px)] leading-[1.2] font-normal text-black uppercase lg:leading-[1.5]">
          <span className="block font-light tracking-tight">We help businesses win on</span>
          <span className="mt-1 block text-[0.90em] tracking-tight font-extrabold text-primary">
            Google, Ads, AI search &amp; social media
          </span>
        </h1>
        <p className="mt-6 max-w-[1185px] text-lg leading-8 font-semibold text-body sm:text-xl lg:text-2xl lg:leading-9">
          We combine data, creativity, and AI to help brands rank higher, run
          smarter campaigns, and turn traffic into measurable growth.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className={cn(
              buttonVariants(),
              "h-16 rounded-full px-8 font-mono text-lg font-semibold",
            )}
          >
            Get a free Audit
          </Link>
          <Link
            href="#services"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-16 rounded-full border-primary bg-transparent px-8 font-mono text-lg font-semibold text-primary hover:bg-surface-tint hover:text-primary",
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
      className="mx-auto max-w-[1392px] overflow-hidden px-4 py-24 sm:px-6 lg:py-28"
    >
      <SectionTitle
        accent="Trusted"
        lead=""
        className="text-primary [&>span:last-child]:after:ml-2 [&>span:last-child]:after:text-black [&>span:last-child]:after:content-['BY']"
      />
      <h2 id="trusted-by-title" className="sr-only">
        Trusted by leading brands
      </h2>
      <div className="py-20">
        <LogoMarquee logos={clientLogos} />
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="mx-auto max-w-[1392px] scroll-mt-24 px-4 pb-24 sm:px-6 md:px-0 lg:pb-32"
    >
      <SectionTitle lead="Our" accent="Services" />
      <div className="mt-16 space-y-10">
        {homeServices.map((service) => (
          <Card
            key={service.title}
            className="overflow-hidden rounded-[14px] border-border bg-background py-0 shadow-none"
          >
            <CardContent className="p-6 sm:p-10 md:px-9 md:py-10 xl:px-14 xl:py-[60px]">
              <Badge className="h-auto max-w-full rounded-full border border-border bg-surface-tint px-3 py-1.5 text-left text-xs leading-4 font-bold whitespace-normal text-success uppercase hover:bg-surface-tint xl:px-4 xl:py-3 xl:text-base xl:leading-5">
                {service.eyebrow}
              </Badge>

              <div className="mt-4 grid gap-8 md:grid-cols-[1.45fr_1fr] md:gap-4 xl:mt-6 xl:grid-cols-[723px_546px] xl:gap-6">
                <div className="relative min-h-64 overflow-hidden rounded-xl sm:min-h-80 md:aspect-[723/339] md:h-auto md:min-h-0 xl:h-[339px] xl:aspect-auto">
                  <Image
                    src={service.image}
                    alt={`${service.title} dashboard and campaign preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 720px"
                    className="object-cover"
                  />
                </div>

                <div className="w-full">
                  <h3 className="text-2xl leading-[1.5] font-bold text-navy uppercase xl:text-3xl">
                    {service.title}
                  </h3>
                  <ul className="mt-6 max-w-[507px] space-y-3 xl:space-y-6">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="ml-6 list-disc border-b border-border pb-3 pl-0 text-base leading-[1.5] text-navy uppercase marker:text-navy xl:ml-9 xl:text-2xl"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mt-4 text-lg leading-7 text-body xl:mt-6">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

import Link from "next/link";

import { LogoMarquee } from "@/components/home/logo-marquee";
import { SectionTitle } from "@/components/home/section-title";
import { buttonVariants } from "@/components/ui/button";
import { clientLogos } from "@/content/home";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="mx-auto max-w-[1392px] px-4 pt-4 sm:px-6 sm:pt-10 md:pt-8 lg:pt-12 xl:pt-14">
      <div className="flex min-h-0 flex-col items-center justify-center overflow-hidden rounded-[16px] border border-border bg-background px-4 py-8 text-center sm:min-h-[530px] sm:rounded-[20px] sm:px-8 sm:py-12 md:min-h-[420px] md:px-8 md:py-10 lg:min-h-[460px] lg:px-8 lg:py-12 xl:min-h-[530px] xl:px-10 xl:py-16">
        <h1 className="w-full max-w-[1390px] text-[clamp(1.6rem,6.2vw,70px)] leading-[1.2] font-normal text-black uppercase sm:text-[clamp(1.75rem,calc(5.6vw-8px),70px)] lg:text-[56px] lg:leading-[1.3] xl:text-[70px] xl:leading-[1.5]">
          <span className="block font-light tracking-tight">
            We help businesses win on
          </span>
          <span className="mt-1 block text-[0.90em] tracking-tight font-extrabold text-primary">
            Google, Ads, AI search &amp; <br className="hidden sm:block lg:block xl:hidden" /> social media
          </span>
        </h1>
        <p className="mt-3 max-w-[1185px] lg:px-32 xl:px-10 text-sm leading-6 font-semibold text-body sm:mt-5 sm:text-lg sm:leading-7 md:mt-4 md:text-base md:leading-7 lg:text-xl lg:leading-8 xl:text-2xl xl:leading-9">
          We combine data, creativity, and AI to help brands rank higher, run
          smarter campaigns, and turn traffic into measurable growth.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row md:mt-6 lg:mt-8 xl:mt-10">
          <Link
            href="/contact"
            className={cn(
              buttonVariants(),
              "h-11 rounded-full px-6 font-mono text-sm font-semibold sm:h-14 sm:px-7 sm:text-base md:h-11 md:px-5 md:text-sm lg:h-12 lg:px-5 lg:text-sm xl:h-16 xl:px-8 xl:text-lg",
            )}
          >
            Get a free Audit
          </Link>
          <Link
            href="/services"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "hidden h-14 rounded-full border-primary bg-transparent px-7 font-mono text-base font-semibold text-primary hover:bg-surface-tint hover:text-primary sm:inline-flex md:h-11 md:px-5 md:text-sm lg:h-12 lg:px-5 lg:text-sm xl:h-16 xl:px-8 xl:text-lg",
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
      className="mx-auto max-w-[1392px] overflow-hidden px-4 py-12 sm:px-6 sm:py-20 lg:pt-24 xl:pt-28"
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

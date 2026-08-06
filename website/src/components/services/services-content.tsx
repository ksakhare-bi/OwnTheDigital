import Image from "next/image";

import { FinalCtaSection } from "@/components/home/final-cta";
import { ServicesSection } from "@/components/home/hero-services";
import { FaqSection } from "@/components/home/testimonials-faq";
import { WorkSection } from "@/components/home/work-section";

function PracticeAreaSection() {
  return (
    <section className="mx-auto max-w-[1392px] px-4 pt-24 sm:px-6 xl:px-0">
      <h1 className="text-center text-5xl leading-none font-bold tracking-tight text-primary uppercase lg:text-[78px]">
        Services
      </h1>

      <div className="mt-14 grid items-center gap-8 rounded-[20px] border border-border bg-background p-6 sm:p-8 lg:grid-cols-[1.25fr_1fr] xl:grid-cols-[1fr_546px] xl:gap-12 xl:p-10">
        <div>
          <h2 className="text-5xl leading-[0.95] font-bold tracking-tight text-primary uppercase sm:text-6xl xl:text-[72px]">
            <span className="block">5</span>
            Practice Area
          </h2>
          <p className="mt-6 max-w-[690px] text-lg leading-[1.5] text-body xl:text-xl">
            We offer a comprehensive range of digital marketing, web
            development, and AI-powered solutions designed to help businesses
            increase visibility, generate qualified leads, and achieve
            sustainable growth. Every service is tailored to your goals and
            backed by data-driven strategies.
          </p>
        </div>

        <div className="relative aspect-[546/310] overflow-hidden rounded-[14px]">
          <Image
            src="/images/home/about-company.png"
            alt="A marketing team collaborating around a table"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 546px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export function ServicesContent() {
  return (
    <main>
      <PracticeAreaSection />
      <div className="pt-16">
        <ServicesSection />
      </div>
      <WorkSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}

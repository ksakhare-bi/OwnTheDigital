import Image from "next/image";

import { FinalCtaSection } from "@/components/home/final-cta";
import { ServicesSection } from "@/components/home/our-services";
import { FaqSection } from "@/components/home/faq";
import { WorkSection } from "@/components/home/our-work";

function PracticeAreaSection() {
  return (
    <section className="mx-auto max-w-[1392px] px-4 pt-12 sm:px-6 sm:pt-24">
      <h1 className="text-center text-3xl leading-none font-extrabold tracking-tight text-primary uppercase sm:text-5xl lg:text-[78px]">
        Services
      </h1>

      <div className="mt-8 grid items-center gap-6 rounded-[20px] sm:border border-border bg-background p-5 sm:mt-14 sm:gap-8 sm:p-8 lg:grid-cols-[1.25fr_1fr] xl:grid-cols-[1fr_546px] xl:gap-12 xl:p-10">
        <div>
          <h2 className="text-2xl leading-[0.95] font-extrabold tracking-tight text-primary uppercase sm:text-4xl lg:text-5xl xl:text-[70px]">
            <span className="block sm:hidden">5 Practice Area</span>
            <span className="hidden sm:block">5</span>
            <span className="hidden sm:block">Practice Area</span>
          </h2>
          <p className="mt-4 sm:mt-4 max-w-[690px] text-base leading-[1.6] text-body sm:mt-6 sm:text-lg xl:text-xl">
            We offer a comprehensive range of digital marketing, web
            development, and AI-powered solutions designed to help businesses
            increase visibility, generate qualified leads, and achieve
            sustainable growth. Every service is tailored to your goals and
            backed by data-driven strategies.
          </p>
        </div>

        <div className="hidden aspect-[16/10] overflow-hidden rounded-[14px] sm:relative sm:block sm:aspect-[546/310]">
          <Image
            src="/images/home/about-company.png"
            alt="A marketing team collaborating around a table"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 546px"
            className="object-cover object-center"
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
      <div className="mb-6 sm:mb-14 md:mb-16 lg:mb-[74px] xl:mb-[94px] pt-8 sm:pt-16 lg:pt-24">
        <ServicesSection hideTitle={true} />
      </div>
      <WorkSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}

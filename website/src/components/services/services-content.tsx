import Image from "next/image";

import { FinalCtaSection } from "@/components/home/final-cta";
import { ServicesSection } from "@/components/home/our-services";
import { FaqSection } from "@/components/home/faq";
import { WorkSection } from "@/components/home/our-work";
import { homeServices } from "@/content/home";

function PracticeAreaSection() {
  return (
    <section className="mx-auto max-w-[1392px] px-2 pt-0 sm:px-6 sm:pt-4 ">
     <div className="mt-4 grid items-center gap-6 rounded-[20px] sm:border border-border bg-background p-5 sm:mt-4 sm:gap-8 sm:p-6 lg:grid-cols-[1.25fr_1fr] xl:grid-cols-[1fr_546px] xl:gap-10 xl:p-8 lg:py-6 xl:py-12">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3 mb-6 sm:mb-10">
            {homeServices.map((service, idx) => (
              <div 
                key={service.title} 
                className="group flex items-center gap-3 sm:gap-3 p-3 sm:p-4 rounded-2xl bg-background border border-border shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-primary/40 transition-all duration-300 cursor-pointer"
              >
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-primary/5 text-primary font-mono text-sm sm:text-base font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  0{idx + 1}
                </div>
                <span className="text-base sm:text-lg font-semibold uppercase tracking-tight text-foreground/90 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {service.title}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 sm:mt-4 max-w-[690px] text-base leading-[1.6] text-body sm:mt-6 sm:text-lg">
            We offer a comprehensive range of digital marketing, web
            development, and AI-powered solutions designed to help businesses
            increase visibility, generate qualified leads, and achieve
            sustainable growth. Every service is tailored to your goals and
            backed by data-driven strategies.
          </p>
        </div>

        <div className="hidden aspect-[16/10] overflow-hidden rounded-[14px] sm:relative sm:block sm:aspect-[370/310]">
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
      <div className="-mb-4 sm:mb-0 lg:-mb-4 xl:-mb-6 pt-9 sm:pt-16 md:mt-10 lg:mt-14 xl:mt-16">
        <ServicesSection hideTitle={true} />
      </div>
      <WorkSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}

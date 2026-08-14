import { SectionTitle } from "@/components/home/section-title";
import { processSteps } from "@/content/home";

export function ProcessSection() {
  return (
    <section className="mx-auto max-w-[1392px] px-4 pt-24 sm:px-6 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-36">
      <SectionTitle lead="How" accent="We Work" />
      <div className="relative mt-8 grid grid-cols-2 gap-x-3 gap-y-6 sm:mt-8 sm:gap-8 md:mt-10 md:grid-cols-4 md:gap-0 lg:mt-12 lg:grid-cols-4 lg:gap-0 xl:mt-16">
        <div
          aria-hidden="true"
          className="absolute right-[12.5%] left-[12.5%] hidden h-px bg-primary md:block md:top-[30px] lg:top-[40px] xl:top-[50px]"
        />
        {processSteps.map((step) => (
          <article
            key={step.number}
            className="relative flex flex-col items-center px-1 text-center sm:px-3 md:px-2"
          >
            <div className="relative z-10 flex size-12 items-center justify-center rounded-full border border-border bg-surface-pale font-mono text-base tracking-wide text-primary md:size-[60px] md:text-2xl lg:size-[80px] lg:text-3xl xl:size-[100px] xl:text-[40px]">
              {step.number}
            </div>
            <h3 className="mt-2 text-sm font-extrabold tracking-wide text-navy md:mt-3 md:text-base lg:mt-5 lg:text-3xl xl:text-[40px]">
              {step.title}
            </h3>
            <p className="mt-1.5 max-w-[292px] text-[10px] leading-[1.4] tracking-wide text-body md:mt-2 md:text-xs lg:mt-5 lg:text-base">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

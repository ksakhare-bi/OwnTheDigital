import { SectionTitle } from "@/components/home/section-title";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { advantages, processSteps } from "@/content/home";

export function WhyHireUsSection() {
  return (
    <section className="mx-auto max-w-[1392px] px-4 py-10 sm:px-6 sm:pt-24 lg:pt-24 xl:pt-32">
      <SectionTitle lead="Why" accent="Hire Us" />
      <div className="mt-8 grid gap-4 sm:mt-16 sm:gap-6 lg:grid-cols-3 lg:gap-6 xl:gap-9">
        {advantages.map((advantage) => (
          <Card
            key={advantage.number}
            className="min-h-0 rounded-[16px] border-border bg-background py-0 shadow-none lg:min-h-[420px] xl:min-h-[478px] sm:rounded-[20px]"
          >
            <CardContent className="flex h-full flex-col p-4 sm:p-10 lg:px-[24px] lg:py-[32px] xl:px-[31px] xl:py-[45px]">
              <p className="font-mono text-xl tracking-[0.03em] text-body sm:text-3xl lg:text-2xl xl:text-3xl">
                {advantage.number}
              </p>
              <div className="mt-6 sm:mt-20 lg:mt-12 xl:mt-20">
                <h3 className="max-w-64 text-[28px] leading-none font-bold tracking-[0.03em] text-navy sm:text-5xl lg:text-4xl xl:text-5xl">
                  {advantage.title}
                </h3>
                <p className="mt-3 text-sm leading-5 tracking-wide text-body sm:mt-6 sm:text-base sm:leading-6">
                  {advantage.description}
                </p>
              </div>
              <Badge className="mt-4 h-auto w-fit max-w-full rounded-full border border-border bg-surface-tint px-3 py-2 text-left text-xs leading-4 font-bold whitespace-normal text-success uppercase hover:bg-surface-tint sm:mt-auto sm:px-4 sm:py-3 sm:text-sm sm:leading-5 md:whitespace-nowrap lg:text-xs xl:text-sm">
                {advantage.result}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="mx-auto max-w-[1392px] px-4 py-12 sm:px-6 sm:py-24 lg:py-24 xl:py-32">
      <SectionTitle lead="How" accent="We Work" />
      <div className="relative mt-8 grid grid-cols-2 gap-x-3 gap-y-8 sm:mt-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        <div
          aria-hidden="true"
          className="absolute right-[12.5%] left-[12.5%] hidden h-px bg-primary lg:block lg:top-[40px] xl:top-[50px]"
        />
        {processSteps.map((step) => (
          <article
            key={step.number}
            className="relative flex flex-col items-center px-1 text-center sm:px-5"
          >
            <div className="relative z-10 flex size-14 items-center justify-center rounded-full border border-border bg-surface-pale font-mono text-lg tracking-wide text-primary sm:size-[100px] sm:text-[40px] lg:size-[80px] lg:text-3xl xl:size-[100px] xl:text-[40px]">
              {step.number}
            </div>
            <h3 className="mt-3 text-base font-extrabold tracking-wide text-navy sm:mt-5 sm:text-2xl lg:text-3xl xl:text-[40px]">
              {step.title}
            </h3>
            <p className="mt-2 max-w-[292px] text-xs leading-[1.4] tracking-wide text-body sm:mt-5 sm:text-base">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

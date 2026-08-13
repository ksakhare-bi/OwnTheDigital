import { SectionTitle } from "@/components/home/section-title";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { advantages, processSteps } from "@/content/home";

export function WhyHireUsSection() {
  return (
    <section className="mx-auto max-w-[1392px] px-4 py-8 sm:px-6 sm:pt-16 md:pt-12 lg:pt-24 xl:pt-32">
      <SectionTitle lead="Why" accent="Hire Us" />
      <div className="mt-6 grid gap-3 sm:mt-10 sm:gap-5 md:mt-8 md:grid-cols-3 md:gap-4 lg:grid-cols-3 lg:gap-6 xl:gap-9">
        {advantages.map((advantage) => (
          <Card
            key={advantage.number}
            className="min-h-0 rounded-[16px] border-border bg-background py-0 shadow-none sm:rounded-[20px] md:min-h-[330px] lg:min-h-[420px] xl:min-h-[498px]"
          >
            <CardContent className="flex h-full flex-col p-4 md:p-5 lg:px-[24px] lg:py-[32px] xl:px-[31px] xl:py-[45px]">
              <p className="font-mono text-lg tracking-[0.03em] text-body md:text-xl lg:text-2xl xl:text-3xl">
                {advantage.number}
              </p>
              <div className="mt-4 md:mt-8 lg:mt-12 xl:mt-20">
                <h3 className="max-w-64 text-2xl leading-tight font-bold tracking-[0.03em] text-navy md:text-3xl lg:text-4xl xl:text-5xl">
                  {advantage.title}
                </h3>
                <p className="mt-2 text-xs leading-5 tracking-wide text-body md:mt-3 md:text-sm md:leading-5 lg:mt-6 lg:text-base lg:leading-6">
                  {advantage.description}
                </p>
              </div>
              <Badge className="mt-4 h-auto w-fit max-w-full rounded-full border border-border bg-surface-tint px-3 py-1.5 text-left text-xs leading-4 font-bold whitespace-normal text-success uppercase hover:bg-surface-tint md:mt-auto lg:text-xs xl:px-4 xl:py-3 xl:text-sm xl:leading-5">
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
    <section className="mx-auto max-w-[1392px] px-4 py-10 sm:px-6 sm:py-16 md:py-12 lg:py-24 xl:py-32">
      <SectionTitle lead="How" accent="We Work" />
      <div className="relative mt-6 grid grid-cols-2 gap-x-3 gap-y-6 sm:mt-8 sm:gap-8 md:grid-cols-4 md:gap-0 lg:grid-cols-4 lg:gap-0">
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

import { SectionTitle } from "@/components/home/section-title";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { advantages, processSteps } from "@/content/home";

export function WhyHireUsSection() {
  return (
    <section className="mx-auto max-w-[1392px] px-4 py-24 sm:px-6 lg:py-32">
      <SectionTitle lead="Why" accent="Hire Us" />
      <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-9">
        {advantages.map((advantage) => (
          <Card
            key={advantage.number}
            className="min-h-[478px] rounded-[20px] border-border bg-background py-0 shadow-none"
          >
            <CardContent className="flex h-full flex-col p-8 sm:p-10 lg:px-[31px] lg:py-[45px]">
              <p className="font-mono text-3xl tracking-[0.03em] text-body">
                {advantage.number}
              </p>
              <div className="mt-20">
                <h3 className="max-w-64 text-5xl leading-none font-bold tracking-[0.03em] text-navy">
                  {advantage.title}
                </h3>
                <p className="mt-6 text-base leading-6 tracking-wide text-body">
                  {advantage.description}
                </p>
              </div>
              <Badge className="mt-auto h-auto w-fit max-w-full rounded-full border border-border bg-surface-tint px-4 py-3 text-left text-sm leading-5 font-bold whitespace-normal text-success uppercase hover:bg-surface-tint">
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
    <section className="mx-auto max-w-[1392px] px-4 py-24 sm:px-6 lg:py-32">
      <SectionTitle lead="How" accent="We Work" />
      <div className="relative mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        <div
          aria-hidden="true"
          className="absolute top-[50px] right-[12.5%] left-[12.5%] hidden h-px bg-primary lg:block"
        />
        {processSteps.map((step) => (
          <article
            key={step.number}
            className="relative flex flex-col items-center px-5 text-center"
          >
            <div className="relative z-10 flex size-[100px] items-center justify-center rounded-full border border-border bg-surface-pale font-mono text-[40px] tracking-wide text-primary">
              {step.number}
            </div>
            <h3 className="mt-5 text-3xl font-extrabold tracking-wide text-navy lg:text-[40px]">
              {step.title}
            </h3>
            <p className="mt-5 max-w-[292px] text-base leading-[1.4] tracking-wide text-body">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

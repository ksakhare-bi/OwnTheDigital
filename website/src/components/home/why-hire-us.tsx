import { SectionTitle } from "@/components/home/section-title";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { advantages } from "@/content/home";

export function WhyHireUsSection() {
  return (
    <section className="mx-auto max-w-[1392px] px-4 pt-10 sm:px-6 sm:pt-20 md:pt-24 lg:pt-32 xl:pt-36">
      <SectionTitle lead="Why" accent="Hire Us" />
      <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-5 md:mt-10 md:grid-cols-3 md:gap-4 lg:mt-12 lg:grid-cols-3 lg:gap-6 xl:mt-16 xl:gap-9">
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

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { SectionTitle } from "@/components/home/section-title";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { testimonials } from "@/content/home";

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-[1392px] px-4 py-8 sm:px-6 sm:pt-16 md:pt-12 lg:pt-24 xl:pt-40">
      <SectionTitle lead="Hear From" accent="Our Clients" />
      <div className="mt-6 grid gap-4 sm:mt-10 sm:gap-4 md:mt-8 md:grid-cols-3 md:gap-3 lg:grid-cols-3 lg:mt-10 xl:mt-14">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.name}
            className="h-full overflow-hidden rounded-2xl border-border bg-background py-0 shadow-none"
          >
            <CardContent className="flex flex-1 min-h-0 flex-col gap-3 p-4 md:gap-4 md:p-5 lg:p-6 lg:min-h-[230px] xl:min-h-[280px] xl:p-10">
              <h3 className="text-base leading-6 font-bold text-navy uppercase md:text-lg md:leading-7 lg:text-xl lg:leading-8 xl:text-2xl xl:leading-9">
                {testimonial.title}
              </h3>
              <p className="text-xs leading-5 text-body md:text-sm md:leading-6 lg:text-base lg:leading-6 xl:text-lg xl:leading-7">
                {testimonial.quote}
              </p>
            </CardContent>
            <CardFooter className="flex bg-primary px-4 py-4 text-white md:px-5 md:py-4 lg:px-6 lg:py-5 xl:px-10 xl:py-7">
              <div className="flex min-w-0 flex-1 items-center gap-2 md:gap-3">
                <div className="relative size-10 shrink-0 overflow-hidden rounded-full md:size-11 lg:size-[50px] xl:size-[60px]">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="60px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium md:text-base lg:text-lg xl:text-xl">
                    {testimonial.name}
                  </p>
                  <p className="truncate text-xs text-border md:text-sm lg:text-base xl:text-lg">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-surface-tint text-primary md:size-9 lg:size-11 xl:size-12">
                <ArrowUpRight className="size-3.5 md:size-4" />
              </span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

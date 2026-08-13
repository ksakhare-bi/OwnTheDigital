"use client";

import type { FormEvent } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { SectionTitle } from "@/components/home/section-title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { faqs, testimonials } from "@/content/home";

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-[1392px] px-4 pt-16 pb-10 sm:px-6 sm:pt-24 md:pt-16 md:pb-8 lg:pt-28 xl:pt-40">
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

function QuestionForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <Card className="rounded-[14px] border-border bg-background py-0 shadow-[10px_10px_50px_var(--otd-glow)]">
      <CardContent className="p-4 md:p-5 lg:p-[24px_36px] xl:p-[30px_60px]">
        <h3 className="border-b border-border pb-4 text-lg font-medium text-navy uppercase md:text-xl lg:pb-5 lg:text-xl xl:pb-7 xl:text-2xl">
          Ask your question
        </h3>
        <form onSubmit={handleSubmit} className="mt-4 space-y-3 md:space-y-4">
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-navy uppercase md:text-base">
              Name
            </span>
            <Input
              name="name"
              placeholder="Enter your name"
              className="h-10 rounded-[10px] border-border bg-surface-soft px-3 text-sm md:h-12 md:px-4 md:text-base lg:h-14 lg:px-4 xl:h-[72px] xl:px-6 xl:text-lg"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-navy uppercase md:text-base">
              Email
            </span>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="h-10 rounded-[10px] border-border bg-surface-soft px-3 text-sm md:h-12 md:px-4 md:text-base lg:h-14 lg:px-4 xl:h-[72px] xl:px-6 xl:text-lg"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-navy uppercase md:text-base">
              Your Question
            </span>
            <Textarea
              name="question"
              placeholder="Enter your question here..."
              className="min-h-24 resize-none rounded-[10px] border-border bg-surface-soft p-3 text-sm md:min-h-28 md:p-4 md:text-base lg:min-h-32 xl:min-h-40 xl:p-6 xl:text-lg"
            />
          </label>
          <Button
            type="submit"
            className="h-10 w-full rounded-full font-mono text-sm font-normal md:h-12 lg:h-12 xl:h-16 xl:text-lg"
          >
            Send Your Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export function FaqSection() {
  return (
    <section className="mx-auto max-w-[1392px] px-4 pt-10 pb-12 sm:px-6 sm:pt-14 md:pt-10 md:pb-10 lg:pt-16 lg:pb-24 xl:pt-20 xl:pb-32">
      <SectionTitle
        lead="Frequently Asked"
        accent="Questions"
        className="sm:tracking-tight"
      />
      <div className="mt-6 grid gap-4 sm:mt-10 sm:gap-5 md:mt-8 lg:grid-cols-[0.95fr_1.05fr]">
        <Accordion defaultValue={["faq-0"]} className="gap-2.5">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${index}`}
              className="rounded-2xl border border-border bg-background px-4 md:px-8 lg:px-[40px] xl:px-[60px]"
            >
              <AccordionTrigger className="min-h-0 py-4 text-sm font-medium text-navy no-underline hover:no-underline md:min-h-[70px] md:text-base lg:min-h-[90px] lg:text-lg xl:min-h-[110px] xl:text-[22px]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="border-t border-border pt-3 pb-4 text-xs leading-5 text-body md:pt-4 md:pb-5 md:text-sm md:leading-6 lg:text-base lg:leading-6 xl:text-lg xl:leading-7">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <QuestionForm />
      </div>
    </section>
  );
}

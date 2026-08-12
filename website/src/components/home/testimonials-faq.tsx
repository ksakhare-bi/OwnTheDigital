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
    <section className="mx-auto max-w-[1392px] px-4 pt-24 pb-12 sm:px-6 sm:pt-36 sm:pb-24 lg:pt-28 xl:pt-40">
      <SectionTitle lead="Hear From" accent="Our Clients" />
      <div className="mt-8 grid gap-4 sm:mt-14 sm:gap-5 lg:grid-cols-3 lg:mt-10 xl:mt-14">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.name}
            className="h-full overflow-hidden rounded-2xl border-border bg-background py-0 shadow-none"
          >
            <CardContent className="flex flex-1 min-h-0 flex-col gap-4 p-5 sm:gap-6 sm:p-10 lg:p-6 lg:min-h-[230px] xl:min-h-[280px] xl:p-10">
              <h3 className="text-lg leading-7 font-bold text-navy uppercase sm:text-2xl sm:leading-9 lg:text-xl lg:leading-8 xl:text-2xl xl:leading-9">
                {testimonial.title}
              </h3>
              <p className="text-sm leading-6 text-body sm:text-lg sm:leading-7 lg:text-base lg:leading-6 xl:text-lg xl:leading-7">
                {testimonial.quote}
              </p>
            </CardContent>
            <CardFooter className="flex bg-primary px-5 py-5 text-white sm:px-10 sm:py-7 lg:px-6 lg:py-5 xl:px-10 xl:py-7">
              <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
                <div className="relative size-12 shrink-0 overflow-hidden rounded-full sm:size-[60px] lg:size-[50px] xl:size-[60px]">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="60px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-base font-medium sm:text-xl lg:text-lg xl:text-xl">
                    {testimonial.name}
                  </p>
                  <p className="truncate text-sm text-border sm:text-lg lg:text-base xl:text-lg">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface-tint text-primary sm:size-12 lg:size-11 xl:size-12">
                <ArrowUpRight className="size-4 sm:size-5" />
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
      <CardContent className="p-5 sm:p-8 lg:p-[24px_36px] xl:p-[30px_60px]">
        <h3 className="border-b border-border pb-5 text-xl font-medium text-navy uppercase sm:pb-7 sm:text-2xl lg:text-xl lg:pb-5 xl:pb-7 xl:text-2xl">
          Ask your question
        </h3>
        <form onSubmit={handleSubmit} className="mt-5 space-y-4 sm:mt-7 sm:space-y-5">
          <label className="block">
            <span className="mb-2 block text-base font-medium text-navy uppercase sm:text-lg lg:text-base xl:text-lg">
              Name
            </span>
            <Input
              name="name"
              placeholder="Enter your name"
              className="h-12 rounded-[10px] border-border bg-surface-soft px-4 text-base sm:h-[72px] sm:px-6 sm:text-lg lg:h-14 lg:px-4 lg:text-base xl:h-[72px] xl:px-6 xl:text-lg"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-base font-medium text-navy uppercase sm:text-lg lg:text-base xl:text-lg">
              Email
            </span>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="h-12 rounded-[10px] border-border bg-surface-soft px-4 text-base sm:h-[72px] sm:px-6 sm:text-lg lg:h-14 lg:px-4 lg:text-base xl:h-[72px] xl:px-6 xl:text-lg"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-base font-medium text-navy uppercase sm:text-lg lg:text-base xl:text-lg">
              Your Question
            </span>
            <Textarea
              name="question"
              placeholder="Enter your question here..."
              className="min-h-28 resize-none rounded-[10px] border-border bg-surface-soft p-4 text-base sm:min-h-40 sm:p-6 sm:text-lg lg:min-h-32 lg:p-4 lg:text-base xl:min-h-40 xl:p-6 xl:text-lg"
            />
          </label>
          <Button
            type="submit"
            className="h-12 w-full rounded-full font-mono text-base font-normal sm:h-16 sm:text-lg lg:h-12 lg:text-sm xl:h-16 xl:text-lg"
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
    <section className="mx-auto max-w-[1392px] px-4 pt-12 pb-14 sm:px-6 sm:pt-16 sm:pb-24 lg:pt-16 lg:pb-24 xl:pt-20 xl:pb-32">
      <SectionTitle
        lead="Frequently Asked"
        accent="Questions"
        className="sm:tracking-tight"
      />
      <div className="mt-8 grid gap-4 sm:mt-14 sm:gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <Accordion defaultValue={["faq-0"]} className="gap-2.5">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${index}`}
              className="rounded-2xl border border-border bg-background px-4 sm:px-[60px] lg:px-[40px] xl:px-[60px]"
            >
              <AccordionTrigger className="min-h-0 py-4 text-base font-medium text-navy no-underline hover:no-underline sm:min-h-[110px] sm:py-6 sm:text-[22px] lg:min-h-[90px] lg:text-lg xl:min-h-[110px] xl:text-[22px]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="border-t border-border pt-4 pb-5 text-sm leading-6 text-body sm:pt-7 sm:pb-8 sm:text-lg sm:leading-7 lg:text-base lg:leading-6 xl:text-lg xl:leading-7">
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

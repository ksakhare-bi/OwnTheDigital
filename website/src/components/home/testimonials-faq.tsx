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
    <section className="mx-auto max-w-[1392px] px-4 py-24 sm:px-6 lg:py-32">
      <SectionTitle lead="Hear From" accent="Our Clients" />
      <div className="mt-16 grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.name}
            className="overflow-hidden rounded-2xl border-border bg-background py-0 shadow-none"
          >
            <CardContent className="flex min-h-[280px] flex-col gap-6 p-8 sm:p-10">
              <h3 className="text-2xl leading-9 font-bold text-navy uppercase">
                {testimonial.title}
              </h3>
              <p className="text-lg leading-7 text-body">{testimonial.quote}</p>
            </CardContent>
            <CardFooter className="flex bg-primary px-8 py-7 text-white sm:px-10">
              <div className="flex min-w-0 flex-1 items-center gap-4">
                <div className="relative size-[60px] shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="60px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-xl font-medium">
                    {testimonial.name}
                  </p>
                  <p className="truncate text-lg text-border">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-border bg-surface-tint text-primary">
                <ArrowUpRight className="size-5" />
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
      <CardContent className="p-6 sm:p-8 lg:p-[30px_60px]">
        <h3 className="border-b border-border pb-7 text-2xl font-medium text-navy uppercase">
          Ask your question
        </h3>
        <form onSubmit={handleSubmit} className="mt-7 space-y-5">
          <label className="block">
            <span className="mb-2 block text-lg font-medium text-navy uppercase">
              Name
            </span>
            <Input
              name="name"
              placeholder="Enter your name"
              className="h-[72px] rounded-[10px] border-border bg-surface-soft px-6 text-lg"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-lg font-medium text-navy uppercase">
              Email
            </span>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="h-[72px] rounded-[10px] border-border bg-surface-soft px-6 text-lg"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-lg font-medium text-navy uppercase">
              Your Question
            </span>
            <Textarea
              name="question"
              placeholder="Enter your question here..."
              className="min-h-40 resize-none rounded-[10px] border-border bg-surface-soft p-6 text-lg"
            />
          </label>
          <Button
            type="submit"
            className="h-16 w-full rounded-full font-mono text-lg font-normal"
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
    <section className="mx-auto max-w-[1392px] px-4 py-24 sm:px-6 lg:py-32">
      <SectionTitle lead="Frequently Asked" accent="Questions" className="sm:tracking-tight"/>
      <div className="mt-14 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <Accordion defaultValue={["faq-0"]} className="gap-2.5">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${index}`}
              className="rounded-2xl border border-border bg-background px-6 sm:px-[60px]"
            >
              <AccordionTrigger className="min-h-[110px] py-6 text-xl font-medium text-navy no-underline hover:no-underline sm:text-[22px]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="border-t border-border pt-7 pb-8 text-lg leading-7 text-body">
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

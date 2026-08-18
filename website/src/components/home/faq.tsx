"use client";

import { useState, type FormEvent } from "react";

import { SectionTitle } from "@/components/home/section-title";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { faqs } from "@/content/home";

function QuestionForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; question?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusText, setStatusText] = useState<{ type: "success" | "error" | null; text: string }>({
    type: null,
    text: "",
  });

  function validate() {
    const errs: { name?: string; email?: string; question?: string } = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.question.trim()) errs.question = "Question is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatusText({ type: null, text: "" });

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.question,
        }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit question.");
      }

      setStatusText({ type: "success", text: "Thank you! Your question has been submitted." });
      setFormData({ name: "", email: "", question: "" });
      setErrors({});
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      setStatusText({ type: "error", text: msg });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="rounded-[14px] border-border bg-background py-0 shadow-[10px_10px_50px_var(--otd-glow)]">
      <CardContent className="p-4 md:p-5 lg:p-[24px_36px] xl:p-[30px_60px]">
        <h3 className="border-b border-border pb-4 text-lg font-medium text-navy uppercase md:text-xl lg:pb-5 lg:text-xl xl:pb-7 xl:text-2xl">
          Ask your question
        </h3>

        {statusText.type === "success" && (
          <p className="mt-3 text-xs font-medium text-emerald-600 sm:text-sm">{statusText.text}</p>
        )}
        {statusText.type === "error" && (
          <p className="mt-3 text-xs font-medium text-red-600 sm:text-sm">{statusText.text}</p>
        )}

        <form onSubmit={handleSubmit} className="mt-4 space-y-3 md:space-y-4">
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-navy uppercase md:text-base">
              Name <span className="text-red-500">*</span>
            </span>
            <Input
              name="name"
              value={formData.name}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, name: e.target.value }));
                if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
              }}
              placeholder="Enter your name"
              className="h-10 rounded-[10px] border-border bg-surface-soft px-3 text-sm md:h-12 md:px-4 md:text-base lg:h-14 lg:px-4 xl:h-[72px] xl:px-6 xl:text-lg"
            />
            {errors.name && (
              <span className="mt-1 block text-xs font-medium text-red-500">{errors.name}</span>
            )}
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-navy uppercase md:text-base">
              Email <span className="text-red-500">*</span>
            </span>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, email: e.target.value }));
                if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
              }}
              placeholder="Enter your email"
              className="h-10 rounded-[10px] border-border bg-surface-soft px-3 text-sm md:h-12 md:px-4 md:text-base lg:h-14 lg:px-4 xl:h-[72px] xl:px-6 xl:text-lg"
            />
            {errors.email && (
              <span className="mt-1 block text-xs font-medium text-red-500">{errors.email}</span>
            )}
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-navy uppercase md:text-base">
              Your Question <span className="text-red-500">*</span>
            </span>
            <Textarea
              name="question"
              value={formData.question}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, question: e.target.value }));
                if (errors.question) setErrors((prev) => ({ ...prev, question: undefined }));
              }}
              placeholder="Enter your question here..."
              className="min-h-24 resize-none rounded-[10px] border-border bg-surface-soft p-3 text-sm md:min-h-28 md:p-4 md:text-base lg:min-h-32 xl:min-h-40 xl:p-6 xl:text-lg"
            />
            {errors.question && (
              <span className="mt-1 block text-xs font-medium text-red-500">{errors.question}</span>
            )}
          </label>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-10 w-full rounded-full font-mono text-sm font-normal md:h-12 lg:h-12 xl:h-16 xl:text-lg disabled:opacity-60"
          >
            {isSubmitting ? "Sending..." : "Send Your Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export function FaqSection() {
  return (
    <section className="mx-auto max-w-[1392px] px-4 pt-24 sm:px-6 sm:pt-28 md:pt-32 lg:pt-32 xl:pt-36">
      <SectionTitle
        lead="Frequently Asked"
        accent="Questions"
        className="sm:tracking-tight"
      />
      <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-5 md:mt-10 lg:mt-12 lg:grid-cols-[0.95fr_1.05fr] xl:mt-16">
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

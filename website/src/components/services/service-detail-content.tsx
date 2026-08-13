"use client";

import Link from "next/link";
import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getServiceBySlug } from "@/content/services";
import { getServiceDetailBySlug } from "@/content/sub-services";
import { projects } from "@/content/home";
import { PortfolioProjectCard } from "@/components/portfolio/portfolio-content";
import { cn } from "@/lib/utils";

export function ServiceDetailContent({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug);
  const detail = getServiceDetailBySlug(slug);

  if (!service || !detail) {
    return (
      <div className="mx-auto max-w-[1392px] px-4 py-20 text-center">
        <h1 className="text-3xl font-bold">Service Not Found</h1>
        <p className="mt-4 text-muted">The requested service details could not be found.</p>
        <Link href="/services" className={cn(buttonVariants(), "mt-6 font-mono")}>
          Back to Services
        </Link>
      </div>
    );
  }

  // Find the associated project case study if specified
  const relatedProjects = projects.filter((p) => detail.projectSlugs?.includes(p.slug));

  return (
    <main className="mx-auto w-full max-w-[1392px] px-4 pt-10 pb-4 sm:px-6 sm:pt-12">
      {/* 1. HERO SECTION */}
      <section className="rounded-[20px] border border-border bg-background p-6 sm:p-8 lg:p-14 xl:p-[74px] text-center flex flex-col items-center">
        <h1 className="font-mono text-sm font-semibold tracking-wider text-navy uppercase sm:text-base md:text-xl lg:text-2xl xl:text-5xl">
          {detail.tagline}
        </h1>
        <h2 className="mt-4 sm:mt-6 text-2xl font-extrabold text-primary sm:text-3xl md:text-4xl lg:text-5xl xl:text-[70px] tracking-tight uppercase leading-none">
          {detail.heroHeadline}
        </h2>
        <p className="mt-6 max-w-[940px] text-base leading-relaxed text-body sm:text-lg">
          {detail.heroSubheadline}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row items-center justify-center">
          <Link
            href="/contact"
            className={cn(
              buttonVariants(),
              "w-full sm:w-auto h-11 rounded-full px-5 font-mono text-xs font-semibold sm:h-12 sm:px-6 sm:text-sm lg:h-16 lg:px-8 lg:text-lg flex items-center justify-center",
            )}
          >
            Get a free Audit
          </Link>
          <Link
            href="/services"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "hidden sm:flex w-auto h-12 rounded-full px-6 font-mono text-sm font-semibold lg:h-16 lg:px-8 lg:text-lg border-primary text-primary hover:bg-surface-tint items-center justify-center",
            )}
          >
            Explore services
          </Link>
        </div>
      </section>

      {/* WHAT IS AI MARKETING? SECTION */}
      <section className="mt-12 sm:mt-24 lg:mt-32 grid gap-8 lg:grid-cols-2 items-center bg-background border border-border rounded-[20px] p-6 sm:p-8 lg:p-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-extrabold text-primary uppercase sm:text-3xl lg:text-[50px] leading-tight">
            {detail.whatIsTitle}
          </h2>
          <p className="text-sm leading-relaxed text-body sm:text-base">
            {detail.whatIsDescription}
          </p>
        </div>
        <div className="hidden sm:block relative aspect-[16/10] w-full overflow-hidden rounded-[20px] sm:aspect-[639/320]">
          <Image
            src={detail.whatIsImage}
            alt={detail.whatIsTitle}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 600px"
          />
        </div>
      </section>

      {/* 2. WHO IS IT FOR? SECTION */}
      <section className="mt-12 sm:mt-24 lg:mt-32">
        <h2 className="text-center text-[28px] leading-none font-bold tracking-[0.03em] text-navy uppercase sm:text-5xl lg:text-[60px] xl:text-[72px]">
          WHO <span className="text-primary">IS IT FOR?</span>
        </h2>
        <Card className="mt-6 sm:mt-8 overflow-hidden rounded-[20px] border-border bg-background p-5 sm:p-8 lg:p-10 xl:p-12 shadow-none">
          <CardContent className="p-0 flex flex-col gap-8 sm:gap-12">
            <div>
              <h3 className="text-sm sm:text-center font-bold text-navy uppercase sm:text-base md:text-lg mb-4 sm:mb-6">
                PERFECT FOR:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-start gap-3 sm:gap-4 max-w-4xl mx-auto w-full">
                {detail.whoIsItFor.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="h-auto rounded-full bg-surface-tint border border-border px-3.5 py-2 font-mono text-xs sm:text-sm  font-semibold text-navy uppercase justify-center text-center whitespace-normal sm:w-full"
                  >
                    • {item}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 border-t border-border pt-8 sm:pt-10 md:pt-12 max-w-[900px] mx-auto w-full">
              <div className="flex flex-col pl-4 sm:pl-0 items-start md:items-center">
                <div className="w-fit text-left">
                  <h3 className="text-sm font-bold text-navy uppercase sm:text-base md:text-lg mb-4 sm:mb-6">
                    COMMON CHALLENGES:
                  </h3>
                  <ul className="space-y-3.5 text-left">
                    {detail.commonChallenges.map((challenge) => (
                      <li key={challenge} className="flex items-start gap-2.5 text-[11px] sm:text-xs md:text-sm font-medium text-navy uppercase">
                        <span className="size-1.5 mt-1.5 shrink-0 rounded-full bg-navy" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-col pl-4 sm:pl-0 items-start md:items-center">
                <div className="w-fit text-left">
                  <h3 className="text-sm font-bold text-navy uppercase sm:text-base md:text-lg mb-4 sm:mb-6">
                    BENEFITS:
                  </h3>
                  <ul className="space-y-3.5 text-left">
                    {detail.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2.5 text-[11px] sm:text-xs md:text-sm font-medium text-navy uppercase">
                        <span className="size-1.5 mt-1.5 shrink-0 rounded-full bg-navy" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 3. HOW WE WORK SECTION */}
      <section className="mt-12 sm:mt-24 lg:mt-32">
        <h2 className="text-center text-[28px] leading-none font-bold tracking-[0.03em] text-navy uppercase sm:text-5xl lg:text-[60px] xl:text-[72px]">
          HOW <span className="text-primary">WE WORK</span>
        </h2>
        <div className="relative mt-6 grid grid-cols-2 gap-x-3 gap-y-6 sm:mt-12 sm:gap-8 md:grid-cols-4 md:gap-0 lg:grid-cols-4 lg:gap-0">
          {/* horizontal connection line visible on desktop */}
          <div
            aria-hidden="true"
            className="absolute right-[12.5%] left-[12.5%] hidden h-px bg-primary md:block md:top-[30px] lg:top-[40px] xl:top-[50px] z-0"
          />
          {detail.howWeWork.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center px-1 text-center sm:px-3 md:px-2 z-10"
            >
              <div className="relative z-10 flex size-12 items-center justify-center rounded-full border border-border bg-surface-pale font-mono text-base tracking-wide text-primary md:size-[60px] md:text-2xl lg:size-[80px] lg:text-3xl xl:size-[100px] xl:text-[40px]">
                {step.number}
              </div>
              <h3 className="mt-2 text-sm font-bold tracking-wide text-navy md:mt-3 md:text-base lg:mt-5 lg:text-2xl xl:text-[32px] uppercase">
                {step.title}
              </h3>
              <p className="mt-1.5 max-w-[292px] text-xs sm:text-sm leading-[1.4] tracking-wide text-body md:mt-2 md:text-sm lg:mt-5 lg:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHAT'S INCLUDED SECTION */}
      <section className="mt-12 sm:mt-24 lg:mt-32">
        <h2 className="text-center text-[28px] leading-none font-bold tracking-[0.03em] text-navy uppercase sm:text-5xl lg:text-[60px] xl:text-[72px]">
          WHAT&apos;S <span className="text-primary">INCLUDED</span>
        </h2>
        <div className={cn(
          "mt-6 sm:mt-8 grid gap-4 sm:gap-6",
          detail.whatsIncluded.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
        )}>
          {detail.whatsIncluded.map((group) => (
            <Card
              key={group.title}
              className="rounded-[20px] border border-border bg-background p-4 sm:p-5 lg:p-6 xl:p-8 shadow-none"
            >
              <CardContent className="p-0 flex flex-col gap-4 sm:gap-5">
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-navy uppercase border-b border-border pb-3 w-full">
                  {group.title}
                </h3>
                <ul className="space-y-3.5 text-left">
                  {group.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-xs sm:text-sm md:text-base text-navy uppercase"
                    >
                      <span className="size-1.5 mt-1.5 shrink-0 rounded-full bg-gray-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12 sm:mt-24 lg:mt-32">
        <h2 className="text-center text-[28px] leading-none font-bold tracking-[0.03em] text-navy uppercase sm:text-5xl lg:text-[60px] xl:text-[72px]">
          TOOLS AND <span className="text-primary">PLATFORMS</span>
        </h2>
        <Card className="mt-6 sm:mt-8 overflow-hidden rounded-[20px] border-border bg-background p-5 sm:p-8 lg:p-10 xl:p-12 shadow-none">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-start gap-3 sm:gap-6 w-full sm:max-w-4xl mx-auto">
              {detail.tools.map((tool) => (
                <Badge
                  key={tool}
                  variant="secondary"
                  className="h-auto rounded-full bg-surface-tint border border-border px-3.5 py-2 font-mono text-xs sm:text-sm md:text-base font-semibold text-navy uppercase justify-center text-center whitespace-normal sm:w-full"
                >
                  • {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 6. OUR WORK SECTION */}
      {relatedProjects.length > 0 && (
        <section className="mt-12 sm:mt-24 lg:mt-32 space-y-6 sm:space-y-8">
          <h2 className="text-center text-[28px] leading-none font-bold tracking-[0.03em] text-navy uppercase sm:text-5xl lg:text-[60px]">
            OUR <span className="text-primary">WORK</span>
          </h2>
          <div className="space-y-8 sm:space-y-12">
            {relatedProjects.map((project) => (
              <PortfolioProjectCard
                key={project.slug}
                project={{
                  ...project,
                  layout: project.slug === "glowskinn" ? "art-first" : "summary-first",
                  summaryBaseImage: undefined,
                }}
              />
            ))}
          </div>
        </section>
      )}

      {/* 7. FREQUENTLY ASKED QUESTIONS SECTION */}
      <section className="mt-12 sm:mt-24 lg:mt-32">
        <h2 className="text-center text-[28px] leading-none font-bold tracking-[0.03em] text-navy uppercase sm:text-5xl lg:text-[60px] xl:text-[72px]">
          FREQUENTLY ASKED <span className="text-primary">QUESTIONS</span>
        </h2>
        <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-6 lg:grid-cols-2 items-start">
          <Accordion defaultValue={["faq-0"]} className="flex flex-col gap-3">
            {detail.faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="rounded-2xl border border-border bg-background px-4 sm:px-6"
              >
                <AccordionTrigger className="min-h-0 py-3 sm:py-4 text-sm sm:text-base font-bold text-navy no-underline hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="border-t border-border pt-3 pb-4 text-[11px] leading-relaxed text-body sm:pt-4 sm:pb-5 sm:text-xs md:text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Card className="rounded-[20px] border-border bg-background p-5 sm:p-6 shadow-none">
            <CardContent className="p-0 flex flex-col gap-4">
              <h3 className="text-base font-bold text-navy uppercase font-mono border-b border-border pb-3">
                ASK YOUR QUESTION
              </h3>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label className="block text-[10px] sm:text-xs font-semibold text-navy uppercase mb-1">NAME</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full h-11 px-4 rounded-[10px] border border-border bg-surface-soft text-xs sm:text-sm outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] sm:text-xs font-semibold text-navy uppercase mb-1">EMAIL</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-11 px-4 rounded-[10px] border border-border bg-surface-soft text-xs sm:text-sm outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] sm:text-xs font-semibold text-navy uppercase mb-1">YOUR QUESTION</label>
                  <textarea
                    placeholder="Enter your question here..."
                    rows={4}
                    className="w-full p-4 rounded-[10px] border border-border bg-surface-soft text-xs sm:text-sm outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className={cn(
                    buttonVariants(),
                    "h-11 w-full rounded-full bg-primary font-mono text-xs sm:text-sm font-semibold text-white",
                  )}
                >
                  Send Your Message
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="mt-12 sm:mt-24 lg:mt-32">
        <div className="relative flex min-h-[180px] sm:min-h-[280px] lg:min-h-[320px] flex-col items-center justify-center overflow-hidden rounded-[20px] bg-primary p-6 text-center sm:p-8">
          <h2 className="font-mono text-base sm:text-xl lg:text-3xl xl:text-4xl leading-tight font-bold tracking-wide text-white uppercase md:max-w-4xl">
            {detail.finalCtaQuestion}
          </h2>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "mt-4 sm:mt-6 h-10 sm:h-12 rounded-full border-white bg-transparent px-6 sm:px-8 font-mono text-xs sm:text-sm font-bold text-white hover:bg-white/10 hover:text-white",
            )}
          >
            Get a free Audit
          </Link>
        </div>
      </section>
    </main>
  );
}

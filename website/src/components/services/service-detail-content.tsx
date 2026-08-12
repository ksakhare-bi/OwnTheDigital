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
        <Link href="/services" className={cn(buttonVariants(), "mt-6")}>
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
      <section className="rounded-[20px] border border-border bg-background p-6 sm:p-14 xl:p-[74px] text-center flex flex-col items-center">
        <h1 className="font-mono text-[18px] font-semibold tracking-wider text-navy uppercase sm:text-3xl lg:text-5xl">
          {detail.tagline}
        </h1>
        <h2 className="mt-4 sm:mt-10 text-2xl font-extrabold text-primary sm:text-5xl lg:text-[72px] tracking-tight uppercase leading-none">
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
              "w-full sm:w-auto h-12 rounded-full px-8 font-mono text-sm font-semibold sm:h-16 sm:text-lg flex items-center justify-center",
            )}
          >
            Get a free Audit
          </Link>
          <Link
            href="/services"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "hidden sm:flex w-full sm:w-auto h-12 rounded-full px-8 font-mono text-sm font-semibold sm:h-16 sm:text-lg border-primary text-primary hover:bg-surface-tint items-center justify-center",
            )}
          >
            Explore services
          </Link>
        </div>
      </section>

      {/* WHAT IS AI MARKETING? SECTION */}
      <section className="mt-12 sm:mt-24 lg:mt-32 grid gap-8 lg:grid-cols-2 items-center bg-background border border-border rounded-[20px] p-6 sm:p-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-extrabold text-primary uppercase sm:text-4xl lg:text-[50px] leading-tight">
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

      <section className="mt-12 sm:mt-24 lg:mt-32">
        <h2 className="text-center text-3xl leading-none font-bold tracking-tight text-navy uppercase sm:text-5xl lg:text-[60px]">
          WHO <span className="text-primary">IS IT FOR?</span>
        </h2>
        <Card className="mt-8 sm:mt-10 overflow-hidden rounded-[20px] border-border bg-background p-6 sm:p-12 xl:p-[60px] shadow-none">
          <CardContent className="p-0 flex flex-col gap-10 sm:gap-14">
            <div>
              <h3 className="text-base sm:text-center font-bold text-navy uppercase sm:text-xl mb-6">
                PERFECT FOR:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-start gap-3 sm:gap-5 max-w-4xl mx-auto w-full">
                {detail.whoIsItFor.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="h-auto rounded-full bg-surface-tint border border-border px-4 py-3 sm:px-6 sm:py-4 font-mono text-xs font-semibold text-navy uppercase sm:text-sm justify-center text-center whitespace-normal sm:w-full"
                  >
                    • {item}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 border-t border-border pt-10 sm:pt-14 max-w-[900px] mx-auto w-full">
              <div className="flex flex-col pl-4 sm:pl-0 items-start md:items-center">
                <div className="w-fit text-left">
                  <h3 className="text-base font-bold text-navy uppercase sm:text-xl mb-6">
                    COMMON CHALLENGES:
                  </h3>
                  <ul className="space-y-4 text-left">
                    {detail.commonChallenges.map((challenge) => (
                      <li key={challenge} className="flex items-start gap-3 text-xs font-medium text-navy uppercase sm:text-sm">
                        <span className="size-1.5 mt-1.5 shrink-0 rounded-full bg-navy" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-col pl-4 sm:pl-0 items-start md:items-center">
                <div className="w-fit text-left">
                  <h3 className="text-base font-bold text-navy uppercase sm:text-xl mb-6">
                    BENEFITS:
                  </h3>
                  <ul className="space-y-4 text-left">
                    {detail.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3 text-xs font-medium text-navy uppercase sm:text-sm">
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
        <h2 className="text-center text-3xl leading-none font-bold tracking-tight text-navy uppercase sm:text-5xl lg:text-[78px]">
          HOW <span className="text-primary">WE WORK</span>
        </h2>
        <div className="mt-10 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-6 relative">
          {/* horizontal connection line visible on desktop */}
          <div className="absolute top-[48px] left-[10%] right-[10%] h-[3px] bg-primary hidden lg:block z-0" />
          {detail.howWeWork.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center relative z-10"
            >
              <span className="font-mono text-lg tracking-[0.03em] text-primary border-[3px] border-primary rounded-full size-16 sm:size-24 flex items-center justify-center bg-white font-extrabold shadow-sm sm:text-xl">
                {step.number}
              </span>
              <h3 className="mt-4 sm:mt-6 text-sm sm:text-xl font-bold text-navy uppercase">
                {step.title}
              </h3>
              <p className="mt-2 sm:mt-4 text-[10px] leading-[1.5] text-body max-w-[170px] sm:max-w-[260px] mx-auto sm:text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHAT'S INCLUDED SECTION */}
      <section className="mt-12 sm:mt-24 lg:mt-32">
        <h2 className="text-center text-3xl leading-none font-bold tracking-tight text-navy uppercase sm:text-5xl lg:text-[78px]">
          WHAT&apos;S <span className="text-primary">INCLUDED</span>
        </h2>
        <div className={cn(
          "mt-8 sm:mt-12 grid gap-6 sm:gap-8",
          detail.whatsIncluded.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
        )}>
          {detail.whatsIncluded.map((group) => (
            <Card
              key={group.title}
              className="rounded-[20px] border border-border bg-background p-8 xl:p-10 shadow-none"
            >
              <CardContent className="p-0 flex flex-col gap-6">
                <h3 className="text-lg font-bold text-navy uppercase border-b border-border pb-4 w-full">
                  {group.title}
                </h3>
                <ul className="space-y-4 text-left">
                  {group.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-xs font-semibold text-navy uppercase sm:text-sm"
                    >
                      <span className="size-1.5 mt-1.5 shrink-0 rounded-full bg-navy" />
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
        <h2 className="text-center text-3xl leading-none font-bold tracking-tight text-navy uppercase sm:text-5xl lg:text-[78px]">
          TOOLS AND <span className="text-primary">PLATFORMS</span>
        </h2>
        <Card className="mt-6 sm:mt-10 overflow-hidden rounded-[20px] border-border bg-background p-6 sm:p-12 xl:p-[60px] shadow-none">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-start gap-3 sm:gap-5 w-full">
              {detail.tools.map((tool) => (
                <Badge
                  key={tool}
                  variant="secondary"
                  className="h-auto rounded-full bg-surface-tint border border-border px-4 py-3 sm:px-6 sm:py-4 font-mono text-xs font-semibold text-navy uppercase sm:text-sm justify-center text-center whitespace-normal"
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
        <section className="mt-12 sm:mt-24 lg:mt-32 space-y-8">
          <h2 className="text-center text-3xl leading-none font-bold tracking-tight text-navy uppercase sm:text-5xl lg:text-[60px]">
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
        <h2 className="text-center text-3xl leading-none font-bold tracking-tight text-navy uppercase sm:text-5xl lg:text-[60px]">
          FREQUENTLY ASKED <span className="text-primary">QUESTIONS</span>
        </h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-2 items-start">
          <Accordion defaultValue={["faq-0"]} className="flex flex-col gap-3">
            {detail.faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="rounded-2xl border border-border bg-background px-4 sm:px-8"
              >
                <AccordionTrigger className="min-h-0 py-4 text-base font-bold text-navy no-underline hover:no-underline sm:py-6 sm:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="border-t border-border pt-4 pb-5 text-xs leading-relaxed text-body sm:pt-6 sm:pb-6 sm:text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Card className="rounded-[20px] border-border bg-background p-6 sm:p-8 shadow-none">
            <CardContent className="p-0 flex flex-col gap-4">
              <h3 className="text-lg font-bold text-navy uppercase font-mono border-b border-border pb-3">
                ASK YOUR QUESTION
              </h3>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-navy uppercase mb-1">NAME</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full h-12 px-4 rounded-[10px] border border-border bg-surface-soft text-sm outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy uppercase mb-1">EMAIL</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-12 px-4 rounded-[10px] border border-border bg-surface-soft text-sm outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy uppercase mb-1">YOUR QUESTION</label>
                  <textarea
                    placeholder="Enter your question here..."
                    rows={4}
                    className="w-full p-4 rounded-[10px] border border-border bg-surface-soft text-sm outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className={cn(
                    buttonVariants(),
                    "h-12 w-full rounded-full bg-primary font-mono text-base font-semibold text-white",
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
        <div className="relative flex min-h-[220px] flex-col items-center justify-center overflow-hidden rounded-[20px] bg-primary p-6 text-center sm:min-h-[380px] sm:p-12">
          <h2 className="font-mono text-lg leading-tight font-bold tracking-wide text-white uppercase sm:text-4xl lg:text-[52px] md:max-w-5xl">
            {detail.finalCtaQuestion}
          </h2>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "mt-6 h-12 rounded-full border-white bg-transparent px-8 font-mono text-sm font-bold text-white hover:bg-white/10 hover:text-white sm:h-14 sm:text-base",
            )}
          >
            Get a free Audit
          </Link>
        </div>
      </section>
    </main>
  );
}

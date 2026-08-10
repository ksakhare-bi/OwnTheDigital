"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getDetailedCaseStudyBySlug } from "@/content/case-studies";
import { cn } from "@/lib/utils";

export function CaseStudyContent({ slug }: { slug: string }) {
  const study = getDetailedCaseStudyBySlug(slug);

  if (!study) {
    return (
      <div className="mx-auto max-w-[1392px] px-4 py-20 text-center">
        <h1 className="text-3xl font-bold">Case Study Not Found</h1>
        <p className="mt-4 text-muted">The requested case study could not be found.</p>
        <Link href="/portfolio" className={cn(buttonVariants(), "mt-6")}>
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <main className="mx-auto w-full max-w-[1392px] px-6 pt-14 pb-16 sm:px-6 sm:pt-16 flex flex-col gap-12 sm:gap-28">
      {/* 1. HERO/HEADER SECTION */}
      <section className="text-center flex flex-col items-center justify-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-primary uppercase sm:text-4xl lg:text-[50px] leading-tight max-w-[1100px]">
          {study.title}
        </h1>
        <p className="px-4 sm:px-0 mt-4 text-base font-bold tracking-widest text-primary uppercase sm:text-lg lg:text-xl font-mono">
          {study.tagline}
        </p>
      </section>

      {/* 2. OVERVIEW SECTION */}
      <section className="max-w-4xl mx-auto w-full -mt-4 sm:-mt-10">
        <div className="rounded-[20px] border border-border bg-background p-6 sm:p-12 text-center text-sm sm:text-lg leading-relaxed text-body shadow-none">
          {study.overview}
        </div>
      </section>

      {/* 3. PROBLEM FACED SECTION */}
      <section className="grid gap-8 lg:grid-cols-[1fr_1.6fr] items-start w-full">
        <div className="flex flex-col gap-4 lg:sticky lg:top-28">
          <h2 className="text-2xl font-extrabold text-primary uppercase sm:text-4xl lg:text-[44px] leading-tight">
            PROBLEM FACED
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-body">
            {study.problemIntro}
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {study.challenges.map((challenge, idx) => (
            <Card key={idx} className="rounded-[20px] border border-border bg-background p-6 sm:p-8 flex flex-col gap-3 shadow-none">
              <CardContent className="p-0 flex flex-col gap-3">
                <span className="font-mono text-2xl sm:text-3xl font-semibold text-navy/60">
                  {(idx + 1).toString().padStart(2, "0")}
                </span>
                <h4 className="text-xl font-bold text-navy sm:text-2xl mt-4">
                  {challenge.title}
                </h4>
                <p className="text-sm sm:text-base text-body leading-relaxed">
                  {challenge.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 4. SOLUTIONS IMPLEMENTED SECTION */}
      <section className="grid gap-8 lg:grid-cols-[1fr_1.6fr] items-start w-full">
        <div className="flex flex-col gap-4 lg:sticky lg:top-28">
          <h2 className="text-2xl font-extrabold text-primary uppercase sm:text-4xl lg:text-[44px] leading-tight">
            SOLUTIONS IMPLEMENTED
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-body">
            {study.solutionIntro}
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {study.solutions.map((sol, idx) => (
            <Card key={idx} className="rounded-[20px] border border-border bg-background p-6 sm:p-8 flex flex-col gap-4 shadow-none">
              <CardContent className="p-0 flex flex-col gap-3">
                <span className="font-mono text-2xl sm:text-3xl font-semibold text-navy/60">
                  {(idx + 1).toString().padStart(2, "0")}
                </span>
                <h4 className="text-xl font-bold text-navy sm:text-2xl mt-4">
                  {sol.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {sol.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-sm sm:text-base leading-relaxed text-body flex items-start gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-navy" />
                      <div>
                        {item.description ? (
                          <>
                            <strong className="font-semibold text-navy">{item.label}</strong>
                            {` — ${item.description}`}
                          </>
                        ) : (
                          <span>{item.label}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 5. RESULTS ACHIEVED SECTION */}
      <section className="flex flex-col items-center text-center gap-4 sm:gap-6 w-full">
        <h2 className="text-3xl font-extrabold tracking-tight text-primary uppercase sm:text-4xl lg:text-[44px] leading-tight">
          RESULTS ACHIEVED
        </h2>
        <p className="text-sm sm:text-base font-mono text-body font-semibold max-w-3xl leading-relaxed">
          {study.resultsIntro}
        </p>
        <div className="flex flex-wrap justify-center gap-6 w-full mt-4">
          {study.metrics.map((metric, idx) => {
            const widthClass = (study.metrics.length === 5 || study.metrics.length === 6)
              ? "w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm"
              : "w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-sm";
            return (
              <div
                key={idx}
                className={cn(
                  "rounded-[20px] border border-border bg-background p-6 sm:p-8 flex flex-col items-center text-center gap-2 shadow-none flex-grow sm:flex-grow-0",
                  widthClass
                )}
              >
                <span className="text-5xl font-extrabold text-navy sm:text-6xl font-mono leading-none">
                  {metric.value}
                </span>
                <span className="text-sm font-bold text-primary tracking-wider uppercase font-sans mt-2">
                  {metric.label}
                </span>
                <p className="text-xs sm:text-sm text-body leading-relaxed mt-1">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. CLIENT TESTIMONIAL SECTION */}
      <section className="grid gap-8 lg:grid-cols-[1.2fr_1.2fr] items-center w-full">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-extrabold text-primary uppercase sm:text-4xl lg:text-[44px] leading-tight">
            CLIENT TESTIMONIAL
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-body">
            Here what our client had to say about their transformation with Own the Digital.
          </p>
        </div>
        <div className="rounded-[20px] bg-primary p-6 sm:p-12 xl:p-[60px] text-white flex flex-col gap-4 shadow-none">
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-white/80 uppercase">
            {study.testimonial.author}, {study.testimonial.role}
          </span>
          <p className="text-base sm:text-xl leading-relaxed font-medium">
            &ldquo;{study.testimonial.quote}&rdquo;
          </p>
        </div>
      </section>

      {/* 7. SUMMARY / BOTTOM BANNER */}
      <section className="w-full">
        <div className="rounded-[20px] border border-border bg-background p-6 sm:p-10 text-sm sm:text-lg leading-relaxed text-body font-medium shadow-none">
          {study.summary}
        </div>
      </section>
    </main>
  );
}

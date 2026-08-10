import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  businessProblems,
  companyStats,
  expertiseItems,
  teamMembers,
} from "@/content/about";
import { cn } from "@/lib/utils";

const teamSocials = [
  { label: "LinkedIn", icon: "/images/home/social-linkedin.svg" },
  { label: "Facebook", icon: "/images/home/social-facebook.svg" },
  { label: "Instagram", icon: "/images/home/social-instagram.svg" },
];

function AboutSectionTitle({
  lead,
  accent,
  className
}: {
  lead: string;
  accent: string;
  className?: string;
}) {
  return (
    <h2 className={cn("text-center text-3xl leading-none font-bold tracking-tight text-black uppercase sm:text-5xl lg:text-[78px] ", className)}>
      {lead} <span className="text-primary">{accent}</span>
    </h2>
  );
}

function CompanySection() {
  return (
    <section>
      <AboutSectionTitle lead="About the" accent="Company" />
      <div className="mt-10 sm:mt-20 grid items-center gap-10 lg:grid-cols-[0.9fr_1fr] xl:grid-cols-[0.9fr_1fr]">
        <div className="hidden sm:block relative min-h-[420px] overflow-hidden rounded-3xl lg:h-[585px]">
          <Image
            src="/images/home/about-company.png"
            alt="Own the Digital team collaborating around a table"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 639px"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-6 sm:gap-10 lg:h-[585px]">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-primary sm:text-base">
              We&apos;ve helped hundreds of companies
            </p>
            <h3 className="mt-2 text-xl leading-[1.35] font-medium tracking-[-0.02em] text-navy sm:mt-3 sm:text-3xl">
              Transforming Visions into Digital Reality
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            {companyStats.map((stat) => (
              <Card
                key={stat.label}
                className="rounded-[14px] border-border bg-surface-soft py-0 shadow-none"
              >
                <CardContent className="px-3 py-4 text-center uppercase sm:px-5 sm:py-[30px]">
                  <p className="font-mono text-xs font-medium text-body sm:text-lg">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-3xl leading-none font-semibold text-primary sm:mt-4 sm:text-[60px]">
                    {stat.value}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Link
            href="/contact"
            className={cn(
              buttonVariants(),
              "h-12 w-full rounded-full px-6 font-mono text-base font-bold sm:h-16 sm:px-8 sm:text-lg",
            )}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProblemsSection() {
  return (
    <section>
      <AboutSectionTitle lead="The Problem" accent="We Solve" className="px-16" />
      <div className="mt-8 grid gap-4 sm:mt-16 sm:gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-7 xl:gap-y-20">
        {businessProblems.map((problem, index) => (
          <Card
            key={problem.title}
            className="min-h-[220px] rounded-[20px] border-border bg-background py-0 shadow-none sm:min-h-[300px] xl:min-h-[348px]"
          >
            <CardContent className="flex h-full flex-col px-5 py-6 sm:px-7 sm:py-9 xl:px-[31px] xl:py-[45px]">
              <p className="font-mono text-xl tracking-[0.03em] text-body sm:text-2xl xl:text-[32px]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="mt-auto pt-6 sm:pt-14">
                <h3 className="text-2xl leading-none font-bold tracking-[0.03em] text-navy sm:text-3xl xl:text-[50px]">
                  {problem.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.5] tracking-[0.03em] text-body sm:mt-5 sm:text-base">
                  {problem.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section>
      <AboutSectionTitle lead="Meet the" accent="Team" />
      <div className="mt-8 grid gap-6 sm:mt-16 sm:grid-cols-2 xl:grid-cols-4 xl:gap-x-[31px] xl:gap-y-[50px]">
        {teamMembers.map((member) => (
          <Card
            key={member.name}
            className="overflow-hidden rounded-[14px] border-border bg-background py-0 shadow-none"
          >
            <CardContent className="p-0">
              <div className="h-[90px] bg-background px-4 pt-6 text-center sm:h-[102px] sm:px-6 sm:pt-9">
                <h3 className="text-sm leading-[1.5] font-bold text-primary uppercase">
                  {member.name}
                </h3>
                <p className="text-xs leading-[1.5] text-navy sm:text-sm">
                  {member.role}
                </p>
              </div>
              <div className="relative px-4 pb-6 sm:px-6 sm:pb-8">
                <div className="absolute inset-x-0 top-[70px] bottom-0 bg-primary sm:top-[82px]" />
                <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-[24px] sm:h-[219px] sm:rounded-[32px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    quality={95}
                    sizes="(max-width: 640px) 100vw, 284px"
                    className="object-cover"
                  />
                </div>
                <div className="relative z-10 mt-4 flex justify-center gap-4 sm:mt-6 sm:gap-6">
                  {teamSocials.map((social) => (
                    <Link
                      key={social.label}
                      href="#"
                      aria-label={`${member.name} on ${social.label}`}
                      className="flex size-11 items-center justify-center rounded-[10px] border border-border bg-surface-tint"
                    >
                      <Image
                        src={social.icon}
                        alt=""
                        width={21}
                        height={21}
                        className="size-10 object-contain sm:size-20"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function ExpertiseSection() {
  return (
    <section>
      <AboutSectionTitle lead="Our" accent="Expertise" />
      <div className="mt-8 grid items-stretch gap-6 sm:mt-16 sm:gap-[30px] lg:grid-cols-[1.45fr_1fr] xl:grid-cols-[1.45fr_1fr]">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {expertiseItems.map((item) => (
            <Card
              key={item.number}
              className="rounded-[20px] border-border bg-background py-0 shadow-none"
            >
              <CardContent className="flex h-full min-h-[240px] flex-col items-center px-5 py-6 text-center sm:min-h-[300px] sm:px-6 sm:py-10 xl:min-h-[344px]">
                <div className="flex size-14 items-center justify-center rounded-full border border-border bg-surface-pale font-mono text-xl tracking-[0.03em] text-primary sm:size-20 sm:text-2xl xl:size-[100px] xl:text-[40px]">
                  {item.number}
                </div>
                <h3 className="mt-4 max-w-[310px] text-2xl leading-none font-bold tracking-[0.03em] text-navy sm:mt-5 sm:text-3xl xl:text-[40px]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[292px] text-sm leading-[1.4] tracking-[0.03em] text-body sm:mt-5 sm:text-base">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="hidden sm:block relative min-h-[500px] overflow-hidden rounded-[20px] lg:min-h-0">
          <Image
            src="/images/home/about-expertise.png"
            alt="A digital strategy map show}ing connected ideas"
            fill
            sizes="(max-width: 1024px) 100vw, 552px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export function AboutContent() {
  return (
    <main className="bg-surface">
      <div className="mx-auto flex w-full max-w-[1392px] flex-col gap-12 sm:gap-24 lg:gap-32 px-4 pt-20 pb-10 sm:px-6 sm:pb-24">
        <CompanySection />
        <ProblemsSection />
        <TeamSection />
        <ExpertiseSection />
      </div>
    </main>
  );
}

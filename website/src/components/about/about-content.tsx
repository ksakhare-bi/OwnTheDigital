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
}: {
  lead: string;
  accent: string;
}) {
  return (
    <h2 className="text-center text-4xl leading-none font-bold tracking-tight text-black uppercase sm:text-5xl lg:text-[78px]">
      {lead} <span className="text-primary">{accent}</span>
    </h2>
  );
}

function CompanySection() {
  return (
    <section>
      <AboutSectionTitle lead="About the" accent="Company" />
      <div className="mt-20 grid items-center gap-10 lg:grid-cols-[0.9fr_1fr] xl:grid-cols-[639px_710px]">
        <div className="relative min-h-[420px] overflow-hidden rounded-3xl lg:h-[585px]">
          <Image
            src="/images/home/about-company.png"
            alt="Own the Digital team collaborating around a table"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 639px"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-10 lg:h-[585px]">
          <div>
            <p className="text-base font-semibold text-primary">
              We&apos;ve helped hundreds of companies
            </p>
            <h3 className="mt-3 text-3xl leading-[1.5] font-medium tracking-[-0.02em] text-navy">
              Transforming Visions into Digital Reality
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {companyStats.map((stat) => (
              <Card
                key={stat.label}
                className="rounded-[14px] border-border bg-surface-soft py-0 shadow-none"
              >
                <CardContent className="px-5 py-7 text-center uppercase sm:py-[30px]">
                  <p className="font-mono text-sm font-medium text-body sm:text-lg">
                    {stat.label}
                  </p>
                  <p className="mt-4 text-4xl leading-none font-semibold text-primary sm:text-[60px]">
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
              "h-16 w-full rounded-full px-8 font-mono text-lg font-bold",
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
      <AboutSectionTitle lead="The Problem" accent="We Solve" />
      <div className="mt-20 grid gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-7 xl:gap-y-20">
        {businessProblems.map((problem, index) => (
          <Card
            key={problem.title}
            className="min-h-[300px] rounded-[20px] border-border bg-background py-0 shadow-none xl:min-h-[348px]"
          >
            <CardContent className="flex h-full flex-col px-7 py-9 xl:px-[31px] xl:py-[45px]">
              <p className="font-mono text-2xl tracking-[0.03em] text-body xl:text-[32px]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="mt-auto pt-14">
                <h3 className="text-3xl leading-none font-bold tracking-[0.03em] text-navy xl:text-[50px]">
                  {problem.title}
                </h3>
                <p className="mt-5 text-base leading-[1.4] tracking-[0.03em] text-body">
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
      <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-4 xl:gap-x-[31px] xl:gap-y-[50px]">
        {teamMembers.map((member) => (
          <Card
            key={member.name}
            className="overflow-hidden rounded-[14px] border-border bg-background py-0 shadow-none"
          >
            <CardContent className="p-0">
              <div className="h-[102px] bg-background px-6 pt-9 text-center">
                <h3 className="text-sm leading-[1.5] font-bold text-primary uppercase">
                  {member.name}
                </h3>
                <p className="text-sm leading-[1.5] text-navy">
                  {member.role}
                </p>
              </div>
              <div className="relative px-6 pb-8">
                <div className="absolute inset-x-0 top-[82px] bottom-0 bg-primary" />
                <div className="relative z-10 h-[219px] overflow-hidden rounded-[32px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    quality={95}
                    sizes="(max-width: 640px) 100vw, 284px"
                    className="object-cover"
                  />
                </div>
                <div className="relative z-10 mt-6 flex justify-center gap-6">
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
                        className="size-5 object-contain"
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
      <div className="mt-20 grid items-stretch gap-[30px] lg:grid-cols-[1.45fr_1fr] xl:grid-cols-[802px_552px]">
        <div className="grid gap-5 sm:grid-cols-2">
          {expertiseItems.map((item) => (
            <Card
              key={item.number}
              className="rounded-[20px] border-border bg-background py-0 shadow-none"
            >
              <CardContent className="flex h-full min-h-[300px] flex-col items-center px-6 py-10 text-center xl:min-h-[344px]">
                <div className="flex size-20 items-center justify-center rounded-full border border-border bg-surface-pale font-mono text-2xl tracking-[0.03em] text-primary xl:size-[100px] xl:text-[40px]">
                  {item.number}
                </div>
                <h3 className="mt-5 max-w-[310px] text-3xl leading-none font-bold tracking-[0.03em] text-navy xl:text-[40px]">
                  {item.title}
                </h3>
                <p className="mt-5 max-w-[292px] text-base leading-[1.4] tracking-[0.03em] text-body">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="relative min-h-[500px] overflow-hidden rounded-[20px] lg:min-h-0">
          <Image
            src="/images/home/about-expertise.png"
            alt="A digital strategy map showing connected ideas"
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
      <div className="mx-auto flex w-full max-w-[1392px] flex-col gap-[120px] px-4 pt-20 pb-24 sm:px-6 xl:px-0">
        <CompanySection />
        <ProblemsSection />
        <TeamSection />
        <ExpertiseSection />
      </div>
    </main>
  );
}

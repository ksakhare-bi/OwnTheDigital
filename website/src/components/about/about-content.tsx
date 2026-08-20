import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import { SectionTitle } from "@/components/home/section-title";
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

function CompanySection() {
  return (
    <section className="pt-4 sm:pt-7">
      <SectionTitle lead="About the" accent="Company" className="xl:text-[70px]" />
      <div className="mt-6 sm:mt-10 lg:mt-12 grid items-center gap-8 lg:grid-cols-2 xl:gap-12">
        <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] lg:aspect-auto lg:h-[480px] xl:h-[450px] overflow-hidden rounded-[20px] sm:rounded-3xl border border-border/50">
          <Image
            src="/images/about/about-company.png"
            alt="Own the Digital team collaborating around a table"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 640px"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-6 sm:gap-8">
          <div className="text-center lg:text-left">
            <p className="text-xs sm:text-sm font-bold text-primary uppercase tracking-wider">
              We&apos;ve helped hundreds of companies
            </p>
            <h3 className="mt-2 text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-navy leading-snug">
              Transforming Visions into Digital Reality
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {companyStats.map((stat) => (
              <Card
                key={stat.label}
                className="rounded-[16px] border border-border bg-surface-soft py-0 shadow-none"
              >
                <CardContent className="p-4 text-center sm:p-5">
                  <p className="font-mono text-xs sm:text-sm font-semibold text-body uppercase tracking-wider">
                    {stat.label}
                  </p>
                  <p className="mt-1.5 text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary leading-tight">
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
              "h-11 sm:h-12 md:h-13 w-full rounded-full px-6 font-mono text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wide",
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
    <section className="pt-4 sm:pt-7">
      <SectionTitle lead="The Problem" accent="We Solve" />
      <div className="mt-6 sm:mt-10 grid gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {businessProblems.map((problem, index) => (
          <Card
            key={problem.title}
            className="rounded-[20px] border border-border bg-background py-0 shadow-none flex flex-col justify-between"
          >
            <CardContent className="flex h-full flex-col justify-between p-5 sm:p-6 lg:p-7">
              <p className="font-mono text-base sm:text-lg md:text-xl font-bold tracking-wider text-primary">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="mt-6 sm:mt-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-navy leading-snug">
                  {problem.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm md:text-base text-body leading-relaxed">
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
    <section className="pt-4 sm:pt-7">
      <SectionTitle lead="Meet the" accent="Team" />
      <div className="mt-6 sm:mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-x-[31px] xl:gap-y-[50px]">
        {teamMembers.map((member) => (
          <Card
            key={member.name}
            className="overflow-hidden rounded-[14px] border border-border bg-background py-0 shadow-none"
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
                <div className="relative z-20 aspect-[4/3] w-full overflow-hidden rounded-[24px] sm:rounded-[32px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    quality={98}
                    sizes="(max-width: 640px) 100vw, 284px"
                    className="object-cover"
                  />
                </div>
                <div className="relative z-10 mt-4 flex justify-center gap-4 sm:mt-6 sm:gap-6">
                  {teamSocials.map((social) => {
                    let IconComponent = null;
                    let iconColorClass = "";

                    if (social.label === "LinkedIn") {
                      IconComponent = FaLinkedin;
                      iconColorClass = "text-primary";
                    } else if (social.label === "Facebook") {
                      IconComponent = FaFacebookF;
                      iconColorClass = "text-primary";
                    } else if (social.label === "Instagram") {
                      IconComponent = FaInstagram;
                      iconColorClass = "text-primary";
                    }

                    return (
                      <Link
                        key={social.label}
                        href="#"
                        aria-label={`${member.name} on ${social.label}`}
                        className={cn(
                          "flex size-11 items-center justify-center rounded-[10px] border border-border bg-surface-tint",
                          iconColorClass,
                        )}
                      >
                        {IconComponent ? (
                          <IconComponent className="size-5 sm:size-6" />
                        ) : (
                          <Image
                            src={social.icon}
                            alt={social.label}
                            width={21}
                            height={21}
                            className="size-10 object-contain sm:size-20"
                          />
                        )}
                      </Link>
                    );
                  })}
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
    <section className="pt-6 sm:pt-7">
      <SectionTitle lead="Our" accent="Expertise" />
      <div className="mt-6 sm:mt-10 grid items-stretch gap-6 lg:grid-cols-[1.3fr_1fr] xl:gap-8">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {expertiseItems.map((item) => (
            <Card
              key={item.number}
              className="rounded-[20px] border border-border bg-background py-0 shadow-none flex flex-col justify-between"
            >
              <CardContent className="flex h-full flex-col items-center p-5 text-center sm:p-6 lg:p-7 justify-between">
                <div className="flex size-12 sm:size-14 md:size-16 items-center justify-center rounded-full border border-border bg-surface-pale font-mono text-base sm:text-lg md:text-xl font-bold tracking-wider text-primary shrink-0">
                  {item.number}
                </div>
                <div className="mt-4 flex flex-col items-center">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-navy leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-body leading-relaxed max-w-xs">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] lg:aspect-auto lg:h-full min-h-[220px] sm:min-h-[320px] lg:min-h-[420px] overflow-hidden rounded-[20px] border border-border/50">
          <Image
            src="/images/about/about-expertise.png"
            alt="A digital strategy map showing connected ideas"
            fill
            sizes="(max-width: 1024px) 100vw, 550px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export function AboutContent() {
  return (
    <main className="bg-background">
      <div className="mx-auto flex w-full max-w-[1392px] flex-col gap-14 sm:gap-20 md:gap-24 lg:gap-28 px-4 pt-10 sm:pt-12 md:pt-16 pb-12 sm:px-6 sm:pb-16 lg:pb-20">
        <CompanySection />
        <ProblemsSection />
        <TeamSection />
        <ExpertiseSection />
      </div>
    </main>
  );
}

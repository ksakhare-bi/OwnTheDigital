import { FinalCtaSection } from "@/components/home/final-cta";
import { HeroSection, TrustedBySection } from "@/components/home/hero-trusted";
import { ServicesSection } from "@/components/home/our-services";
import { FaqSection } from "@/components/home/faq";
import { TestimonialsSection } from "@/components/home/testimonials-faq";
import { WhyHireUsSection } from "@/components/home/why-hire-us";
import { WorkSection } from "@/components/home/our-work";
import { ProcessSection } from "@/components/home/how-we-work";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Own the Digital | Performance Marketing & Web Development",
  description:
    "We offer a comprehensive range of digital marketing, web development, and AI-powered solutions designed to help businesses increase visibility, generate qualified leads, and achieve sustainable growth.",
  openGraph: {
    title: "Own the Digital | Performance Marketing & Web Development",
    description: "We offer a comprehensive range of digital marketing, web development, and AI-powered solutions designed to help businesses increase visibility, generate qualified leads, and achieve sustainable growth.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <ServicesSection />
      <WhyHireUsSection />
      <ProcessSection />
      <WorkSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}

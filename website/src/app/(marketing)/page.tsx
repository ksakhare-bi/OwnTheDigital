import { FinalCtaSection } from "@/components/home/final-cta";
import {
  HeroSection,
  ServicesSection,
  TrustedBySection,
} from "@/components/home/hero-services";
import {
  FaqSection,
  TestimonialsSection,
} from "@/components/home/testimonials-faq";
import {
  ProcessSection,
  WhyHireUsSection,
} from "@/components/home/value-process";
import { WorkSection } from "@/components/home/work-section";

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

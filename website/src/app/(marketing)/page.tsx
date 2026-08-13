import { FinalCtaSection } from "@/components/home/final-cta";
import { HeroSection, TrustedBySection } from "@/components/home/hero-trusted";
import { ServicesSection } from "@/components/home/our-services";
import { FaqSection } from "@/components/home/faq";
import { TestimonialsSection } from "@/components/home/testimonials-faq";
import { WhyHireUsSection } from "@/components/home/why-hire-us";
import { WorkSection } from "@/components/home/our-work";
import { ProcessSection } from "@/components/home/how-we-work";

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

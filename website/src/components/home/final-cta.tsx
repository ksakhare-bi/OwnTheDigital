import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FinalCtaSection() {
  return (
    <section className="mx-auto max-w-[1392px] px-4 sm:px-6">
      <div className="relative flex flex-col items-center justify-center min-h-[240px] overflow-hidden rounded-[16px] bg-primary px-5 py-10 sm:min-h-[320px] md:min-h-[280px] lg:min-h-[440px] xl:min-h-[549px] sm:rounded-[20px] sm:px-6 sm:py-14 md:py-10">
        <Image
          src="/images/home/cta-decoration.svg"
          alt=""
          width={1284}
          height={40}
          className="absolute top-8 left-1/2 w-[92%] -translate-x-1/2 opacity-90 sm:top-12 md:top-10 lg:top-16 xl:top-24"
        />
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="text-[20px] leading-tighter font-bold tracking-[0.03em] text-white uppercase sm:text-2xl md:text-3xl lg:text-4xl xl:text-[60px] mt-6 sm:mt-0">
            Start Showing Up Where
            <br />
            Your Customers Are Looking
          </h2>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "mt-7 h-12 rounded-full border-white bg-transparent px-6 font-mono text-base font-bold text-white hover:bg-white/10 hover:text-white sm:mt-10 sm:hidden",
            )}
          >
            Let&apos;s connect
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonVariants(),
              "mt-8 hidden h-14 rounded-full bg-white px-7 font-mono text-base font-bold text-primary hover:bg-surface-pale sm:inline-flex md:mt-6 md:h-11 md:px-5 md:text-sm lg:h-12 lg:px-5 lg:text-sm xl:h-16 xl:px-8 xl:text-lg",
            )}
          >
            Get a free Audit
          </Link>
        </div>
      </div>
    </section>
  );
}

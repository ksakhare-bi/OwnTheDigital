import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FinalCtaSection() {
  return (
    <section className="mx-auto max-w-[1392px] px-4 pt-10 sm:px-6 sm:pt-24 lg:pt-24">
      <div className="relative flex min-h-[280px] overflow-hidden rounded-[16px] bg-primary px-5 py-12 sm:min-h-[549px] sm:rounded-[20px] sm:px-6 sm:py-16">
        <Image
          src="/images/home/cta-decoration.svg"
          alt=""
          width={1284}
          height={40}
          className="absolute top-10 left-1/2 w-[92%] -translate-x-1/2 opacity-90 sm:top-24"
        />
        <div className="relative z-10 m-auto flex flex-col items-center text-center pt-4">
          <h2 className="font-mono text-[22px] leading-tight font-bold tracking-[0.03em] text-white uppercase sm:text-5xl lg:text-[60px]">
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
              "mt-10 hidden h-16 rounded-full bg-white px-8 font-mono text-lg font-bold text-primary hover:bg-surface-pale sm:inline-flex",
            )}
          >
            Get a free Audit
          </Link>
        </div>
      </div>
    </section>
  );
}

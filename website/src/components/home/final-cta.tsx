import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FinalCtaSection() {
  return (
    <section className="mx-auto max-w-[1392px] px-4 pt-24 sm:px-6 lg:pt-24">
      <div className="relative flex min-h-[440px] overflow-hidden rounded-[20px] bg-primary px-6 py-20 sm:min-h-[549px]">
        <Image
          src="/images/home/cta-decoration.svg"
          alt=""
          width={1284}
          height={40}
          className="absolute top-24 left-1/2 w-[92%] -translate-x-1/2 opacity-90"
        />
        <div className="relative z-10 m-auto flex flex-col items-center text-center">
          <h2 className="font-mono text-4xl leading-tight font-bold tracking-[0.03em] text-white uppercase sm:text-5xl lg:text-[60px]">
            Start Showing Up Where
            <br />
            Your Customers Are Looking
          </h2>
          <Link
            href="/contact"
            className={cn(
              buttonVariants(),
              "mt-10 h-16 rounded-full bg-white px-8 font-mono text-lg font-bold text-primary hover:bg-surface-pale",
            )}
          >
            Get a free Audit
          </Link>
        </div>
      </div>
    </section>
  );
}

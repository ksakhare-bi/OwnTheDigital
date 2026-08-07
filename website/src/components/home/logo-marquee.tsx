"use client";

import Image from "next/image";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";

import { type ClientLogo } from "@/content/home";
import { cn } from "@/lib/utils";

type LogoMarqueeProps = {
  logos: ClientLogo[];
};

export function LogoMarquee({ logos }: LogoMarqueeProps) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
      skipSnaps: true,
    },
    [
      AutoScroll({
        playOnInit: true,
        speed: 2,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ],
  );

  // Duplicate once so the loop never shows an empty gap on wide screens.
  const slides = [...logos, ...logos];

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="-ml-8 flex items-center sm:-ml-[76px]">
        {slides.map((logo, index) => (
          <div
            key={`${logo.src}-${index}`}
            className="shrink-0 pl-8 sm:pl-[76px]"
          >
            <div
              className={cn(
                "relative scale-75 sm:scale-100",
                logo.hasShadow && "drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]",
              )}
              style={{ width: logo.width, height: logo.height }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes={`${logo.width}px`}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

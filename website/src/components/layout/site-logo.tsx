import Image from "next/image";

import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  priority?: boolean;
};

/**
 * Brand lockup: the gradient "O" mark sits left of the navy wordmark.
 * Layer offsets are percentages of the 192x24 artboard so the lockup scales
 * with the container width.
 */
export function SiteLogo({ className, priority = false }: SiteLogoProps) {
  return (
    <span
      className={cn("relative block aspect-[192/24] w-48 shrink-0", className)}
    >
      <span className="absolute top-0 left-0 h-full w-[13.542%]">
        <Image
          src="/images/logo/brand-mark.png"
          alt="Own the Digital"
          fill
          priority={priority}
          sizes="26px"
          className="object-contain"
        />
      </span>
      <span className="absolute top-[1.458%] left-[14.063%] h-[92.788%] w-[85.939%]">
        <Image
          src="/images/logo/brand-wordmark.svg"
          alt="Own the Digital"
          fill
          priority={priority}
          sizes="166px"
          className="object-contain"
        />
      </span>
    </span>
  );
}

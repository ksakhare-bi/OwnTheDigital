import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { footerNav } from "@/content/navigation";

const socialLinks = [
  {
    label: "Phone",
    href: "#",
    icon: "/images/home/social-phone.svg",
    iconClassName: "size-14 sm:size-20",
  },
  {
    label: "Instagram",
    href: "#",
    icon: "/images/home/social-instagram.svg",
    iconClassName: "size-14 sm:size-20",
  },
  {
    label: "Facebook",
    href: "#",
    icon: "/images/home/social-facebook.svg",
    iconClassName: "size-14 sm:size-20",
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: "/images/home/social-linkedin.svg",
    iconClassName: "size-14 sm:size-20",
  },
] as const;

function SocialRow({ className }: { className?: string }) {
  return (
    <div className={cn("flex justify-center sm:justify-start gap-4 sm:gap-3", className)}>
      {socialLinks.map((social) => (
        <Link
          key={social.label}
          href={social.href}
          aria-label={social.label}
          className="flex size-12 items-center justify-center rounded-[10px] border border-border bg-surface-tint transition hover:border-primary sm:size-16 sm:bg-background"
        >
          <Image
            src={social.icon}
            alt=""
            width={28}
            height={28}
            className={cn(
              "size-6 object-contain sm:size-8",
              "iconClassName" in social && social.iconClassName,
            )}
          />
        </Link>
      ))}
    </div>
  );
}

function LegalBlock({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-background px-4 py-4 font-mono text-xs text-navy text-center sm:text-left sm:flex sm:items-center sm:justify-between sm:gap-4 sm:px-10 sm:py-5 sm:text-sm",
        className,
      )}
    >
      <p>© {new Date().getFullYear()} Own The Digital. All rights reserved.</p>
      <p className="mt-2 sm:mt-0">
        <Link href="#" className="hover:text-primary">
          Terms &amp; Conditions
        </Link>
        <span className="mx-2 text-muted" aria-hidden="true">
          |
        </span>
        <Link href="#" className="hover:text-primary">
          Privacy Policy
        </Link>
      </p>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-[1392px] px-4 py-8 text-navy sm:px-6 sm:py-10">
      {/* Mobile: three separate blocks matching Figma */}
      <div className="flex flex-col gap-4 sm:hidden">
        <nav className="rounded-2xl border border-border bg-background px-5 py-6">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {footerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-base font-bold text-primary transition hover:text-navy"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <SocialRow />

        <LegalBlock />
      </div>

      {/* Desktop / tablet: single card layout */}
      <div className="hidden rounded-2xl border border-border bg-background p-10 sm:block">
        <nav className="grid gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-10">
          {footerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[22px] font-bold text-primary transition hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.5fr]">
          <SocialRow />
          <LegalBlock className="border-border" />
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";

import { cn } from "@/lib/utils";
import { footerNav } from "@/content/navigation";

const socialLinks = [
  {
    label: "Phone",
    href: "#",
    icon: "/images/home/social-phone.svg",
  },
  {
    label: "Instagram",
    href: "#",
    icon: "/images/home/social-instagram.svg",
  },
  {
    label: "Facebook",
    href: "#",
    icon: "/images/home/social-facebook.svg",
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: "/images/home/social-linkedin.svg",
  },
] as const;

function SocialRow({ className }: { className?: string }) {
  return (
    <div className={cn("flex justify-center sm:justify-start gap-4 sm:gap-3", className)}>
      {socialLinks.map((social) => {
        let IconComponent = null;
        let iconColorClass = "";

        if (social.label === "LinkedIn") {
          IconComponent = FaLinkedin;
          iconColorClass = "text-primary";
        } else if (social.label === "Instagram") {
          IconComponent = FaInstagram;
          iconColorClass = "text-primary";
        } else if (social.label === "Facebook") {
          IconComponent = FaFacebookF;
          iconColorClass = "text-primary";
        } else if (social.label === "Phone") {
          IconComponent = MdLocalPhone;
          iconColorClass = "text-primary";
        }

        return (
          <Link
            key={social.label}
            href={social.href}
            aria-label={social.label}
            className={cn(
              "flex size-12 items-center justify-center rounded-[10px] border border-border bg-surface-tint transition hover:border-primary lg:size-16 sm:bg-background",
              iconColorClass,
            )}
          >
            {IconComponent ? (
              <IconComponent className="size-6 lg:size-8" />
            ) : (
              <Image
                src={social.icon}
                alt=""
                width={28}
                height={28}
                className="size-6 object-contain lg:size-8"
              />
            )}
          </Link>
        );
      })}
    </div>
  );
}

function LegalBlock({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-background px-4 py-4 font-mono text-xs text-navy flex flex-col items-center justify-center text-center gap-2 sm:px-4 sm:py-5 xl:flex-row xl:justify-evenly xl:text-left xl:gap-4 sm:text-xs lg:text-base w-full",
        className,
      )}
    >
      <p>© {new Date().getFullYear()} Own The Digital. All rights reserved.</p>
      <p className="mt-0">
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
        <nav className="flex items-center justify-between gap-4">
          {footerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-base font-bold text-primary transition hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-10 flex flex-col md:flex-row sm:items-center sm:justify-between gap-6 md:gap-12 lg:gap-14">
          <SocialRow />
          <LegalBlock className="flex-1 border-border lg:mt-2" />
        </div>
      </div>
    </footer>
  );
}

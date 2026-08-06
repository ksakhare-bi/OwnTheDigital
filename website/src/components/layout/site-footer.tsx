import Image from "next/image";
import Link from "next/link";
import { mainNav } from "@/content/navigation";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    label: "Phone",
    href: "#",
    icon: "/images/home/social-phone.svg",
    iconClassName: "size-16",
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

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-[1392px] px-4 py-10 text-navy sm:px-6">
      <div className="rounded-2xl border border-border bg-background p-6 sm:p-10">
        <nav className="grid gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-10">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-xl font-bold text-primary transition hover:text-navy sm:text-[22px]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.5fr]">
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex size-16 items-center justify-center rounded-[10px] border border-border bg-background transition hover:border-primary sm:size-20"
              >
                <Image
                  src={social.icon}
                  alt=""
                  width={32}
                  height={32}
                  className={cn(
                    "size-8 object-contain",
                    "iconClassName" in social && social.iconClassName,
                  )}
                />
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-background px-6 py-5 font-mono text-sm sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <p>
              © {new Date().getFullYear()} Own The Digital. All rights reserved.
            </p>
            <div className="flex gap-5">
              <Link href="#" className="hover:text-primary">
                Terms &amp; Conditions
              </Link>
              <Link href="#" className="hover:text-primary">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

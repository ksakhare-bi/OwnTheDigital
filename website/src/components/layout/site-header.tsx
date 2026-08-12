"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { usePathname } from "next/navigation";

import { SiteLogo } from "@/components/layout/site-logo";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNav } from "@/content/navigation";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1392px] items-center justify-between px-4 sm:h-24 sm:px-6">
        <Link href="/" className="shrink-0">
          <SiteLogo priority className="w-36 sm:w-48" />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex xl:gap-14">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "font-mono text-lg transition hover:text-primary xl:text-xl",
                isActive(item.href) ? "text-primary" : "text-navy",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className={cn(
            buttonVariants(),
            "hidden h-16 rounded-full px-8 font-mono text-lg font-semibold lg:inline-flex",
          )}
        >
          Get a free Audit
        </Link>

        <Sheet>
          <SheetTrigger className="flex size-10 items-center justify-center rounded-full border border-border text-navy sm:size-11 lg:hidden">
            <Menu className="size-5" />
            <span className="sr-only">Open navigation</span>
          </SheetTrigger>
          <SheetContent className="border-r border-border bg-background">
            <SheetHeader className="border-b border-border p-6">
              <SheetTitle>
                <SiteLogo className="w-40" />
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 p-6">
              {mainNav.map((item) => (
                <SheetClose
                  key={item.href}
                  nativeButton={false}
                  render={
                    <Link
                      href={item.href}
                      className={cn(
                        "group border-b pb-2 pt-1 font-mono text-lg transition-colors hover:border-primary hover:text-primary",
                        isActive(item.href)
                          ? "border-primary text-primary"
                          : "border-border text-navy",
                      )}
                    />
                  }
                >
                  {item.label}
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto p-6">
              <SheetClose
                nativeButton={false}
                render={
                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants(),
                      "h-14 w-full rounded-full font-mono text-base",
                    )}
                  />
                }
              >
                Get a free Audit
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

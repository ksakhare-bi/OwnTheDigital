"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

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
              className="font-mono text-lg text-navy transition hover:text-primary xl:text-xl"
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
            <nav className="flex flex-col gap-2 p-6">
              {mainNav.map((item) => (
                <SheetClose
                  key={item.href}
                  nativeButton={false}
                  render={
                    <Link
                      href={item.href}
                      className="group flex items-center justify-between gap-4 rounded-xl px-4 py-3 font-mono text-lg text-navy hover:bg-surface-tint"
                    />
                  }
                >
                  <span>{item.label}</span>
                  <span className="h-px flex-1 bg-border transition-colors group-hover:bg-primary/40" />
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

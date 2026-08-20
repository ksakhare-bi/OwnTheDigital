"use client";

import { useState } from "react";

import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";

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
  const [expandedNav, setExpandedNav] = useState<string | null>(null);

  const isActive = (href: string, exact: boolean = false) => {
    if (!pathname) return false;
    if (href === "/") {
      return pathname === "/";
    }
    if (exact) {
      return pathname === href;
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1392px] items-center justify-between px-4 sm:h-24 sm:px-6">
        <Link href="/" className="shrink-0">
          <SiteLogo priority className="w-36 md:w-40 lg:w-48 xl:w-48" />
        </Link>
        <nav className="hidden items-center md:flex md:gap-4 lg:gap-8 xl:gap-14">
          {mainNav.map((item) => (
            <div key={item.href} className="group relative py-2">
              <Link
                href={item.href}
                className={cn(
                  "inline-flex items-center gap-1 font-mono text-sm transition hover:text-primary md:text-base lg:text-lg xl:text-xl",
                  isActive(item.href, !!item.children) ? "text-primary" : "text-navy",
                )}
              >
                {item.label}
                {item.children && (
                  <ChevronDown className="mt-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                )}
              </Link>
              {item.children && (
                <div className="absolute left-1/2 top-full hidden w-64 -translate-x-1/2 pt-3 group-hover:block">
                  <div className="relative">
                    <div className="absolute -top-2 left-1/2 z-20 h-4 w-4 -translate-x-1/2 rotate-45 rounded-tl-[2px] border-l border-t border-border bg-background" />
                    <div className="relative z-10 flex flex-col overflow-hidden rounded-xl bg-background p-2 shadow-xl ring-1 ring-border">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block rounded-lg px-4 py-3 font-mono text-sm transition-colors hover:bg-gray-200",
                            isActive(child.href)
                              ? "bg-gray-100 text-primary"
                              : "text-navy",
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        <Link
          href="/contact"
          className={cn(
            buttonVariants(),
            "hidden rounded-full font-mono font-semibold md:inline-flex md:h-10 md:px-4 md:text-xs lg:h-12 lg:px-5 lg:text-sm xl:h-14 xl:px-8 xl:text-lg",
          )}
        >
          Get a free Audit
        </Link>

        <Sheet>
          <SheetTrigger className="flex size-10 items-center justify-center rounded-full border border-border text-navy sm:size-11 md:hidden">
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
                <div key={item.href} className="flex flex-col gap-2">
                  <div
                    className={cn(
                      "flex items-center justify-between border-b pb-2 pt-1 font-mono text-base transition-colors hover:border-primary",
                      isActive(item.href, !!item.children)
                        ? "border-primary text-primary"
                        : "border-border text-navy",
                    )}
                  >
                    {item.children ? (
                      <>
                        <SheetClose
                          nativeButton={false}
                          render={<Link href={item.href} className="flex-1 hover:text-primary" />}
                        >
                          {item.label}
                        </SheetClose>
                        <button
                          onClick={() => setExpandedNav(expandedNav === item.href ? null : item.href)}
                          className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100"
                        >
                          <ChevronDown
                            className={cn(
                              "h-5 w-5 transition-transform",
                              expandedNav === item.href ? "rotate-180" : ""
                            )}
                          />
                        </button>
                      </>
                    ) : (
                      <SheetClose
                        nativeButton={false}
                        render={<Link href={item.href} className="flex-1 hover:text-primary" />}
                      >
                        {item.label}
                      </SheetClose>
                    )}
                  </div>
                  {item.children && expandedNav === item.href && (
                    <div className="flex flex-col pl-3">
                      {item.children.map((child) => (
                        <SheetClose
                          key={child.href}
                          nativeButton={false}
                          render={
                            <Link
                              href={child.href}
                              className={cn(
                                "block py-2 font-mono text-sm transition-colors hover:text-primary",
                                isActive(child.href)
                                  ? "text-primary"
                                  : "text-navy",
                              )}
                            />
                          }
                        >
                          {child.label}
                        </SheetClose>
                      ))}
                    </div>
                  )}
                </div>
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
                      "h-12 w-full rounded-full font-mono text-base",
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

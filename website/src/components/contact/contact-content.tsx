import { MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export function ContactContent() {
  return (
    <main className="mx-auto w-full max-w-[1392px] px-4 pt-10 sm:px-6 sm:pt-10 sm:pb-16">
      <div className="flex flex-col items-center text-center mb-10 sm:mb-16">
        <h1 className="text-3xl leading-[1.1] font-bold tracking-tight text-primary uppercase sm:text-5xl lg:text-[72px]">
          Get in <span className="text-blue-600">Touch</span>
        </h1>
        <p className="mt-4 max-w-xs sm:max-w-2xl text-base sm:text-base text-body leading-relaxed">
          Have questions? We&apos;re here for you. Drop us a line, write us an email, or send us a text.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Form Card - On top for mobile via order property */}
        <Card className="order-first lg:order-last overflow-hidden border border-border bg-background p-6 sm:p-10 xl:p-12 rounded-[20px]">
          <CardContent className="p-0 flex flex-col gap-6">
            <h2 className="text-xl font-bold tracking-tight text-navy uppercase sm:text-2xl">
              Ask Your Question
            </h2>
            <form className="flex flex-col gap-5">
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wide uppercase text-navy font-mono">
                  Name
                </label>
                <Input
                  placeholder="Enter your name"
                  className="h-12 rounded-[10px] bg-surface-tint border-0 px-4 text-base focus-visible:ring-2 focus-visible:ring-primary/20 text-navy placeholder:text-muted-foreground/60"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wide uppercase text-navy font-mono">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 rounded-[10px] bg-surface-tint border-0 px-4 text-base focus-visible:ring-2 focus-visible:ring-primary/20 text-navy placeholder:text-muted-foreground/60"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wide uppercase text-navy font-mono">
                  Your Question
                </label>
                <Textarea
                  placeholder="Enter Your Question Here ...."
                  className="min-h-32 rounded-[10px] bg-surface-tint border-0 px-4 py-3 text-base focus-visible:ring-2 focus-visible:ring-primary/20 text-navy placeholder:text-muted-foreground/60"
                />
              </div>

              <button
                type="submit"
                className={cn(
                  buttonVariants(),
                  "h-12 sm:h-14 w-full rounded-full bg-primary font-mono text-base font-semibold hover:bg-primary/95 text-white mt-2",
                )}
              >
                Send Your Message
              </button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info Card */}
        <Card className="overflow-hidden border border-border bg-background p-6 sm:p-10 xl:p-12 rounded-[20px]">
          <CardContent className="p-0 flex flex-col gap-6">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-navy uppercase sm:text-2xl">
                Contact Information
              </h2>
              <p className="text-xs sm:text-sm text-body mt-1">
                Say something to start a live chat!
              </p>
            </div>

            {/* India Contact Section */}
            <div className="space-y-4 pt-2">
              <h3 className="text-base sm:text-lg font-bold tracking-wider text-primary uppercase font-mono">
                India
              </h3>
              <div className="flex items-center gap-4 bg-surface-tint p-4 rounded-[10px]">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy">
                  <Phone className="size-5" />
                </div>
                <Link
                  href="tel:+911234567890"
                  className="text-sm sm:text-base font-semibold text-navy hover:underline"
                >
                  +91 1234567890
                </Link>
              </div>

              <div className="flex items-start gap-4 bg-surface-tint p-4 rounded-[10px]">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy mt-0.5">
                  <MapPin className="size-5" />
                </div>
                <span className="text-sm sm:text-base font-semibold text-navy leading-relaxed">
                  314/2, Sch No 114/2, <br />
                  Vijay Nagar, Indore, India.
                </span>
              </div>
            </div>

            {/* USA Contact Section */}
            <div className="space-y-4 pt-4">
              <h3 className="text-base sm:text-lg font-bold tracking-wider text-primary uppercase font-mono">
                USA
              </h3>
              <div className="flex items-center gap-4 bg-surface-tint p-4 rounded-[10px]">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy">
                  <Phone className="size-5" />
                </div>
                <Link
                  href="tel:+12065533419"
                  className="text-sm sm:text-base font-semibold text-navy hover:underline"
                >
                  1(206)5533419
                </Link>
              </div>

              <div className="flex items-start gap-4 bg-surface-tint p-4 rounded-[10px]">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy mt-0.5">
                  <MapPin className="size-5" />
                </div>
                <span className="text-sm sm:text-base font-semibold text-navy leading-relaxed">
                  720 Seneca, St Ste 107 <br />
                  Seattle, USA, 98101.
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

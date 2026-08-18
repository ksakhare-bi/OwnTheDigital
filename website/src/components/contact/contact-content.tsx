"use client";

import { useState } from "react";
import { MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface FieldErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | null;
    text: string;
  }>({ type: null, text: "" });

  const validate = () => {
    const errs: FieldErrors = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) errs.message = "Question is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FieldErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage({ type: null, text: "" });

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatusMessage({
        type: "success",
        text: "Thank you! Your message has been sent.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      setStatusMessage({ type: "error", text: msg });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            {statusMessage.type === "success" && (
              <p className="text-sm font-medium text-emerald-600">{statusMessage.text}</p>
            )}
            {statusMessage.type === "error" && (
              <p className="text-sm font-medium text-red-600">{statusMessage.text}</p>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wide uppercase text-navy">
                  Name <span className="text-red-500">*</span>
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="h-12 rounded-[10px] bg-surface-tint border-0 px-4 text-base focus-visible:ring-2 focus-visible:ring-primary/20 text-navy placeholder:text-muted-foreground/60"
                />
                {errors.name && (
                  <p className="text-xs text-red-500 font-medium mt-1">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wide uppercase text-navy">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="h-12 rounded-[10px] bg-surface-tint border-0 px-4 text-base focus-visible:ring-2 focus-visible:ring-primary/20 text-navy placeholder:text-muted-foreground/60"
                />
                {errors.email && (
                  <p className="text-xs text-red-500 font-medium mt-1">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wide uppercase text-navy">
                  Phone Number (Optional)
                </label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="h-12 rounded-[10px] bg-surface-tint border-0 px-4 text-base focus-visible:ring-2 focus-visible:ring-primary/20 text-navy placeholder:text-muted-foreground/60"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wide uppercase text-navy">
                  Your Question <span className="text-red-500">*</span>
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter Your Question Here ...."
                  className="min-h-32 rounded-[10px] bg-surface-tint border-0 px-4 py-3 text-base focus-visible:ring-2 focus-visible:ring-primary/20 text-navy placeholder:text-muted-foreground/60"
                />
                {errors.message && (
                  <p className="text-xs text-red-500 font-medium mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  buttonVariants(),
                  "h-12 sm:h-14 w-full rounded-full bg-primary text-base font-semibold hover:bg-primary/95 text-white mt-2 cursor-pointer disabled:opacity-60",
                )}
              >
                {isSubmitting ? "Sending..." : "Send Your Message"}
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
              <h3 className="text-base sm:text-lg font-bold tracking-wider text-primary uppercase">
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
              <h3 className="text-base sm:text-lg font-bold tracking-wider text-primary uppercase">
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

import type { Metadata } from "next";
import { Roboto_Flex, Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ownthedigital.com"),
  title: {
    default: "Own the Digital | Performance Marketing & Web Development",
    template: "%s | Own the Digital",
  },
  description:
    "Digital marketing, web development, and AI-powered growth for modern brands. We help businesses increase visibility, generate qualified leads, and achieve sustainable growth.",
  keywords: [
    "Digital Marketing",
    "Web Development",
    "SEO",
    "Performance Marketing",
    "AI-powered growth",
    "Lead Generation",
  ],
  authors: [{ name: "Own the Digital" }],
  creator: "Own the Digital",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ownthedigital.com",
    title: "Own the Digital | Performance Marketing & Web Development",
    description: "Digital marketing, web development, and AI-powered growth for modern brands.",
    siteName: "Own the Digital",
    images: [
      {
        url: "/images/home/brand-mark.png",
        width: 1200,
        height: 630,
        alt: "Own the Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Own the Digital | Performance Marketing & Web Development",
    description: "Digital marketing, web development, and AI-powered growth for modern brands.",
    creator: "@ownthedigital",
    images: ["/images/home/brand-mark.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoFlex.variable} ${robotoMono.variable} min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

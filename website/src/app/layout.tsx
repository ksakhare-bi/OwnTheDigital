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
  title: {
    default: "Own the Digital",
    template: "%s | Own the Digital",
  },
  description:
    "Digital marketing, web development, and AI-powered growth for modern brands.",
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

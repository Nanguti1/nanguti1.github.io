import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nanguti1.github.io"),
  title: {
    default: "Kevin Wanyonyi — Engineering Portfolio",
    template: "%s — Kevin Wanyonyi",
  },
  description:
    "Engineering portfolio documenting selected software projects and engineering contributions by Kevin Wanyonyi.",
  openGraph: {
    title: "Kevin Wanyonyi — Engineering Portfolio",
    description:
      "Selected software projects and engineering contributions across commerce, insurance, marketplace, and business systems.",
    url: "https://nanguti1.github.io",
    siteName: "Kevin Wanyonyi — Engineering Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Kevin Wanyonyi — Engineering Portfolio",
    description:
      "Selected software projects and engineering contributions across commerce, insurance, marketplace, and business systems.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Suspense fallback={null}>
          <SiteHeader />
        </Suspense>
        <div className="flex flex-1 flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}

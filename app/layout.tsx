import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Archivo, Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/navigation/Navbar";
import { getSiteUrl, navItems, site } from "@/data/site";
import { getResumeHref } from "@/lib/resume";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo", display: "swap" });
const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

const title = `${site.name} — ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: { default: title, template: `%s — ${site.name}` },
  description: site.description,
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
  keywords: ["Dhruv Katheria", "software engineer", "PICT", "full-stack", "backend", "AI", "portfolio"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title,
    description: site.description,
    siteName: site.name,
    locale: "en_IN",
    url: "/",
  },
  twitter: { card: "summary_large_image", title, description: site.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0B1020",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const resumeHref = getResumeHref();
  return (
    <html lang="en" className={`${archivo.variable} ${geist.variable} ${geistMono.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-chalk px-4 py-2 text-sm font-medium text-night focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <Navbar name={site.name} items={navItems} resumeHref={resumeHref} />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

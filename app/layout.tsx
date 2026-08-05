import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MotionProvider from "@/components/ui/MotionProvider";
import ScrollProgress from "@/components/ui/ScrollProgress";
import JsonLd from "@/components/seo/JsonLd";
import { absoluteUrl, localBusinessSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = `${siteConfig.name} | ${siteConfig.tagline}`;

export const metadata: Metadata = {
  // Makes every relative URL below (and per-page canonicals) resolve absolutely.
  metadataBase: new URL(siteConfig.url),
  // No `title.template` here on purpose — pageMetadata() builds each page's
  // full title so the <title> and og:title are set from one place.
  //
  // The home page overrides <title> with a keyword-first version for search
  // but inherits this brand-first og:title, which is the one that reads better
  // when the link is shared.
  title: siteTitle,
  description: siteConfig.description,
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    title: siteTitle,
    description: siteConfig.description,
    images: [{ url: "/images/hero.jpg", alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteConfig.description,
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  // Australian English and the local phone number, spelled out for crawlers
  // that read these rather than inferring from copy.
  other: { "geo.region": "AU-QLD", "geo.placename": "Brisbane" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-foreground">
        {/* LocalBusiness — the anchor every other schema block references by
            @id. Sitewide, so it appears on all 49 pages. */}
        <JsonLd schema={localBusinessSchema()} />
        <MotionProvider>
          <ScrollProgress />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}

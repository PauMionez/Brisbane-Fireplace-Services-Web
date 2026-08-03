import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MotionProvider from "@/components/ui/MotionProvider";
import ScrollProgress from "@/components/ui/ScrollProgress";
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
  title: siteTitle,
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteConfig.url,
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
  robots: { index: true, follow: true },
};

/**
 * LocalBusiness structured data. Tells Google the phone, hours and service
 * area in machine-readable form — the signals that matter for local search.
 */
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#business`,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phoneHref.replace("tel:", ""),
  email: siteConfig.email,
  image: `${siteConfig.url}/images/hero.jpg`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brisbane",
    addressRegion: "QLD",
    addressCountry: "AU",
  },
  areaServed: ["Brisbane", "Sunshine Coast", "Gold Coast"].map((name) => ({
    "@type": "City",
    name,
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema).replace(/</g, "\\u003c"),
          }}
        />
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

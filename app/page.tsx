import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import IntroSection from "@/components/sections/IntroSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Gallery from "@/components/sections/Gallery";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";
import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

/**
 * The home page leads with the search terms rather than the brand — nobody
 * searches the business by name yet, they search "chimney cleaning brisbane".
 * Everything else inherits from the root layout.
 */
export const metadata: Metadata = {
  title: `Chimney Cleaning Brisbane | Sweeps, Repairs & Installation`,
  description: `Chimney sweeping, flue cleaning, repairs and fireplace installation across Brisbane and South East Queensland. ${siteConfig.yearsExperience} years' experience. Call ${siteConfig.phone}.`,
  alternates: { canonical: absoluteUrl("/") },
};

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ServicesGrid />
      <Gallery />
      <WhyChooseUs />
      <Testimonials />
      <CtaBanner />
    </>
  );
}

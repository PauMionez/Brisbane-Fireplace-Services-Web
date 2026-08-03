import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import Accordion from "@/components/ui/Accordion";
import { faqItems } from "@/lib/data/faq";
import { siteConfig } from "@/lib/site-config";
import ContactCards from "./_components/ContactCards";

export const metadata: Metadata = {
  title: `FAQ | ${siteConfig.name}`,
  description: "Frequently asked questions about our chimney and fireplace services.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="F.A.Q." title="Frequently Asked Questions" />

      <section className="relative overflow-hidden py-20">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="animate-blob-delay absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-ember/10 blur-3xl" />
        </div>
        <Container className="relative max-w-3xl">
          <Accordion items={faqItems} />
          <ContactCards />
        </Container>
      </section>
    </>
  );
}

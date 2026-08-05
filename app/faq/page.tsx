import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import Accordion from "@/components/ui/Accordion";
import { faqItems } from "@/lib/data/faq";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import ContactCards from "./_components/ContactCards";

export const metadata: Metadata = pageMetadata({
  title: "Chimney Sweep FAQ",
  description:
    "How often should a chimney be cleaned? How long does a sweep take? Is it messy? Answers to the questions Brisbane homeowners ask us most.",
  path: "/faq",
  image: "/images/hero-faq.jpg",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: "FAQ", path: "/faq" }])} />
      <PageHero
        eyebrow="F.A.Q."
        title="Frequently Asked Questions"
        image="/images/hero-faq.jpg"
        imagePosition="center 70%"
      />

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

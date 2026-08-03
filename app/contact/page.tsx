import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/ui/ContactForm";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site-config";
import ContactInfo from "./_components/ContactInfo";
import ServiceArea from "@/components/sections/ServiceArea";

export const metadata: Metadata = {
  title: `Contact | ${siteConfig.name}`,
  description: "Get in touch with us — we're happy to help.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Make a question"
        description="Feel free to contact us. We are happy to help you."
      />

      <section className="relative overflow-hidden py-10">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="animate-blob absolute -top-16 -left-24 h-80 w-80 rounded-full bg-ember/20 blur-3xl" />
          <div className="animate-blob-delay absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-ember/15 blur-3xl" />
        </div>
        <Container className="relative grid gap-10 lg:grid-cols-3">
          <Reveal direction="right" className="lg:col-span-2">
            <ContactForm />
          </Reveal>

          <div className="space-y-4">
            <ContactInfo />
            <ServiceArea />
          </div>
        </Container>
      </section>
    </>
  );
}

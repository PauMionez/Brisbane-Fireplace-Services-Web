import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CtaBanner from "@/components/sections/CtaBanner";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import LazyVideo from "@/components/ui/LazyVideo";
import { siteConfig } from "@/lib/site-config";
import StatsPanel from "./_components/StatsPanel";

export const metadata: Metadata = {
  title: `About | ${siteConfig.name}`,
  description: `Learn more about ${siteConfig.name} and our chimney and fireplace work.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Read more about us and our chimney work"
        description="Punctual, efficient, and perfectly clean — every time."
        image="/images/hero-about.jpg"
      />

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <Reveal direction="right">
              <SectionHeading eyebrow="Our Story" title={`${siteConfig.name} is more than a chimney cleaning company`} />
            </Reveal>
            <Reveal direction="right" delay={0.12}>
              <p className="mt-6 text-mist leading-relaxed">
                We&apos;re specialists in anything to do with fireplaces — from design and
                installation through to sourcing parts for your existing setup. Our team
                ensures you receive a professional service with a smile, guaranteed.
              </p>
            </Reveal>
            <Reveal direction="right" delay={0.22}>
              <p className="mt-4 text-mist leading-relaxed">
                We&apos;ve been in business for over {siteConfig.yearsExperience}{" "}
                years, and we&apos;re well known locally for providing great-value
                chimney services that both residential and commercial property
                owners can rely on.
              </p>
            </Reveal>
          </div>

          <StatsPanel />
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-charcoal ring-1 ring-line">
              <LazyVideo
                src="/videos/cleaning.mp4"
                label="Cleaning a chimney flue on site"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <Reveal direction="left">
              <SectionHeading eyebrow="A Few More Words" title="No chimney too tall, too dirty, or too bent" />
            </Reveal>
            <Reveal direction="left" delay={0.12}>
              <p className="mt-6 text-mist leading-relaxed">
                As masters of our trade we have an extensive knowledge base to overcome any
                problems you&apos;re experiencing with your log fire. We pride ourselves on
                attention to detail and cleanliness, along with a professional, punctual and
                polite service.
              </p>
            </Reveal>
            <Reveal direction="left" delay={0.22}>
              <p className="mt-4 text-mist leading-relaxed">
                Our technicians are professionally attired and use modern techniques and
                equipment. We guarantee a clean, efficient, professional service, and
                arrival at the appointed time.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}

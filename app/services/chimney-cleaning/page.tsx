import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CtaBanner from "@/components/sections/CtaBanner";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ParallaxImage from "@/components/ui/ParallaxImage";
import ServiceDetails from "@/components/ui/ServiceDetails";
import { commonIssues, detailedServicesFor } from "@/lib/data/services";
import { siteConfig } from "@/lib/site-config";
import IssuesList from "@/components/ui/IssuesList";

export const metadata: Metadata = {
  title: `Chimney Cleaning | ${siteConfig.name}`,
  description:
    "Expert chimney cleaning that keeps your fireplace running safely and efficiently.",
};

export default function ChimneyCleaningPage() {
  return (
    <>
      <PageHero
        eyebrow="Chimney Cleaning"
        title="Ensure your fireplace runs safely and efficiently"
        description="Local and trusted, with the right tools and equipment for any chimney."
        image="/images/hero-chimney-cleaning.jpg"
        imagePosition="center 35%"
      />

      <section className="py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal direction="right">
              <SectionHeading eyebrow="When Was It Last Cleaned?" title="Why regular cleaning matters" />
            </Reveal>
            <Reveal direction="right" delay={0.12}>
              <p className="mt-6 text-mist leading-relaxed">
                It&apos;s important that your chimney is cleaned on a regular basis — not
                only to prolong the life of the appliance, but to keep it working safely.
              </p>
            </Reveal>
            <Reveal direction="right" delay={0.22}>
              <p className="mt-4 text-mist leading-relaxed">
                Build-up of creosote from regular use, along with debris such as leaves,
                animal nests and branches, can result in a chimney fire. A regular clean
                prevents this and keeps your fireplace running efficiently. Chimney repairs
                are also far more expensive than a clean, so a routine sweep helps avoid
                costly work later.
              </p>
            </Reveal>
          </div>
          <ParallaxImage
            src="/images/chimney-cleaning-fire.jpg"
            alt="Flames burning cleanly in a serviced fireplace insert"
            delay={0.1}
          />
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <SectionHeading eyebrow="Common Problems" title="Log fire issues we resolve" />
          </Reveal>
          <IssuesList issues={commonIssues} />
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-4xl">
          <Reveal>
            <SectionHeading
              eyebrow="Beyond The Sweep"
              title="Repairs, safety checks and flue work"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-mist leading-relaxed">
              A clean is often only half the job. These are the things we&apos;re
              most often called out for alongside it — and the ones that make the
              difference between a fire that works and one you fight with.
            </p>
          </Reveal>
          <ServiceDetails services={detailedServicesFor("chimney-cleaning")} />
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}

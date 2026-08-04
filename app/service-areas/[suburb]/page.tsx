import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Phone } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CtaBanner from "@/components/sections/CtaBanner";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ParallaxImage from "@/components/ui/ParallaxImage";
import IssuesList from "@/components/ui/IssuesList";
import { commonIssues, serviceHref, services } from "@/lib/data/services";
import {
  areaHeading,
  areaIntro,
  findArea,
  serviceAreas,
} from "@/lib/data/service-areas";
import { siteConfig } from "@/lib/site-config";

type Props = { params: Promise<{ suburb: string }> };

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ suburb: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { suburb } = await params;
  const area = findArea(suburb);
  if (!area) return {};

  const title = `${areaHeading(area)} | ${siteConfig.name}`;
  const description =
    areaIntro(area).slice(0, 155).replace(/\s+\S*$/, "") + "…";

  return {
    title,
    description,
    alternates: { canonical: `/service-areas/${area.slug}` },
    openGraph: { title, description, url: `/service-areas/${area.slug}` },
  };
}

export default async function ServiceAreaPage({ params }: Props) {
  const { suburb } = await params;
  const area = findArea(suburb);
  if (!area) notFound();

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    `${area.name} QLD`
  )}&z=12&output=embed`;

  return (
    <>
      <PageHero
        eyebrow={area.region}
        title={areaHeading(area)}
        description={`Sweeping, repairs and installations for ${area.name} homes and businesses.`}
        image={area.heroImage ?? "/images/hero-moreton-bay.jpg"}
        imagePosition="center 70%"
      />

      <section className="py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal direction="right">
              <SectionHeading
                eyebrow={`Servicing ${area.name}`}
                title="A local sweep, without the wait"
              />
            </Reveal>
            <Reveal direction="right" delay={0.12}>
              <p className="mt-6 text-mist leading-relaxed">
                {areaIntro(area)}
              </p>
            </Reveal>
            <Reveal direction="right" delay={0.2}>
              <p className="mt-4 text-mist leading-relaxed">
                After {siteConfig.yearsExperience} years across South East
                Queensland we&apos;ve worked on just about every appliance and
                flue arrangement going — open masonry fireplaces, modern inserts,
                freestanding wood heaters and everything fitted in between.
                {area.note ? ` ${area.note}` : ""}
              </p>
            </Reveal>
            <Reveal direction="right" delay={0.28}>
              <a
                href={siteConfig.phoneHref}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 text-sm font-semibold tracking-wide text-white uppercase shadow-lg shadow-ember/30 transition-colors hover:bg-ember-dark"
              >
                <Phone size={16} />
                {siteConfig.phone}
              </a>
            </Reveal>
          </div>

          <ParallaxImage
            src="/images/gallery-flue-cap-install.jpg"
            alt="A flue cap fitted on a rooftop chimney"
            delay={0.1}
          />
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container className="max-w-4xl">
          <Reveal>
            <SectionHeading
              eyebrow="What We Do"
              title={`Our services in ${area.name}`}
            />
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={`${service.slug}-${index}`} delay={index * 0.06}>
                <Link
                  href={serviceHref(service)}
                  className="group block h-full rounded-2xl border border-line p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ember hover:shadow-lg"
                >
                  <h3 className="font-semibold text-charcoal group-hover:text-ember">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-mist leading-relaxed">
                    {service.summary}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow="Common Problems"
              title={`Faults we fix around ${area.name}`}
            />
          </Reveal>
          <IssuesList issues={commonIssues} />
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container className="max-w-4xl">
          <Reveal>
            <SectionHeading eyebrow="Getting There" title={`${area.name}, ${area.region}`} />
          </Reveal>
          <Reveal delay={0.12}>
            <div className="relative mt-8 aspect-4/3 w-full overflow-hidden rounded-2xl ring-1 ring-line sm:aspect-video">
              <iframe
                src={mapSrc}
                title={`Map of ${area.name}, Queensland`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              href="/service-areas"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ember hover:underline"
            >
              <ArrowLeft size={16} />
              See all service areas
            </Link>
          </Reveal>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}

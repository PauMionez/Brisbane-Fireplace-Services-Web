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
    areaIntro(area).join(" ").slice(0, 155).replace(/\s+\S*$/, "") + "…";

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
        eyebrow={area.name}
        title={areaHeading(area)}
        description={`Sweeping, repairs and installations for ${area.name} homes and businesses.`}
        image="/images/gallery-flue-cap-install.jpg"
        imagePosition="center 70%"
      />

      <section className="relative overflow-hidden py-20">

        {/* Full-width background image — per area, from service-areas.ts */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${
              area.image ?? "/images/hero-moreton-bay.jpg"
            }')`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/35" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-6 lg:px-12">

          <div className="max-w-2xl">

            <Reveal direction="right">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
                SERVICING {area.name.toUpperCase()}
              </p>

              <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                A local sweep,
                <br />
                without the wait
              </h2>
            </Reveal>

            {areaIntro(area).map((paragraph, index) => (
              <Reveal key={index} direction="right" delay={0.12 + index * 0.08}>
                <p
                  className={`${
                    index === 0 ? "mt-8" : "mt-6"
                  } text-lg leading-8 text-white/90`}
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}

            <Reveal direction="right" delay={0.2}>
              <p className="mt-6 text-lg leading-8 text-white/90">
                After {siteConfig.yearsExperience} years across South East
                Queensland we&apos;ve worked on just about every appliance and flue
                arrangement going — open masonry fireplaces, modern inserts,
                freestanding wood heaters and everything fitted in between.
                {area.note ? ` ${area.note}` : ""}
              </p>
            </Reveal>

            <Reveal direction="right" delay={0.28}>
              <a
                href={siteConfig.phoneHref}
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-ember px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white shadow-xl transition hover:bg-ember-dark"
              >
                <Phone size={18} />
                {siteConfig.phone}
              </a>
            </Reveal>

          </div>
        </div>
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
            <SectionHeading
              eyebrow="Getting There"
              title={
                area.name === area.region
                  ? `${area.name}, Queensland`
                  : `${area.name}, ${area.region}`
              }
            />
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

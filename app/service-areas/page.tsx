import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import CtaBanner from "@/components/sections/CtaBanner";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { areasAlphabetical, serviceAreas } from "@/lib/data/service-areas";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Service Areas | ${siteConfig.name}`,
  description:
    "Chimney cleaning, repairs and fireplace installation across Brisbane, Ipswich, Logan, Redlands, the Sunshine Coast and the Gold Coast.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  const areas = areasAlphabetical();

  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Where we work"
        description="From the Sunshine Coast down to the Gold Coast — and most places in between."
        image="/images/hero-moreton-bay.jpg"
        imagePosition="center 70%"
      />

      <section className="py-20">
        <Container className="max-w-4xl">
          <Reveal>
            <SectionHeading
              eyebrow="Covering South East Queensland"
              title="We come to you"
            />
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 text-mist leading-relaxed">
              We&apos;re based in Brisbane and we travel. In any given week that
              might mean a sweep in the inner north, a flue cap out at Ipswich and
              an installation somewhere along the coast. Because we work to a
              regular run rather than a fixed shopfront, getting booked in usually
              doesn&apos;t mean waiting weeks — and you get the same equipment and
              the same tidy finish wherever you are.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-mist leading-relaxed">
              The {serviceAreas.length} areas below are the ones we visit most
              often. If your suburb isn&apos;t on the list it&apos;s still worth a
              call — we cover a good deal more ground than we can sensibly fit on
              one page.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-10 pb-20">
        <Container className="max-w-4xl">
          <Reveal>
            <SectionHeading eyebrow="A–Z" title="Areas We Service" />
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="mt-8 columns-1 gap-8 sm:columns-2 lg:columns-3">
              {areas.map((area) => (
                <li key={area.slug} className="mb-2 break-inside-avoid">
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className="group flex items-baseline gap-2 text-ember hover:underline"
                  >
                    <span aria-hidden className="text-ember/50">
                      &bull;
                    </span>
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}

import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CtaBanner from "@/components/sections/CtaBanner";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ParallaxImage from "@/components/ui/ParallaxImage";
import ServiceDetails from "@/components/ui/ServiceDetails";
import { detailedServicesFor } from "@/lib/data/services";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata, serviceSchema } from "@/lib/seo";
import OptionsList from "./_components/OptionsList";

const description =
  "Fireplace and wood heater installation across Brisbane. Supply and install or install only, brand-independent advice, and a flue fitted right the first time.";

export const metadata: Metadata = pageMetadata({
  title: "Fireplace & Wood Heater Installation",
  description,
  path: "/services/fireplace-installation",
  image: "/images/hero-fireplace-installation.jpg",
});

const options = [
  {
    title: "Supply and installation, or installation only",
    description:
      "Need advice on the right fireplace for your property? We'll talk through your needs, requirements and budget, then arrange the purchase and installation. Already bought a fireplace? We can handle the installation alone.",
  },
  {
    title: "The best fit for your property",
    description:
      "We're not tied to any particular fireplace brand, so our recommendations are unbiased — based only on your needs, requirements and price range.",
  },
];

export default function FireplaceInstallationPage() {
  return (
    <>
      <JsonLd
        schema={[
          serviceSchema({
            name: "Fireplace Installation",
            description,
            path: "/services/fireplace-installation",
          }),
          breadcrumbSchema([
            {
              name: "Fireplace Installation",
              path: "/services/fireplace-installation",
            },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Fireplace Installation"
        title="A wide range of options for your fireplace installation needs"
        description="Whether you're building new or renovating, we'll make sure your fireplace works well from day one."
        image="/images/hero-fireplace-installation.jpg"
        imagePosition="center 30%"
      />

      <section className="py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal direction="right">
              <SectionHeading eyebrow="Every Property Is Different" title="Customised to suit your budget and needs" />
            </Reveal>
            <Reveal direction="right" delay={0.12}>
              <p className="mt-6 text-mist leading-relaxed">
                No two clients are the same — our services are tailored to suit your
                budget and individual requirements, so you get the right fireplace for
                your property. Installed correctly the first time, you won&apos;t need to
                worry about performance issues or costly repairs down the track.
              </p>
            </Reveal>
          </div>
          <ParallaxImage
            src="/images/gallery-flue-cap-install.jpg"
            alt="A newly fitted flue cap on a rooftop chimney"
            delay={0.1}
          />
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container className="max-w-3xl">
          <OptionsList options={options} />
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-4xl">
          <Reveal>
            <SectionHeading
              eyebrow="While We're There"
              title="Dampers, mesh and keeping the flue sealed"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-mist leading-relaxed">
              Worth sorting at the same time as an installation, while the flue is
              already open and we&apos;re already on the roof.
            </p>
          </Reveal>
          <ServiceDetails
            services={detailedServicesFor("fireplace-installation")}
          />
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}

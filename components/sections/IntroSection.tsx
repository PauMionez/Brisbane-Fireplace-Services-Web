"use client";

import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Stagger, { staggerItem } from "@/components/ui/Stagger";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

const highlights = ["Chimney expert", "Affordable pricing", "Local and trusted"];

export default function IntroSection() {
  return (
    <section className="py-20">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <SectionHeading eyebrow="What We Do" title="Cleaning, Repairs & Installations" />
          <p className="mt-6 text-mist leading-relaxed">
            Looking for a reliable chimney sweep or fireplace installer in the{" "}
            {siteConfig.suburb.split(",")[0]} area? {siteConfig.name} has built a
            reputation for completing chimney services to a consistently high standard,
            for both residential and commercial customers.
          </p>
          <p className="mt-4 text-mist leading-relaxed">
            With over {siteConfig.yearsExperience}{" "}
            years of combined experience, we&apos;ve developed the knowledge to
            handle any fireplace or chimney, no matter the age or condition.
          </p>
        </Reveal>
        <Stagger className="grid gap-4 sm:grid-cols-1">
          {highlights.map((item) => (
            <motion.div
              key={item}
              variants={staggerItem}
              whileHover={{ x: 4 }}
              className="flex items-center gap-3 rounded-xl border border-line bg-white px-5 py-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ember/10 text-ember">
                <Check size={18} />
              </span>
              <span className="font-medium text-charcoal">{item}</span>
            </motion.div>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

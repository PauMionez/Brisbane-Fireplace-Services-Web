"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, Tag } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Stagger, { staggerItem } from "@/components/ui/Stagger";

const reasons = [
  {
    icon: Tag,
    title: "No-Obligation Quotes",
    description:
      "Competitive, flat-rate pricing means no surprises later — just a straightforward quote.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Experienced Team",
    description:
      "Years of hands-on experience across residential and commercial fireplaces of every type.",
  },
  {
    icon: Clock,
    title: "Punctual & Tidy",
    description:
      "We arrive on time, work cleanly, and leave your home exactly as we found it.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Why Choose Us" title="A Service You Can Rely On" align="center" />
        </Reveal>
        <Stagger className="mt-12 grid gap-8 sm:grid-cols-3">
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ember text-white shadow-lg shadow-ember/30">
                <reason.icon size={24} />
              </div>
              <h3 className="mt-4 font-semibold text-charcoal">{reason.title}</h3>
              <p className="mt-2 text-sm text-mist leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

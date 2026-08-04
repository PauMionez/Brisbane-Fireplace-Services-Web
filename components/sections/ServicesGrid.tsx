"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Flame, Hammer, Shield, Wind, Wrench, Bird } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Stagger, { staggerItem } from "@/components/ui/Stagger";
import { serviceHref, services } from "@/lib/data/services";

const icons = [Flame, Hammer, Wrench, Shield, Wind, Bird];

export default function ServicesGrid() {
  return (
    <section className="bg-white py-20">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Our Services" title="Chimney & Fireplace Services in Brisbane" align="center" />
        </Reveal>
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div key={`${service.title}-${index}`} variants={staggerItem}>
                <Link
                  href={serviceHref(service)}
                  className="group block h-full rounded-2xl border border-line p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ember hover:shadow-xl hover:shadow-ember/10"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ember/10 text-ember transition-colors group-hover:bg-ember group-hover:text-white">
                      <Icon size={20} />
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-mist opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ember group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="mt-4 font-semibold text-charcoal group-hover:text-ember">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-mist leading-relaxed">
                    {service.summary}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}

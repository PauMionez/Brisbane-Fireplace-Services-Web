"use client";

import { motion } from "framer-motion";
import { Bird, CheckCircle2, Flame, ShieldCheck, Wind, Wrench } from "lucide-react";
import Stagger, { staggerItem } from "@/components/ui/Stagger";
import type { Service } from "@/lib/data/services";

const icons: Record<string, typeof Flame> = {
  "repairs-and-maintenance": Wrench,
  "safety-checks": ShieldCheck,
  "flue-extensions-and-top-caps": Wind,
  "dampers-and-mesh": Bird,
};

export default function ServiceDetails({ services }: { services: Service[] }) {
  return (
    <Stagger stagger={0.12} className="mt-10 space-y-8">
      {services.map((service) => {
        const Icon = service.anchor ? (icons[service.anchor] ?? Flame) : Flame;

        return (
          <motion.article
            key={service.title}
            id={service.anchor}
            variants={staggerItem}
            className="group scroll-mt-24 rounded-2xl border border-line bg-white p-6 shadow-sm transition-colors duration-300 hover:border-ember sm:p-8"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ember/10 text-ember transition-colors duration-300 group-hover:bg-ember group-hover:text-white">
                <Icon size={20} />
              </span>
              <div className="min-w-0">
                <h3 className="text-xl font-semibold text-charcoal">
                  {service.title}
                </h3>
                <p className="mt-3 text-mist leading-relaxed">{service.detail}</p>
              </div>
            </div>

            {service.points && (
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 sm:pl-15">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-charcoal-light"
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-ember"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </motion.article>
        );
      })}
    </Stagger>
  );
}

"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import Stagger, { staggerItemPop } from "@/components/ui/Stagger";
import { siteConfig } from "@/lib/site-config";

const cards = [
  {
    icon: Mail,
    label: "Send Us An Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Call Us",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
  },
];

export default function ContactCards() {
  return (
    <Stagger className="mt-12 grid gap-4 sm:grid-cols-2">
      {cards.map((card) => (
        <motion.a
          key={card.label}
          href={card.href}
          variants={staggerItemPop}
          whileHover={{ y: -6 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="group flex flex-col items-center gap-2 rounded-2xl border border-line bg-white p-6 text-center transition-colors hover:border-ember hover:shadow-lg hover:shadow-ember/10"
        >
          <motion.span
            whileHover={{ rotate: -8 }}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-ember/10 text-ember transition-colors duration-300 group-hover:bg-ember group-hover:text-white"
          >
            <card.icon size={20} />
          </motion.span>
          <p className="text-sm font-semibold tracking-wide text-ember uppercase">
            {card.label}
          </p>
          <p className="text-charcoal">{card.value}</p>
        </motion.a>
      ))}
    </Stagger>
  );
}

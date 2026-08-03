"use client";

import { motion } from "framer-motion";
import { Clock, Mail, Phone } from "lucide-react";
import Stagger, { staggerItem } from "@/components/ui/Stagger";
import { siteConfig } from "@/lib/site-config";

const infoItems = [
  { icon: Clock, label: "Open Hours", value: siteConfig.hours },
  {
    icon: Mail,
    label: "E-mail",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Mobile Phone",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
  },
];

export default function ContactInfo() {
  return (
    <Stagger stagger={0.1} delay={0.15} className="space-y-4">
      {infoItems.map((item) => (
        <motion.div
          key={item.label}
          variants={staggerItem}
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="group flex items-start gap-4 rounded-2xl border border-line bg-white p-6 shadow-sm transition-colors hover:border-ember"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ember/10 text-ember transition-colors duration-300 group-hover:bg-ember group-hover:text-white">
            <item.icon size={20} />
          </span>
          <div>
            <p className="text-sm font-semibold tracking-wide text-ember uppercase">
              {item.label}
            </p>
            {item.href ? (
              <a href={item.href} className="mt-1 block wrap-anywhere text-charcoal hover:text-ember">
                {item.value}
              </a>
            ) : (
              <p className="mt-1 text-charcoal">{item.value}</p>
            )}
          </div>
        </motion.div>
      ))}
    </Stagger>
  );
}

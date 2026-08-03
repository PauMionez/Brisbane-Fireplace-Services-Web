"use client";

import { motion } from "framer-motion";
import Stagger, { staggerItem } from "@/components/ui/Stagger";
import CountUp from "@/components/ui/CountUp";
import { siteConfig } from "@/lib/site-config";

const stats = [
  { label: "Years Of Experience", value: siteConfig.yearsExperience, suffix: "+" },
  { label: "Chimney & Fireplace Jobs", value: 1000, suffix: "+" },
];

export default function StatsPanel() {
  return (
    <Stagger className="grid grid-cols-2 gap-6 content-start">
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          variants={staggerItem}
          whileHover={{
            y: -6,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
          className="rounded-2xl border border-line bg-white p-6 text-center shadow-sm transition-colors hover:border-ember hover:shadow-lg hover:shadow-ember/10"
        >
          <p className="text-3xl font-bold text-ember">
            <CountUp value={stat.value} suffix={stat.suffix} />
          </p>
          <p className="mt-2 text-sm text-mist">{stat.label}</p>
        </motion.div>
      ))}
      <motion.div
        variants={staggerItem}
        whileHover={{
          y: -6,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }}
        className="col-span-2 rounded-2xl border border-line bg-white p-6 shadow-sm transition-colors hover:border-ember hover:shadow-lg hover:shadow-ember/10"
      >
        <p className="font-semibold text-charcoal">Our Mission</p>
        <p className="mt-2 text-sm text-mist leading-relaxed">
          We strive to be the best that we can be, maintaining the highest level
          of quality in every job we take on.
        </p>
      </motion.div>
    </Stagger>
  );
}

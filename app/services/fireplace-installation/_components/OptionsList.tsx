"use client";

import { motion } from "framer-motion";
import Stagger, { staggerItem } from "@/components/ui/Stagger";

const ease = [0.22, 1, 0.36, 1] as const;

export default function OptionsList({
  options,
}: {
  options: { title: string; description: string }[];
}) {
  return (
    <Stagger stagger={0.15} className="space-y-12">
      {options.map((option) => (
        <motion.div
          key={option.title}
          variants={staggerItem}
          className="group relative pl-6"
        >
          <motion.span
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="absolute top-1 bottom-1 left-0 w-0.5 origin-top rounded-full bg-ember/50 transition-colors duration-300 group-hover:bg-ember"
          />
          <h3 className="text-xl font-semibold text-charcoal transition-colors duration-300 group-hover:text-ember">
            {option.title}
          </h3>
          <p className="mt-3 text-mist leading-relaxed">{option.description}</p>
        </motion.div>
      ))}
    </Stagger>
  );
}

"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, margin: "-60px" } as const;

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
}) {
  const isCentered = align === "center";

  return (
    <div className={isCentered ? "text-center" : "text-left"}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.45, ease }}
          className={`mb-2 flex items-center gap-3 text-sm font-semibold tracking-[0.2em] text-ember uppercase ${
            isCentered ? "justify-center" : ""
          }`}
        >
          <motion.span
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewport}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className={`h-px w-8 bg-ember ${isCentered ? "origin-right" : "origin-left"}`}
          />
          {eyebrow}
          {isCentered && (
            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="h-px w-8 origin-left bg-ember"
            />
          )}
        </motion.p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ParallaxImage({
  src,
  alt,
  className = "",
  aspect = "aspect-4/3",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  delay = 0,
}: {
  src: string;
  alt: string;
  className?: string;
  aspect?: string;
  sizes?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease }}
      className={`group relative overflow-hidden rounded-2xl ${aspect} ${className}`}
    >
      <motion.div style={{ y }} className="absolute inset-x-0 -top-[7%] h-[114%]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </motion.div>

      <span
        aria-hidden
        className="pointer-events-none absolute -inset-y-12 -left-1/3 w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-all duration-[900ms] ease-out group-hover:left-[115%] group-hover:opacity-100"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-charcoal/5 ring-inset transition-colors duration-500 group-hover:ring-ember/40"
      />
    </motion.div>
  );
}

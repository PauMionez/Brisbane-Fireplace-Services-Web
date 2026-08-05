"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-bold tracking-wide uppercase transition-colors";

  const styles =
    variant === "primary"
      ? "bg-ember text-white shadow-lg shadow-ember/30 hover:bg-ember-dark"
      : "border border-white/40 text-white hover:bg-white/10";

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block"
    >
      <Link href={href} className={`${base} ${styles} ${className}`}>
        {children}
      </Link>
    </motion.div>
  );
}

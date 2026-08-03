"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Stagger, { staggerItemLeft } from "@/components/ui/Stagger";

export default function IssuesList({ issues }: { issues: string[] }) {
  return (
    <Stagger as="ul" stagger={0.06} className="mt-8 grid gap-3 sm:grid-cols-2">
      {issues.map((issue) => (
        <motion.li
          key={issue}
          variants={staggerItemLeft}
          whileHover={{
            x: 5,
            transition: { type: "spring", stiffness: 320, damping: 20 },
          }}
          className="group flex items-start gap-3 rounded-xl border border-line bg-cream px-4 py-3 text-sm text-charcoal-light transition-colors hover:border-ember hover:bg-white"
        >
          <CheckCircle2
            size={18}
            className="mt-0.5 shrink-0 text-ember transition-transform duration-300 group-hover:scale-125"
          />
          {issue}
        </motion.li>
      ))}
    </Stagger>
  );
}

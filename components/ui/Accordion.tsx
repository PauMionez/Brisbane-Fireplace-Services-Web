"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const row = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};

export default function Accordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <motion.div
      variants={list}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="divide-y divide-line border-y border-line"
    >
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <motion.div key={item.question} variants={row} className="group relative">
            <motion.span
              aria-hidden
              initial={false}
              animate={{ scaleY: isOpen ? 1 : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.3, ease }}
              className="absolute top-3 bottom-3 -left-3 w-0.5 origin-center rounded-full bg-ember"
            />
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <motion.span
                animate={{ x: isOpen ? 4 : 0, color: isOpen ? "#1f6fb2" : "#0f1a2b" }}
                transition={{ duration: 0.3, ease }}
                className="font-semibold group-hover:text-ember"
              >
                {item.question}
              </motion.span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.1 : 1 }}
                transition={{ duration: 0.25, ease }}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-ember transition-colors group-hover:bg-ember/10"
              >
                <ChevronDown size={20} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease }}
                  className="overflow-hidden"
                >
                  <motion.p
                    initial={{ y: -8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -8, opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.05, ease }}
                    className="pb-5 text-mist leading-relaxed"
                  >
                    {item.answer}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

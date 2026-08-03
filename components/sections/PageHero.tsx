"use client";

import Image from "next/image";
import { Fragment, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";
import EmberParticles from "@/components/ui/EmberParticles";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const titleGroup = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055 } },
};

const word = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease },
  },
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imagePosition = "center center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  /** Optional background photo. Without it the hero stays flat navy. */
  image?: string;
  imagePosition?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-charcoal text-white"
    >
      {image && (
        <motion.div aria-hidden style={{ y: glowY }} className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: imagePosition }}
          />
          {/* Heavier on the left where the heading sits, lifting to the right
              so the photo stays visible. This hero is short, so it needs a
              denser scrim than the home page one. */}
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/85 to-charcoal/45" />
          <div className="absolute inset-0 bg-ember/10" />
        </motion.div>
      )}

      <motion.div
        aria-hidden
        style={{ y: glowY }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="animate-blob absolute -top-24 -left-16 h-72 w-72 rounded-full bg-ember/25 blur-3xl" />
        <div className="animate-blob-delay absolute -right-24 top-1/2 h-80 w-80 rounded-full bg-ember/15 blur-3xl" />
      </motion.div>

      <EmberParticles />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative"
      >
        <Container className="py-16 sm:py-20">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p
              variants={item}
              className="flex items-center gap-3 text-sm font-semibold tracking-[0.3em] text-ember uppercase"
            >
              <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.2, ease }}
                className="h-px w-10 origin-left bg-ember"
              />
              {eyebrow}
            </motion.p>

            <motion.h1
              variants={titleGroup}
              className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl"
            >
              {title.split(" ").map((text, index) => (
                <Fragment key={`${text}-${index}`}>
                  <motion.span variants={word} className="inline-block">
                    {text}
                  </motion.span>{" "}
                </Fragment>
              ))}
            </motion.h1>

            {description && (
              <motion.p variants={item} className="mt-4 max-w-2xl text-white/70">
                {description}
              </motion.p>
            )}
          </motion.div>
        </Container>
      </motion.div>

      <div
        aria-hidden
        className="animate-sweep absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ember to-transparent"
      />
    </section>
  );
}

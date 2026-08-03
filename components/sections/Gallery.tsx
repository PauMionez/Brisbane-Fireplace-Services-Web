"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Stagger, { staggerItem } from "@/components/ui/Stagger";
import LazyVideo from "@/components/ui/LazyVideo";

type GalleryItem =
  | { kind: "video"; src: string; caption: string }
  | { kind: "photo"; src: string; caption: string };

const items: GalleryItem[] = [
  { kind: "video", src: "/videos/fireplace-loop.mp4", caption: "On the job" },
  {
    kind: "photo",
    src: "/images/gallery-freestanding-cylinder.jpg",
    caption: "Modern freestanding installs",
  },
  { kind: "photo", src: "/images/gallery-coonara-heater.jpg", caption: "Freestanding wood heaters" },
  { kind: "photo", src: "/images/gallery-flue-cap-install.jpg", caption: "New flue caps fitted" },
  { kind: "photo", src: "/images/gallery-chimney-cowl.jpg", caption: "Cowls and top caps" },
  { kind: "photo", src: "/images/gallery-commercial-flues.jpg", caption: "Commercial rooftop flues" },
];

export default function Gallery() {
  return (
    <section className="py-20">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Our Work" title="A Look at Recent Jobs" align="center" />
        </Reveal>
        <Stagger className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {items.map((item) => (
            <motion.div
              key={item.src}
              variants={staggerItem}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-charcoal"
            >
              {item.kind === "video" ? (
                <>
                  <LazyVideo
                    src={item.src}
                    label={item.caption}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span
                    aria-hidden
                    className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-charcoal/60 text-white backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-0"
                  >
                    <Play size={14} className="fill-white" />
                  </span>
                </>
              ) : (
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  sizes="(min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-charcoal/80 via-charcoal/0 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm font-medium text-white">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

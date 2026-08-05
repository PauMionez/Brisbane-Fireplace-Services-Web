"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Search } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Stagger, { staggerItem } from "@/components/ui/Stagger";
import LazyVideo from "@/components/ui/LazyVideo";

type Span = "tall" | "wide" | undefined;

type GalleryItem =
  | { kind: "video"; src: string; caption: string; span?: Span }
  | { kind: "photo"; src: string; caption: string; span?: Span };


const items: GalleryItem[] = [
  {
    kind: "photo",
    src: "/images/gallery-flue-replace-before-after.jpg",
    caption: "Before & after: flue replaced",
    span: "tall",
  },
  {
    kind: "photo",
    src: "/images/gallery-chimney-clean-before-after.jpg",
    caption: "Before & after: chimney sweep",
  },
  {
    kind: "photo",
    src: "/images/gallery-chimney-cap-before-after.jpg",
    caption: "Before & after: new chimney cap",
  },
  {
    kind: "photo",
    src: "/images/gallery-heritage-fireplace-clean.jpg",
    caption: "Heritage fireplace, cleaned",
  },
  {
    kind: "video",
    src: "/videos/fireplace-loop.mp4",
    caption: "On the job",
    span: "tall",
  },
  {
    kind: "photo",
    src: "/images/gallery-repainted-heater.jpg",
    caption: "Freshly repainted heater",
  },
  {
    kind: "photo",
    src: "/images/gallery-firebricks-replaced.jpg",
    caption: "Firebricks replaced",
  },
];

const spanClass: Record<NonNullable<Span>, string> = {
  tall: "row-span-2",
  wide: "col-span-2",
};

export default function Gallery() {
  return (
    <section className="py-20">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Our Work" title="A Look at Recent Jobs" align="center" />
        </Reveal>

        <Stagger
          className="mt-12 grid grid-cols-2 grid-flow-dense auto-rows-[12rem] gap-4 sm:grid-cols-3 sm:auto-rows-[14rem]"
        >
          {items.map((item) => (
            <motion.div
              key={item.src}
              variants={staggerItem}
              className={`group relative overflow-hidden rounded-2xl bg-charcoal ${
                item.span ? spanClass[item.span] : ""
              }`}
            >
              {item.kind === "video" ? (
                <>
                  <LazyVideo
                    src={item.src}
                    label={item.caption}
                    className="absolute inset-0 h-full w-full object-cover"
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
                  sizes={
                    item.span === "wide"
                      ? "(min-width: 640px) 66vw, 100vw"
                      : "(min-width: 640px) 33vw, 50vw"
                  }
                  className="object-cover"
                />
              )}

              {/* Hover reveal: dark tint + centred icon + caption, consistent
                  across every tile including the video. */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-charcoal/0 opacity-0 transition-all duration-300 group-hover:bg-charcoal/60 group-hover:opacity-100">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-charcoal">
                  {item.kind === "video" ? <Play size={18} /> : <Search size={18} />}
                </span>
                <p className="px-4 text-center text-sm font-medium text-white">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

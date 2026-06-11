"use client";

import { motion } from "framer-motion";
import { Youtube, ArrowRight } from "lucide-react";

const titleLines: { words: string[]; accentLast?: boolean }[] = [
  { words: ["AI", "Educator."] },
  { words: ["YouTube", "Creator."] },
  { words: ["Building", "the", "Future", "of", "Content."], accentLast: true },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24"
    >
      {/* Background grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid bg-grid-pattern opacity-60"
        aria-hidden="true"
      />
      {/* Radial gradient */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.08),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-5xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-6xl md:text-8xl"
        >
          {titleLines.map((line, lineIdx) => (
            <span key={lineIdx} className="block">
              {line.words.map((word, wordIdx) => {
                const isAccent =
                  line.accentLast &&
                  (word === "Future" || word === "of" || word === "Content.");
                return (
                  <motion.span
                    key={wordIdx}
                    variants={wordVariant}
                    className={`inline-block mr-3 sm:mr-4 ${
                      isAccent ? "text-accent" : "text-text-primary"
                    }`}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 max-w-2xl text-base text-text-secondary sm:text-lg"
        >
          Helping creators worldwide build profitable faceless YouTube
          channels using AI — from Uganda to the globe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="https://www.youtube.com/@AlexBestDigital"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-muted"
          >
            <Youtube size={18} aria-hidden="true" />
            Watch on YouTube
          </a>
          <a
            href="#academy"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-text-primary px-8 py-3.5 text-sm font-semibold text-text-primary transition-colors hover:bg-text-primary hover:text-charcoal"
          >
            Join the Academy
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-medium text-text-secondary"
        >
          <span>
            <span className="text-accent font-semibold">22K+</span> Subscribers
          </span>
          <span aria-hidden="true" className="text-border">
            ·
          </span>
          <span>
            <span className="text-accent font-semibold">1M+</span> Views
          </span>
          <span aria-hidden="true" className="text-border">
            ·
          </span>
          <span>
            <span className="text-accent font-semibold">190+</span> Videos
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-6 z-10 hidden items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-2 text-xs font-medium text-text-secondary backdrop-blur-sm sm:flex"
      >
        🇺🇬 Based in Uganda, Reaching the World
      </motion.div>
    </section>
  );
}

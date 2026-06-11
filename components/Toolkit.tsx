"use client";

import { motion } from "framer-motion";

const tools = [
  "VidIQ",
  "ElevenLabs",
  "Runway",
  "Kling AI",
  "CapCut",
  "Canva",
  "Midjourney",
  "Google AI Studio",
  "Seedance",
  "NotebookLM",
  "ChatGPT",
  "Claude",
  "Flux",
  "Heygen",
  "Sora",
  "Google Veo",
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const, delay: (i % 8) * 0.06 },
  }),
};

export default function Toolkit() {
  return (
    <section className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow">Tech Stack</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl md:text-5xl">
            My AI Toolkit
          </h2>
        </motion.div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {tools.map((tool, i) => (
            <motion.span
              key={tool}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="cursor-default rounded-full border border-accent/40 px-5 py-2 text-sm font-medium text-text-primary transition-colors duration-200 hover:bg-accent hover:text-white hover:border-accent"
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

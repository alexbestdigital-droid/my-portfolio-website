"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const tags = ["AI Tools", "Faceless YouTube", "Online Business", "Uganda 🇺🇬"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.15 },
  }),
};

export default function About() {
  return (
    <section id="about" className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
        {/* Left: Text */}
        <div>
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="eyebrow"
          >
            Who is Alex?
          </motion.span>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl md:text-5xl"
          >
            Turning AI curiosity into{" "}
            <span className="text-accent">real income</span> for creators.
          </motion.h2>

          <div className="mt-8 space-y-5 text-text-secondary">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              Alex Turanzyomwe is an AI educator and YouTube creator on a
              mission to demystify artificial intelligence for everyday
              creators. Through Alex Best Digital, he breaks down complex AI
              tools into simple, actionable workflows that anyone — anywhere —
              can use to build a content business.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
            >
              Based in Uganda, Alex represents a new generation of African
              creators proving that world-class digital education and
              influence can come from anywhere. His channel blends practical
              AI tutorials with honest, behind-the-scenes lessons on building
              a faceless YouTube channel from scratch.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
            >
              Today, his audience spans creators, students, and entrepreneurs
              across the globe — all learning how to combine AI tools with
              smart content strategy to build sustainable online income.
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={5}
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-surface px-5 py-3"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-accent" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            <span className="text-sm font-medium text-text-primary">
              Currently teaching at Alex Best Digital Academy
            </span>
          </motion.div>
        </div>

        {/* Right: Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex items-center justify-center"
        >
          <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-border bg-surface shadow-accent-glow sm:h-96 sm:w-96">
            <div className="relative h-56 w-56 overflow-hidden rounded-full bg-gradient-to-br from-accent to-accent-muted sm:h-72 sm:w-72">
              <Image
                src="/alex-best.jpeg"
                alt="Alex Turanzyomwe"
                fill
                sizes="(max-width: 640px) 14rem, 18rem"
                className="object-cover"
                priority
              />
            </div>

            {tags.map((tag, i) => {
              const positions = [
                "-top-2 -left-4 sm:-left-8",
                "top-8 -right-4 sm:-right-10",
                "bottom-10 -left-6 sm:-left-12",
                "-bottom-4 right-4 sm:right-0",
              ];
              return (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                  className={`absolute ${positions[i]} rounded-full border border-border bg-charcoal px-4 py-2 text-xs font-medium text-text-primary shadow-accent-glow`}
                >
                  {tag}
                </motion.span>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

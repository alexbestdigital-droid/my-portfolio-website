"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Step-by-step faceless channel creation",
  "AI video production workflows",
  "Monetization strategies that actually work",
  "Private community on Skool",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.15 },
  }),
};

export default function Academy() {
  return (
    <section
      id="academy"
      className="overflow-hidden rounded-none lg:mx-8 lg:my-8 lg:rounded-2xl"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Orange */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center bg-gradient-to-br from-accent to-accent-muted px-8 py-20 sm:px-12 lg:px-16"
        >
          <span className="inline-flex w-fit items-center rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-white">
            Taught by a creator who&apos;s done it
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl md:text-6xl">
            Learn. Build. Earn.
          </h2>
          <p className="mt-6 max-w-md text-base text-white/90 sm:text-lg">
            Alex Best Digital Academy gives you the exact roadmap to launch,
            grow, and monetize a faceless YouTube channel using AI — taught by
            someone building it in public, in real time.
          </p>
        </motion.div>

        {/* Right: Dark */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center bg-surface px-8 py-20 sm:px-12 lg:px-16"
        >
          <ul className="space-y-5">
            {features.map((feature, i) => (
              <motion.li
                key={feature}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15">
                  <Check size={14} className="text-accent" aria-hidden="true" />
                </span>
                <span className="text-base text-text-primary">{feature}</span>
              </motion.li>
            ))}
          </ul>

          <motion.a
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            href="#"
            className="mt-10 inline-flex w-fit items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-muted"
          >
            Join the Academy
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "🎬",
    title: "YouTube Content",
    description:
      "AI tool tutorials, faceless channel walkthroughs, and trending tech breakdowns made simple for any skill level.",
  },
  {
    icon: "🎓",
    title: "Online Education",
    description:
      "Courses at Alex Best Digital Academy teaching creators how to build real businesses with AI from the ground up.",
  },
  {
    icon: "🤖",
    title: "AI Workflows",
    description:
      "End-to-end automation pipelines using tools like VidIQ, ElevenLabs, Runway, and more to scale content production.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.15 },
  }),
};

export default function WhatIDo() {
  return (
    <section className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow">Focus Areas</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl md:text-5xl">
            What I Create &amp; Teach
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 1}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="accent-card rounded-r-xl p-8 transition-shadow duration-200 hover:shadow-[-3px_0_20px_rgba(249,115,22,0.45)]"
            >
              <span className="text-4xl" aria-hidden="true">
                {service.icon}
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em]">
                {service.title}
              </h3>
              <p className="mt-3 text-text-secondary">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Youtube, GraduationCap } from "lucide-react";

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@alexbestportfolio.com",
    href: "mailto:contact@alexbestportfolio.com",
  },
  {
    icon: Youtube,
    label: "YouTube",
    value: "@AlexBestDigital",
    href: "https://www.youtube.com/@AlexBestDigital",
  },
  {
    icon: GraduationCap,
    label: "Academy",
    value: "Alex Best Digital Academy",
    href: "#academy",
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

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow">Get In Touch</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl md:text-5xl">
            Let&apos;s Build Something Together
          </h2>
          <p className="mt-4 text-text-secondary">
            Open to brand partnerships, sponsorships, and collaborations.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {contactCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.a
                key={card.label}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="accent-card flex flex-col gap-3 rounded-r-xl p-6 transition-shadow duration-200 hover:shadow-[-3px_0_20px_rgba(249,115,22,0.45)]"
              >
                <Icon size={22} className="text-accent" aria-hidden="true" />
                <span className="text-xs font-medium uppercase tracking-[0.12em] text-text-secondary">
                  {card.label}
                </span>
                <span className="text-base font-medium text-text-primary break-words">
                  {card.value}
                </span>
              </motion.a>
            );
          })}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          onSubmit={handleSubmit}
          className="mx-auto mt-16 max-w-2xl space-y-5"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-text-primary">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text-primary outline-none transition-shadow duration-200 placeholder:text-text-secondary focus:border-accent focus:shadow-[0_0_0_3px_rgba(249,115,22,0.15)]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-primary">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text-primary outline-none transition-shadow duration-200 placeholder:text-text-secondary focus:border-accent focus:shadow-[0_0_0_3px_rgba(249,115,22,0.15)]"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-text-primary">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text-primary outline-none transition-shadow duration-200 placeholder:text-text-secondary focus:border-accent focus:shadow-[0_0_0_3px_rgba(249,115,22,0.15)]"
              placeholder="Tell me about your idea or partnership..."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-muted sm:w-auto"
          >
            Send Message
          </button>

          {submitted && (
            <p className="text-sm font-medium text-accent" role="status">
              Thanks for reaching out! I&apos;ll get back to you soon.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

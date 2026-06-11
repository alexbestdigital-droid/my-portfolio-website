"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  label: string;
  target: number;
  suffix: string;
  prefix?: string;
}

const stats: StatItem[] = [
  { label: "Subscribers", target: 22000, suffix: "+" },
  { label: "Total Views", target: 1000000, suffix: "+" },
  { label: "Videos Published", target: 190, suffix: "+" },
  { label: "AI Tools Covered", target: 50, suffix: "+" },
];

function formatNumber(value: number): string {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(value % 1000000 === 0 ? 0 : 1)}M`;
  }
  if (value >= 1000) {
    return `${(value / 1000).toFixed(value % 1000 === 0 ? 0 : 1)}K`;
  }
  return value.toString();
}

function CountUpStat({ stat, index }: { stat: StatItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1800;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * stat.target));

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setCount(stat.target);
      }
    };

    requestAnimationFrame(tick);
  }, [isInView, stat.target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.15 }}
      className="accent-card rounded-r-xl p-8 text-center"
    >
      <div className="text-4xl font-bold tracking-[-0.03em] text-accent sm:text-5xl">
        {formatNumber(count)}
        {stat.suffix}
      </div>
      <p className="mt-3 text-sm font-medium uppercase tracking-[0.12em] text-text-secondary">
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="bg-surface px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow">By The Numbers</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl md:text-5xl">
            The Numbers Don&apos;t Lie
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <CountUpStat key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center text-sm text-text-secondary"
        >
          Growing every week on YouTube{" "}
          <span className="font-medium text-text-primary">
            @AlexBestDigital
          </span>
        </motion.p>
      </div>
    </section>
  );
}

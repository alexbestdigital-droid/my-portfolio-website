"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface VideoItem {
  title: string;
  views: string;
}

const videos: VideoItem[] = [
  {
    title: "How I Made $0 to $500/Month With Faceless AI YouTube",
    views: "84K views",
  },
  {
    title: "This AI Tool Creates Full YouTube Videos AUTOMATICALLY",
    views: "112K views",
  },
  {
    title: "Top 5 AI Tools Every Creator Needs in 2025",
    views: "67K views",
  },
  {
    title: "I Cloned a $10K/Month YouTube Channel Using AI",
    views: "95K views",
  },
  {
    title: "How to Start a Faceless YouTube Channel From Uganda",
    views: "58K views",
  },
  {
    title: "VidIQ vs TubeBuddy: Which is Better for AI Creators?",
    views: "41K views",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: (i % 3) * 0.15 },
  }),
};

export default function FeaturedVideos() {
  return (
    <section id="work" className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow">YouTube Channel</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl md:text-5xl">
            Latest from the Channel
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, i) => (
            <motion.a
              key={video.title}
              href="https://www.youtube.com/@AlexBestDigital"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-shadow duration-200 hover:shadow-accent-glow"
            >
              <div className="relative flex aspect-video items-center justify-center bg-charcoal">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/40 bg-accent/10 transition-transform duration-200 group-hover:scale-110">
                  <Play
                    size={22}
                    className="ml-0.5 fill-accent text-accent"
                    aria-hidden="true"
                  />
                </div>
                <span className="absolute right-3 top-3 rounded-full bg-charcoal/80 px-3 py-1 text-xs font-medium text-text-secondary">
                  {video.views}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold leading-snug tracking-[-0.01em] text-text-primary">
                  {video.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Watch Now →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Section } from "@/components/layout/section";

const bullets = [
  {
    index: "01",
    text: "studying cs at the university of pennsylvania",
  },
  {
    index: "02",
    text: "into signal processing, optimization, ai/ml, music, quant, and physics",
  },
  {
    index: "03",
    text: "dj, beli enthusiast, runner, window shopper",
  },
];

export function About() {
  return (
    <Section id="about">
      <div className="space-y-6">
        {bullets.map((bullet, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            className="flex items-start gap-4 text-lg"
          >
            <span className="font-mono text-sm text-muted-foreground flex-shrink-0 pt-0.5">
              {bullet.index}
            </span>
            <p>{bullet.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

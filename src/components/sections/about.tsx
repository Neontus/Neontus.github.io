"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Section } from "@/components/layout/section";
import { aboutBullets } from "@/data/about";

export function About() {
  return (
    <Section id="about">
      <div className="space-y-6">
        {aboutBullets.map((bullet, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            className="flex items-start gap-4 text-lg"
          >
            <span className="font-mono text-sm text-muted-foreground flex-shrink-0 pt-0.5">
              {bullet.index}
            </span>
            <p>{bullet.content}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

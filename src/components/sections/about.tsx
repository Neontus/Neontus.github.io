"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Section } from "@/components/layout/section";

const RACE_URL = "https://results.laurelt.com/luv/results?pk=8716661";

function RunnerLink() {
  const [hovered, setHovered] = useState(false);

  return (
    <span className="relative inline-block">
      <a
        href={RACE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2 decoration-dotted hover:decoration-solid transition-all"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        runner
      </a>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 pointer-events-none"
            style={{ width: 260 }}
          >
            <div className="rounded-lg border border-border bg-background shadow-lg overflow-hidden text-sm">
              <div className="bg-muted px-3 py-2 border-b border-border">
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                  Saucony Love Run Philly · Mar 29, 2026
                </p>
                <p className="font-medium text-foreground mt-0.5">
                  Juno Kim <span className="text-muted-foreground font-normal">#5540</span>
                </p>
              </div>
              <div className="px-3 py-3 grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-xl font-semibold tabular-nums text-foreground leading-none">
                    1:57:49
                  </p>
                  <p className="font-mono text-[9px] text-muted-foreground mt-1 uppercase tracking-wider">
                    finish
                  </p>
                </div>
                <div>
                  <p className="text-xl font-semibold tabular-nums text-foreground leading-none">
                    8:59
                  </p>
                  <p className="font-mono text-[9px] text-muted-foreground mt-1 uppercase tracking-wider">
                    /mile
                  </p>
                </div>
                <div>
                  <p className="text-xl font-semibold tabular-nums text-foreground leading-none">
                    13.1
                  </p>
                  <p className="font-mono text-[9px] text-muted-foreground mt-1 uppercase tracking-wider">
                    miles
                  </p>
                </div>
              </div>
              <div className="px-3 pb-3 flex justify-between font-mono text-[10px] text-muted-foreground">
                <span>3272 / 9674 overall</span>
                <span>487 / 953 M20-24</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-2 h-2 rotate-45 bg-background border-r border-b border-border -mt-1" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}

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
    content: (
      <>
        dj, beli enthusiast, <RunnerLink />, window shopper
      </>
    ),
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
            <p>{"content" in bullet ? bullet.content : bullet.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

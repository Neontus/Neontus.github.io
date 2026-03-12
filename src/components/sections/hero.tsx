"use client";

import { motion } from "framer-motion";
import { textReveal, fadeInUp } from "@/lib/animations";
import { Container } from "@/components/layout/container";
import { ChevronDown } from "lucide-react";

const words = ["juno", "kim"];

export function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center relative">
      <Container>
        <div className="flex flex-col gap-4">
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl tracking-tight">
            {words.map((word, i) => (
              <motion.span
                key={word}
                custom={i}
                variants={textReveal}
                initial="hidden"
                animate="visible"
                className="inline-block mr-4"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
            className="text-muted-foreground text-lg sm:text-xl max-w-lg"
          >
            cs @ upenn. signal processing, optimization, ai/ml.
          </motion.p>
        </div>
      </Container>
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}

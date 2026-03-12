"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Container } from "./container";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id={id} className={cn("py-section", className)}>
      <Container>
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {children}
        </motion.div>
      </Container>
    </section>
  );
}

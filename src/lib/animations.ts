import type { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const expandCollapse: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.4, ease: [0.25, 0.4, 0.25, 1] },
  },
  expanded: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.4, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export const textReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

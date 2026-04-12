"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Section } from "@/components/layout/section";
import { IconLink } from "@/components/ui/icon-link";
import { contactLinks } from "@/constants/links";

export function Contact() {
  return (
    <Section id="contact">
      <motion.h2
        variants={fadeInUp}
        className="font-serif text-3xl sm:text-4xl mb-content"
      >
        say hello
      </motion.h2>
      <motion.div variants={fadeInUp} className="flex items-center gap-6">
        {contactLinks.map((link, i) => (
          <IconLink key={i} {...link} />
        ))}
      </motion.div>
    </Section>
  );
}

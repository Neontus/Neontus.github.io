"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Section } from "@/components/layout/section";
import { Mail, Linkedin, Github } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "email",
    href: "mailto:junokimzone@gmail.com",
  },
  {
    icon: Linkedin,
    label: "linkedin",
    href: "https://linkedin.com/in/junokimzone",
  },
  {
    icon: Github,
    label: "github",
    href: "https://github.com/Neontus",
  },
];

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
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <link.icon size={16} />
            <span>{link.label}</span>
          </a>
        ))}
      </motion.div>
    </Section>
  );
}

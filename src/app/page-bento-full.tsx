"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/container";
import { fadeInUp } from "@/lib/animations";
import { projects } from "@/data/projects";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { IconLink } from "@/components/ui/icon-link";
import { contactLinks } from "@/constants/links";

/**
 * FULL BENTO LAYOUT (Option A)
 * Single viewport (100vh) bento grid - desktop optimized
 * All content visible without scrolling
 *
 * To use: Replace the content in src/app/page.tsx with this
 */

const aboutBullets = [
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


export default function Home() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const visibleProjects = projects.filter((p) => !p.hidden);

  return (
    <main className="h-screen overflow-hidden bg-background text-foreground">
      <Container>
        <div className="h-screen grid grid-cols-3 gap-8 pt-20 pb-8">
          {/* Left column: Name + About bullets */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-between overflow-y-auto pr-4"
          >
            {/* Name section */}
            <div>
              <h1 className="font-serif text-6xl tracking-tight mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  juno
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                >
                  kim
                </motion.div>
              </h1>
              <motion.p
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 }}
                className="text-muted-foreground text-base mb-12"
              >
                cs @ upenn. signal processing, optimization, ai/ml.
              </motion.p>
            </div>

            {/* About bullets */}
            <div className="space-y-4">
              {aboutBullets.map((bullet, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-start gap-3 text-sm"
                >
                  <span className="font-mono text-xs text-muted-foreground flex-shrink-0 pt-0.5">
                    {bullet.index}
                  </span>
                  <p className="text-muted-foreground">{bullet.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Middle column: Projects list */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="overflow-y-auto pr-4"
          >
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="font-serif text-2xl mb-6"
            >
              projects
            </motion.h2>
            <div className="space-y-3">
              {visibleProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="border-b border-border pb-3"
                >
                  <button
                    onClick={() =>
                      setExpandedId(expandedId === project.id ? null : project.id)
                    }
                    className="w-full text-left group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground rounded-sm"
                  >
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif text-base truncate">
                          {project.title}
                        </h3>
                        <p className="text-xs text-muted-foreground truncate">
                          {project.description}
                        </p>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedId === project.id ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-muted-foreground group-hover:text-foreground flex-shrink-0"
                      >
                        <ChevronRight size={14} />
                      </motion.div>
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                  {expandedId === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
                      className="mt-3 pt-3 border-t border-border overflow-hidden"
                    >
                      <div className="space-y-2">
                        {project.details.map((detail, idx) => (
                          <p
                            key={idx}
                            className="text-xs text-muted-foreground leading-relaxed"
                          >
                            {detail}
                          </p>
                        ))}
                        <div className="flex flex-wrap gap-1 mt-3 pt-3 border-t border-border">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column: Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col justify-between"
          >
            <div>
              <motion.h2
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="font-serif text-2xl mb-8"
              >
                say hello
              </motion.h2>
              <motion.div variants={fadeInUp} className="flex flex-col gap-4">
                {contactLinks.map((link, i) => (
                  <IconLink key={i} size="sm" {...link} />
                ))}
              </motion.div>
            </div>

            {/* Footer text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-xs text-muted-foreground"
            >
              designed & built by juno
            </motion.p>
          </motion.div>
        </div>
      </Container>
    </main>
  );
}

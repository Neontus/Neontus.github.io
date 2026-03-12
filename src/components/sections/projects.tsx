"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Section } from "@/components/layout/section";
import { ProjectListItem } from "@/components/project/project-list-item";
import { projects } from "@/data/projects";

export function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <Section id="projects">
      <motion.h2
        variants={fadeInUp}
        className="font-serif text-3xl sm:text-4xl mb-subsection"
      >
        projects
      </motion.h2>
      <div>
        {projects.filter((p) => !p.hidden).map((project) => (
          <ProjectListItem
            key={project.id}
            project={project}
            isExpanded={expandedId === project.id}
            onToggle={() =>
              setExpandedId(expandedId === project.id ? null : project.id)
            }
          />
        ))}
      </div>
    </Section>
  );
}

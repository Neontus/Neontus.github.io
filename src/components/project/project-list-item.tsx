"use client";

import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { ChevronRight } from "lucide-react";
import { ProjectDetail } from "./project-detail";
import type { Project } from "@/data/projects";

interface ProjectListItemProps {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
}

export function ProjectListItem({
  project,
  isExpanded,
  onToggle,
}: ProjectListItemProps) {
  return (
    <motion.div variants={fadeInUp} className="border-b border-border">
      <button
        onClick={onToggle}
        className="w-full py-4 flex items-center justify-between gap-4 text-left group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground rounded-sm"
      >
        <div className="flex items-baseline justify-between flex-1 min-w-0 gap-4">
          <h3 className="font-serif text-xl sm:text-2xl flex-shrink-0">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground truncate text-right">
            {project.description}
          </p>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0"
        >
          <ChevronRight size={18} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isExpanded && <ProjectDetail project={project} />}
      </AnimatePresence>
    </motion.div>
  );
}

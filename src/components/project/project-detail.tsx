"use client";

import { motion } from "framer-motion";
import { expandCollapse } from "@/lib/animations";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Twitter } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <motion.div
      variants={expandCollapse}
      initial="collapsed"
      animate="expanded"
      exit="collapsed"
      className="overflow-hidden"
    >
      <div className="pt-4 pb-2 flex flex-col md:flex-row gap-6">
        <div className="md:w-[60%] space-y-2">
          {project.details.map((detail, i) => (
            <p key={i} className="text-sm text-muted-foreground leading-relaxed">
              {detail}
            </p>
          ))}
        </div>
        <div className="md:w-[40%] space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={14} />
                source
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink size={14} />
                demo
              </a>
            )}
            {project.twitter && (
              <a
                href={project.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter size={14} />
                x
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

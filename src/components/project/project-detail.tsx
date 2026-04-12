"use client";

import { motion } from "framer-motion";
import { expandCollapse } from "@/lib/animations";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Twitter, FileText, Video } from "lucide-react";
import type { Project } from "@/data/projects";
import { IconLink } from "@/components/ui/icon-link";

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
          <div className="flex flex-wrap gap-3">
            {project.github && (
              <IconLink size="sm" href={project.github} icon={Github} label="source" />
            )}
            {project.demo && (
              <IconLink size="sm" href={project.demo} icon={ExternalLink} label="demo" />
            )}
            {project.twitter && (
              <IconLink size="sm" href={project.twitter} icon={Twitter} label="x" />
            )}
            {project.slides && (
              <IconLink size="sm" href={project.slides} icon={FileText} label="slides" />
            )}
            {project.video1 && (
              <IconLink size="sm" href={project.video1} icon={Video} label="vid 1" />
            )}
            {project.video2 && (
              <IconLink size="sm" href={project.video2} icon={Video} label="vid 2" />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

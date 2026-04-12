"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projects } from "@/data/projects";
import { latestActivity } from "@/data/activity";
import type { Activity } from "@/data/activity";
import { contactLinks } from "@/constants/links";
import { IconLink } from "@/components/ui/icon-link";
import { aboutBullets, RunnerLink } from "@/data/about";
import {
  ChevronRight,
  Github,
  ExternalLink,
  Twitter,
  FileText,
  Video,
} from "lucide-react";
import type { Project } from "@/data/projects";

// ─── About bullets imported from shared data ───────────────────────────────────

// ─── Experience ────────────────────────────────────────────────────────────────
// Add your work experience here. Same expand/collapse as projects.

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  details: string[];
  link?: string;
}

const experience: ExperienceItem[] = [
  // Example:
  // {
  //   id: 1,
  //   role: "Software Engineer Intern",
  //   company: "Acme Corp",
  //   period: "Summer 2025",
  //   details: [
  //     "Built X using Y, achieving Z.",
  //   ],
  //   link: "https://acme.com",
  // },
];

// ─── Currently widget ──────────────────────────────────────────────────────────
// Data is written daily by .github/workflows/update-activity.yml
// using the most recent Strava run or Hevy workout, whichever is newer.

function CurrentlyWidget({ activity }: { activity: Activity | null }) {
  if (!activity) return null;

  if (activity.type === "run") {
    const run = activity;
    const inner = (
      <div className="rounded border border-border p-3 hover:border-ink transition-colors duration-200">
        <div className="flex items-center justify-between mb-2.5">
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
            {run.label}
          </span>
          <span className="font-mono text-[9px] text-muted-foreground">
            {run.date}
          </span>
        </div>
        <p className="text-xs font-medium text-foreground mb-3 truncate group-hover:text-ink transition-colors duration-200">
          {run.name}
        </p>
        <div className="flex">
          <div className="flex-1">
            <p className="font-mono text-base font-medium tabular-nums text-foreground leading-none">
              {run.finish}
            </p>
            <p className="font-mono text-[9px] text-muted-foreground mt-1 uppercase tracking-wider">
              finish
            </p>
          </div>
          <div className="flex-1 border-l border-border pl-3">
            <p className="font-mono text-base font-medium tabular-nums text-foreground leading-none">
              {run.pace}
            </p>
            <p className="font-mono text-[9px] text-muted-foreground mt-1 uppercase tracking-wider">
              /mi
            </p>
          </div>
          <div className="flex-1 border-l border-border pl-3">
            <p className="font-mono text-base font-medium tabular-nums text-foreground leading-none">
              {run.distance}
            </p>
            <p className="font-mono text-[9px] text-muted-foreground mt-1 uppercase tracking-wider">
              dist
            </p>
          </div>
        </div>
      </div>
    );

    return run.href ? (
      <a href={run.href} target="_blank" rel="noopener noreferrer" className="block group">
        {inner}
      </a>
    ) : (
      <div>{inner}</div>
    );
  }

  if (activity.type === "workout") {
    const w = activity;
    return (
      <div className="rounded border border-border p-3">
        <div className="flex items-center justify-between mb-2.5">
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
            {w.label}
          </span>
          <span className="font-mono text-[9px] text-muted-foreground">
            {w.date}
          </span>
        </div>
        <p className="text-xs font-medium text-foreground mb-3 truncate">
          {w.name}
        </p>
        <div className="flex">
          <div className="flex-1">
            <p className="font-mono text-base font-medium tabular-nums text-foreground leading-none">
              {w.duration}
            </p>
            <p className="font-mono text-[9px] text-muted-foreground mt-1 uppercase tracking-wider">
              time
            </p>
          </div>
          <div className="flex-1 border-l border-border pl-3">
            <p className="font-mono text-base font-medium tabular-nums text-foreground leading-none">
              {w.exercises}
            </p>
            <p className="font-mono text-[9px] text-muted-foreground mt-1 uppercase tracking-wider">
              exercises
            </p>
          </div>
          <div className="flex-1 border-l border-border pl-3">
            <p className="font-mono text-base font-medium tabular-nums text-foreground leading-none">
              {w.sets}
            </p>
            <p className="font-mono text-[9px] text-muted-foreground mt-1 uppercase tracking-wider">
              sets
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

// ─── Project row ───────────────────────────────────────────────────────────────

function ProjectRow({
  project,
  isExpanded,
  onToggle,
}: {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full text-left py-3 group focus-visible:outline-none"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="font-serif text-sm group-hover:text-ink transition-colors duration-200 truncate">
              {project.title}
            </h3>
            <p className="font-mono text-[10px] text-muted-foreground truncate mt-0.5 leading-relaxed">
              {project.description}
            </p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.18, ease: [0.25, 0, 0, 1] }}
            className="flex-shrink-0 text-muted-foreground group-hover:text-ink transition-colors duration-200"
          >
            <ChevronRight size={11} />
          </motion.div>
        </div>
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0, 0, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-4 space-y-2.5">
              {project.details.map((detail, i) => (
                <p key={i} className="text-xs text-muted-foreground leading-relaxed">
                  {detail}
                </p>
              ))}
              <div className="flex flex-wrap gap-1 pt-1">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[9px] bg-accent text-accent-foreground px-1.5 py-0.5 rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {(project.github || project.demo || project.twitter || project.slides || project.video1 || project.video2) && (
                <div className="flex flex-wrap gap-3 pt-0.5">
                  {project.github && <IconLink size="sm" href={project.github} icon={Github} label="source" />}
                  {project.demo && <IconLink size="sm" href={project.demo} icon={ExternalLink} label="demo" />}
                  {project.twitter && <IconLink size="sm" href={project.twitter} icon={Twitter} label="x" />}
                  {project.slides && <IconLink size="sm" href={project.slides} icon={FileText} label="slides" />}
                  {project.video1 && <IconLink size="sm" href={project.video1} icon={Video} label="vid 1" />}
                  {project.video2 && <IconLink size="sm" href={project.video2} icon={Video} label="vid 2" />}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Experience row ────────────────────────────────────────────────────────────

function ExperienceRow({
  item,
  isExpanded,
  onToggle,
}: {
  item: ExperienceItem;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full text-left py-3 group focus-visible:outline-none"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="font-serif text-sm group-hover:text-ink transition-colors duration-200 truncate">
              {item.role}
            </h3>
            <p className="font-mono text-[10px] text-muted-foreground truncate mt-0.5">
              {item.company}
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="font-mono text-[9px] text-muted-foreground">
              {item.period}
            </span>
            <motion.div
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.18, ease: [0.25, 0, 0, 1] }}
              className="text-muted-foreground group-hover:text-ink transition-colors duration-200"
            >
              <ChevronRight size={11} />
            </motion.div>
          </div>
        </div>
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0, 0, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-4 space-y-2">
              {item.details.map((detail, i) => (
                <p key={i} className="text-xs text-muted-foreground leading-relaxed">
                  {detail}
                </p>
              ))}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-ink transition-colors font-mono"
                >
                  <ExternalLink size={11} />
                  {item.link.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main page ─────────────────────────────────────────────────────────────────

export default function Home() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [expandedExp, setExpandedExp] = useState<number | null>(null);
  const visibleProjects = projects.filter((p) => !p.hidden);

  return (
    <main className="min-h-screen lg:h-screen lg:overflow-hidden bg-background text-foreground">
      {/* Grain — subtle film texture for warmth */}
      <div className="grain-overlay" />

      {/* ── Mobile: single-column scroll ──────────────────────────── */}
      <div className="lg:hidden px-6 py-16 space-y-16 max-w-lg mx-auto">
        <header>
          <h1 className="font-serif text-7xl tracking-tight leading-[0.85] mb-5">
            juno<br />kim
          </h1>
          <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.12em] leading-loose">
            CS • UPENN<br />
            SIGNAL PROCESSING • OPTIMIZATION • ML
          </p>
        </header>
        <section aria-labelledby="about-heading">
          <h2 id="about-heading" className="sr-only">About</h2>
          <div className="space-y-5">
            {aboutBullets.map((bullet, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="font-mono text-[10px] text-ink flex-shrink-0 pt-0.5 tabular-nums">
                  {bullet.index}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {bullet.content}
                </p>
              </div>
            ))}
          </div>
        </section>
        {latestActivity && (
          <section aria-labelledby="currently-heading">
            <h2 id="currently-heading" className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
              currently
            </h2>
            <CurrentlyWidget activity={latestActivity} />
          </section>
        )}
        <section aria-labelledby="work-heading">
          <h2 id="work-heading" className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
            work
          </h2>
          {visibleProjects.map((project) => (
            <article key={project.id}>
              <ProjectRow
                project={project}
                isExpanded={expandedProject === project.id}
                onToggle={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              />
            </article>
          ))}
        </section>
        {experience.length > 0 && (
          <section aria-labelledby="experience-heading">
            <h2 id="experience-heading" className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
              experience
            </h2>
            {experience.map((item) => (
              <article key={item.id}>
                <ExperienceRow
                  item={item}
                  isExpanded={expandedExp === item.id}
                  onToggle={() => setExpandedExp(expandedExp === item.id ? null : item.id)}
                />
              </article>
            ))}
          </section>
        )}
        <section aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
            links
          </h2>
          <nav aria-label="Contact and social media links">
            <div className="flex flex-col gap-3">
              {contactLinks.map((link, i) => (
                <IconLink key={i} size="sm" {...link} />
              ))}
            </div>
          </nav>
          <footer className="mt-10">
            <p className="font-mono text-[10px] text-muted-foreground">
              designed & built by juno
            </p>
          </footer>
        </section>
      </div>

      {/* ── Desktop: 3-column bento ────────────────────────────────── */}
      <div className="hidden lg:grid lg:h-screen lg:grid-cols-[1fr_1.25fr_0.75fr]">

        {/* ── Col 1: Identity ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="border-r border-border px-10 py-14 flex flex-col justify-between overflow-hidden"
        >
          <header>
            <h1 className="font-serif tracking-tight leading-[0.83] mb-7">
              <motion.span
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5, ease: [0.25, 0, 0, 1] }}
                className="block text-[clamp(3rem,5.2vw,5.5rem)]"
              >
                juno
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5, ease: [0.25, 0, 0, 1] }}
                className="block text-[clamp(3rem,5.2vw,5.5rem)]"
              >
                kim
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.14em] leading-[2]"
            >
              CS • UPENN
              <br />
              SIGNAL PROCESSING • OPTIMIZATION • ML
            </motion.p>
          </header>

          <section aria-labelledby="about-heading-desktop">
            <h2 id="about-heading-desktop" className="sr-only">About</h2>
            <div className="space-y-4">
              {aboutBullets.map((bullet, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.4, ease: [0.25, 0, 0, 1] }}
                  className="flex items-start gap-3"
                >
                  <span className="font-mono text-[10px] text-ink flex-shrink-0 pt-[3px] tabular-nums select-none">
                    {bullet.index}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {bullet.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>

        {/* ── Col 2: Work + Experience ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="border-r border-border px-10 py-14 flex flex-col overflow-hidden"
        >
          <div className="flex-1 overflow-y-auto scrollbar-thin">
            {/* Work */}
            <section aria-labelledby="work-heading-desktop">
              <motion.h2
                id="work-heading-desktop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-5"
              >
                work
              </motion.h2>
              <div className="mb-8">
                {visibleProjects.map((project, i) => (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 + i * 0.07, duration: 0.35, ease: [0.25, 0, 0, 1] }}
                  >
                    <ProjectRow
                      project={project}
                      isExpanded={expandedProject === project.id}
                      onToggle={() =>
                        setExpandedProject(expandedProject === project.id ? null : project.id)
                      }
                    />
                  </motion.article>
                ))}
              </div>
            </section>

            {/* Experience — only rendered when items exist */}
            {experience.length > 0 && (
              <section aria-labelledby="experience-heading-desktop">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                >
                  <h2 id="experience-heading-desktop" className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-5 pt-2 border-t border-border">
                    experience
                  </h2>
                  {experience.map((item, i) => (
                    <motion.article
                      key={item.id}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.75 + i * 0.07, duration: 0.35, ease: [0.25, 0, 0, 1] }}
                    >
                      <ExperienceRow
                        item={item}
                        isExpanded={expandedExp === item.id}
                        onToggle={() =>
                          setExpandedExp(expandedExp === item.id ? null : item.id)
                        }
                      />
                    </motion.article>
                  ))}
                </motion.div>
              </section>
            )}
          </div>
        </motion.div>

        {/* ── Col 3: Currently + Contact ───────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="px-8 py-14 flex flex-col justify-between overflow-hidden"
        >
          {latestActivity && (
            <section aria-labelledby="currently-heading-desktop">
              <motion.h2
                id="currently-heading-desktop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4"
              >
                currently
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <CurrentlyWidget activity={latestActivity} />
              </motion.div>
            </section>
          )}

          <section aria-labelledby="contact-heading-desktop">
            <motion.h2
              id="contact-heading-desktop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4"
            >
              links
            </motion.h2>
            <nav aria-label="Contact and social media links">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.4 }}
                className="flex flex-col gap-3"
              >
                {contactLinks.map((link, i) => (
                  <IconLink key={i} size="sm" {...link} />
                ))}
              </motion.div>
            </nav>
            <footer>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="font-mono text-[10px] text-muted-foreground mt-10"
              >
                designed & built by juno
              </motion.p>
            </footer>
          </section>
        </motion.div>
      </div>
    </main>
  );
}

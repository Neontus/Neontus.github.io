import React, { useState, useContext } from 'react';
import { ChevronDown, ChevronUp, Github, ExternalLink } from 'lucide-react';
import { DarkModeContext } from '../../context/DarkModeContext';

// Colour coding for well-known tech tags
const TECH_PALETTE = {
  'Rust':         'text-orange-400 bg-orange-500/10 border-orange-500/20',
  'React':        'text-sky-400    bg-sky-500/10    border-sky-500/20',
  'Next.js':      'text-zinc-300   bg-zinc-500/10   border-zinc-500/20',
  'Node/Express': 'text-green-400  bg-green-500/10  border-green-500/20',
  'Express':      'text-green-400  bg-green-500/10  border-green-500/20',
  'Gemini':       'text-blue-400   bg-blue-500/10   border-blue-500/20',
  'Supabase':     'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  'Redis':        'text-red-400    bg-red-500/10    border-red-500/20',
  'Docker':       'text-sky-300    bg-sky-400/10    border-sky-400/20',
  'AWS S3':       'text-amber-400  bg-amber-500/10  border-amber-500/20',
  'AWS EMR':      'text-amber-400  bg-amber-500/10  border-amber-500/20',
  'AWS EC2':      'text-amber-400  bg-amber-500/10  border-amber-500/20',
  'Apache Kafka': 'text-zinc-300   bg-zinc-500/10   border-zinc-500/20',
  'Apache Spark': 'text-orange-300 bg-orange-400/10 border-orange-400/20',
};

const techClass = (tech, darkMode) =>
  TECH_PALETTE[tech] ||
  (darkMode
    ? 'text-purple-300 bg-purple-500/10 border-purple-500/20'
    : 'text-purple-700 bg-purple-50      border-purple-200');

const ProjectCard = ({ project, isExpanded, onToggle }) => {
  const { darkMode } = useContext(DarkModeContext);

  // Spotlight / glow effect that follows the mouse cursor
  const [mouse, setMouse]     = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const spotlightGradient = hovered
    ? `radial-gradient(520px circle at ${mouse.x}px ${mouse.y}px,
        rgba(168,85,247,${darkMode ? '0.09' : '0.05'}),
        transparent 55%),`
    : '';

  const cardStyle = darkMode
    ? {
        background: `${spotlightGradient} rgba(255,255,255,0.025)`,
        border: `1px solid ${hovered ? 'rgba(168,85,247,0.28)' : 'rgba(255,255,255,0.07)'}`,
        boxShadow: hovered ? '0 0 32px rgba(168,85,247,0.12)' : 'none',
        transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
      }
    : {
        background: `${spotlightGradient} #ffffff`,
        border: `1px solid ${hovered ? 'rgba(168,85,247,0.22)' : 'rgba(0,0,0,0.07)'}`,
        boxShadow: hovered ? '0 4px 28px rgba(168,85,247,0.1)' : '0 1px 4px rgba(0,0,0,0.05)',
        transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
      };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-xl p-6"
      style={cardStyle}
    >
      {/* ── Header row ── */}
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1 min-w-0">

          {/* Title + WIP badge */}
          <div className="flex items-center gap-2 mb-1.5">
            <h3 className={`text-base font-semibold ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
              {project.title}
            </h3>
            {project.wip && (
              <span className="shimmer-badge text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/25 text-amber-400">
                WIP
              </span>
            )}
          </div>

          {/* Description */}
          <p className={`text-sm mb-4 leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className={`px-2 py-0.5 text-[11px] rounded-md border font-mono ${techClass(tech, darkMode)}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Expand / collapse toggle */}
        <button
          onClick={(e) => { e.stopPropagation(); onToggle(); }}
          className={`flex-shrink-0 p-1.5 rounded-lg transition-colors ${
            darkMode
              ? 'text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.08]'
              : 'text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100'
          }`}
        >
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {/* ── Expanded details ── */}
      {isExpanded && (
        <div className={`mt-5 pt-5 border-t ${darkMode ? 'border-white/[0.07]' : 'border-zinc-100'}`}>
          <p
            className={`text-sm leading-relaxed whitespace-pre-line mb-5 ${
              darkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            {project.details}
          </p>

          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  darkMode
                    ? 'bg-white/[0.06] hover:bg-white/[0.12] text-zinc-300'
                    : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700'
                }`}
              >
                <Github size={12} />
                GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white transition-all duration-200"
                style={{ background: 'linear-gradient(135deg, #a855f7, #6366f1)' }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
              >
                <ExternalLink size={12} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;

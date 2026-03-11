/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */

import React, { useState, useContext } from 'react';
import { Github, Mail, Linkedin, Sun, Moon, ChevronRight } from 'lucide-react';
import ProjectCard from './components/molecules/ProjectCard';
import ResumeSection from './components/organisms/ResumeSection';
import { DarkModeContext, DarkModeProvider } from './context/DarkModeContext';

// ─── Header ───────────────────────────────────────────────────────────────────
const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md border-b ${
        darkMode ? 'bg-zinc-950/80 border-white/[0.06]' : 'bg-white/80 border-black/[0.06]'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <span
            className={`font-black text-lg tracking-tight ${darkMode ? 'text-white' : 'text-zinc-900'}`}
          >
            juno kim
          </span>

          <div className="flex items-center gap-7">
            {['about', 'projects', 'resume', 'contact'].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className={`nav-link text-sm font-medium transition-colors duration-200 ${
                  darkMode ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'
                }`}
              >
                {link}
              </a>
            ))}
          </div>

          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg transition-colors ${
              darkMode
                ? 'text-zinc-400 hover:text-white hover:bg-white/[0.08]'
                : 'text-zinc-500 hover:text-zinc-900 hover:bg-black/[0.05]'
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </nav>
      </div>
    </header>
  );
};

// ─── About / Hero ─────────────────────────────────────────────────────────────
const AboutSection = () => {
  const { darkMode } = useContext(DarkModeContext);

  const goals = [
    'learn + build a project with Rust',
    'train for + run a half marathon',
  ];

  return (
    <section id="about" className="relative min-h-[92vh] flex items-center overflow-hidden py-24">

      {/* ── Ambient background blobs ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="blob-a absolute w-[520px] h-[520px] filter blur-[80px]"
          style={{ top: '5%', left: '5%', background: '#a855f7', opacity: darkMode ? 0.09 : 0.06 }}
        />
        <div
          className="blob-b absolute w-[420px] h-[420px] filter blur-[80px]"
          style={{ bottom: '10%', right: '5%', background: '#38bdf8', opacity: darkMode ? 0.07 : 0.05 }}
        />
        <div
          className="blob-c absolute w-[320px] h-[320px] filter blur-[80px]"
          style={{
            top: '45%', left: '45%', transform: 'translate(-50%,-50%)',
            background: '#818cf8', opacity: darkMode ? 0.06 : 0.04,
          }}
        />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: darkMode
              ? 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)'
              : 'linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 w-full">

        {/* Eyebrow */}
        <p className={`fade-up-1 font-mono text-xs tracking-[0.22em] uppercase mb-5 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
          ✦ open to new adventures
        </p>

        {/* Giant heading */}
        <h1
          className="fade-up-2 font-black leading-[0.88] mb-7"
          style={{ fontSize: 'clamp(4rem, 13vw, 9.5rem)' }}
        >
          <span className="gradient-text">hi,</span>
          <br />
          <span className={darkMode ? 'text-white' : 'text-zinc-900'}>i'm juno</span>
        </h1>

        {/* Tag line */}
        <div className="fade-up-3 flex flex-wrap items-center gap-x-1 gap-y-2 mb-8">
          {['cs @ upenn', 'signal processing', 'ai/ml', 'dj'].map((tag, i) => (
            <React.Fragment key={tag}>
              {i > 0 && (
                <span className={`text-sm mx-2 ${darkMode ? 'text-purple-500/40' : 'text-purple-400/50'}`}>{'// '}</span>
              )}
              <span className={`text-sm font-mono ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                {tag}
              </span>
            </React.Fragment>
          ))}
        </div>

        {/* Description */}
        <p className={`fade-up-4 text-lg leading-relaxed max-w-2xl mb-8 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
          rising 3rd-year cs student at penn passionate about signal processing,
          convex optimization, and ai/ml across music, quant finance, and the physical
          sciences. when i'm not coding you'll find me behind the decks, updating my beli,
          or out on a run.
        </p>

        {/* Goals */}
        <ul className={`fade-up-4 mb-10 space-y-2 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
          {goals.map((g) => (
            <li key={g} className="flex items-center gap-2.5 text-sm">
              <ChevronRight size={13} className="text-purple-400 flex-shrink-0" />
              {g}
            </li>
          ))}
        </ul>

        {/* CTA buttons */}
        <div className="fade-up-5 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg text-sm font-semibold text-white transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #a855f7, #6366f1)',
              boxShadow: '0 0 22px rgba(168,85,247,0.35)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 38px rgba(168,85,247,0.55)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 22px rgba(168,85,247,0.35)'; }}
          >
            see my work
          </a>
          <a
            href="mailto:junokimzone@gmail.com"
            className={`px-6 py-3 rounded-lg text-sm font-semibold border transition-all duration-300 ${
              darkMode
                ? 'border-white/[0.12] text-zinc-300 hover:border-white/25 hover:text-white'
                : 'border-zinc-200 text-zinc-700 hover:border-zinc-400 hover:text-zinc-900'
            }`}
          >
            get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

// ─── Projects ─────────────────────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: 'DealScout',
    description: 'A lightweight Chrome Extension real estate listing analyzer',
    technologies: ['Gemini', 'Nextplace.ai'],
    details: `• Developed a Chrome extension to evaluate ROI of Zillow property listings by scraping real estate data, computing valuations with Nextplace.ai, and integrating with Gemini LLM\n• Secured $27K+ in grant funding by presenting the project at the 2025 Bittensor Endgame Summit, highlighting its value for decentralized real estate intelligence\n• Integrated Gemini to power an in-extension chat interface offering further property insights using scraped listing data`,
    github: 'https://github.com/gurubazawada/extension',
  },
  {
    id: 4,
    title: 'Stockify',
    description: 'A way for artists to monetize their IP through a stock exchange',
    wip: true,
    technologies: ['Next.js', 'Supabase', 'Redis', 'Express'],
    details: `• Engineered a full-stack platform with Next.js front end integrated with Spotify OAuth and Web API for artist data, and a Node.js/Express backend that computes price changes via synthetic micro-tick simulations\n• Achieved sub-minute price refreshes and user portfolio recalculations in <200ms\n• Simulated a real-time exchange for music artists by modeling price volatility using popularity metrics, enabling users to track and trade artist shares`,
    github: 'https://github.com/Neontus/stockify',
    demo: 'https://stockify-mocha.vercel.app/',
  },
  {
    id: 5,
    title: 'RustyDJ',
    description: 'Open-source DJ software built in Rust',
    wip: true,
    technologies: ['Rust'],
    details: `Creating free, open-source DJ software in Rust — focusing on performance and real-time audio processing.`,
    github: 'https://github.com/Neontus/rustyDJ',
  },
  {
    id: 3,
    title: 'Lucidity',
    description: 'Chrome Extension using ML to block unproductive websites',
    technologies: ['HTML/JS/CSS', 'Node.js', 'NumPy', 'Pandas', 'NLTK'],
    details: `• Developed a Chrome Extension using HTML/CSS front-end with Node.js-powered backend to block unproductive websites, boosting student productivity by 24%\n• Built ML model to classify websites based on textual content using NumPy, Pandas, and NLTK with TF-IDF\n• Deployed and piloted at Los Altos Christian Schools → provisional patent application (No. 63005219)\n• City of Palo Alto Thinkfund Grant · Conrad Challenge International Finalist · Diamond Challenge Regional Semi-Finalist`,
    github: 'https://github.com/Neontus/Lucidity_Extension',
    demo: 'https://lucidity.ninja',
  },
  {
    id: 2,
    title: 'Pennstagram',
    description: 'Instagram clone + RAG chatbot — Final Project for NETS 2120',
    technologies: ['React', 'Node/Express', 'AWS S3', 'AWS EMR', 'AWS EC2', 'Apache Kafka', 'Apache Spark', 'Langchain.js', 'Docker'],
    details: `• Built a scalable Instagram-style web app with React supporting real-time social feed using Kafka, hosting backend on EC2 with Docker, image upload to S3, and RAG chatbot via Langchain\n• Enabled efficient personalized content ranking using Spark-based adsorption algorithm by processing graph data on Apache Spark and streaming updates with Kafka`,
  },
];

const ProjectsSection = () => {
  const [expandedProjects, setExpandedProjects] = useState({});
  const { darkMode } = useContext(DarkModeContext);

  const toggleProject = (id) => {
    setExpandedProjects((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const sorted = [...projects].sort((a, b) => a.id - b.id);

  return (
    <section
      id="projects"
      className={`py-24 ${darkMode ? 'bg-zinc-950/60' : 'bg-zinc-50'}`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-14">
          <p className={`font-mono text-xs tracking-[0.22em] uppercase mb-3 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
            ✦ things i've built
          </p>
          <h2 className={`text-4xl font-black ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
            projects
          </h2>
        </div>

        <div className="grid gap-3">
          {sorted.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isExpanded={expandedProjects[project.id]}
              onToggle={() => toggleProject(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Contact ──────────────────────────────────────────────────────────────────
const ContactSection = () => {
  const { darkMode } = useContext(DarkModeContext);

  const links = [
    { Icon: Mail,     label: 'Email',    value: 'junokimzone@gmail.com',     href: 'mailto:junokimzone@gmail.com' },
    { Icon: Linkedin, label: 'LinkedIn', value: '/in/junokimzone',           href: 'https://linkedin.com/in/junokimzone' },
    { Icon: Github,   label: 'GitHub',   value: '@Neontus',                  href: 'https://github.com/Neontus' },
  ];

  return (
    <section
      id="contact"
      className={`py-24 ${darkMode ? 'bg-zinc-950/60' : 'bg-zinc-50'}`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-14">
          <p className={`font-mono text-xs tracking-[0.22em] uppercase mb-3 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
            ✦ let's connect
          </p>
          <h2 className={`text-4xl font-black ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
            contact
          </h2>
        </div>

        <div
          className={`rounded-2xl p-8 max-w-md ${
            darkMode
              ? 'bg-white/[0.03] border border-white/[0.07]'
              : 'bg-white border border-zinc-200 shadow-sm'
          }`}
        >
          <p className={`text-base leading-relaxed mb-8 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            always down for new ventures, ideas, and a good chat. feel free to reach out!
          </p>

          <div className="space-y-1">
            {links.map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-200 group ${
                  darkMode ? 'hover:bg-white/[0.06]' : 'hover:bg-zinc-50'
                }`}
              >
                <div
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    darkMode
                      ? 'bg-white/[0.05] group-hover:bg-purple-500/20 text-zinc-400 group-hover:text-purple-400'
                      : 'bg-zinc-100 group-hover:bg-purple-50 text-zinc-500 group-hover:text-purple-600'
                  }`}
                >
                  <Icon size={15} />
                </div>
                <div>
                  <p className={`text-[11px] font-medium uppercase tracking-wide ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
                    {label}
                  </p>
                  <p className={`text-sm font-medium mt-0.5 ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Portfolio (root) ─────────────────────────────────────────────────────────
const Portfolio = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-zinc-950' : 'bg-white'}`}>
      <Header />
      <main>
        <AboutSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <footer className={`border-t py-8 ${darkMode ? 'border-white/[0.06]' : 'border-zinc-100'}`}>
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <span className={`text-sm ${darkMode ? 'text-zinc-600' : 'text-zinc-400'}`}>
            © 2025 juno kim
          </span>
          <span className={`text-xs font-mono ${darkMode ? 'text-zinc-700' : 'text-zinc-300'}`}>
            built with react + tailwind
          </span>
        </div>
      </footer>
    </div>
  );
};

export default () => (
  <DarkModeProvider>
    <Portfolio />
  </DarkModeProvider>
);

import React, { useState, useContext } from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';
import DarkModeToggle from './components/atoms/DarkToggle';
import Text from './components/atoms/Text';
import ProjectCard from './components/molecules/ProjectCard';
import ContactItem from './components/molecules/ContactItem';
import { DarkModeContext, DarkModeProvider } from './context/DarkModeContext';

// Organisms
const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <header className={darkMode ? "border-b border-gray-700 bg-gray-800 sticky top-0 z-10" : "border-b border-gray-200 bg-white sticky top-0 z-10"}>
      <div className="max-w-4xl mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <Text variant = 'h3' dark = {darkMode} className = "font-bold" >juno kim</Text>
          <div className="flex space-x-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">about</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">projects</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">contact</a>
          </div>
          <DarkModeToggle onToggle = {toggleDarkMode}/>
        </nav>
      </div>
    </header>
  );
};

const AboutSection = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <Text variant="h1" dark = {darkMode} className="mb-6">hi, i'm juno</Text>
        <Text variant="body" dark = {darkMode} className="text-lg mb-8 leading-relaxed">
            hi! i’m juno, a rising 3rd-year student at the University of Pennsylvania studying CS. 
            my current interests include signal processing, convex optimization, AI/ML, and its applications to various sectors 
            like music, quantitative finance, the physical sciences, and more!
        </Text>
        <Text variant="body" dark = {darkMode} className="text-lg leading-relaxed">
            when i'm not coding, you can find me practicing a DJ set, updating my beli,
            taking a run, or window shopping! some of the goals i'm currently working on include:
            <ul className="list-disc pl-6 mt-4">
                <li>learn + build a project with Rust</li>
                <li>train for + run a half marathon</li>
            </ul>
        </Text>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const [expandedProjects, setExpandedProjects] = useState({});
  const { darkMode } = useContext(DarkModeContext);

  const toggleProject = (id) => {
    setExpandedProjects(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "DealScout",
      description: "A lightweight Chrome Extension real estate listing analyzer",
      technologies: ["Gemini", "Nextplace.ai",],
      details: `• Developed a Chrome extension to evalute to evaluate ROI of Zillow property listings by scraping real estate data, computing valuations with Nextplace.ai, and integrating with Gemini LLM
      • Secured $27K+ in grant funding by presenting the project at the 2025 Bittensor Endgame Summit, highlighting its value for decentralized real estate intelligence.
      • Integrated Gemini to power an in-extension chat interface offering further property insights using scraped listing data.`,
      github: "https://github.com/gurubazawada/extension",
    //   demo: "https://your-ecommerce-demo.com"
    },
    {
      id: 4,
      title: "[WIP] Stockify",
      description: "A way for artists to monetize their IP through a stock exchange",
      technologies: ["Next.js", "Supabase", "Redis", "Express"],
      details: `
      • Engineered a full-stack platform with Next.js front end, integrated with Spotify OAuth and Web API for artists data, and a Node.js/Express backend that computes artist price changes via synthetic micro-tick simulations and real metric interpolations, achieving sub-minute price refreshes and user portfolio recalculations in <200ms
      • Simulated a real-time exchange for music artists by modeling price volatility using popularity metrics, enabling users to track and trade artist shares`,
      github: "https://github.com/Neontus/stockify",
      demo: "https://stockify-mocha.vercel.app/"
    },
    {
      id: 5,
      title: "[WIP] RustyDJ",
      description: "Open-source DJ software built in Rust",
      technologies: ["Rust"],
      details: `Creating free, open-source DJ software in Rust, focusing on performance and real-time audio processing.`,
      github: "https://github.com/Neontus/rustyDJ"
    },
    {
      id: 3,
      title: "Lucidity",
      description: "Chrome Extension using ML to block unproductive websites",
      technologies: ["HTML/JS/CSS", "Node.js", "NumPy", "Pandas", "NLTK"],
      details: `
      • Developed a Chrome Extension using HTML/CSS front-end with Node.js-powered backend to block unproductive websites, boosting student productivity by 24%
      • Built ML model to classify websites based on textual content using NumPy, Pandas, and NLTK utilizing TF-IDF
      • Deployed and piloted at Los Altos Christian Schools, leading to a provisional patent application (No. 63005219)
      • Awarded City of Palo Alto’s Thinkfund Grant, Conrad Challenge International Finalist, Diamond Challenge Regional Semi-Finalist`,
      github: "https://github.com/Neontus/Lucidity_Extension",
      demo: "https://lucidity.ninja"
    },
    {
      id: 2,
      title: "Pennstagram",
      description: "Instagram clone + RAG chatbot | Final Project for NETS 2120: Scalable & Cloud Computing",
      technologies: ["React", "Node/Express", "AWS S3", "AWS EMR", "AWS EC2", "ChromaDB", "Apache Kafka", "Apache Spark", "Langchain.js", "Docker", "Git"],
      details: `
      • Built a scalable Instagram-style web app with React supporting real-time social feed using Kafka, hosting backend services on EC2 with Docker, image upload to S3, and RAG chatbot by integrating Langchain
      • Enabled efficient personalized content ranking using Spark-based adsorption algorithm by processing graph data on Apache Spark and streaming updates with Kafka.`,
      // github: "https://github.com/yourusername/weather-dashboard"
    },
  ];

  projects.sort((a, b) => a.id - b.id);

  return (
    <section id="projects" className={darkMode ? "py-20 bg-gray-900" : "py-20 bg-gray-50"}>
      <div className="max-w-4xl mx-auto px-6">
        <Text variant="h2" dark = {darkMode} className="mb-12 text-center">projects</Text>
        <div className="space-y-6">
          {projects.map((project) => (
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

const ContactSection = () => {
  const { darkMode } = useContext(DarkModeContext);
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "junokimzone@gmail.com",
      href: "mailto:junokimzone@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/junokimzone",
      href: "https://linkedin.com/in/junokimzone"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Neontus",
      href: "https://github.com/Neontus"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <Text variant="h2" dark = {darkMode} className="mb-12 text-center">contact me</Text>
        <div className="max-w-md mx-auto">
          <Text variant="body" dark = {darkMode} className="text-center mb-8 text-lg">
            i'm always interested in new ventures, ideas, and a chat.
            feel free to reach out!
          </Text>
          <div className="space-y-2">
            {contactInfo.map((contact, index) => (
              <ContactItem
                key={index}
                icon={contact.icon}
                label={contact.label}
                value={contact.value}
                href={contact.href}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Template (Main App)
const Portfolio = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "min-h-screen bg-gray-800" : "min-h-screen bg-white"}>
          <Header />
          <main>
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
          </main>
          <footer className={darkMode ? "border-t border-gray-700 py-8": "border-t border-gray-200 py-8"}>
            <div className="max-w-4xl mx-auto px-6 text-center">
              <Text dark = {darkMode} variant="small">
                © 2025 Juno Kim. Built with React and Tailwind CSS.
              </Text>
            </div>
          </footer>
        </div>
  );
};

// const Page = () => {
//   <DarkModeProvider>
//     <Portfolio />
//   </DarkModeProvider>
// }

// export default Page;

export default () => {
  return (
    <DarkModeProvider>
      <Portfolio />
    </DarkModeProvider>
  );
};
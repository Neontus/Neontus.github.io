import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Github, ExternalLink, Mail, Linkedin } from 'lucide-react';

// Atoms
const Button = ({ children, variant = 'primary', size = 'md', onClick, className = '' }) => {
  const baseClasses = 'font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary: 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-500'
  };
  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-sm rounded-md',
    lg: 'px-6 py-3 text-base rounded-lg'
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Text = ({ children, variant = 'body', className = '' }) => {
  const variants = {
    h1: 'text-4xl font-bold text-gray-900',
    h2: 'text-3xl font-semibold text-gray-900',
    h3: 'text-xl font-medium text-gray-900',
    body: 'text-base text-gray-600',
    small: 'text-sm text-gray-500'
  };
  
  const Component = variant.startsWith('h') ? variant : 'p';
  
  return (
    <Component className={`${variants[variant]} ${className}`}>
      {children}
    </Component>
  );
};

const Icon = ({ icon: IconComponent, size = 20, className = '' }) => {
  return <IconComponent size={size} className={className} />;
};

// Molecules
const ProjectCard = ({ project, isExpanded, onToggle }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <Text variant="h3" className="mb-2">{project.title}</Text>
          <Text variant="body" className="mb-3">{project.description}</Text>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={onToggle}
          className="ml-4"
        >
          <Icon icon={isExpanded ? ChevronUp : ChevronDown} size={16} />
        </Button>
      </div>
      
      {isExpanded && (
        <div className="border-t border-gray-100 pt-4 mt-4">
          <Text variant="body" className="mb-4 whitespace-pre-line">
            {project.details}
          </Text>
          <div className="flex gap-3">
            {project.github && (
              <Button variant="secondary" size="sm">
                <Icon icon={Github} size={16} className="mr-2" />
                GitHub
              </Button>
            )}
            {project.demo && (
              <Button variant="secondary" size="sm">
                <Icon icon={ExternalLink} size={16} className="mr-2" />
                Live Demo
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const ContactItem = ({ icon, label, value, href }) => {
  return (
    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
      <Icon icon={icon} size={20} className="text-gray-600" />
      <div>
        <Text variant="small" className="font-medium text-gray-900">{label}</Text>
        {href ? (
          <a href={href} className="text-blue-600 hover:text-blue-800 transition-colors">
            <Text variant="body">{value}</Text>
          </a>
        ) : (
          <Text variant="body">{value}</Text>
        )}
      </div>
    </div>
  );
};

// Organisms
const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <Text variant="h3" className="font-bold">Your Name</Text>
          <div className="flex space-x-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <Text variant="h1" className="mb-6">Hi, I'm [Your Name]</Text>
        <Text variant="body" className="text-lg mb-8 leading-relaxed">
          I'm a passionate developer with expertise in modern web technologies. I love creating 
          clean, efficient solutions that solve real-world problems. With a strong foundation in 
          both frontend and backend development, I enjoy building applications that provide 
          exceptional user experiences.
        </Text>
        <Text variant="body" className="text-lg leading-relaxed">
          When I'm not coding, you can find me exploring new technologies, contributing to open 
          source projects, or sharing knowledge with the developer community. I'm always excited 
          to take on new challenges and collaborate on innovative projects.
        </Text>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const [expandedProjects, setExpandedProjects] = useState({});

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
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      details: `Built a complete e-commerce platform from scratch with features including:

• User authentication and authorization
• Product catalog with search and filtering
• Shopping cart and checkout process
• Payment integration with Stripe
• Admin dashboard for inventory management
• Responsive design for mobile and desktop

The application handles high traffic loads and includes comprehensive testing coverage.`,
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://your-ecommerce-demo.com"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates",
      technologies: ["Vue.js", "Firebase", "Vuex", "CSS3"],
      details: `Developed a real-time collaborative task management application featuring:

• Real-time synchronization across multiple users
• Drag-and-drop interface for task organization
• Team collaboration features
• Progress tracking and analytics
• Responsive design with smooth animations
• Offline capability with data sync

Used Firebase for real-time database and authentication, ensuring seamless collaboration.`,
      github: "https://github.com/yourusername/taskapp",
      demo: "https://your-taskapp-demo.com"
    },
    {
      id: 3,
      title: "Weather Analytics Dashboard",
      description: "Data visualization dashboard for weather patterns and forecasts",
      technologies: ["React", "D3.js", "Python", "Flask"],
      details: `Created an interactive weather analytics dashboard that provides:

• Real-time weather data visualization
• Historical weather pattern analysis
• Interactive charts and graphs using D3.js
• Location-based weather forecasting
• API integration with multiple weather services
• Export functionality for data analysis

The backend API processes large datasets efficiently and provides clean endpoints for the frontend.`,
      github: "https://github.com/yourusername/weather-dashboard"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <Text variant="h2" className="mb-12 text-center">Projects</Text>
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
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
      href: "https://linkedin.com/in/yourprofile"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/yourusername",
      href: "https://github.com/yourusername"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <Text variant="h2" className="mb-12 text-center">Get In Touch</Text>
        <div className="max-w-md mx-auto">
          <Text variant="body" className="text-center mb-8 text-lg">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together!
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
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Text variant="small">
            © 2024 Your Name. Built with React and Tailwind CSS.
          </Text>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
import React, { useContext } from 'react';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import { ChevronDown, ChevronUp, Github, ExternalLink } from 'lucide-react';
import { DarkModeContext } from '../../context/DarkModeContext';

const ProjectCard = ({ project, isExpanded, onToggle }) => {
    const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "border border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow duration-200" : "border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"}>
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <Text variant="h3" dark = {darkMode} className="mb-2">{project.title}</Text>
          <Text variant="body" dark = {darkMode} className="mb-3">{project.description}</Text>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className={darkMode ? "px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full" : "px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <Button 
          variant={darkMode ? "ghost_dark" : "ghost"}
          size="sm"
          onClick={onToggle}
          className="ml-4"
        >
          <Icon icon={isExpanded ? ChevronUp : ChevronDown} size={16} />
        </Button>
      </div>
      
      {isExpanded && (
        <div className={darkMode ? "border-t border-gray-600 pt-4 mt-4" : "border-t border-gray-100 pt-4 mt-4"}>
          <Text variant="body" dark = {darkMode} className="mb-4 whitespace-pre-line">
            {project.details}
          </Text>
          <div className="flex gap-3">
            {project.github && (
              <Button variant={darkMode ? "secondary_dark" : "secondary"} size="sm">
                <Icon icon={Github} size={16} className="mr-2" />
                GitHub
              </Button>
            )}
            {project.demo && (
              <Button variant={darkMode ? "secondary_dark" : "secondary"} size="sm">
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

export default ProjectCard;

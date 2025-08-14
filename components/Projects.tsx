import React, { useEffect, useRef, useState } from 'react';
import type { Project } from '../types';
import Section from './Section';
import { GitHubIcon } from './icons/GitHubIcon';

const projectsData: Project[] = [
  {
    title: 'Pie Port – Pizza Delivery App',
    description: 'A new pizza delivery application currently in its early stages of development. More features are coming soon!',
    tech: ['Flutter', 'Dart', 'Firebase'],
    github: 'https://github.com/rifad-p/pie-port',
    linkText: 'View on GitHub',
  },
  {
    title: 'LURG – E-commerce Website',
    description: 'A stylish and responsive fashion e-commerce website built from the ground up.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/rifad-p/LURG',
    linkText: 'View on GitHub',
  },
  {
    title: 'HOME BREW – Coffee Shop App',
    description: 'A sleek UI application for a modern coffee shop, featuring product listings and cart logic.',
    tech: ['Flutter', 'Dart'],
    github: 'https://github.com/rifad-p/HOME_BREW',
    linkText: 'View on GitHub',
  },
  {
    title: 'DAWN OF DEAD – 3D Game',
    description: 'An immersive 3D zombie survival game developed using Unreal Engine\'s Blueprint system.',
    tech: ['Unreal Engine 5', 'Blueprint'],
    github: 'https://github.com/rifad-p', // Placeholder link
    linkText: 'Explore My GitHub',
  },
];

const ProjectCard: React.FC<{ project: Project; index: number; isVisible: boolean }> = ({ project, index, isVisible }) => {
  const slideDirection = index % 2 === 0 ? 'left' : 'right';
  
  return (
  <div className={`bg-slate-50 dark:bg-slate-800 rounded-lg p-6 flex flex-col h-full border border-slate-200 dark:border-slate-700 transform hover:-translate-y-2 transition-all duration-700 shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 ${
    isVisible 
      ? 'translate-x-0 opacity-100' 
      : slideDirection === 'left' 
        ? '-translate-x-full opacity-0' 
        : 'translate-x-full opacity-0'
  }`}>
    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.tech.map((t) => (
        <span key={t} className="bg-slate-200 dark:bg-slate-700 text-blue-600 dark:text-blue-400 text-xs font-semibold px-2.5 py-1 rounded-full">
          {t}
        </span>
      ))}
    </div>
    <p className="text-slate-600 dark:text-slate-400 flex-grow mb-4">{project.description}</p>
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 font-semibold mt-auto"
    >
      <GitHubIcon className="w-5 h-5 mr-2" />
      {project.linkText}
    </a>
  </div>
  );
};

const Projects: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>(new Array(projectsData.length).fill(false));
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = projectRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleProjects(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        },
        {
          threshold: 0.2,
          rootMargin: '0px 0px -50px 0px'
        }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <Section id="projects" title="My Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <div
            key={project.title}
            ref={el => projectRefs.current[index] = el}
          >
            <ProjectCard 
              project={project} 
              index={index} 
              isVisible={visibleProjects[index]} 
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
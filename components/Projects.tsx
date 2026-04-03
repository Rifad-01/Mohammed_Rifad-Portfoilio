import React from 'react';
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
    github: 'https://github.com/rifad-p',
    linkText: 'Explore My GitHub',
  },
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <div
      className="sticky bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/10 transition-shadow duration-300"
      style={{
        top: `${80 + index * 40}px`,
      }}
    >
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span key={t} className="bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 text-sm font-semibold px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700">
            {t}
          </span>
        ))}
      </div>
      <p className="text-slate-600 dark:text-slate-400 text-lg mb-6 leading-relaxed">{project.description}</p>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 font-semibold text-lg group"
      >
        <GitHubIcon className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform duration-300" />
        {project.linkText}
      </a>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="My Projects">
      <div className="relative space-y-8">
        {projectsData.map((project, index) => (
          <div
            key={project.title}
            className="min-h-[400px]"
          >
            <ProjectCard
              project={project}
              index={index}
            />
          </div>
        ))}
        <div className="h-32"></div>
      </div>
    </Section>
  );
};

export default Projects;
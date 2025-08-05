import React from 'react';
import Section from './Section';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Work Experience">
      <div className="max-w-3xl mx-auto">
        <div className="relative border-l-2 border-slate-200 dark:border-slate-700 pl-8 py-4">
          {/* Timeline Dot */}
          <div className="absolute -left-[11px] top-4 w-5 h-5 bg-blue-500 dark:bg-blue-400 rounded-full border-4 border-white dark:border-black"></div>
          
          <div className="bg-slate-100/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 rounded-lg p-6 shadow-lg">
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">Dec 2024 – Present</p>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Flutter Development Intern</h3>
            <p className="text-md text-slate-600 dark:text-slate-400 mb-4">Dockode Solution, Kinfra Park</p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
              <li>Developed and maintained user interfaces for cross-platform applications.</li>
              <li>Integrated REST APIs to fetch and display data within the app.</li>
              <li>Applied state management techniques for predictable and scalable app logic.</li>
              <li>Identified and resolved bugs to improve application performance and stability.</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
import React from 'react';
import Section from './Section';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education">
      <div className="max-w-3xl mx-auto">
        <div className="bg-slate-100/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 rounded-lg p-8 shadow-lg text-center">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">Bachelor of Vocation in Software Development</h3>
            <p className="text-md md:text-lg text-blue-600 dark:text-blue-400 my-2">Farook College Autonomous, Kerala</p>
            <p className="text-slate-600 dark:text-slate-400">(Sep 2022 – Mar 2025)</p>
        </div>
      </div>
    </Section>
  );
};

export default Education;
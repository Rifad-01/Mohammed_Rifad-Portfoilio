import React, { useState, useEffect } from 'react';
import type { Skill } from '../types';
import Section from './Section';
import AiSkillGraph from './AiSkillGraph';

// Data for skill bars, sorted by percentage descending
const skillsData: Skill[] = [
  { name: 'HTML & CSS', percentage: 90, color: 'bg-orange-500' },
  { name: 'JavaScript', percentage: 80, color: 'bg-yellow-400' },
  { name: 'Git & GitHub', percentage: 80, color: 'bg-slate-500' },
  { name: 'Flutter', percentage: 70, color: 'bg-sky-500' },
  { name: 'Bootstrap', percentage: 70, color: 'bg-purple-600' },
  { name: 'Dart', percentage: 65, color: 'bg-blue-600' },
  { name: 'Java', percentage: 60, color: 'bg-red-600' },
  { name: 'C Programming', percentage: 55, color: 'bg-slate-600' },
  { name: 'Node.js', percentage: 45, color: 'bg-green-500' },
  { name: 'Express.js', percentage: 40, color: 'bg-gray-400' },
].sort((a, b) => b.percentage - a.percentage);

const aiTools: string[] = ['Zapier', 'Google AI Studio', 'Loveable'];

// SkillBar component for individual skill visualization
const SkillBar: React.FC<{ name: string; percentage: number; color: string; isVisible: boolean }> = ({ name, percentage, color, isVisible }) => {
  const barWidth = isVisible ? `${percentage}%` : '0%';

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-slate-700 dark:text-slate-200">{name}</span>
        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{percentage}%</span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 shadow-inner">
        <div
          className={`${color} h-3 rounded-full transition-all duration-1000 ease-out`}
          style={{ width: barWidth }}
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
          role="progressbar"
          aria-label={`${name} proficiency`}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  // Trigger animation on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Section id="skills" title="Technical Skills Overview">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
          {skillsData.map((skill) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              percentage={skill.percentage}
              color={skill.color}
              isVisible={isAnimated}
            />
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 text-center">AI Domain Proficiency</h3>
          <div className="h-80 md:h-96">
            <AiSkillGraph />
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 text-center">Familiar With</h3>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {aiTools.map((tool) => (
              <div key={tool} className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-5 py-2 rounded-lg transform hover:scale-105 transition-transform duration-300">
                <p className="font-medium text-center">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
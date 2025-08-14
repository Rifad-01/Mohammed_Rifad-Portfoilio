import React from 'react';
import Section from './Section';

// Updated skills data with logos and categories
const skillsData = [
  // Programming Languages
  { name: 'HTML', logo: '🌐', category: 'Frontend' },
  { name: 'CSS', logo: '🎨', category: 'Frontend' },
  { name: 'JavaScript', logo: '⚡', category: 'Frontend' },
  { name: 'Dart', logo: '🎯', category: 'Mobile' },
  { name: 'Java', logo: '☕', category: 'Backend' },
  { name: 'C', logo: '⚙️', category: 'System' },
  
  // Frameworks & Libraries
  { name: 'Flutter', logo: '📱', category: 'Mobile' },
  { name: 'Bootstrap', logo: '🅱️', category: 'Frontend' },
  { name: 'Node.js', logo: '🟢', category: 'Backend' },
  { name: 'Express.js', logo: '🚀', category: 'Backend' },
  
  // Tools & Platforms
  { name: 'Git', logo: '📝', category: 'Tools' },
  { name: 'GitHub', logo: '🐙', category: 'Tools' },
  
  // AI Tools
  { name: 'Zapier', logo: '🔗', category: 'AI Tools' },
  { name: 'Google AI Studio', logo: '🤖', category: 'AI Tools' },
  { name: 'Loveable', logo: '💝', category: 'AI Tools' },
];

// Group skills by category
const groupedSkills = skillsData.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<string, typeof skillsData>);

const SkillTile: React.FC<{ name: string; logo: string }> = ({ name, logo }) => (
  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 flex flex-col items-center justify-center text-center transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-300 group">
    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
      {logo}
    </div>
    <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
      {name}
    </h3>
  </div>
);

const SkillCategory: React.FC<{ title: string; skills: Array<{ name: string; logo: string }> }> = ({ title, skills }) => (
  <div className="mb-12">
    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 text-center">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {skills.map((skill) => (
        <SkillTile key={skill.name} name={skill.name} logo={skill.logo} />
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="max-w-6xl mx-auto">
        {Object.entries(groupedSkills).map(([category, skills]) => (
          <SkillCategory key={category} title={category} skills={skills} />
        ))}
        
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700 text-center">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">AI Domain Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-700 rounded-xl p-6 text-center">
              <div className="text-3xl mb-2">🤖</div>
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">AI Automation</h4>
              <p className="text-sm text-blue-600 dark:text-blue-400">Intermediate Level</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-700 rounded-xl p-6 text-center">
              <div className="text-3xl mb-2">💬</div>
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Chatbots</h4>
              <p className="text-sm text-green-600 dark:text-green-400">Intermediate Level</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-700 rounded-xl p-6 text-center">
              <div className="text-3xl mb-2">🔧</div>
              <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">AI Integration</h4>
              <p className="text-sm text-orange-600 dark:text-orange-400">Currently Learning</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
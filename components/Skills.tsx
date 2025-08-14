import React from 'react';
import Section from './Section';

// Updated skills data with network logo URLs
const skillsData = [
  // Programming Languages
  { 
    name: 'HTML', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
  },
  { 
    name: 'CSS', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
  },
  { 
    name: 'JavaScript', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  { 
    name: 'Dart', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg'
  },
  { 
    name: 'Java', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
  },
  { 
    name: 'C', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'
  },
  
  // Frameworks & Libraries
  { 
    name: 'Flutter', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg'
  },
  { 
    name: 'Bootstrap', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
  },
  { 
    name: 'Node.js', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
  },
  { 
    name: 'Express.js', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
  },
  { 
    name: 'React', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  
  // Databases
  { 
    name: 'Firebase', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
  },
  { 
    name: 'MySQL', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
  },
  
  // Tools & Platforms
  { 
    name: 'Git', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
  },
  { 
    name: 'GitHub', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
  },
  { 
    name: 'VS Code', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
  },
  { 
    name: 'Android Studio', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg'
  },
  { 
    name: 'Figma', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
  },
  { 
    name: 'Unreal Engine', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg'
  },
  
  // AI Tools
  { 
    name: 'Zapier', 
    logo: 'https://cdn.worldvectorlogo.com/logos/zapier.svg'
  },
  { 
    name: 'Google AI Studio', 
    logo: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg'
  },
  { 
    name: 'Loveable', 
    logo: 'https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/erkxwhl1gd48xfhe2yld'
  },
  { 
    name: 'ChatGPT', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg'
  },
  { 
    name: 'Claude AI', 
    logo: 'https://claude.ai/images/claude_app_icon.png'
  },
];

const SkillTile: React.FC<{ name: string; logo: string }> = ({ name, logo }) => (
  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 flex flex-col items-center justify-center text-center transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-300 group min-h-[120px]">
    <div className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
      <img 
        src={logo} 
        alt={`${name} logo`}
        className="w-full h-full object-contain"
        onError={(e) => {
          // Fallback to a generic icon if image fails to load
          const target = e.target as HTMLImageElement;
          target.src = 'https://via.placeholder.com/48/3B82F6/FFFFFF?text=' + name.charAt(0);
        }}
      />
    </div>
    <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
      {name}
    </h3>
  </div>
);

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {skillsData.map((skill) => (
            <SkillTile key={skill.name} name={skill.name} logo={skill.logo} />
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700 text-center">
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Passionate about leveraging modern technologies to build efficient, scalable, and user-friendly applications. 
            Always eager to learn new technologies and stay updated with the latest industry trends.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
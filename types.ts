
export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  linkText: string;
}

// Replaced SkillCategory with a new Skill interface for the bar graph
export interface Skill {
  name: string;
  percentage: number;
  color: string;
}

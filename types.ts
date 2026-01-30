
export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Ostatné';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
}

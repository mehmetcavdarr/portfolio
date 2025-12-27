export interface Project {
  title: string;
  description: string;
  techStack: string[];
  features?: string[];
  link?: string;
  github?: string;
  date?: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
  details: string[];
}

export interface Education {
  degree: string;
  school: string;
  duration: string;
  description?: string;
}

export interface Certificate {
  title: string;
  issuer?: string;
  description: string;
}

export interface SkillSet {
  category: string;
  skills: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
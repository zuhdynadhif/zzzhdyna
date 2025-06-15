// Interfaces for type safety and consistency
interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  location: string;
}

interface Course {
  id: number;
  name: string;
  provider: string;
  category: string;
  year: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  status: 'Completed' | 'In Progress' | 'Planned';
  github?: string;
  demo?: string;
}

interface TechStack {
  category: string;
  technologies: string[];
}

interface Organization {
  id: number;
  name: string;
  role: string;
  period: string;
  description: string;
  type: 'Organization' | 'Committee';
}

interface Competition {
  id: number;
  name: string;
  achievement: string;
  year: string;
  category: string;
  organizer: string;
}

export type {
  Education,
  Course,
  Project,
  TechStack,
  Organization,
  Competition
};
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
  status: 'Planning' | 'Completed' | 'In Progress' | 'Planned';
  github?: string;
  demo?: string;
  images?: ImageSliderContent[];
}

interface TechStack {
  category: string;
  technologies: string[];
}

interface Experience {
  id: number;
  name: string;
  role: string;
  period: string;
  description: string;
  type: 'Professional' | 'Organization' | 'Committee';
}

interface Competition {
  id: number;
  name: string;
  achievement: string;
  year: string;
  category: string;
  organizer: string;
}

interface ImageSliderContent {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export type {
  Education,
  Course,
  Project,
  TechStack,
  Experience as Organization,
  Competition,
  ImageSliderContent
};
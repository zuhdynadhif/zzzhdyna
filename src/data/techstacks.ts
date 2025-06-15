interface TechStackCategory {
  category: string;
  technologies: string[];
}

const techStackData: TechStackCategory[] = [
  {
    category: "Frontend",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "HTML/CSS",
      "Tailwind CSS"
    ]
  },
  {
    category: "Backend",
    technologies: [
      "Node.js",
      "Express",
      "Java",
      "Spring Boot",
      "Python"
    ]
  },
  {
    category: "Database",
    technologies: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Firebase"
    ]
  },
  {
    category: "Mobile",
    technologies: [
      "Flutter",
      "React Native",
      "Android (Kotlin)"
    ]
  },
  {
    category: "DevOps",
    technologies: [
      "Git",
      "Docker",
      "AWS",
      "CI/CD"
    ]
  }
];

export default techStackData;
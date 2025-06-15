import { Project } from "../types/index";

const projectsData: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Personal portfolio website built with modern web technologies showcasing projects, skills, and experience.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    status: "Completed",
    github: "https://github.com/zuhdynadhif/portfolio",
    demo: "https://zuhdynadhif.vercel.app/"
  },
  {
    id: 2,
    title: "E-Learning Platform",
    description: "A comprehensive e-learning platform for university students with features like course management, assignments, and grading.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    status: "In Progress",
    github: "https://github.com/zuhdynadhif/e-learning"
  },
  {
    id: 3,
    title: "Health Monitoring App",
    description: "Mobile application for tracking health metrics like heart rate, steps, and sleep patterns with data visualization.",
    technologies: ["Flutter", "Firebase", "GraphQL"],
    status: "Completed",
    github: "https://github.com/zuhdynadhif/health-monitor",
    demo: "https://play.google.com/store/apps/healthmonitor"
  },
  {
    id: 4,
    title: "Smart Home Automation System",
    description: "IoT-based home automation system for controlling lights, temperature, and security with a mobile app interface.",
    technologies: ["Arduino", "React Native", "MQTT", "AWS IoT"],
    status: "Planning",
    github: "https://github.com/zuhdynadhif/smart-home"
  }
];

export default projectsData;
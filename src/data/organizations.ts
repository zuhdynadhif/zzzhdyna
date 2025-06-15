interface Organization {
  id: number;
  name: string;
  role: string;
  type: string;
  period: string;
  description: string;
}

const organizationData: Organization[] = [
  {
    id: 1,
    name: "UI Computer Science Student Association",
    role: "Head of Technology Department",
    type: "Organization",
    period: "2022 - 2023",
    description: "Led a team of 15 members in developing and maintaining the organization's website and internal applications. Organized tech workshops and coding competitions for over 500 students."
  },
  {
    id: 2,
    name: "Google Developer Student Clubs UI",
    role: "Core Team Member",
    type: "Community",
    period: "2021 - Present",
    description: "Facilitated workshops and events focusing on Google technologies. Mentored junior students in web and mobile development, reaching over 200 participants."
  },
  {
    id: 3,
    name: "UI Programming Club",
    role: "Training Coordinator",
    type: "Organization",
    period: "2021 - 2022",
    description: "Designed and conducted competitive programming training sessions. Prepared training materials and contest problems for club members."
  },
  {
    id: 4,
    name: "UI Hackathon Community",
    role: "Project Manager",
    type: "Community",
    period: "2022 - Present",
    description: "Coordinated hackathon events with industry partners. Managed project teams and provided technical guidance during hackathon preparation and execution."
  }
];

export default organizationData;
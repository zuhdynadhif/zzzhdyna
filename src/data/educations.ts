interface Education {
  id: number;
  institution: string;
  degree: string;
  location: string;
  period: string;
  gpa?: string;
}

const educationData: Education[] = [
  {
    id: 1,
    institution: "University of Indonesia",
    degree: "Bachelor of Computer Science",
    location: "Depok, West Java, Indonesia",
    period: "2022 - Present",
    gpa: "-"
  }
];

export default educationData;
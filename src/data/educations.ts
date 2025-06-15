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
    location: "Depok, Indonesia",
    period: "2020 - Present",
    gpa: "3.8/4.0"
  },
  {
    id: 2,
    institution: "SMAN 8 Jakarta",
    degree: "High School Diploma, Science Stream",
    location: "Jakarta, Indonesia",
    period: "2017 - 2020",
    gpa: "90/100"
  }
];

export default educationData;
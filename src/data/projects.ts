import { Project, ImageSliderContent } from "../types/index";

const projectsData: Project[] = [
  {
    id: 1,
    title: "Geospatial Data Visualization - PantauTular",
    description: "A geospatial data visualization application that allows users to explore and analyze the spread of infectious diseases in Indonesia. Collaborated with Badan Riset dan Inovasi Nasional (BRIN) to develop this application, which features interactive maps and statistical data visualizations. Developed by Scrum methodology with a team of 7 people, responsible as both Developer and Scrum Master.",
    technologies: ["Next.js", "PostgreSQL", "Django", "AmCharts", "Scrum"],
    status: "Completed",
    github: "https://github.com/orgs/PPL-BRIN/repositories",
    demo: "https://pantautular.netlify.app",
    images: [
      {
        src: "/pantautular/PantauTular - About.png",
        alt: "/pantautular/PantauTular - About"
      },
      {
        src: "/pantautular/PantauTular - Bantuan.png",
        alt: "PantauTular - Bantuan"
      },
      {
        src: "/pantautular/PantauTular - Register.png",
        alt: "PantauTular - Register"
      },
      {
        src: "/pantautular/PantauTular - Landing Page.png",
        alt: "PantauTular - Landing Page"
      },
      {
        src: "/pantautular/PantauTular - Peta Tematik.png",
        alt: "PantauTular - Peta Tematik"
      },
      {
        src: "/pantautular/PantauTular - Case Level.png",
        alt: "PantauTular - Case Level"
      },
      {
        src: "/pantautular/PantauTular - Demografi.png",
        alt: "PantauTular - Demografi"
      },
      {
        src: "/pantautular/PantauTular - Snapshot.png",
        alt: "PantauTular - Snapshot"
      },
    ] as ImageSliderContent[]
  },
  {
    id: 2,
    title: "Search Engine Application - Temanusa",
    description: "Manuscript search engine application for Indonesian researchers, providing advanced search features and a user-friendly interface. Built using Scrapy as the web scraping framework and Elasticsearch for indexing and searching manuscripts.",
    technologies: ["Scrapy", "Elasticsearch"],
    status: "Completed",
    demo: "https://www.temanusa.com/id",
    images: [
      {
        src: "/temanusa/Temanusa - Search Bar.png",
        alt: "Temanusa - Search Bar"
      },
      {
        src: "/temanusa/Temanusa - Search Section.png",
        alt: "Temanusa - Search Section"
      },
      {
        src: "/temanusa/Temanusa - The Team.png",
        alt: "Temanusa - The Team"
      }
    ] as ImageSliderContent[]
  },
  {
    id: 3,
    title: "Search Engine Application - Finsearch",
    description: "A search engine application for financial news and articles. Developed as final project for the Information Retrieval course, it features a web interface for searching.",
    technologies: ["Vue.js", "Fast API"],
    status: "Completed",
    github: "https://github.com/ghanahmada/finsearch-be"
  },
  {
    id: 4,
    title: "Music Catalogue Application - Marmut",
    description: "A music catalogue application that allows users to search and discover music tracks. Developed using Django and PostgreSQL, it features a raw SQL database for storing music metadata. Developed as a final project for the Database course.",
    technologies: ["PostgreSQL", "Django"],
    status: "Completed",
    github: "https://github.com/zuhdynadhif/F11_Basdat"
  },
  {
    id: 5,
    title: "E-commerce Platform - Toytopia",
    description: "An e-commerce platform for buying and selling toys, featuring product listings. Developed as a final project for the Advanced Programming course, it includes a web interface for users to browse and purchase toys.",
    technologies: ["Django", "PostgreSQL", "Microservices", "RESTful API"],
    status: "Completed",
    github: "https://github.com/orgs/advpro-b3/repositories"
  },
  {
    id: 6,
    title: "Bookstore Application - ReadNow",
    description: "A bookstore application that allows users to browse and borrow books. Developed as a final project for the Platform-Based Programming course, it features a web and mobile interface for users to search and borrow books.",
    technologies: ["Flutter", "Django", "PostgreSQL"],
    status: "Completed",
    github: "https://github.com/ReadNow-C14"
  }
];

export default projectsData;
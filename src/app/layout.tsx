import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const names_keywords = [
  "Zuhdy Nadhif Ayyasy",
  "Zuhdy",
  "Nadhif",
  "Ayyasy",
  "Oci",
  "Yosi"
];

const roles_keywords = [
  "Portfolio",
  "Computer Science",
  "Backend Developer",
  "Full Stack Developer",
  "Web Developer",
  "Web Development",
  "Software Engineer",
  "Software Engineering",
  "Frontend Developer",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Projects",
  "ElasticSearch",
  "Scrapy"
];

const university_keywords = [
  "University of Indonesia",
  "UI",
  "Universitas Indonesia",
  "BSI Scholarship",
  "Fakultas Ilmu Komputer",
  "Fasilkom UI",
  "Fakultas Ilmu Komputer UI",
  "Fakultas Ilmu Komputer Universitas Indonesia",
  "Fasilkom",
  "Pacil",
  "Ilmu Komputer",
  "Computer Science",
  "Computer Science UI",
  "Computer Science Universitas Indonesia",
  "Computer Science Fasilkom UI",
  "Computer Science Fasilkom",
  "Computer Science Fakultas Ilmu Komputer",
  "Computer Science Fakultas Ilmu Komputer UI",
  "Computer Science Fakultas Ilmu Komputer Universitas Indonesia",
];

const project_keywords = [
  "PantauTular",
  "Temanusa",
  "Pantau Tular",
  "Temanusa",
];

export const metadata: Metadata = {
  title: "Zzzhdyna | Web Portfolio",
  description:
    "Explore the portfolio of Zuhdy Nadhif Ayyasy, a passionate Computer Science student and BSI Scholarship awardee, showcasing innovative web development projects and a commitment to the tech community. Free Palestine 𓂆🍉",
  keywords: [
    ...names_keywords,
    ...roles_keywords,
    ...university_keywords,
    ...project_keywords,
  ],
  authors: [
    {
      name: "Zuhdy Nadhif Ayyasy",
      url: "https://www.linkedin.com/in/zuhdynadhifayyasy/",
    },
  ],
  creator: "Zuhdy Nadhif Ayyasy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zzzhdyna.com",
    title: "Zuhdy Nadhif Ayyasy - Computer Science Portfolio",
    description:
      "Explore the portfolio of Zuhdy Nadhif Ayyasy, showcasing computer science projects and skills.",
    siteName: "Zuhdy Nadhif Ayyasy Portfolio",
    images: [
      {
        url: "https://pbs.twimg.com/profile_images/1874794034222575616/OtDlb3vT_400x400.png", // TODO: Replace with your actual Open Graph image URL
        width: 1200,
        height: 630,
        alt: "Zuhdy Nadhif Ayyasy - Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zuhdy Nadhif Ayyasy - Computer Science Portfolio",
    description:
      "Explore the portfolio of Zuhdy Nadhif Ayyasy, showcasing web development projects and skills.",
    creator: "@zzzhdyna",
    images: [
      "https://pbs.twimg.com/profile_images/1874794034222575616/OtDlb3vT_400x400.png",
    ],
  },
  icons: {
    icon: "/favicon.ico", // Make sure favicon.ico is in your /public folder
    shortcut: "/favicon-16x16.png", // Example, ensure these files are in /public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden w-full`}
      >
        <div className="overflow-x-hidden w-full">{children}</div>
      </body>
    </html>
  );
}

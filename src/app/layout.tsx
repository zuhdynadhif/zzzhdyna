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

export const metadata: Metadata = {
  title: "Zzzhdyna | Web Portfolio",
  description:
    "Explore the portfolio of Zuhdy Nadhif Ayyasy, a passionate Computer Science student and BSI Scholarship awardee, showcasing innovative web development projects and a commitment to the tech community. Free Palestine 𓂆🍉",
  keywords: [
    "Zuhdy Nadhif Ayyasy",
    "Portfolio",
    "Web Developer",
    "Computer Science",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Projects",
    "BSI Scholarship",
    "Web Development",
    "Software Engineer",
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
    title: "Zuhdy Nadhif Ayyasy - Web Developer Portfolio",
    description:
      "Explore the portfolio of Zuhdy Nadhif Ayyasy, showcasing web development projects and skills.",
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
    title: "Zuhdy Nadhif Ayyasy - Web Developer Portfolio",
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

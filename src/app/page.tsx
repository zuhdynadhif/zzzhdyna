"use client";

import React, { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import EducationSection from '../components/EducationSection';
import ExperienceSection from '../components/ExperienceSection';
import CoursesSection from '../components/CoursesSection';
import LoadingPage from '../components/LoadingPage';
// import TechStackSection from '../components/TechStackSection';
// import CompetitionSection from '../components/CompetitionSection';
import Footer from '../components/Footer';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { isDark, toggleTheme, neumorphismStyle, neumorphismInset, neumorphismButton } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic neumorphism styles based on scroll
  // const dynamicNeumorphismStyle = {
  //   ...neumorphismStyle,
  //   boxShadow: scrollY > 100 
  //     ? `9px 9px 16px ${isDark ? '#1a202c' : '#a3b1c6'}, -9px -9px 16px ${isDark ? '#4a5568' : '#ffffff'}` 
  //     : `20px 20px 40px ${isDark ? '#1a202c' : '#a3b1c6'}, -20px -20px 40px ${isDark ? '#4a5568' : '#ffffff'}`,
  // };
  const backgroundColor = isDark ? '#2d3748' : '#e0e5ec';

  // Theme toggle button component
  const ThemeToggleButton = () => (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
      style={{
        ...neumorphismButton,
        background: backgroundColor,
      }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="w-6 h-6 text-white hover:text-yellow-400" />
      ) : (
        <Moon className="w-6 h-6 text-black hover:text-blue-600" />
      )}
    </button>
  );

  return (
    <>
      {isLoading && (
        <LoadingPage 
          duration={2000} // 3 seconds loading time - you can adjust this
          onComplete={() => setIsLoading(false)}
        />
      )}
      
      {!isLoading && (
        <div className="min-h-screen" style={{ background: backgroundColor }}>
          <ThemeToggleButton />
          
          <Navbar 
            neumorphismStyle={neumorphismStyle} 
            neumorphismInset={neumorphismInset} 
          />
          
          <HeroSection 
            scrollY={scrollY} 
            neumorphismStyle={neumorphismStyle} 
            neumorphismInset={neumorphismInset} 
            neumorphismButton={neumorphismButton} 
          />
          
          <ProjectsSection 
            scrollY={scrollY} 
            neumorphismStyle={neumorphismStyle} 
            neumorphismInset={neumorphismInset} 
            neumorphismButton={neumorphismButton} 
          />
          
          <EducationSection 
            scrollY={scrollY} 
            neumorphismStyle={neumorphismStyle} 
          />
          
          <ExperienceSection 
            scrollY={scrollY} 
            neumorphismStyle={neumorphismStyle} 
          />
          
          <CoursesSection 
            scrollY={scrollY} 
            neumorphismStyle={neumorphismStyle} 
            neumorphismInset={neumorphismInset} 
          />
          
          {/* <TechStackSection 
            scrollY={scrollY} 
            neumorphismStyle={neumorphismStyle} 
            neumorphismInset={neumorphismInset} 
          />
          
          <CompetitionSection 
            scrollY={scrollY} 
            neumorphismStyle={neumorphismStyle} 
            neumorphismInset={neumorphismInset} 
          /> */}
          
          <Footer 
            neumorphismStyle={neumorphismStyle} 
            neumorphismButton={neumorphismButton}
            neumorphismInset={neumorphismInset}
          />
        </div>
      )}
    </>
  );
};

const PortfolioWithTheme = () => {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
};

export default PortfolioWithTheme;
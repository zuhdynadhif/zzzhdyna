"use client";

import React, { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from '../context/ThemeContext';
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
  const { isDark, textColors, neumorphismStyle, neumorphismInset, neumorphismButton } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgroundColor = isDark ? '#2d3748' : '#e0e5ec';

  return (
    <>
      {isLoading && (
        <LoadingPage 
          duration={1000} // 3 seconds loading time - you can adjust this
          onComplete={() => setIsLoading(false)}
        />
      )}
      
      {!isLoading && (        
        <div 
          className="min-h-screen" 
          style={{ 
            background: backgroundColor,
            color: textColors.primary,
          }}>
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
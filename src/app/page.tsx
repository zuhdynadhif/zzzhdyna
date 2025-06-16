"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import EducationSection from '../components/EducationSection';
import ExperienceSection from '../components/ExperienceSection';
import CoursesSection from '../components/CoursesSection';
// import TechStackSection from '../components/TechStackSection';
// import CompetitionSection from '../components/CompetitionSection';
import Footer from '../components/Footer';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Neumorphism base styles
  const neumorphismStyle = {
    background: '#e0e5ec',
    boxShadow: scrollY > 100 
      ? '9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff' 
      : '20px 20px 40px #a3b1c6, -20px -20px 40px #ffffff',
    borderRadius: '20px',
    transition: 'all 0.3s ease'
  };

  const neumorphismInset = {
    background: '#e0e5ec',
    boxShadow: 'inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff',
    borderRadius: '10px'
  };

  const neumorphismButton = {
    background: '#e0e5ec',
    boxShadow: '6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff',
    borderRadius: '10px',
    border: 'none',
    transition: 'all 0.2s ease'
  };

  return (
    <div className="min-h-screen" style={{ background: '#e0e5ec' }}>
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
  );
};

export default Portfolio;
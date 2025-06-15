"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import EducationSection from '../components/EducationSection';
import CoursesSection from '../components/CoursesSection';
import ProjectsSection from '../components/ProjectsSection';
import TechStackSection from '../components/TechStackSection';
import OrganizationSection from '../components/ExperienceSection';
import CompetitionSection from '../components/CompetitionSection';
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
    boxShadow: 'inset 8px 8px 16px #a3b1c6, inset -8px -8px 16px #ffffff',
    borderRadius: '15px'
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
        scrollY={scrollY} 
        neumorphismStyle={neumorphismStyle} 
        neumorphismButton={neumorphismButton} 
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
      
      <CoursesSection 
        scrollY={scrollY} 
        neumorphismStyle={neumorphismStyle} 
        neumorphismInset={neumorphismInset} 
      />
      
      <TechStackSection 
        scrollY={scrollY} 
        neumorphismStyle={neumorphismStyle} 
        neumorphismInset={neumorphismInset} 
      />
      
      <OrganizationSection 
        scrollY={scrollY} 
        neumorphismStyle={neumorphismStyle} 
      />
      
      <CompetitionSection 
        scrollY={scrollY} 
        neumorphismStyle={neumorphismStyle} 
        neumorphismInset={neumorphismInset} 
      />
      
      <Footer 
        neumorphismStyle={neumorphismStyle} 
        neumorphismButton={neumorphismButton} 
      />
    </div>
  );
};

export default Portfolio;
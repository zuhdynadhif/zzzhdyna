"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  neumorphismStyle: React.CSSProperties;
  neumorphismInset: React.CSSProperties;
  neumorphismButton: React.CSSProperties;
  textColors: {
    primary: string;
    secondary: string;
    accent: string;
    muted: string;
  };
  hoverColors: {
    primary: string;
    secondary: string;
    accent: string;
    button: string;
    link: string;
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  // Light theme colors
  const lightColors = {
    background: '#e0e5ec',
    lightShadow: '#ffffff',
    darkShadow: '#a3b1c6',
    textColor: '#333333',
    secondaryTextColor: '#666666'
  };

  // Dark theme colors
  const darkColors = {
    background: '#2d3748',
    lightShadow: '#4a5568',
    darkShadow: '#1a202c',
    textColor: '#f7fafc',
    secondaryTextColor: '#cbd5e0'
  };

  const colors = isDark ? darkColors : lightColors;

  const neumorphismStyle: React.CSSProperties = {
    background: colors.background,
    boxShadow: `20px 20px 40px ${colors.darkShadow}, -20px -20px 40px ${colors.lightShadow}`,
    borderRadius: '20px',
    transition: 'all 0.3s ease'
  };

  const neumorphismInset: React.CSSProperties = {
    background: colors.background,
    boxShadow: `inset 4px 4px 4px ${colors.darkShadow}, inset -4px -4px 8px ${colors.lightShadow}`,
    borderRadius: '10px'
  };
  const neumorphismButton: React.CSSProperties = {
    background: colors.background,
    boxShadow: `6px 6px 12px ${colors.darkShadow}, -6px -6px 12px ${colors.lightShadow}`,
    borderRadius: '10px',
    border: 'none',
    transition: 'all 0.2s ease'
  };  const textColors = {
    primary: isDark ? '#f7fafc' : '#2d3748',
    secondary: isDark ? '#e2e8f0' : '#4a5568', 
    accent: isDark ? '#9f7aea' : '#805ad5',
    muted: isDark ? '#a0aec0' : '#718096'
  };

  const hoverColors = {
    primary: isDark ? '#ffffff' : '#1a202c',
    secondary: isDark ? '#f7fafc' : '#2d3748',
    accent: isDark ? '#b794f6' : '#6b46c1',
    button: isDark ? '#ffd700' : '#3182ce',
    link: isDark ? '#63b3ed' : '#2b6cb0'
  };

  return (
    <ThemeContext.Provider value={{ 
      isDark, 
      toggleTheme, 
      neumorphismStyle, 
      neumorphismInset, 
      neumorphismButton,
      textColors,
      hoverColors
    }}>
      {children}
    </ThemeContext.Provider>
  );
};
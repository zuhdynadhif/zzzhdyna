"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  neumorphismStyle: React.CSSProperties;
  neumorphismInset: React.CSSProperties;
}

const menuItems = [
  { href: "#intro", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#courses", label: "Courses" },
  { href: "#footer", label: "Contact" }
]

const Navbar: React.FC<NavbarProps> = ({ neumorphismStyle, neumorphismInset }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { isDark, toggleTheme, neumorphismButton, hoverColors } = useTheme();

  const backgroundColor = isDark ? '#2d3748' : '#e0e5ec';

  // Theme toggle button component
  const ThemeToggleButton = () => (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
      style={{
        ...neumorphismButton,
        background: backgroundColor,
      }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun 
          className="w-5 h-5 transition-colors duration-200" 
        />
      ) : (
        <Moon 
          className="w-5 h-5 transition-colors duration-200" 
        />
      )}
    </button>
  );

  const handleSmoothScroll = (targetId: string) => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling down and past 100px
      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setIsVisible(true);
      } 
      // Hide navbar when scrolling up or at the very top
      else if (currentScrollY < lastScrollY || currentScrollY <= 50) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (    
    <nav 
      style={{
        ...neumorphismButton,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease-in-out',
        backdropFilter: 'blur(10px)',
        backgroundColor: isDark ? '#2d3748' : '#e0e5ec'
      }} 
      className="p-4 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className={`text-2xl font-bold`}>
          <Link href="/">zzzhdyna</Link>
        </div>
          <div className="flex items-center space-x-4">
          {/* Theme Toggle Button */}
          <ThemeToggleButton />
          
          {/* Hamburger Menu for mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none relative z-50`}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
          {/* Desktop Menu - Floating */}
        <div className="hidden md:flex space-x-2">
          {menuItems.map((item, index) => (
            <button
              key={item.label}
              onClick={() => handleSmoothScroll(item.href)}
              style={{
                ...neumorphismButton,
                animation: `floatIn 0.6s ease-out ${index * 0.1}s both`,
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = hoverColors.button}
              onMouseLeave={(e) => e.currentTarget.style.color = ''}
              className="px-4 py-2 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              <div
                className="font-medium transition-colors duration-200"
              >
                {item.label}
              </div>
            </button>
          ))}
        </div>
      </div>
      
      {/* Mobile Menu - Floating */}
      {isOpen && (
        <>
          {/* Dropdown menu */}
          <div 
            style={{
              ...neumorphismStyle,
              backdropFilter: 'blur(20px)',
              backgroundColor: isDark ? '#2d3748' : '#e0e5ec'
            }}
            className="fixed top-20 left-4 right-4 p-6 shadow-2xl z-[1001] md:hidden"
            onClick={(e) => e.stopPropagation()}
          >            <ul className="flex flex-col space-y-3">
              {menuItems.map((item, index) => (
                <li 
                  key={item.label}
                  style={{
                    animation: `slideIn 0.4s ease-out ${index * 0.1}s both`
                  }}
                >
                  <button 
                    onClick={() => handleSmoothScroll(item.href)}
                    className="block w-full text-left"
                  >
                    <div
                      style={neumorphismInset}
                      className="overflow-hidden px-6 py-4 font-medium transition-all duration-200 hover:translate-x-2 cursor-pointer"
                      onMouseEnter={(e) => e.currentTarget.style.color = hoverColors.button}
                      onMouseLeave={(e) => e.currentTarget.style.color = ''}
                    >
                      {item.label}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
      
      <style jsx>{`
        @keyframes floatIn {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
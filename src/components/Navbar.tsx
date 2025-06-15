"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  neumorphismStyle: React.CSSProperties;
  neumorphismInset: React.CSSProperties;
}

const Navbar: React.FC<NavbarProps> = ({ neumorphismStyle, neumorphismInset }) => {  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction and position
      if (currentScrollY > prevScrollY && currentScrollY > 150) {
        // Scrolling down & not at the top - hide nav
        setIsVisible(false);
      } else if (currentScrollY > 50) {
        // Scrolling up & not at the very top - show nav
        setIsVisible(true);
      } else {      // At the top - hide nav
        setIsVisible(false);
      }
      
      setPrevScrollY(currentScrollY);
      
      if (isOpen) setIsOpen(false); // Close menu on scroll
    };
    
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest('nav')) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousedown', handleClickOutside);
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, prevScrollY]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsVisible(true); // Always show nav when menu is opened
    }
  };

  // Menu items in the desired order
  const menuItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#courses", label: "Courses" },
    { href: "#contact", label: "Contact" },
  ];  return (    <nav 
      className={`fixed w-full z-50 transition-all duration-300 py-4 px-6 ${
        (isVisible || isOpen) ? 'shadow-lg bg-white bg-opacity-80 backdrop-blur-sm top-0' : 'top-[-100px]'
      } overflow-x-hidden`}
      style={(isVisible || isOpen) ? neumorphismStyle : {}}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap">
        <Link href="/" className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 truncate max-w-[220px] sm:max-w-none">
          <span className="hidden xs:inline"></span>Zuhdy Nadhif Ayyasy
        </Link>{/* Mobile menu button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden focus:outline-none p-2 rounded-lg"
          aria-label="Toggle menu"
          style={neumorphismInset}
        >
          {isOpen ? (
            <X size={24} className="text-gray-800" />
          ) : (
            <Menu size={24} className="text-gray-800" />
          )}
        </button>        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="text-gray-800 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>      {/* Mobile menu dropdown */}
      <div 
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen 
          ? 'max-h-[400px] opacity-100 mt-4 py-4 bg-white rounded-lg shadow-lg' 
          : 'max-h-0 opacity-0'
        }`}
        style={isOpen ? neumorphismStyle : {}}
      >        <div className="flex flex-col space-y-2 px-4">
          {menuItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className="text-gray-800 hover:text-blue-600 py-3 px-4 rounded transition-colors hover:bg-gray-100 active:bg-gray-200 flex items-center"
              onClick={() => setIsOpen(false)}
              style={neumorphismInset}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
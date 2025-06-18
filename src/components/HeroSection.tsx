import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Instagram, MapPin, University, BadgeCheck } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';

interface HeroSectionProps {
  scrollY: number;
  neumorphismStyle: React.CSSProperties;
  neumorphismInset: React.CSSProperties;
  neumorphismButton: React.CSSProperties;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollY, neumorphismStyle, neumorphismButton }) => {
  const { textColors, hoverColors } = useTheme();
  
  return (
    <section
      id="intro"
      className="h-screen flex justify-center p-4 md:p-6 w-full overflow-x-hidden box-border"
    >
      <div
        id="intro-card"
        className="h-full w-full mx-auto text-center flex flex-col justify-center items-center p-6 md:p-10 transform transition-all duration-500"
        style={{
          ...neumorphismStyle,
          transform: `translateY(${-scrollY * 0.1}px) scale(${1 - scrollY * 0.0001})`
        }}
      >
        {/* Profile Image with responsive size */}
        <div 
          className="mx-auto mb-8 flex items-center justify-center overflow-hidden"
          style={{
            ...neumorphismButton,
            width: typeof window !== 'undefined' && window.innerHeight < 700 ? '120px' : '187px',
            height: typeof window !== 'undefined' && window.innerHeight < 700 ? '120px' : '187px'
          }}
        >
          <Image 
            src="/profile_picture.jpg" 
            alt="Profile picture" 
            width={typeof window !== 'undefined' && window.innerHeight < 700 ? 108 : 175} 
            height={typeof window !== 'undefined' && window.innerHeight < 700 ? 108 : 175} 
            className="object-cover rounded-lg"
          />
        </div>          
        <h1 className="text-xl md:text-3xl font-bold mb-2 md:mb-4">
          Hi, I&apos;m <span>Zuhdy Nadhif <span style={{ color: textColors.accent }} >Ayyasy</span></span>
        </h1>
        <p className="text-sm md:text-base mb-2 md:mb-6 leading-relaxed">
          Computer Science Student | Awardee BSI Scholarship | Free Palestine 𓂆🍉
        </p>
        <div className="flex items-center justify-center text-xs md:text-sm mb-1 md:mb-2">
          <MapPin size={15} className="mr-1" /> Depok, Indonesia
        </div>
        <div className="flex items-center justify-center text-xs md:text-sm mb-1 md:mb-2">
          <University size={15} className="mr-1" /> Universitas Indonesia
        </div>
        <div className="flex items-center justify-center text-xs md:text-sm mb-4 md:mb-6">
          <BadgeCheck size={15} className="mr-1" /> Available for Opportunities
        </div>
        <div className="mb-6 md:mb-8 flex justify-center">
          <a
            href="https://drive.google.com/file/d/1wb8HQdVhZeYt-9dUF2v5tSkoKDlTAijd/view?usp=sharing" // Replace with your actual Google Drive CV link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-12 py-3 text-sm md:text-base font-medium transition-all duration-300 transform hover:scale-105"
            style={{
              ...neumorphismButton,
              color: textColors.contrast,
              backgroundImage: `linear-gradient(135deg, ${textColors.accent} 0%, ${textColors.styled2} 100%)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = hoverColors.contrast;
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = textColors.contrast;
              e.currentTarget.style.transform = '';
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-none">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            Check my CV
          </a>
        </div>
        <div className="flex justify-center space-x-4 max-w-md md:mx-auto">
          {[
            { icon: Github, href: "https://github.com/zuhdynadhif", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/zuhdynadhifayyasy/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:zuhdy.nadhif.ayyasy@gmail.com", label: "Email" },
            { icon: Instagram, href: "https://www.instagram.com/zzzhdyna/", label: "Instagram" }
          ].map(({ icon: Icon, href, label }) => (            <a
              key={label}
              href={href}
              className="p-3 transition-colors"
              style={neumorphismButton}
              onMouseEnter={(e) => e.currentTarget.style.color = hoverColors.link}
              onMouseLeave={(e) => e.currentTarget.style.color = ''}
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
        <div className="mt-6 md:mt-10 animate-bounce">
          <ChevronDown size={32} className="mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
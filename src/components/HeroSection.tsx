import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';

interface HeroSectionProps {
  scrollY: number;
  neumorphismStyle: React.CSSProperties;
  neumorphismInset: React.CSSProperties;
  neumorphismButton: React.CSSProperties;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollY, neumorphismStyle, neumorphismButton }) => {
  const { textColors } = useTheme();
  
  return (
    <section
      id="intro"
      className="h-screen flex justify-center p-4 md:p-6 w-full overflow-x-hidden box-border"
    >
      <div
        id="intro-card"
        className="h-full w-full max-w-4xl mx-auto text-center flex flex-col justify-center items-center p-6 md:p-10 transform transition-all duration-500"
        style={{
          ...neumorphismStyle,
          transform: `translateY(${-scrollY * 0.1}px) scale(${1 - scrollY * 0.0001})`
        }}
      >
        <div 
          className="w-48 h-48 mx-auto mb-8 flex items-center justify-center overflow-hidden"
          style={neumorphismButton}
        >
          <Image 
            src="/IMG_9735_edited.jpg" 
            alt="Profile picture" 
            width={175} 
            height={175} 
            className="object-cover rounded-lg"
          />
        </div>          <h1 className="text-xl md:text-3xl font-bold mb-2 md:mb-4" style={{ color: textColors.secondary }}>
          Hi, I&apos;m <span style={{ color: textColors.primary }}>Zuhdy Nadhif <span className='text-fuchsia-900'>Ayyasy</span></span>
        </h1>
        <p className="text-base md:text-xl mb-4 md:mb-8 leading-relaxed" style={{ color: textColors.muted }}>
          Computer Science Student | Awardee BSI Scholarship | Free Palestine 𓂆🍉
        </p>
        <p className="text-sm md:text-base mb-6 md:mb-8 max-w-2xl mx-auto" style={{ color: textColors.secondary }}>
          Passionate about creating innovative solutions through code. Currently pursuing my degree 
          while building real-world applications and contributing to the tech community.
        </p>
        <div className="flex justify-center space-x-4 max-w-md md:mx-auto">
          {[
            { icon: Github, href: "https://github.com/zuhdynadhif", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/zuhdynadhifayyasy/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:zuhdy.nadhif.ayyasy@gmail.com", label: "Email" },
            { icon: Instagram, href: "https://www.instagram.com/zzzhdyna/", label: "Instagram" }
          ].map(({ icon: Icon, href, label }) => (            <a
              key={label}
              href={href}
              className="p-3 hover:text-blue-600 transition-colors"
              style={neumorphismButton}
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
        <div className="mt-10 md:mt-16 animate-bounce">
          <ChevronDown size={32} className="text-gray-500 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
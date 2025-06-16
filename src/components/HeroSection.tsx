import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import Image from 'next/image';

interface HeroSectionProps {
  scrollY: number;
  neumorphismStyle: React.CSSProperties;
  neumorphismInset: React.CSSProperties;
  neumorphismButton: React.CSSProperties;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollY, neumorphismStyle, neumorphismButton }) => {  return (
    <section id="intro" className="min-h-screen flex items-center justify-center p-8 w-full overflow-x-hidden">
      <div 
        className="max-w-4xl mx-auto text-center p-12 transform transition-all duration-500 w-full"
        style={{
          ...neumorphismStyle,
          transform: `translateY(${scrollY * 0.1}px) scale(${1 - scrollY * 0.0001})`
        }}
      >        <div 
          className="w-32 h-32 mx-auto mb-8 flex items-center justify-center overflow-hidden"
          style={neumorphismButton}
        >
          <Image 
            src="/IMG_9735_edited.jpg" 
            alt="Profile picture" 
            width={115} 
            height={115} 
            className="object-cover rounded-lg"
          />
        </div>        
        <h1 className="text-5xl font-bold text-gray-500 mb-4">
          Hi, I&apos;m <span className="text-black">Zuhdy Nadhif <span className='text-fuchsia-900'>Ayyasy</span></span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Computer Science Student | Awardee BSI Scholarship | Free Palestine 𓂆🍉
        </p>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Passionate about creating innovative solutions through code. Currently pursuing my degree 
          while building real-world applications and contributing to the tech community.
        </p>
        <div className="flex justify-center space-x-4 max-w-md mx-auto">
        {[
          { icon: Github, href: "https://github.com/zuhdynadhif", label: "GitHub" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/zuhdynadhifayyasy/", label: "LinkedIn" },
          { icon: Mail, href: "mailto:zuhdy.nadhif.ayyasy@gmail.com", label: "Email" },
          { icon: Instagram, href: "https://www.instagram.com/zzzhdyna/", label: "Instagram" }
        ].map(({ icon: Icon, href, label }) => (
          <a
          key={label}
          href={href}
          className="p-3 text-gray-700 hover:text-blue-600 transition-colors"
          style={neumorphismButton}
          aria-label={label}
          >
          <Icon size={20} />
          </a>
        ))}
        </div>
        <div className="mt-12 animate-bounce">
          <ChevronDown size={32} className="text-gray-500 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import GoogleForm from './GoogleForm';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {
  neumorphismStyle: React.CSSProperties;
  neumorphismButton: React.CSSProperties;
  neumorphismInset: React.CSSProperties;
}

const Footer: React.FC<FooterProps> = ({ neumorphismStyle, neumorphismButton, neumorphismInset }) => {
  const { hoverColors } = useTheme();
  return (
    <footer id="footer" className="md:py-16 p-4">
      <div className="max-w-6xl mx-auto text-center">
        <div 
          className="p-8 mb-8"
          style={neumorphismStyle}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4">Let&apos;s Connect!</h3>
          <p className="text-sm md:text-base mb-6">
            I&apos;m always interested in new opportunities and collaborations.
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
          <div className="pt-4">
            <GoogleForm 
              neumorphismButton={neumorphismButton} 
              neumorphismInset={neumorphismInset}
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <p>© {new Date().getFullYear()} Zuhdy Nadhif Ayyasy. All rights reserved.</p>
          <p className="text-sm mt-2">Free Palestine 𓂆🍉</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
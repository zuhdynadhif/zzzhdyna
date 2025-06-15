import React from 'react';
import { Heart, Github, Linkedin, Mail, Instagram } from 'lucide-react';

interface FooterProps {
  neumorphismStyle: React.CSSProperties;
  neumorphismButton: React.CSSProperties;
}

const Footer: React.FC<FooterProps> = ({ neumorphismStyle, neumorphismButton }) => {
  return (
    <footer className="py-16 p-8">
      <div className="max-w-6xl mx-auto text-center">
        <div 
          className="p-8 mb-8"
          style={neumorphismStyle}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Let&apos;s Connect!</h3>
          <p className="text-gray-600 mb-6">
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
              className="p-3 text-gray-700 hover:text-blue-600 transition-colors"
              style={neumorphismButton}
              aria-label={label}
              >
              <Icon size={20} />
              </a>
            ))}
            </div>
        </div>
        <div className="flex items-center justify-center text-gray-600">
          <span>Made with</span>
          <Heart size={16} className="mx-2 text-red-500" />
          <span>and lots of coffee ☕</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
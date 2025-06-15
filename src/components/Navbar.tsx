import React from 'react';

interface NavbarProps {
  scrollY: number;
  neumorphismStyle: React.CSSProperties;
  neumorphismButton: React.CSSProperties;
}

const Navbar: React.FC<NavbarProps> = ({ scrollY, neumorphismStyle, neumorphismButton }) => {
  return (
    <nav 
      className="fixed top-0 w-full z-50 p-4 transition-all duration-300"
      style={{
        ...neumorphismStyle,
        borderRadius: scrollY > 50 ? '0 0 20px 20px' : '0',
        transform: scrollY > 50 ? 'translateY(0)' : 'translateY(-10px)',
        opacity: scrollY > 50 ? 0.95 : 0
      }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">Portfolio</h2>
        <div className="flex space-x-4">
          {['Intro', 'Education', 'Projects', 'Experience'].map((item) => (
            <button
              key={item}
              className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              style={neumorphismButton}
              onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
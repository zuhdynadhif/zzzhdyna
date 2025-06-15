import React from 'react';
import { Award } from 'lucide-react';
import techStackData from '../data/techstacks';

interface TechStackSectionProps {
  scrollY: number;
  neumorphismStyle: React.CSSProperties;
  neumorphismInset: React.CSSProperties;
}

const TechStackSection: React.FC<TechStackSectionProps> = ({ 
  scrollY, 
  neumorphismStyle, 
  neumorphismInset 
}) => {
  return (
    <section id="techstack" className="py-20 p-8 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <div 
          className="text-center mb-16 p-8"
          style={neumorphismStyle}
        >
          <Award size={48} className="text-red-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Tech Stack</h2>
          <p className="text-gray-600 text-lg">Technologies and tools I work with</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStackData.map((category, index) => (
            <div
              key={category.category}
              className="p-6 transition-all duration-500"
              style={{
                ...neumorphismStyle,
                transform: `rotateY(${Math.sin((scrollY - 2200 + index * 100) * 0.002) * 5}deg)`,
                opacity: scrollY > 2100 + index * 50 ? 1 : 0.3
              }}
            >
              <h3 className="text-lg font-bold text-gray-800 mb-4">{category.category}</h3>
              <div className="space-y-3">
                {category.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="p-3 text-center text-gray-700 font-medium"
                    style={neumorphismInset}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
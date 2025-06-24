import React from 'react';
import { GraduationCap } from 'lucide-react';
import educationData from '../data/educations';
import { useTheme } from '@/context/ThemeContext';

interface EducationSectionProps {
  scrollY: number;
  neumorphismStyle: React.CSSProperties;
}

const EducationSection: React.FC<EducationSectionProps> = ({ scrollY, neumorphismStyle }) => {
  const { textColors } = useTheme();
  return (
    <section id="education" className="py-20 p-4 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <div 
          className="text-center mb-16 p-8"
          style={{
            ...neumorphismStyle,
            opacity: scrollY > 350 ? 1 : 0.4
          }}
        >
          <GraduationCap size={48} className="mx-auto mb-4" style={{ color: textColors.accent }}/>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-base md:text-lg">Academic journey and achievements</p>
        </div>
        
        <div className="grid gap-8">
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className="p-8 transition-all duration-500"
              style={{
                ...neumorphismStyle,
                opacity: scrollY > 650 + 150 * index ? 1 : 0.4
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl md:text-2xl font-bold">{edu.institution}</h3>
                <span className="font-semibold" style={{ color: textColors.accent }}>{edu.period}</span>
              </div>
              <p className="text-base md:text-xl mb-2">{edu.degree}</p>
              <p className="text-sm md:text-base mb-2">{edu.location}</p>
              {edu.gpa && <p className="text-sm md:text-base font-semibold">GPA: {edu.gpa}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
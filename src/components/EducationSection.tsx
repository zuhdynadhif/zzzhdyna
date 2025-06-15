import React from 'react';
import { GraduationCap } from 'lucide-react';
import educationData from '../data/educations';

interface EducationSectionProps {
  scrollY: number;
  neumorphismStyle: React.CSSProperties;
}

const EducationSection: React.FC<EducationSectionProps> = ({ scrollY, neumorphismStyle }) => {
  return (
    <section id="education" className="py-20 p-8">
      <div className="max-w-6xl mx-auto">
        <div 
          className="text-center mb-16 p-8"
          style={{
            ...neumorphismStyle,
            transform: `translateX(${(scrollY - 800) * 0.1}px)`
          }}
        >
          <GraduationCap size={48} className="text-blue-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
          <p className="text-gray-600 text-lg">Academic journey and achievements</p>
        </div>
        
        <div className="grid gap-8">
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className="p-8 transition-all duration-500"
              style={{
                ...neumorphismStyle,
                transform: `translateY(${Math.max(0, (scrollY - 1000 - index * 100)) * 0.1}px)`,
                opacity: scrollY > 900 + index * 100 ? 1 : 0.3
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-800">{edu.institution}</h3>
                <span className="text-blue-600 font-semibold">{edu.period}</span>
              </div>
              <p className="text-xl text-gray-700 mb-2">{edu.degree}</p>
              <p className="text-gray-600 mb-2">{edu.location}</p>
              {edu.gpa && <p className="text-gray-700 font-semibold">GPA: {edu.gpa}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
import React, { useEffect, useState } from 'react';
import { Briefcase } from 'lucide-react';
import experienceData from '../data/experience';

// Define interface for experience data structure flexibility
interface ExperienceItem {
  id: number; // Changed from string to number
  role?: string;
  position?: string;
  company?: string;
  organization?: string;
  period: string;
  description: string | string[];
}

interface ExperienceSectionProps {
  scrollY: number;
  neumorphismStyle: React.CSSProperties;
  neumorphismInset: React.CSSProperties;
  neumorphismButton: React.CSSProperties;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ 
  scrollY, 
  neumorphismStyle, 
  neumorphismInset,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const visibilityThreshold = 650;
  
  useEffect(() => {
    setIsVisible(scrollY > visibilityThreshold);
  }, [scrollY]);

  return (
    <section id="experience" className="py-20 p-8">
      <div className="max-w-6xl mx-auto">
        <div 
          className="text-center mb-16 p-8 transition-all duration-500"
          style={{
            ...neumorphismStyle,
            transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
            opacity: isVisible ? 1 : 0.4
          }}
        >
          <Briefcase size={48} className="text-blue-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Professional Experience</h2>
          <p className="text-gray-600 text-lg">My professional journey and achievements</p>
        </div>
        
        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>
          
          <div className="flex flex-col space-y-8">
            {experienceData.map((job: ExperienceItem, index: number) => (
              <div 
                key={job.id}
                className="relative transition-all duration-500 flex flex-col md:flex-row"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                {/* For mobile: everything stacks vertically */}
                <div className="w-full md:w-1/2 p-4">
                  <div 
                    className={`p-6 rounded-lg h-full ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}
                    style={neumorphismStyle}
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                      <h3 className="text-xl font-bold text-gray-800">{job.role || job.position}</h3>
                      <span 
                        className="text-sm text-gray-700 px-3 py-1 rounded-full mt-2 md:mt-0"
                        style={neumorphismInset}
                      >
                        {job.period}
                      </span>
                    </div>
                    <span className="text-lg text-blue-600 font-semibold block mb-3">{job.company || job.organization}</span>
                    <ul className="list-disc ml-5 space-y-2 text-gray-600">
                      {typeof job.description === 'string' ? (
                        <li>{job.description}</li>
                      ) : (
                        Array.isArray(job.description) && 
                        job.description.map((item: string, i: number) => (
                          <li key={i}>{item}</li>
                        ))
                      )}
                    </ul>
                  </div>
                </div>
                
                {/* Timeline dot - hidden on mobile */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-blue-500 hidden md:block" 
                    style={{top: '50%'}}></div>
                
                {/* For desktop, right side empty for even index */}
                {index % 2 === 0 && <div className="hidden md:block w-1/2"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
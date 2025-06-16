import React from 'react';
import { Trophy } from 'lucide-react';
import competitionData from '../data/competitions';

interface CompetitionSectionProps {
  scrollY: number;
  neumorphismStyle: React.CSSProperties;
  neumorphismInset: React.CSSProperties;
}

const CompetitionSection: React.FC<CompetitionSectionProps> = ({ 
  scrollY, 
  neumorphismStyle,
  neumorphismInset
}) => {  return (
    <section id="competitions" className="py-20 p-4 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <div 
          className="text-center mb-16 p-8"
          style={neumorphismStyle}
        >
          <Trophy size={48} className="text-yellow-600 mx-auto mb-4" />
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">Competition Experience</h2>
          <p className="text-gray-600 text-base md:text-lg">Achievements and recognitions</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {competitionData.map((comp, index) => (
            <div
              key={comp.id}
              className="p-6 transition-all duration-500"
              style={{
                ...neumorphismStyle,
                transform: `scale(${1 + Math.sin((scrollY - 3200 + index * 100) * 0.003) * 0.03}) 
                           translateY(${Math.cos((scrollY - 3200 + index * 100) * 0.002) * 10}px)`,
                opacity: scrollY > 3100 + index * 100 ? 1 : 0.3
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{comp.name}</h3>
                  <p className="text-green-600 font-semibold text-lg">{comp.achievement}</p>
                </div>
                <span className="text-gray-600 font-semibold">{comp.year}</span>
              </div>
              <p className="text-gray-600 mb-2">{comp.organizer}</p>
              <span 
                className="inline-block px-3 py-1 text-sm font-semibold rounded-full"
                style={neumorphismInset}
              >
                {comp.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitionSection;
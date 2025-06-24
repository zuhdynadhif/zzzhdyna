import React from 'react';
import { Trophy } from 'lucide-react';
import competitionData from '../data/competitions';
import { useTheme } from '@/context/ThemeContext';

interface CompetitionSectionProps {
  scrollY: number;
  neumorphismStyle: React.CSSProperties;
  neumorphismInset: React.CSSProperties;
}

const CompetitionSection: React.FC<CompetitionSectionProps> = ({ 
  scrollY, 
  neumorphismStyle,
  neumorphismInset
}) => {
  const { textColors } = useTheme();
  return (
    <section id="competitions" className="py-20 p-4 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <div 
          className="text-center mb-16 p-8"
          style={neumorphismStyle}
        >
          <Trophy size={48} className="mx-auto mb-4" style={{ color: textColors.accent }}/>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Competition Experience</h2>
          <p className="base md:text-lg">Achievements and recognitions</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {competitionData.map((comp, index) => (
            <div
              key={comp.id}
              className="p-6 transition-all duration-500"
              style={{
                ...neumorphismStyle,
                opacity: scrollY > 3100 + index * 100 ? 1 : 0.3
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold">{comp.name}</h3>
                  <p className="font-semibold text-lg" style={{ color: textColors.styled2 }}>{comp.achievement}</p>
                </div>
                <span className="font-semibold">{comp.year}</span>
              </div>
              <p className="mb-2">{comp.organizer}</p>
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
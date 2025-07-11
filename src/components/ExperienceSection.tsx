import React from 'react';
import { Users } from 'lucide-react';
import organizationData from '../data/experience';
import { useTheme } from '@/context/ThemeContext';

interface ExperienceSectionProps {
  scrollY: number;
  neumorphismStyle: React.CSSProperties;
}

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ 
  scrollY,
  neumorphismStyle
}) => {
  const { textColors } = useTheme();
  if (isMobile) {
    return (
      <section id="experience" className="py-20 p-4">
        <div className="max-w-6xl mx-auto">
          <div 
            className="text-center mb-16 p-8"
            style={neumorphismStyle}
          >
            <Users size={48} className="mx-auto mb-4" style={{ color: textColors.accent }}/>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Experiences</h2>
            <p className="text-base md:text-lg">Professional, Leadership, and Community Involvement</p>
          </div>
          
          <div className="space-y-8">
            {organizationData.map((org, index) => {
              const fromLeft = index % 2 === 0;

              // Jarak animasi dan ambang batas scroll
              const threshold = 50 + index * 150;
              const maxDistance = 150;            // Hitung offset X
              let offsetX = fromLeft
                ? Math.min(0, -(threshold - scrollY) * 0.5)
                : Math.max(0, (threshold - scrollY) * 0.5);

              // Clamp agar tidak lewat batas maxDistance
              offsetX = fromLeft
                ? Math.max(-maxDistance, offsetX)
                : Math.min(maxDistance, offsetX);

              // Hitung opacity
              const opacity = scrollY > threshold - 100 ? 1 : 0.3;

              return (
                <div
                  key={org.id}
                  className="p-8 transition-all duration-700 ease-out"
                  style={{
                    ...neumorphismStyle,
                    transform: `translateX(${offsetX}px)`,
                    opacity,
                    maxWidth: '100%'
                  }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-base md:text-xl font-bold">{org.name}</h3>
                      <p className="text-sm md:text-lg font-semibold">{org.role}</p>
                      <span className="text-xs md:text-base font-semibold">{org.period}</span>
                    </div>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed">{org.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section id="experience" className="py-20 p-4">
        <div className="max-w-6xl mx-auto">
          <div 
            className="text-center mb-16 p-8"
            style={neumorphismStyle}
          >
            <Users size={48} className="mx-auto mb-4" style={{ color: textColors.accent }}/>
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
            <p className="text-lg">Leadership and community involvement</p>
          </div>
          
          <div className="space-y-8">
            {organizationData.map((org) => (
              <div
                key={org.id}
                className="p-8 transition-all duration-600"
                style={{
                  ...neumorphismStyle,
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{org.name}</h3>
                    <p className="text-lg font-semibold">{org.role}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-semibold" style={{ color: textColors.accent }}>{org.period}</span>
                  </div>
                </div>
                <p className="leading-relaxed">{org.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
};

export default ExperienceSection;
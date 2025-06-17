import React from 'react';
import { Code } from 'lucide-react';
import coursesData from '../data/courses';
import { useTheme } from '@/context/ThemeContext';

interface CoursesSectionProps {
  scrollY: number;
  neumorphismStyle: React.CSSProperties;
  neumorphismInset: React.CSSProperties;
}

const CoursesSection: React.FC<CoursesSectionProps> = ({ scrollY, neumorphismStyle, neumorphismInset }) => {
  const { textColors } = useTheme();
  return (
    <section id="courses" className="py-20 p-4">
      <div className="max-w-6xl mx-auto">
        <div 
          className="text-center mb-16 p-8"
          style={{
            ...neumorphismStyle,
            opacity: scrollY > 150 ? 1 : 0.4
          }}
        >
          <Code size={48} className="mx-auto mb-4" style={{ color: textColors.accent }}/>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Notable Courses</h2>
          <p className="text-base md:text-lg">Key courses that shaped my technical foundation</p>
        </div>          
        <div className="grid md:grid-cols-2 gap-6">
          {coursesData.map((course, index) => {
            const groupIndex = Math.floor(index/2);
            const fromLeft = index % 2 === 0;

            const threshold = 4200 + groupIndex * 150;
            const maxDistance = 150;            let offsetX = fromLeft
              ? Math.min(0, -(threshold - scrollY) * 0.5)
              : Math.max(0, (threshold - scrollY) * 0.5);

            offsetX = fromLeft
              ? Math.max(-maxDistance, offsetX)
              : Math.min(maxDistance, offsetX);

            const opacity = scrollY > threshold - 100 ? 1 : 0;

            
            return (
              <div
                key={course.id}
                className="p-6 transition-all duration-500"
                style={{
                  ...neumorphismStyle,
                  transform: 'translateX(' + offsetX + 'px)',
                  opacity: opacity
                }}
              >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg md:text-2lg font-bold">{course.name}</h3>
                <span className="text-xs md:text-base font-semibold" style={{ color: textColors.accent }}>{course.year}</span>
              </div>
              <p className="text-sm md:text-base mb-2">{course.provider}</p>
              <span 
                className="inline-block px-3 py-1 text-xs md:text-sm rounded-full"
                style={neumorphismInset}
              >
                {course.category}
              </span>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
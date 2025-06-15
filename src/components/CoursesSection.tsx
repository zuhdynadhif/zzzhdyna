import React from 'react';
import { Code } from 'lucide-react';
import coursesData from '../data/courses';

interface CoursesSectionProps {
  scrollY: number;
  neumorphismStyle: React.CSSProperties;
  neumorphismInset: React.CSSProperties;
}

const CoursesSection: React.FC<CoursesSectionProps> = ({ scrollY, neumorphismStyle, neumorphismInset }) => {
  return (
    <section id="courses" className="py-20 p-8">
      <div className="max-w-6xl mx-auto">
        <div 
          className="text-center mb-16 p-8"
          style={{
            ...neumorphismStyle,
            opacity: scrollY > 1350 ? 1 : 0.4
          }}
        >
          <Code size={48} className="text-green-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Notable Courses</h2>
          <p className="text-gray-600 text-lg">Key courses that shaped my technical foundation</p>
        </div>          
        <div className="grid md:grid-cols-2 gap-6">
          {coursesData.map((course, index) => {
            const styleGroup = Math.floor(index/2);
            
            return (
              <div
                key={course.id}
                className="p-6 transition-all duration-500"
                style={{
                  ...neumorphismStyle,
                  transform: `scale(${1 + Math.sin((scrollY - 1400 + styleGroup * 100) * 0.002) * 0.02})`,
                  opacity: scrollY > 1300 + styleGroup * 450 ? 1 : 0.4
                }}
              >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-gray-800">{course.name}</h3>
                <span className="text-sm text-blue-600 font-semibold">{course.year}</span>
              </div>
              <p className="text-gray-600 mb-2">{course.provider}</p>
              <span 
                className="inline-block text-black px-3 py-1 text-sm rounded-full"
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
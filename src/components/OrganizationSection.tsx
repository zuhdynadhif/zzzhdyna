import React from 'react';
import { Users } from 'lucide-react';
import organizationData from '../data/organizations';

interface OrganizationSectionProps {
  scrollY: number;
  neumorphismStyle: React.CSSProperties;
}

const OrganizationSection: React.FC<OrganizationSectionProps> = ({ 
  scrollY, 
  neumorphismStyle 
}) => {
  return (
    <section id="experience" className="py-20 p-8">
      <div className="max-w-6xl mx-auto">
        <div 
          className="text-center mb-16 p-8"
          style={neumorphismStyle}
        >
          <Users size={48} className="text-blue-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Organizational Experience</h2>
          <p className="text-gray-600 text-lg">Leadership and community involvement</p>
        </div>
        
        <div className="space-y-8">
          {organizationData.map((org, index) => (
            <div
              key={org.id}
              className="p-8 transition-all duration-600"
              style={{
                ...neumorphismStyle,
                transform: `translateX(${index % 2 === 0 ? 
                  Math.max(-100, (scrollY - 2800 - index * 150) * 0.08) : 
                  Math.min(100, -(scrollY - 2800 - index * 150) * 0.08)}px)`,
                opacity: scrollY > 2700 + index * 150 ? 1 : 0.2
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{org.name}</h3>
                  <p className="text-lg text-blue-600 font-semibold">{org.role}</p>
                </div>
                <div className="text-right">
                  <span className="text-gray-600 font-semibold">{org.period}</span>
                  <div className={`mt-2 px-3 py-1 rounded-full text-sm font-semibold ${
                    org.type === 'Organization' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                  }`}>
                    {org.type}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{org.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizationSection;
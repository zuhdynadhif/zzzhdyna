import React, { useState, useEffect } from 'react';
import { Code, Award, Github } from 'lucide-react';
import projectsData from '../data/projects';
import ImageSlider from './ImageSlider';
import { useTheme } from '../context/ThemeContext';

interface ProjectsSectionProps {
  scrollY: number;
  neumorphismStyle: React.CSSProperties;
  neumorphismInset: React.CSSProperties;
  neumorphismButton: React.CSSProperties;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ 
  scrollY, 
  neumorphismStyle, 
  neumorphismInset, 
  neumorphismButton 
}) => {
  const { hoverColors } = useTheme();

  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };
  
  checkMobile();
  window.addEventListener('resize', checkMobile);
  
  return () => window.removeEventListener('resize', checkMobile);
}, []);

  return (
    <section id="projects" className="py-20 p-4 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <div 
          className="text-center mb-16 p-8"
          style={neumorphismStyle}
        >
          <Code size={48} className="text-purple-600 mx-auto mb-4" />
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-base md:text-lg">Showcasing my technical skills through real-world applications</p>
        </div>
        
        <div className="grid lg:grid-cols-1 gap-8">
          {projectsData.map((project, index) => {
            const groupIndex = Math.floor(index);
            const fromLeft = index % 2 === 0;

            // Calculate threshold based on whether project has images
            const baseThreshold = 700;
            const groupSpacing = 200;
            const imageSpacing = project.images && project.images.length > 0 ? 850 : 0;
            
            let threshold = baseThreshold + groupIndex * imageSpacing + groupSpacing;
            threshold = project.images && project.images.length > 0 ? threshold : 0;
            
            // Adjust for projects without images
            if (!project.images || project.images.length === 0) {
              threshold = 400 + groupIndex * 100;
            }
            
            
            const maxDistance = 150;
            let offsetX = fromLeft
              ? Math.min(0, -(threshold - scrollY))
              : Math.max(0, (threshold - scrollY));

            // Clamp to max distance
            offsetX = fromLeft
              ? Math.max(-maxDistance, offsetX)
              : Math.min(maxDistance, offsetX);

            if (isMobile) {
              console.log('offsetX is ', offsetX, 'Mobile view detected, disabling horizontal animation');
            }

            const opacity = scrollY > threshold - 100 ? 1 : 0;

            return (
              <div
                key={project.id}
                className="p-8 transition-all duration-700 ease-out"
                style={{
                  ...neumorphismStyle,
                  transform: !isMobile ? `translateX(${offsetX}px)` : 'none',
                  opacity: isMobile ? 1 : opacity,
                  maxWidth: '100%'
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-base md:text-xl font-bold">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs md:text-sm font-semibold ${
                    project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-sm md:text-base mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <a
                        href={`https://www.google.com/search?q=${encodeURIComponent(tech)}`}
                        key={tech}
                        className="px-3 py-1 text-sm font-medium transition-colors cursor-pointer"
                        style={neumorphismInset}
                        onMouseEnter={(e) => e.currentTarget.style.color = hoverColors.link}
                        onMouseLeave={(e) => e.currentTarget.style.color = ''}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {tech}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center px-4 py-2 transition-colors"
                      style={{...neumorphismButton}}
                    >
                      <Github size={18} className="mr-2" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex items-center px-4 py-2 transition-colors"
                      style={{...neumorphismButton}}
                    >
                      <Award size={18} className="mr-2" />
                      Demo
                    </a>
                  )}
                </div>

                <div className="mt-auto p-0">
                  {project.images && project.images.length > 0 && (
                    <ImageSlider
                      images={project.images} 
                      neumorphismStyle={neumorphismStyle}
                      neumorphismInset={neumorphismInset}
                      neumorphismButton={neumorphismButton}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
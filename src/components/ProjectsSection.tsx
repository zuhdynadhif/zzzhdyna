import React from 'react';
import { Code, Award, Github } from 'lucide-react';
import projectsData from '../data/projects';

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
  return (
    <section id="projects" className="py-20 p-8">
      <div className="max-w-6xl mx-auto">
        <div 
          className="text-center mb-16 p-8"
          style={neumorphismStyle}
        >
          <Code size={48} className="text-purple-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects</h2>
          <p className="text-gray-600 text-lg">Showcasing my technical skills through real-world applications</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => {
            const groupIndex = Math.floor(index / 2);
            const fromLeft = index % 2 === 0;

            // Jarak animasi dan ambang batas scroll
            const threshold = 2500 + groupIndex * 300;
            const maxDistance = 150;

            // Hitung offset X
            let offsetX = fromLeft
              ? Math.min(0, -(threshold - scrollY) * 0.5)
              : Math.max(0, (threshold - scrollY) * 0.5);

            // Clamp agar tidak lewat batas maxDistance
            offsetX = fromLeft
              ? Math.max(-maxDistance, offsetX)
              : Math.min(maxDistance, offsetX);

            // Hitung opacity
            const opacity = scrollY > threshold - 100 ? 1 : 0;

            return (
              <div
                key={project.id}
                className="p-8 transition-all duration-700 ease-out"
                style={{
                  ...neumorphismStyle,
                  transform: `translateX(${offsetX}px)`,
                  opacity,
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-600 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm font-medium text-gray-700"
                        style={neumorphismInset}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                      style={neumorphismButton}
                    >
                      <Github size={18} className="mr-2" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex items-center px-4 py-2 text-gray-700 hover:text-green-600 transition-colors"
                      style={neumorphismButton}
                    >
                      <Award size={18} className="mr-2" />
                      Demo
                    </a>
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
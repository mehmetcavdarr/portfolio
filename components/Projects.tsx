import React from 'react';
import Section from './Section';
import { useThemeLanguage } from './ThemeLanguageContext';

const Projects: React.FC = () => {
  const { content } = useThemeLanguage();

  return (
    <Section id="projects" title={content.navigation.projects}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {content.projects.map((project, index) => (
          <div 
            key={index} 
            className="group bg-surface rounded-2xl border border-muted/20 overflow-hidden hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.02] hover:border-primary/30 transition-all duration-300 flex flex-col transform"
          >
            <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center relative overflow-hidden">
               {/* Decorative abstract elements */}
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_120%,#3b82f6,transparent)]" />
               <div className="z-10 text-4xl font-bold text-slate-500 group-hover:text-primary/50 transition-colors">
                 {project.title.substring(0, 2).toUpperCase()}
               </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-text group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                {project.date && (
                   <span className="text-xs px-2 py-1 rounded bg-background text-muted border border-muted/20">
                     {project.date}
                   </span>
                )}
              </div>
              
              <p className="text-muted text-sm mb-6 flex-1">
                {project.description}
              </p>

              {project.features && (
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Key Features</h4>
                  <ul className="text-sm text-muted space-y-1">
                    {project.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-3 h-3 mt-1 mr-2 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="line-clamp-1">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs font-medium text-primary bg-primary/10 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center text-sm font-medium text-text hover:text-primary transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    GitHub
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center text-sm font-medium text-text hover:text-primary transition-colors">
                     <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                     Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
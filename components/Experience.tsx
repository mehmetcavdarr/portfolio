import React from 'react';
import Section from './Section';
import { useThemeLanguage } from './ThemeLanguageContext';

const Experience: React.FC = () => {
  const { content } = useThemeLanguage();

  return (
    <Section id="experience" title={content.navigation.experience}>
      <div className="max-w-4xl mx-auto relative border-l border-muted/30 ml-4 md:ml-0 pl-8 md:pl-0">
        {content.experience.map((exp, index) => (
          <div key={index} className="mb-12 relative md:flex md:gap-8">
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] md:left-auto md:right-full md:mr-8 top-1 w-5 h-5 rounded-full bg-primary border-4 border-background"></div>
            
            {/* Date - Desktop */}
            <div className="hidden md:block w-32 text-right pt-1">
              <span className="text-sm font-bold text-primary">{exp.duration}</span>
            </div>

            {/* Content */}
            <div className="bg-surface p-6 rounded-xl border border-muted/20 shadow-md flex-1">
              <div className="md:hidden text-sm font-bold text-primary mb-2">{exp.duration}</div>
              <h3 className="text-xl font-bold text-text">{exp.role}</h3>
              <div className="text-lg text-secondary mb-4">{exp.company}</div>
              <p className="text-muted mb-4">{exp.description}</p>
              <ul className="space-y-2">
                {exp.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start text-sm text-muted">
                    <span className="mr-2 text-primary mt-1.5">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
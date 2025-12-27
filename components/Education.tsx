import React from 'react';
import Section from './Section';
import { useThemeLanguage } from './ThemeLanguageContext';

const Education: React.FC = () => {
  const { content } = useThemeLanguage();

  return (
    <Section id="education" title={content.navigation.education} className="bg-background/50">
      <div className="max-w-4xl mx-auto space-y-6">
        {content.education.map((edu, index) => (
          <div key={index} className="bg-surface p-8 rounded-xl border border-muted/20 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-muted/50 transition-all">
            <div>
              <h3 className="text-xl font-bold text-text mb-2">{edu.school}</h3>
              <div className="text-secondary font-medium mb-2">{edu.degree}</div>
              {edu.description && <p className="text-muted text-sm">{edu.description}</p>}
            </div>
            <div className="text-primary font-bold whitespace-nowrap bg-primary/10 px-4 py-2 rounded-lg">
              {edu.duration}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
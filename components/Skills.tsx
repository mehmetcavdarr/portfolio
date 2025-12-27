import React from 'react';
import Section from './Section';
import { useThemeLanguage } from './ThemeLanguageContext';

const Skills: React.FC = () => {
  const { content } = useThemeLanguage();
  
  return (
    <Section id="skills" title={content.navigation.skills} className="bg-background/50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {content.skills.map((skillSet, index) => (
          <div 
            key={index} 
            className="bg-surface p-6 rounded-xl border border-muted/20 hover:border-primary/50 transition-colors shadow-lg group"
          >
            <h3 className="text-lg font-bold text-text mb-4 group-hover:text-primary transition-colors">
              {skillSet.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillSet.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1 bg-background text-muted text-sm rounded-full border border-muted/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
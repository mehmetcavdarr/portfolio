import React from 'react';
import Section from './Section';
import { useThemeLanguage } from './ThemeLanguageContext';

const Certificates: React.FC = () => {
  const { content } = useThemeLanguage();

  return (
    <Section id="certificates" title={content.navigation.certificates}>
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
        {content.certificates.map((cert, index) => (
          <div key={index} className="bg-gradient-to-r from-surface to-background p-8 rounded-xl border-l-4 border-secondary shadow-lg">
            <h3 className="text-xl font-bold text-text mb-3">{cert.title}</h3>
            {cert.issuer && <div className="text-sm text-secondary mb-3">{cert.issuer}</div>}
            <p className="text-muted leading-relaxed">{cert.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Certificates;
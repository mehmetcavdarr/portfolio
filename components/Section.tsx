import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-12 text-center">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};

export default Section;
import React from 'react';
import Section from './Section';
import { useThemeLanguage } from './ThemeLanguageContext';

const Contact: React.FC = () => {
  const { content } = useThemeLanguage();
  const info = content.personalInfo;
  const contact = content.contact;

  return (
    <Section id="contact" title={contact.title} className="pb-32">
      <div className="bg-surface rounded-2xl border border-muted/20 p-8 md:p-12 text-center max-w-3xl mx-auto shadow-2xl">
        <p className="text-lg text-muted mb-8">
          {contact.message}
        </p>
        
        <a 
          href={`mailto:${info.email}`} 
          className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-primary/40 transition-all transform hover:-translate-y-1"
        >
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {contact.cta}
        </a>

        <div className="mt-12 pt-8 border-t border-muted/20 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted">
           <div className="flex flex-col items-center md:items-start">
             <span className="font-semibold text-text mb-1">Email</span>
             <a href={`mailto:${info.email}`} className="hover:text-primary transition-colors">{info.email}</a>
           </div>
           <div className="flex flex-col items-center md:items-end">
             <span className="font-semibold text-text mb-1">Phone</span>
             <a href={`tel:${info.phone}`} className="hover:text-primary transition-colors">{info.phone}</a>
           </div>
        </div>
      </div>
      
      <div className="text-center text-muted mt-16 text-sm">
        © {new Date().getFullYear()} {info.name}. {contact.copyright}
      </div>
    </Section>
  );
};

export default Contact;
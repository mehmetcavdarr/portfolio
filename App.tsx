import React from 'react';
import { ThemeLanguageProvider } from './components/ThemeLanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <ThemeLanguageProvider>
      <div className="min-h-screen relative bg-background transition-colors duration-300">
        <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-0"></div>
        
        <div className="relative z-10">
          <Header />
          <main className="space-y-10 md:space-y-20">
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Certificates />
            <Contact />
          </main>
          
          <Chatbot />
        </div>
      </div>
    </ThemeLanguageProvider>
  );
};

export default App;
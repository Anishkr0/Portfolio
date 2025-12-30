
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-warm-cream dark:bg-dark-obsidian selection:bg-amber-100 dark:selection:bg-amber-900 selection:text-amber-900 dark:selection:text-amber-100 overflow-x-hidden transition-colors duration-500">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;
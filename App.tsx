
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import AllProjects from './pages/AllProjects';
import ProjectDetail from './pages/ProjectDetail';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-warm-cream dark:bg-dark-obsidian selection:bg-amber-100 dark:selection:bg-amber-900 selection:text-amber-900 dark:selection:text-amber-100 overflow-x-hidden transition-colors duration-500">
        <Navbar />
        <main>
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <Hero />
                  <Skills />
                  <Experience />
                  <Projects />
                </>
              } 
            />
            <Route path="/works" element={<AllProjects />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
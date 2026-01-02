
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8 md:px-12 flex justify-between items-center bg-warm-cream/30 dark:bg-dark-obsidian/30 backdrop-blur-xl transition-all duration-700">
      <div 
        className="flex items-center gap-3 cursor-pointer group" 
        onClick={() => navigate('/')}
      >
        <div className="w-11 h-11 bg-zinc-950 dark:bg-zinc-100 rounded-full flex items-center justify-center text-white dark:text-black shadow-xl group-hover:scale-110 transition-transform duration-500">
          <span className="font-serif text-xl font-medium">A</span>
        </div>
        <span className="font-serif text-2xl hidden md:block tracking-tighter text-zinc-950 dark:text-zinc-100 group-hover:tracking-normal transition-all duration-500">Anish Kumar</span>
      </div>
      
      <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.3em] font-semibold text-zinc-500 dark:text-zinc-500">
        <button 
          onClick={() => handleNavClick('home')}
          className="hover:text-zinc-950 dark:hover:text-white transition-colors relative group"
        >
          Home
          <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-zinc-950 dark:bg-zinc-100 transition-all group-hover:w-full"></span>
        </button>
        <button 
          onClick={() => handleNavClick('works')}
          className="hover:text-zinc-950 dark:hover:text-white transition-colors relative group"
        >
          Works
          <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-zinc-950 dark:bg-zinc-100 transition-all group-hover:w-full"></span>
        </button>
        <button 
          onClick={() => handleNavClick('about')}
          className="hover:text-zinc-950 dark:hover:text-white transition-colors relative group"
        >
          About
          <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-zinc-950 dark:bg-zinc-100 transition-all group-hover:w-full"></span>
        </button>
      </div>

      <div className="flex items-center gap-5">
        <button 
          onClick={toggleTheme}
          className="p-3 rounded-full bg-white/50 dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/50 text-zinc-600 dark:text-zinc-400 hover:scale-110 active:scale-95 transition-all shadow-sm hover:shadow-md"
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button 
          onClick={() => handleNavClick('contact')}
          className="px-8 py-3 bg-zinc-950 dark:bg-zinc-100 text-white dark:text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-zinc-800 dark:hover:bg-white transition-all shadow-lg hover:shadow-orange-200/10 active:scale-95"
        >
          Inquiry
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
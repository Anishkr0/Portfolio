
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 max-w-7xl mx-auto min-h-screen flex flex-col justify-center overflow-hidden">
      
      {/* 
        Background Atmosphere - Deeply Layered for Premium Feel
      */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Base Layer */}
        <div className="absolute inset-0 bg-[#f4f1ea] dark:bg-dark-obsidian transition-colors duration-700"></div>
        
        {/* Atmospheric Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle,rgba(230,126,34,0.08)_0%,rgba(244,241,234,0)_70%)] dark:bg-[radial-gradient(circle,rgba(230,126,34,0.03)_0%,rgba(13,13,13,0)_70%)] blur-[80px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(34,126,230,0.05)_0%,rgba(244,241,234,0)_70%)] dark:bg-[radial-gradient(circle,rgba(34,126,230,0.02)_0%,rgba(13,13,13,0)_70%)] blur-[80px]"></div>
        
        {/* Central Warmth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle,rgba(255,248,230,0.6)_0%,rgba(244,241,234,0)_60%)] dark:bg-[radial-gradient(circle,rgba(251,191,36,0.02)_0%,rgba(13,13,13,0)_70%)] opacity-100"></div>

        {/* Grain texture */}
        <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03] mix-blend-multiply dark:mix-blend-overlay bg-grain"></div>
      </div>

      {/* Hero Content Wrapper */}
      <div className="relative z-10">
        {/* Main Headline Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          {/* Status Pill */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl rounded-full border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm mb-10 scale-90 md:scale-100">
             <div className="relative flex items-center justify-center">
               <div className="w-2.5 h-2.5 bg-orange-500 rounded-full shadow-[0_0_8px_rgba(249,115,22,0.5)]"></div>
               <div className="absolute w-2.5 h-2.5 bg-orange-500 rounded-full animate-ping opacity-75"></div>
             </div>
             <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-800 dark:text-zinc-300">Open for Collaborations</span>
          </div>

          <h1 className="font-serif text-7xl md:text-9xl lg:text-[155px] leading-[0.85] tracking-tighter text-[#121212] dark:text-zinc-100 mb-8">
            Anish Kumar
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
            <span className="text-3xl md:text-5xl lg:text-6xl italic font-light text-zinc-400 dark:text-zinc-600 font-serif">
               Frontend Developer
            </span>
            <div className="hidden md:block w-32 h-[1px] bg-zinc-300/60 dark:bg-zinc-800/60"></div>
            <span className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-500 max-w-xs text-center md:text-left leading-relaxed">
               Specializing in MERN stack, UI/UX, and Immersive Web Interfaces.
            </span>
          </div>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end">
          
          {/* Left: About Me */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="space-y-10">
              <div>
                <span className="text-[10px] uppercase tracking-[0.4em] text-orange-600 dark:text-amber-500 font-bold mb-5 block">Philosophy</span>
                <p className="text-sm md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 font-light max-w-sm mx-auto lg:mx-0">
                  Crafting <span className="text-zinc-950 dark:text-white font-medium">high-performance digital products</span> with a focus on refined aesthetics and user-centric engineering. I turn complex problems into elegant interfaces.
                </p>
              </div>
              
              <div className="flex flex-col items-center lg:items-start gap-10">
                <div className="flex gap-4">
                  <SocialBtn href="https://github.com/Anishkr0" icon={<Github size={20} />} label="GitHub" />
                  <SocialBtn href="https://www.linkedin.com/in/anish-kumar-63506326b/" icon={<Linkedin size={20} />} label="LinkedIn" />
                  <SocialBtn href="mailto:info.anishkrlpu@gmail.com" icon={<Mail size={20} />} label="Mail" />
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-600 border-t border-zinc-200/60 dark:border-zinc-800/60 pt-8 w-full lg:w-auto font-medium">
                  Based in Punjab, India • IST GMT+5:30
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex justify-center order-1 lg:order-2"
          >
            <div className="relative group">
              <div className="absolute -inset-10 bg-orange-100/30 dark:bg-orange-900/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
              
              <div className="relative w-72 h-[440px] md:w-80 md:h-[540px] overflow-hidden rounded-[180px] border-[1px] border-zinc-200/50 dark:border-zinc-800/50 shadow-2xl shadow-zinc-300/40 dark:shadow-black/60 bg-white/20 dark:bg-zinc-900/20 backdrop-blur-sm">
                <img 
                  src="/assests/profile.jpg" 
                  alt="Anish Kumar" 
                  className="w-full h-full object-cover grayscale brightness-95 contrast-[1.05] hover:grayscale-0 hover:scale-105 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/60 dark:from-black/60 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </motion.div>

          {/* Right: Modern Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 text-center lg:text-right order-3"
          >
              <div className="flex flex-col gap-14 lg:items-end">
                  <StatItem number="01+" label="Years Industry" />
                  <StatItem number="15+" label="Digital Assets" />
                  <StatItem number="100%" label="Code Quality" />
                  <div className="group text-center lg:text-right">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-600 mb-4 block font-semibold group-hover:text-orange-600 transition-colors">Core Technologies</span>
                    <span className="font-serif text-4xl text-zinc-900 dark:text-zinc-200 flex flex-wrap justify-center lg:justify-end gap-x-4 italic opacity-80">
                       <span className="hover:text-orange-700 hover:opacity-100 transition-all">M</span>
                       <span className="hover:text-orange-700 hover:opacity-100 transition-all">E</span>
                       <span className="hover:text-orange-700 hover:opacity-100 transition-all">R</span>
                       <span className="hover:text-orange-700 hover:opacity-100 transition-all">N</span>
                    </span>
                  </div>
              </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[9px] uppercase tracking-[0.6em] text-zinc-400 font-bold">Explore</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-zinc-400/50 dark:from-zinc-600/50 via-zinc-300/20 dark:via-zinc-800/20 to-transparent"></div>
      </motion.div>
    </section>
  );
};

const StatItem = ({ number, label }: { number: string, label: string }) => (
    <div className="group cursor-default">
        <span className="text-[9px] uppercase tracking-[0.4em] text-zinc-400 dark:text-zinc-600 mb-2 block group-hover:text-orange-600 transition-colors duration-700 font-bold">{label}</span>
        <span className="font-serif text-6xl md:text-8xl text-zinc-950 dark:text-zinc-100 group-hover:tracking-wider transition-all duration-1000 block leading-none">{number}</span>
    </div>
);

const SocialBtn = ({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    title={label}
    className="flex items-center justify-center w-14 h-14 border border-zinc-300/50 dark:border-zinc-800/50 rounded-full hover:bg-zinc-950 dark:hover:bg-zinc-100 hover:text-white dark:hover:text-black transition-all duration-700 group bg-white/30 dark:bg-zinc-900/30 backdrop-blur-md shadow-sm hover:shadow-2xl hover:-translate-y-2"
  >
    {icon}
  </a>
);

export default Hero;
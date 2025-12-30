
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, FileJson, Layout, Brain } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'REACT.JS', percentage: '79%', icon: <Code2 size={24} /> },
    { name: 'NODE.JS', percentage: '73%', icon: <Server size={24} /> },
    { name: 'MONGODB', percentage: '60%', icon: <Database size={24} /> },
    { name: 'JAVASCRIPT', percentage: '91%', icon: <FileJson size={24} /> },
    { name: 'TAILWIND CSS', percentage: '92%', icon: <Layout size={24} /> },
    { name: 'PROBLEM SOLVING', percentage: '95%', icon: <Brain size={24} /> },
  ];

  const bannerSkills = ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Git", "MySQL", "JavaScript"];

  return (
    <section className="py-20">
      {/* Top Subtle Banner */}
      <div className="border-y border-zinc-200/50 py-10 mb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center gap-8 opacity-40">
          {bannerSkills.map((skill, index) => (
            <span key={index} className="font-serif italic text-lg md:text-xl text-zinc-600 whitespace-nowrap">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-zinc-900 mb-6"
          >
            Technical Proficiency
          </motion.h2>
          <div className="w-12 h-[2px] bg-zinc-200 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center group"
            >
              {/* Skill Circle */}
              <div className="relative w-28 h-28 md:w-32 md:h-32 mb-6">
                {/* Subtle border circle */}
                <div className="absolute inset-0 rounded-full border border-zinc-200 group-hover:border-amber-200 transition-colors duration-500"></div>
                
                {/* Icon Container */}
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 group-hover:text-amber-700 transition-colors duration-500">
                  {skill.icon}
                </div>

                {/* Optional: Subtle progress dash can be added here if needed, 
                    but sticking to the minimal screenshot look */}
              </div>

              {/* Skill Info */}
              <div className="text-center">
                <span className="font-serif text-xl text-zinc-800 block mb-1 group-hover:text-amber-700 transition-colors">{skill.percentage}</span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold">{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
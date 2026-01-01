import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Database, FileJson, Layout, Brain } from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "REACT.JS", percentage: "79%", icon: <Code2 size={24} /> },
    { name: "NODE.JS", percentage: "73%", icon: <Server size={24} /> },
    { name: "MONGODB", percentage: "60%", icon: <Database size={24} /> },
    { name: "JAVASCRIPT", percentage: "91%", icon: <FileJson size={24} /> },
    { name: "TAILWIND CSS", percentage: "92%", icon: <Layout size={24} /> },
    { name: "PROBLEM SOLVING", percentage: "95%", icon: <Brain size={24} /> },
  ];

  return (
    <section className="py-24 bg-[#f6f3ee]">
      {/* Heading */}
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl text-zinc-900 mb-4"
        >
          Technical Proficiency
        </motion.h2>
        <div className="w-12 h-[2px] bg-zinc-300 mx-auto" />
      </div>

      {/* Skills Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center group"
          >
            {/* Circle */}
            <div className="relative w-28 h-28 md:w-32 md:h-32 mb-6">
              
              {/* Base */}
              <div className="absolute inset-0 rounded-full 
                bg-[#f7f4ef] 
                border border-[#e7dfd2]
                transition-all duration-500 
                group-hover:bg-[#fff3d6] 
                group-hover:border-[#f1d18a]" />

              {/* Glow */}
              <div className="absolute inset-0 rounded-full 
                bg-yellow-100/40 blur-xl opacity-0 
                group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="absolute inset-0 flex items-center justify-center 
                text-zinc-400 
                group-hover:text-amber-600 
                transition-colors duration-500">
                {skill.icon}
              </div>
            </div>

            {/* Text */}
            <div className="text-center">
              <span className="font-serif text-xl text-zinc-800 block mb-1 group-hover:text-amber-700 transition-colors">
                {skill.percentage}
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-gray-500 font-semibold">
                {skill.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;


import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-200/50">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-serif text-4xl md:text-6xl text-center mb-20 text-zinc-900 dark:text-zinc-100"
      >
        Education & Experience
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0 relative">
        {/* Vertical Divider for Desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-zinc-200 dark:bg-zinc-800 -translate-x-1/2"></div>

        {/* Education Column */}
        <div className="md:pr-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-12 block">Education</span>
          
          <div className="space-y-16">
            <TimelineItem 
              date="2022 - 2025"
              title="Bachelor of Computer Application"
              org="Lovely Professional University"
              desc="Gained hands-on experience in web technologies, data structures, and algorithms."
            />
            <TimelineItem 
              date="2019 - 2021"
              title="Senior Secondary School"
              org="+2 High School Bodhgaya, Gaya"
              desc="Focused on core science subjects and developed a strong foundation in mathematics and logic."
            />
          </div>
        </div>

        {/* Work History Column */}
        <div className="md:pl-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-12 block">Work History</span>
          
          <div className="space-y-16">
            <TimelineItem 
              date="Current (1 Month)"
              title="Content Moderator"
              org="Google (via Concentrix)"
              desc="Ensuring platform safety by reviewing user-generated content. Analyzing trends to improve automated systems."
            />
            <TimelineItem 
              date="July 2024 - Dec 2024"
              title="Frontend Developer Intern"
              org="Boonoz PVT LTD, Haryana"
              desc="Developed responsive React.js apps improving engagement by 30%. Integrated RESTful APIs and participated in Agile sprints."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ date, title, org, desc }: { date: string, title: string, org: string, desc: string }) => (
  <div className="flex group">
    <div className="w-24 md:w-32 shrink-0">
      <span className="text-xs text-gray-400 font-medium">{date}</span>
    </div>
    <div className="flex-1">
      <h3 className="font-serif text-xl md:text-2xl text-zinc-800 dark:text-zinc-200 mb-1 group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors">{title}</h3>
      <p className="text-sm font-medium text-zinc-500 mb-3">{org}</p>
      <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
        {desc}
      </p>
    </div>
  </div>
);

export default Experience;

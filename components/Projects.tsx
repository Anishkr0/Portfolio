
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const Projects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="works" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-6xl text-zinc-900 dark:text-zinc-100 mb-4"
          >
            My Latest Projects
          </motion.h2>
          <p className="text-gray-500 dark:text-zinc-400 text-lg">SkillSwap Platform & more.</p>
        </div>
        <button 
          onClick={() => navigate('/works')}
          className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-900 dark:text-zinc-100 hover:text-amber-700 dark:hover:text-amber-500 transition-colors group"
        >
          View All Work <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            tag={project.tag}
            title={project.title}
            desc={project.shortDesc}
            img={project.img}
            isSpecial={project.isSpecial}
            onClick={() => navigate(`/project/${project.id}`)}
          />
        ))}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  tag: string;
  title: string;
  desc: string;
  img: string;
  isSpecial?: boolean;
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ tag, title, desc, img, isSpecial, onClick }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group cursor-pointer"
    onClick={onClick}
  >
    <div className="relative aspect-video overflow-hidden rounded-sm">
      <img 
        src={img} 
        alt={title} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
      />
      {isSpecial && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white dark:bg-zinc-100 rounded-full flex items-center justify-center shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <ArrowUpRight className="text-black" size={24} />
          </div>
        </div>
      )}
    </div>
    <span className="text-[9px] uppercase tracking-[0.25em] text-gray-400 dark:text-zinc-500 font-bold block mb-3">{tag}</span>
    <h3 className="font-serif text-2xl text-zinc-900 dark:text-zinc-100 mb-3 group-hover:underline underline-offset-4 decoration-1">{title}</h3>
    <p className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed line-clamp-3">
      {desc}
    </p>
  </motion.div>
);

export default Projects;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const AllProjects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-warm-cream dark:bg-dark-obsidian selection:bg-amber-100 dark:selection:bg-amber-900 selection:text-amber-900 dark:selection:text-amber-100 transition-colors duration-500">
      {/* Header */}
      <div className="py-8 px-6 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 hover:text-amber-700 dark:hover:text-amber-500 transition-colors"
          >
            <ArrowLeft size={20} />
            Back
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="font-serif text-5xl md:text-7xl text-zinc-900 dark:text-zinc-100 mb-4">
            All Projects
          </h1>
          <p className="text-gray-500 dark:text-zinc-400 text-lg">
            Explore all my work and projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigate(`/project/${project.id}`)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden rounded-sm mb-6">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
                {project.isSpecial && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white dark:bg-zinc-100 rounded-full flex items-center justify-center shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <ArrowUpRight className="text-black" size={24} />
                    </div>
                  </div>
                )}
              </div>

              <span className="text-[9px] uppercase tracking-[0.25em] text-gray-400 dark:text-zinc-500 font-bold block mb-3">
                {project.tag}
              </span>
              <h3 className="font-serif text-3xl text-zinc-900 dark:text-zinc-100 mb-3 group-hover:underline underline-offset-4 decoration-1">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed mb-6">
                {project.shortDesc}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-amber-700 dark:text-amber-500 hover:text-amber-800 dark:hover:text-amber-400 font-semibold flex items-center gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live Demo <ArrowUpRight size={14} />
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-amber-700 dark:text-amber-500 hover:text-amber-800 dark:hover:text-amber-400 font-semibold flex items-center gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;

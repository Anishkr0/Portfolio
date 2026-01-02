import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-warm-cream dark:bg-dark-obsidian flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-zinc-900 dark:text-zinc-100 mb-4">
            Project Not Found
          </h1>
          <button
            onClick={() => navigate('/')}
            className="text-amber-700 dark:text-amber-500 hover:text-amber-800 dark:hover:text-amber-400 font-semibold"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-cream dark:bg-dark-obsidian selection:bg-amber-100 dark:selection:bg-amber-900 selection:text-amber-900 dark:selection:text-amber-100 transition-colors duration-500">
      {/* Header */}
      <div className="py-8 px-6 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto flex items-center gap-4">
          <button
            onClick={() => navigate('/works')}
            className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 hover:text-amber-700 dark:hover:text-amber-500 transition-colors"
          >
            <ArrowLeft size={20} />
            All Projects
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="py-24 px-6 max-w-5xl mx-auto">
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 rounded-lg overflow-hidden"
        >
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-96 object-cover"
          />
        </motion.div>

        {/* Title and Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400 dark:text-zinc-500 font-bold block mb-4">
            {project.tag}
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-zinc-900 dark:text-zinc-100 mb-6">
            {project.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-zinc-400 leading-relaxed mb-8">
            {project.fullDesc}
          </p>

          {/* Links */}
          <div className="flex gap-4 mb-12">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-amber-700 hover:bg-amber-800 text-white dark:bg-amber-600 dark:hover:bg-amber-700 font-semibold rounded transition-colors"
              >
                View Live <ArrowUpRight size={16} />
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-semibold rounded transition-colors"
              >
                GitHub <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16 pb-16 border-b border-zinc-200 dark:border-zinc-800"
        >
          <h2 className="font-serif text-3xl text-zinc-900 dark:text-zinc-100 mb-6">
            Technologies Used
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {project.technologies.map((tech) => (
              <div
                key={tech}
                className="p-4 bg-zinc-100 dark:bg-zinc-900 rounded-lg text-center"
              >
                <p className="text-zinc-900 dark:text-zinc-100 font-semibold">{tech}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="font-serif text-3xl text-zinc-900 dark:text-zinc-100 mb-6">
              Key Features
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 text-lg text-gray-600 dark:text-zinc-400"
                >
                  <span className="text-amber-700 dark:text-amber-500 font-bold mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;

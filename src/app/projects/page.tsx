'use client';

import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';
import { useTheme } from '../contexts/ThemeContext';
import { ZenMode, ZenCard, ZenButton, ZenHeading, ZenText } from '../components/themes/ZenMode';
import { RetroCard, RetroButton, RetroHeading, RetroText, RetroMatrix } from '../components/themes/RetroFuturistic';
import { BrutalCard, BrutalButton, BrutalHeading, BrutalText } from '../components/themes/SoftBrutalism';

export default function Projects() {
  const { currentTheme } = useTheme();

  const getThemeClasses = () => {
    const baseClasses = "min-h-screen transition-all duration-500";
    
    switch (currentTheme) {
      case 'zen':
        return `${baseClasses} bg-gradient-to-b from-slate-50 to-white`;
      case 'retro':
        return `${baseClasses} bg-gradient-to-b from-indigo-900 to-purple-900`;
      case 'brutalism':
        return `${baseClasses} bg-gradient-to-b from-amber-50 to-yellow-100`;
      default:
        return `${baseClasses} bg-gradient-to-b from-blue-50 to-white`;
    }
  };

  const renderHeader = () => {
    switch (currentTheme) {
      case 'zen':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <ZenHeading level={1} className="mb-4">Projects</ZenHeading>
            <ZenText className="text-xl">Featured projects and achievements</ZenText>
          </motion.div>
        );
      case 'retro':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 relative"
          >
            <RetroMatrix />
            <RetroHeading level={1} glitch className="mb-4 relative z-10">PROJECTS</RetroHeading>
            <RetroText className="text-xl relative z-10">FEATURED PROJECTS & ACHIEVEMENTS</RetroText>
          </motion.div>
        );
      case 'brutalism':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <BrutalHeading level={1} oversized className="mb-4">PROJECTS</BrutalHeading>
            <BrutalText className="text-2xl">FEATURED PROJECTS & ACHIEVEMENTS</BrutalText>
          </motion.div>
        );
      default:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Projects</h1>
            <p className="text-xl text-gray-700">Featured projects and achievements</p>
          </motion.div>
        );
    }
  };

  const renderProjectCard = (project: { title: string; description: string; highlights: string[]; technologies: string[]; link?: string }, index: number) => {
    switch (currentTheme) {
      case 'zen':
        return (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="zen-hover"
          >
            <ZenCard className="overflow-hidden">
              <div className="p-6">
                <ZenHeading level={2} className="mb-2">{project.title}</ZenHeading>
                <ZenText className="mb-4">{project.description}</ZenText>
                
                <div className="space-y-4">
                  <div>
                    <ZenHeading level={3} className="mb-2">Key Features</ZenHeading>
                    <ul className="list-disc list-inside space-y-1 text-slate-600">
                      {project.highlights.map((highlight: string, i: number) => (
                        <li key={`${project.title}-highlight-${i}`}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <ZenHeading level={3} className="mb-2">Technologies</ZenHeading>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech: string, i: number) => (
                        <span
                          key={`${project.title}-tech-${i}`}
                          className="px-3 py-1 bg-slate-50 text-slate-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ZenButton>
                        View Project
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </ZenButton>
                    </motion.a>
                  )}
                </div>
              </div>
            </ZenCard>
          </motion.div>
        );

      case 'retro':
        return (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <RetroCard glitch className="overflow-hidden">
              <div className="p-6">
                <RetroHeading level={2} className="mb-2">{project.title}</RetroHeading>
                <RetroText className="mb-4">{project.description}</RetroText>
                
                <div className="space-y-4">
                  <div>
                    <RetroHeading level={3} className="mb-2">KEY FEATURES</RetroHeading>
                    <ul className="list-disc list-inside space-y-1 text-[var(--text-primary)]">
                      {project.highlights.map((highlight: string, i: number) => (
                        <li key={`${project.title}-highlight-${i}`}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <RetroHeading level={3} className="mb-2">TECHNOLOGIES</RetroHeading>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech: string, i: number) => (
                        <span
                          key={`${project.title}-tech-${i}`}
                          className="px-3 py-1 bg-[var(--surface)] text-[var(--text-primary)] border border-[var(--border)] rounded text-sm font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <RetroButton neon>
                        VIEW PROJECT
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </RetroButton>
                    </motion.a>
                  )}
                </div>
              </div>
            </RetroCard>
          </motion.div>
        );

      case 'brutalism':
        return (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <BrutalCard handDrawn className="overflow-hidden">
              <div className="p-6">
                <BrutalHeading level={2} className="mb-2">{project.title}</BrutalHeading>
                <BrutalText className="mb-4">{project.description}</BrutalText>
                
                <div className="space-y-4">
                  <div>
                    <BrutalHeading level={3} className="mb-2">KEY FEATURES</BrutalHeading>
                    <ul className="list-disc list-inside space-y-1 text-gray-800">
                      {project.highlights.map((highlight: string, i: number) => (
                        <li key={`${project.title}-highlight-${i}`}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <BrutalHeading level={3} className="mb-2">TECHNOLOGIES</BrutalHeading>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech: string, i: number) => (
                        <span
                          key={`${project.title}-tech-${i}`}
                          className="px-3 py-1 bg-amber-200 text-gray-800 border-2 border-gray-800 rounded text-sm font-bold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <BrutalButton size="large">
                        VIEW PROJECT
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </BrutalButton>
                    </motion.a>
                  )}
                </div>
              </div>
            </BrutalCard>
          </motion.div>
        );

      default:
        return (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-blue-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Key Features</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {project.highlights.map((highlight: string, i: number) => (
                      <li key={`${project.title}-highlight-${i}`}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string, i: number) => (
                      <span
                        key={`${project.title}-tech-${i}`}
                        className="px-3 py-1 bg-blue-50 text-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>View Project</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <ZenMode>
      <div className={getThemeClasses()}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {renderHeader()}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => renderProjectCard(project, index))}
          </div>
        </div>
      </div>
    </ZenMode>
  );
} 
'use client';

import { motion } from 'framer-motion';
import { FiExternalLink, FiArrowRight, FiTerminal, FiMail, FiGlobe } from 'react-icons/fi';
import { projects } from '../data/portfolio';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: 'var(--page-bg)' }}>
      {/* Dot grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--dot-color) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />
      <div
        className="fixed top-1/3 -right-48 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, var(--stat-purple-bg) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 pt-28 pb-24 px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <FiTerminal className="text-cyan-600 dark:text-cyan-400" size={13} />
            <span className="font-mono text-xs text-slate-400 dark:text-zinc-600">$ ls -la projects/</span>
          </div>
          <h1
            className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            My Projects
          </h1>
          <p className="text-slate-600 dark:text-zinc-500 text-lg max-w-2xl">
            A collection of projects showcasing expertise in building modern, scalable web applications.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative rounded-2xl overflow-hidden transition-all duration-300"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', boxShadow: 'var(--card-shadow)' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = 'var(--hover-shadow)';
                el.style.borderColor = 'var(--hover-border)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = 'var(--card-shadow)';
                el.style.borderColor = 'var(--card-border)';
              }}
            >
              {/* Top accent line on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'var(--top-line)' }}
              />

              <div className="p-7">
                {/* Header row */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1 pr-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs text-slate-300 dark:text-zinc-700">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h2
                      className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-200"
                      style={{ fontFamily: 'var(--font-space-grotesk)' }}
                    >
                      {project.title}
                    </h2>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-slate-400 dark:text-zinc-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-200"
                      style={{ border: '1px solid var(--card-border)', background: 'var(--badge-bg)' }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(6,182,212,0.35)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'var(--card-border)';
                      }}
                      aria-label={`View ${project.title} project`}
                    >
                      <FiExternalLink size={16} />
                    </a>
                  )}
                </div>

                <p className="text-slate-500 dark:text-zinc-500 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Key features */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-xs text-slate-400 dark:text-zinc-600">// key_features</span>
                  </div>
                  <ul className="space-y-1.5">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-500 dark:text-zinc-500">
                        <span className="text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0 font-mono text-xs">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-xs text-slate-400 dark:text-zinc-600">// stack</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono text-blue-600 dark:text-blue-400 cursor-default transition-colors duration-200"
                        style={{ background: 'var(--tag-blue-bg)', border: '1px solid var(--tag-blue-border)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View link */}
                {project.link && (
                  <div className="pt-4" style={{ borderTop: '1px solid var(--divider)' }}>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-mono text-xs group/link transition-colors duration-200"
                    >
                      <FiGlobe size={12} />
                      View Live Project
                      <FiArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform duration-200" />
                    </a>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-6xl mx-auto mt-12"
        >
          <div
            className="relative rounded-2xl p-10 text-center overflow-hidden"
            style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', boxShadow: 'var(--card-shadow)' }}
          >
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--section-glow)' }} />
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'var(--top-line)' }} />
            <div className="relative z-10">
              <h2
                className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                Want to discuss these projects?
              </h2>
              <p className="text-slate-600 dark:text-zinc-500 mb-8">
                Feel free to reach out to learn more about my work and experience.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(59,130,246,0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-mono font-semibold text-sm cursor-pointer text-white transition-all duration-200"
                  style={{
                    background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                    boxShadow: '0 0 24px rgba(59,130,246,0.3)',
                  }}
                >
                  <FiMail size={16} />
                  ./get-in-touch
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

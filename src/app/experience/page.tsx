'use client';

import { motion } from 'framer-motion';
import {
  FiMapPin,
  FiCalendar,
  FiAward,
  FiCheckCircle,
  FiBriefcase,
  FiTrendingUp,
  FiTerminal,
  FiCpu,
} from 'react-icons/fi';
import { experiences } from '../data/portfolio';

const summaryStats = [
  { value: '15+', label: 'Years Experience', bgVar: '--stat-blue-bg', borderVar: '--stat-blue-border', color: '#3B82F6' },
  { value: '5',   label: 'Major Companies',  bgVar: '--stat-green-bg', borderVar: '--stat-green-border', color: '#10B981' },
  { value: '50+', label: 'Projects Completed', bgVar: '--stat-purple-bg', borderVar: '--stat-purple-border', color: '#8B5CF6' },
];

const coreSkills = ['React', 'TypeScript', 'Performance', 'Accessibility', 'Team Leadership', 'Architecture'];

export default function ExperiencePage() {
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
        className="fixed top-1/4 -left-48 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, var(--orb-blue) 0%, transparent 70%)' }}
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
            <span className="font-mono text-xs text-slate-400 dark:text-zinc-600">$ git log --oneline career</span>
          </div>
          <h1
            className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Career Experience
          </h1>
          <p className="text-slate-600 dark:text-zinc-500 text-lg max-w-2xl">
            15+ years of building exceptional user experiences at leading tech companies.
          </p>
        </motion.div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-6xl mx-auto grid grid-cols-3 gap-4 mb-16"
        >
          {summaryStats.map((s) => (
            <div
              key={s.label}
              className="p-5 rounded-2xl text-center transition-all duration-200"
              style={{
                background: `var(${s.bgVar})`,
                border: `1px solid var(${s.borderVar})`,
              }}
            >
              <div className="text-3xl md:text-4xl font-bold font-mono mb-1" style={{ color: s.color }}>
                {s.value}
              </div>
              <div className="text-xs text-slate-500 dark:text-zinc-500 font-mono">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Experience cards */}
        <div className="max-w-6xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative rounded-2xl overflow-hidden transition-all duration-300 group"
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

              <div className="p-8 md:p-10">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 mb-8">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'var(--stat-blue-bg)', border: '1px solid var(--stat-blue-border)' }}
                    >
                      <FiBriefcase className="text-blue-500 dark:text-blue-400" size={22} />
                    </div>
                    <div>
                      <h2
                        className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-200"
                        style={{ fontFamily: 'var(--font-space-grotesk)' }}
                      >
                        {exp.company}
                      </h2>
                      <p className="text-cyan-600 dark:text-cyan-400 font-mono text-sm mb-3">{exp.role}</p>
                      <div className="flex flex-wrap gap-2">
                        <span
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-slate-500 dark:text-zinc-500 font-mono text-xs"
                          style={{ background: 'var(--badge-bg)', border: '1px solid var(--badge-border)' }}
                        >
                          <FiCalendar size={11} className="text-cyan-600 dark:text-cyan-400" />
                          {exp.period}
                        </span>
                        <span
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-slate-500 dark:text-zinc-500 font-mono text-xs"
                          style={{ background: 'var(--badge-bg)', border: '1px solid var(--badge-border)' }}
                        >
                          <FiMapPin size={11} className="text-cyan-600 dark:text-cyan-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Count badge */}
                  <div
                    className="flex-shrink-0 flex flex-col items-center justify-center w-20 h-20 rounded-2xl"
                    style={{ background: 'var(--stat-blue-bg)', border: '1px solid var(--stat-blue-border)' }}
                  >
                    <span className="text-2xl font-bold font-mono text-blue-500 dark:text-blue-400">
                      {exp.achievements.length}
                    </span>
                    <span className="text-[10px] text-slate-400 dark:text-zinc-600 font-mono text-center leading-tight mt-0.5">
                      items
                    </span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <FiAward className="text-cyan-600 dark:text-cyan-400" size={13} />
                    <span className="font-mono text-xs text-slate-400 dark:text-zinc-600">// key_achievements</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.08 + i * 0.04 }}
                        className="flex items-start gap-2.5 p-3.5 rounded-xl transition-colors duration-200"
                        style={{ background: 'var(--achievement-bg)', border: '1px solid var(--achievement-border)' }}
                      >
                        <FiCheckCircle className="text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" size={13} />
                        <span className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <FiTrendingUp className="text-cyan-600 dark:text-cyan-400" size={13} />
                    <span className="font-mono text-xs text-slate-400 dark:text-zinc-600">// technologies</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md text-xs font-mono text-blue-600 dark:text-blue-400 cursor-default transition-all duration-200"
                        style={{ background: 'var(--tag-blue-bg)', border: '1px solid var(--tag-blue-border)' }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = 'rgba(59,130,246,0.12)';
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = 'var(--tag-blue-bg)';
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Core competencies footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-6xl mx-auto mt-16"
        >
          <div
            className="relative rounded-2xl p-10 text-center overflow-hidden"
            style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', boxShadow: 'var(--card-shadow)' }}
          >
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--section-glow)' }} />
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'var(--top-line)' }} />
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-6">
                <FiCpu className="text-cyan-600 dark:text-cyan-400" size={13} />
                <span className="font-mono text-xs text-slate-400 dark:text-zinc-600">// core_competencies</span>
              </div>
              <p className="text-slate-600 dark:text-zinc-500 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
                Specialized in frontend architecture, performance optimization, and accessible interfaces at scale.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {coreSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-xl font-mono text-sm text-cyan-600 dark:text-cyan-400 cursor-default transition-all duration-200 hover:opacity-80"
                    style={{ border: '1px solid var(--nav-active-border)', background: 'var(--nav-active-bg)' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

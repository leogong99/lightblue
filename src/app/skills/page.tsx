'use client';

import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import { FiCode, FiTool, FiCheckCircle, FiMoreHorizontal, FiTerminal } from 'react-icons/fi';

const categoryIcons: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties; className?: string }>> = {
  Frontend: FiCode,
  'Development Tools': FiTool,
  'Testing & Quality': FiCheckCircle,
  Other: FiMoreHorizontal,
};

const categoryThemes: Record<string, { color: string; bgVar: string; borderVar: string; bar: string }> = {
  Frontend: {
    color: '#3B82F6',
    bgVar: '--stat-blue-bg',
    borderVar: '--stat-blue-border',
    bar: 'linear-gradient(90deg, #3B82F6, #06B6D4)',
  },
  'Development Tools': {
    color: '#10B981',
    bgVar: '--stat-green-bg',
    borderVar: '--stat-green-border',
    bar: 'linear-gradient(90deg, #10B981, #34D399)',
  },
  'Testing & Quality': {
    color: '#8B5CF6',
    bgVar: '--stat-purple-bg',
    borderVar: '--stat-purple-border',
    bar: 'linear-gradient(90deg, #8B5CF6, #A78BFA)',
  },
  Other: {
    color: '#F59E0B',
    bgVar: '--stat-amber-bg',
    borderVar: '--stat-amber-border',
    bar: 'linear-gradient(90deg, #F59E0B, #FCD34D)',
  },
};

function proficiencyLabel(level: number) {
  if (level >= 90) return 'Expert';
  if (level >= 80) return 'Advanced';
  if (level >= 70) return 'Proficient';
  return 'Intermediate';
}

const coreCompetencies = [
  { label: 'Frontend Frameworks', value: 'React · TypeScript' },
  { label: 'UI / UX', value: 'Responsive · Accessible' },
  { label: 'Performance', value: 'Optimization Expert' },
  { label: 'Testing', value: 'Unit · E2E · Integration' },
];

export default function SkillsPage() {
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
        className="fixed bottom-1/3 -right-48 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, var(--orb-cyan) 0%, transparent 70%)' }}
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
            <span className="font-mono text-xs text-slate-400 dark:text-zinc-600">$ cat skills.json | jq</span>
          </div>
          <h1
            className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Technical Skills
          </h1>
          <p className="text-slate-600 dark:text-zinc-500 text-lg max-w-2xl">
            A comprehensive overview of my technical expertise and proficiency levels across categories.
          </p>
        </motion.div>

        {/* Skill categories */}
        <div className="max-w-6xl mx-auto space-y-6">
          {Object.entries(skills).map(([category, categorySkills], categoryIndex) => {
            const Icon = categoryIcons[category] || FiCode;
            const theme = categoryThemes[category] || categoryThemes.Frontend;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', boxShadow: 'var(--card-shadow)' }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = `0 0 40px ${theme.color}12`;
                  el.style.borderColor = `${theme.color}30`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = 'var(--card-shadow)';
                  el.style.borderColor = 'var(--card-border)';
                }}
              >
                {/* Category header */}
                <div
                  className="flex items-center gap-3 px-8 py-5"
                  style={{
                    background: `var(${theme.bgVar})`,
                    borderBottom: '1px solid var(--divider)',
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: `${theme.color}14`, border: `1px solid ${theme.color}28` }}
                  >
                    <Icon size={18} style={{ color: theme.color }} />
                  </div>
                  <span
                    className="font-bold text-slate-900 dark:text-white text-lg"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    {category}
                  </span>
                  <span className="ml-auto font-mono text-xs text-slate-400 dark:text-zinc-600">
                    {categorySkills.length} skills
                  </span>
                </div>

                {/* Skills grid */}
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categorySkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: categoryIndex * 0.1 + index * 0.04 }}
                        className="group/skill"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-slate-700 dark:text-zinc-300 text-sm font-medium group-hover/skill:text-slate-900 dark:group-hover/skill:text-white transition-colors">
                            {skill.name}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono" style={{ color: theme.color }}>
                              {skill.level}%
                            </span>
                            <span className="text-[10px] font-mono text-slate-400 dark:text-zinc-700 hidden sm:inline">
                              {proficiencyLabel(skill.level)}
                            </span>
                          </div>
                        </div>
                        {/* Progress track */}
                        <div
                          className="relative h-1.5 rounded-full overflow-hidden"
                          style={{ background: 'var(--achievement-border)' }}
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.9, delay: categoryIndex * 0.1 + index * 0.04 + 0.2, ease: 'easeOut' }}
                            className="absolute top-0 left-0 h-full rounded-full"
                            style={{ background: theme.bar }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Core competencies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-6xl mx-auto mt-10"
        >
          <div
            className="relative rounded-2xl p-10 overflow-hidden"
            style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', boxShadow: 'var(--card-shadow)' }}
          >
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--section-glow)' }} />
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'var(--top-line)' }} />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-8">
                <FiTerminal className="text-cyan-600 dark:text-cyan-400" size={13} />
                <span className="font-mono text-xs text-slate-400 dark:text-zinc-600">// core_competencies</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {coreCompetencies.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.08 }}
                    className="p-5 rounded-xl transition-all duration-200"
                    style={{ background: 'var(--badge-bg)', border: '1px solid var(--badge-border)' }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(59,130,246,0.25)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--badge-border)';
                    }}
                  >
                    <div className="text-xs text-slate-400 dark:text-zinc-600 font-mono mb-2">{item.label}</div>
                    <div
                      className="text-sm font-semibold text-slate-900 dark:text-white"
                      style={{ fontFamily: 'var(--font-space-grotesk)' }}
                    >
                      {item.value}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

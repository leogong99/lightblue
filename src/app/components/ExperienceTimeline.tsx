'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  color: string;
  logo: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 'oracle',
    company: 'Oracle',
    role: 'Principal Member Of Technical Staff',
    period: '2019 - Present',
    description: 'Leading development of Oracle IDE and high-priority change events plugin, improving system responsiveness and user experience.',
    achievements: ['50% reduction in code editor loading time', '99% selenium test success rate', 'Level AA accessibility compliance'],
    color: 'from-red-500 to-red-600',
    logo: '🔴'
  },
  {
    id: 'amazon',
    company: 'Amazon',
    role: 'Web Development Engineer',
    period: '2015 - 2019',
    description: 'Enhanced job search experience for millions of users, implementing responsive design and improving performance.',
    achievements: ['30% increased user engagement', 'One-click application process', 'Seamless Angular to React migration'],
    color: 'from-orange-500 to-orange-600',
    logo: '📦'
  },
  {
    id: 'samsung',
    company: 'Samsung',
    role: 'Front-end Engineer',
    period: '2014 - 2015',
    description: 'Developed Samsung Knox front end using MVC pattern, creating reusable components and improving maintainability.',
    achievements: ['MVC architecture implementation', 'Reusable component library', 'Cross-browser compatibility'],
    color: 'from-blue-500 to-blue-600',
    logo: '📱'
  }
];

export default function ExperienceTimeline() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const { currentTheme } = useTheme();

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className={`absolute left-8 top-0 bottom-0 w-1 ${currentTheme === 'retro' ? 'bg-gradient-to-b from-[var(--accent)] via-[var(--primary)] to-[var(--accent)]' : 'bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200'} rounded-full`}></div>
      
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative flex items-start"
          >
            {/* Timeline dot */}
            <motion.div
              className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-r ${experience.color} flex items-center justify-center text-white text-2xl shadow-lg cursor-pointer`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveItem(activeItem === experience.id ? null : experience.id)}
            >
              {experience.logo}
            </motion.div>

            {/* Content card */}
            <motion.div
              className={`ml-8 flex-1 ${currentTheme === 'retro' ? 'bg-[var(--surface)] border-[var(--border)]' : 'bg-white border-gray-200'} rounded-lg shadow-sm overflow-hidden transition-all duration-300 ${
                activeItem === experience.id ? 'shadow-lg scale-105' : 'hover:shadow-md'
              }`}
              whileHover={{ y: -2 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className={`text-xl font-semibold ${currentTheme === 'retro' ? 'text-[var(--text-primary)]' : 'text-gray-900'}`}>
                      {experience.company}
                    </h3>
                    <p className={`${currentTheme === 'retro' ? 'text-[var(--accent)]' : 'text-blue-600'} font-medium`}>{experience.role}</p>
                    <p className={`${currentTheme === 'retro' ? 'text-[var(--text-muted)]' : 'text-gray-500'} text-sm`}>{experience.period}</p>
                  </div>
                  <motion.button
                    className={`${currentTheme === 'retro' ? 'text-[var(--text-muted)] hover:text-[var(--text-primary)]' : 'text-gray-400 hover:text-gray-600'} transition-colors`}
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className={`w-5 h-5 transform transition-transform duration-300 ${
                        activeItem === experience.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.button>
                </div>
                
                <p className={`${currentTheme === 'retro' ? 'text-[var(--text-secondary)]' : 'text-gray-700'} mb-4`}>{experience.description}</p>
                
                {/* Achievements - shown when expanded */}
                <motion.div
                  initial={false}
                  animate={{
                    height: activeItem === experience.id ? 'auto' : 0,
                    opacity: activeItem === experience.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className={`border-t ${currentTheme === 'retro' ? 'border-[var(--border)]' : 'border-gray-100'} pt-4`}>
                    <h4 className={`text-sm font-semibold ${currentTheme === 'retro' ? 'text-[var(--text-primary)]' : 'text-gray-900'} mb-3`}>Key Achievements</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <motion.li
                          key={`${experience.id}-achievement-${i}`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ 
                            opacity: activeItem === experience.id ? 1 : 0,
                            x: activeItem === experience.id ? 0 : -20
                          }}
                          transition={{ delay: i * 0.1 }}
                          className={`flex items-start ${currentTheme === 'retro' ? 'text-[var(--text-secondary)]' : 'text-gray-700'}`}
                        >
                          <svg
                            className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${currentTheme === 'retro' ? 'text-[var(--accent)]' : 'text-blue-500'}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Interactive stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        role="region"
        aria-label="Career statistics"
      >
        <div className={`text-center p-6 ${currentTheme === 'retro' ? 'bg-[var(--surface)] border border-[var(--border)]' : 'bg-gradient-to-br from-blue-50 to-blue-100'} rounded-lg`} role="article" aria-label="15+ years of experience">
          <motion.div
            className={`text-3xl font-bold mb-2 ${currentTheme === 'retro' ? 'text-[var(--accent)]' : 'text-blue-600'}`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            aria-label="15 plus years"
          >
            15+
          </motion.div>
          <p className={`${currentTheme === 'retro' ? 'text-[var(--text-secondary)]' : 'text-gray-700'}`}>Years Experience</p>
        </div>
        
        <div className={`text-center p-6 ${currentTheme === 'retro' ? 'bg-[var(--surface)] border border-[var(--border)]' : 'bg-gradient-to-br from-green-50 to-green-100'} rounded-lg`} role="article" aria-label="3 major companies worked for">
          <motion.div
            className={`text-3xl font-bold mb-2 ${currentTheme === 'retro' ? 'text-[var(--accent)]' : 'text-green-600'}`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            viewport={{ once: true }}
            aria-label="3 companies"
          >
            3
          </motion.div>
          <p className={`${currentTheme === 'retro' ? 'text-[var(--text-secondary)]' : 'text-gray-700'}`}>Major Companies</p>
        </div>
        
        <div className={`text-center p-6 ${currentTheme === 'retro' ? 'bg-[var(--surface)] border border-[var(--border)]' : 'bg-gradient-to-br from-purple-50 to-purple-100'} rounded-lg`} role="article" aria-label="50+ projects delivered">
          <motion.div
            className={`text-3xl font-bold mb-2 ${currentTheme === 'retro' ? 'text-[var(--accent)]' : 'text-purple-600'}`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            viewport={{ once: true }}
            aria-label="50 plus projects"
          >
            50+
          </motion.div>
          <p className={`${currentTheme === 'retro' ? 'text-[var(--text-secondary)]' : 'text-gray-700'}`}>Projects Delivered</p>
        </div>
      </motion.div>
    </div>
  );
}

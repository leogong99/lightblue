'use client';

import { motion } from 'framer-motion';
import { experiences } from '../data/portfolio';
import { useTheme } from '../contexts/ThemeContext';
import { ZenMode, ZenCard, ZenHeading, ZenText } from '../components/themes/ZenMode';
import { RetroCard, RetroHeading, RetroText, RetroMatrix } from '../components/themes/RetroFuturistic';
import { BrutalCard, BrutalHeading, BrutalText } from '../components/themes/SoftBrutalism';

export default function Experience() {
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
            <ZenHeading level={1} className="mb-4">Experience</ZenHeading>
            <ZenText className="text-xl">My professional journey and achievements</ZenText>
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
            <RetroHeading level={1} glitch className="mb-4 relative z-10">EXPERIENCE</RetroHeading>
            <RetroText className="text-xl relative z-10">PROFESSIONAL JOURNEY & ACHIEVEMENTS</RetroText>
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
            <BrutalHeading level={1} oversized className="mb-4">EXPERIENCE</BrutalHeading>
            <BrutalText className="text-2xl">MY PROFESSIONAL JOURNEY & ACHIEVEMENTS</BrutalText>
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Experience</h1>
          <p className="text-xl text-gray-700">My professional journey and achievements</p>
        </motion.div>
        );
    }
  };

  const renderExperienceCard = (experience: { company: string; role: string; location: string; period: string; achievements: string[]; technologies: string[] }, index: number) => {
    switch (currentTheme) {
      case 'zen':
        return (
          <motion.div
            key={experience.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <ZenCard className="overflow-hidden">
              <div className="p-6 border-b border-slate-200">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <ZenHeading level={2} className="mb-2">{experience.role}</ZenHeading>
                    <ZenHeading level={3} className="text-xl mb-1">{experience.company}</ZenHeading>
                    <ZenText muted>{experience.location}</ZenText>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">
                      {experience.period}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <ZenHeading level={4} className="mb-4 flex items-center">
                      <svg className="w-5 h-5 text-slate-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Key Achievements
                    </ZenHeading>
                    <ul className="space-y-3">
                      {experience.achievements.map((achievement: string, i: number) => (
                        <li key={`${experience.company}-achievement-${i}`} className="flex items-start text-slate-600">
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <ZenHeading level={4} className="mb-4 flex items-center">
                      <svg className="w-5 h-5 text-slate-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      Technologies
                    </ZenHeading>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech: string, i: number) => (
                        <span
                          key={`${experience.company}-tech-${i}`}
                          className="px-3 py-1 bg-slate-50 text-slate-700 rounded-full text-sm hover:bg-slate-100 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ZenCard>
          </motion.div>
        );

      case 'retro':
        return (
          <motion.div
            key={experience.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <RetroCard glitch className="overflow-hidden">
              <div className="p-6 border-b border-[var(--border)]">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <RetroHeading level={2} className="mb-2">{experience.role}</RetroHeading>
                    <RetroHeading level={3} className="text-xl mb-1">{experience.company}</RetroHeading>
                    <RetroText muted>{experience.location}</RetroText>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-4 py-2 bg-[var(--surface)] text-[var(--text-primary)] border border-[var(--border)] rounded text-sm font-mono">
                      {experience.period}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <RetroHeading level={4} className="mb-4 flex items-center">
                      <svg className="w-5 h-5 text-[var(--accent)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      KEY ACHIEVEMENTS
                    </RetroHeading>
                    <ul className="space-y-3">
                      {experience.achievements.map((achievement: string, i: number) => (
                        <li key={`${experience.company}-achievement-${i}`} className="flex items-start text-[var(--text-primary)]">
                          <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full mt-2 mr-3"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <RetroHeading level={4} className="mb-4 flex items-center">
                      <svg className="w-5 h-5 text-[var(--accent)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      TECHNOLOGIES
                    </RetroHeading>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech: string, i: number) => (
                        <span
                          key={`${experience.company}-tech-${i}`}
                          className="px-3 py-1 bg-[var(--surface)] text-[var(--text-primary)] border border-[var(--border)] rounded text-sm font-mono hover:bg-[var(--primary)] hover:text-[var(--text-primary)] transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </RetroCard>
          </motion.div>
        );

      case 'brutalism':
        return (
          <motion.div
            key={experience.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <BrutalCard handDrawn className="overflow-hidden">
              <div className="p-6 border-b-4 border-gray-800">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <BrutalHeading level={2} className="mb-2">{experience.role}</BrutalHeading>
                    <BrutalHeading level={3} className="text-xl mb-1">{experience.company}</BrutalHeading>
                    <BrutalText muted>{experience.location}</BrutalText>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-4 py-2 bg-amber-200 text-gray-800 border-2 border-gray-800 rounded text-sm font-bold">
                      {experience.period}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <BrutalHeading level={4} className="mb-4 flex items-center">
                      <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      KEY ACHIEVEMENTS
                    </BrutalHeading>
                    <ul className="space-y-3">
                      {experience.achievements.map((achievement: string, i: number) => (
                        <li key={`${experience.company}-achievement-${i}`} className="flex items-start text-gray-800">
                          <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 mr-3"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <BrutalHeading level={4} className="mb-4 flex items-center">
                      <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      TECHNOLOGIES
                    </BrutalHeading>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech: string, i: number) => (
                        <span
                          key={`${experience.company}-tech-${i}`}
                          className="px-3 py-1 bg-amber-200 text-gray-800 border-2 border-gray-800 rounded text-sm font-bold hover:bg-amber-300 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </BrutalCard>
          </motion.div>
        );

      default:
        return (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white rounded-2xl transform -skew-y-1"></div>
              <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-blue-100">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{experience.role}</h2>
                      <h3 className="text-xl text-gray-800">{experience.company}</h3>
                      <p className="text-gray-600">{experience.location}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                        {experience.period}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                      {experience.achievements.map((achievement: string, i: number) => (
                          <li key={`${experience.company}-achievement-${i}`} className="flex items-start text-gray-700">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech: string, i: number) => (
                          <span
                            key={`${experience.company}-tech-${i}`}
                            className="px-3 py-1 bg-blue-50 text-gray-700 rounded-full text-sm hover:bg-blue-100 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
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

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((experience, index) => renderExperienceCard(experience, index))}
        </div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
            {currentTheme === 'zen' && (
              <ZenCard className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-slate-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <ZenHeading level={2}>Career Summary</ZenHeading>
                </div>
                <ZenText className="max-w-3xl mx-auto text-center">
                  With over 15 years of experience in front-end development, I&apos;ve consistently focused on creating 
                  simple, intuitive, and accessible user interfaces. My journey has taken me through major tech companies, 
                  where I&apos;ve led teams, optimized performance, and improved user experiences across various platforms.
                </ZenText>
              </ZenCard>
            )}

            {currentTheme === 'retro' && (
              <RetroCard glitch className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[var(--accent)] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <RetroHeading level={2}>CAREER SUMMARY</RetroHeading>
                </div>
                <RetroText className="max-w-3xl mx-auto text-center">
                  WITH OVER 15 YEARS OF EXPERIENCE IN FRONT-END DEVELOPMENT, I&apos;VE CONSISTENTLY FOCUSED ON CREATING 
                  SIMPLE, INTUITIVE, AND ACCESSIBLE USER INTERFACES. MY JOURNEY HAS TAKEN ME THROUGH MAJOR TECH COMPANIES, 
                  WHERE I&apos;VE LED TEAMS, OPTIMIZED PERFORMANCE, AND IMPROVED USER EXPERIENCES ACROSS VARIOUS PLATFORMS.
                </RetroText>
              </RetroCard>
            )}

            {currentTheme === 'brutalism' && (
              <BrutalCard handDrawn className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <BrutalHeading level={2}>CAREER SUMMARY</BrutalHeading>
                </div>
                <BrutalText className="max-w-3xl mx-auto text-center">
                  WITH OVER 15 YEARS OF EXPERIENCE IN FRONT-END DEVELOPMENT, I&apos;VE CONSISTENTLY FOCUSED ON CREATING 
                  SIMPLE, INTUITIVE, AND ACCESSIBLE USER INTERFACES. MY JOURNEY HAS TAKEN ME THROUGH MAJOR TECH COMPANIES, 
                  WHERE I&apos;VE LED TEAMS, OPTIMIZED PERFORMANCE, AND IMPROVED USER EXPERIENCES ACROSS VARIOUS PLATFORMS.
                </BrutalText>
              </BrutalCard>
            )}

            {currentTheme === 'minimalist' && (
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
            <div className="flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h2 className="text-2xl font-bold text-gray-900">Career Summary</h2>
            </div>
                <p className="text-gray-700 max-w-3xl mx-auto text-center">
                  With over 15 years of experience in front-end development, I&apos;ve consistently focused on creating 
                  simple, intuitive, and accessible user interfaces. My journey has taken me through major tech companies, 
                  where I&apos;ve led teams, optimized performance, and improved user experiences across various platforms.
                </p>
          </div>
            )}
        </motion.div>
      </div>
    </div>
    </ZenMode>
  );
} 
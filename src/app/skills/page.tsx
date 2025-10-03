'use client';

import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import { useTheme } from '../contexts/ThemeContext';
import { ZenMode, ZenCard, ZenHeading, ZenText } from '../components/themes/ZenMode';
import { RetroCard, RetroHeading, RetroText, RetroMatrix } from '../components/themes/RetroFuturistic';
import { BrutalCard, BrutalHeading, BrutalText } from '../components/themes/SoftBrutalism';

export default function Skills() {
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
            <ZenHeading level={1} className="mb-4">Skills</ZenHeading>
            <ZenText className="text-xl">My technical expertise and power level</ZenText>
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
            <RetroHeading level={1} glitch className="mb-4 relative z-10">SKILLS</RetroHeading>
            <RetroText className="text-xl relative z-10">TECHNICAL EXPERTISE & POWER LEVEL</RetroText>
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
            <BrutalHeading level={1} oversized className="mb-4">SKILLS</BrutalHeading>
            <BrutalText className="text-2xl">TECHNICAL EXPERTISE & POWER LEVEL</BrutalText>
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Skills</h1>
            <p className="text-xl text-gray-700">My technical expertise and power level</p>
          </motion.div>
        );
    }
  };

  const renderSkillsMatrix = () => {
    switch (currentTheme) {
      case 'zen':
        return (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ZenCard className="p-8">
              <ZenHeading level={2} className="mb-6">Skills Matrix</ZenHeading>
              
              <div className="space-y-8">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <ZenHeading level={3} className="mb-4">{category}</ZenHeading>
                    <div className="space-y-4">
                      {items.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-1">
                            <span className="text-slate-700">{skill.name}</span>
                            <span className="text-slate-600">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, ease: "easeOut" }}
                              className="h-full bg-gradient-to-r from-slate-400 to-slate-600"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ZenCard>
          </motion.div>
        );

      case 'retro':
        return (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <RetroCard glitch className="p-8">
              <RetroHeading level={2} className="mb-6">SKILLS MATRIX</RetroHeading>
              
              <div className="space-y-8">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <RetroHeading level={3} className="mb-4">{category.toUpperCase()}</RetroHeading>
                    <div className="space-y-4">
                      {items.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-1">
                            <span className="text-[var(--text-primary)] font-mono">{skill.name}</span>
                            <span className="text-[var(--text-muted)] font-mono">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-[var(--surface)] border border-[var(--border)] rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, ease: "easeOut" }}
                              className="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--primary)]"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </RetroCard>
          </motion.div>
        );

      case 'brutalism':
        return (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BrutalCard handDrawn className="p-8">
              <BrutalHeading level={2} className="mb-6">SKILLS MATRIX</BrutalHeading>
              
              <div className="space-y-8">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <BrutalHeading level={3} className="mb-4">{category.toUpperCase()}</BrutalHeading>
                    <div className="space-y-4">
                      {items.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-800 font-bold">{skill.name}</span>
                            <span className="text-gray-600 font-bold">{skill.level}%</span>
                          </div>
                          <div className="h-3 bg-amber-100 border-2 border-gray-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, ease: "easeOut" }}
                              className="h-full bg-gradient-to-r from-amber-500 to-amber-700"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </BrutalCard>
          </motion.div>
        );

      default:
        return (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8 border border-blue-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills Matrix</h2>
            
            <div className="space-y-8">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{category}</h3>
                  <div className="space-y-4">
                    {items.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-700">{skill.name}</span>
                          <span className="text-gray-600">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-blue-400 to-blue-600"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );
    }
  };

  const renderPowerLevel = () => {
    switch (currentTheme) {
      case 'zen':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center"
          >
            <ZenCard className="p-8 w-full">
              <ZenHeading level={2} className="mb-6 text-center">Power Level</ZenHeading>
              
              <div className="relative w-64 h-64 mx-auto">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-slate-300 to-slate-500"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                <motion.div
                  className="absolute inset-4 rounded-full bg-white"
                  animate={{
                    scale: [1, 0.95, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="text-center">
                    <span className="text-6xl font-bold text-slate-900">15+</span>
                    <ZenText className="mt-2">Years of Experience</ZenText>
                  </div>
                </motion.div>
                
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-slate-400"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.2, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-slate-300"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.1, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>
            </ZenCard>
          </motion.div>
        );

      case 'retro':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center"
          >
            <RetroCard glitch className="p-8 w-full">
              <RetroHeading level={2} className="mb-6 text-center">POWER LEVEL</RetroHeading>
              
              <div className="relative w-64 h-64 mx-auto">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-purple-600"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                <motion.div
                  className="absolute inset-4 rounded-full bg-[var(--background)]"
                  animate={{
                    scale: [1, 0.95, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="text-center">
                    <span className="text-6xl font-bold text-[var(--text-primary)] font-mono">15+</span>
                    <RetroText className="mt-2">YEARS OF EXPERIENCE</RetroText>
                  </div>
                </motion.div>
                
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-[var(--accent)]"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.2, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-[var(--primary)]"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.1, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>
            </RetroCard>
          </motion.div>
        );

      case 'brutalism':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center"
          >
            <BrutalCard handDrawn className="p-8 w-full">
              <BrutalHeading level={2} className="mb-6 text-center">POWER LEVEL</BrutalHeading>
              
              <div className="relative w-64 h-64 mx-auto">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 border-4 border-gray-800"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                <motion.div
                  className="absolute inset-4 rounded-full bg-amber-100 border-4 border-gray-800"
                  animate={{
                    scale: [1, 0.95, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="text-center">
                    <span className="text-6xl font-black text-gray-800">15+</span>
                    <BrutalText className="mt-2">YEARS OF EXPERIENCE</BrutalText>
                  </div>
                </motion.div>
                
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-amber-600"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.2, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-amber-500"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.1, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>
            </BrutalCard>
          </motion.div>
        );

      default:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8 border border-blue-100 flex flex-col items-center justify-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Power Level</h2>
            
            <div className="relative w-64 h-64">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-300 to-blue-500"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <motion.div
                className="absolute inset-4 rounded-full bg-white"
                animate={{
                  scale: [1, 0.95, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-center">
                  <span className="text-6xl font-bold text-gray-900">15+</span>
                  <p className="text-gray-700 mt-2">Years of Experience</p>
                </div>
              </motion.div>
              
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-blue-400"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.2, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-blue-300"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.1, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {renderSkillsMatrix()}
            {renderPowerLevel()}
          </div>
        </div>
      </div>
    </ZenMode>
  );
} 
'use client';

import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import { FiCode, FiTool, FiCheckCircle, FiMoreHorizontal } from 'react-icons/fi';

const categoryIcons: Record<string, any> = {
  'Frontend': FiCode,
  'Development Tools': FiTool,
  'Testing & Quality': FiCheckCircle,
  'Other': FiMoreHorizontal,
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Technical Skills</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {Object.entries(skills).map(([category, categorySkills], categoryIndex) => {
            const Icon = categoryIcons[category] || FiCode;
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Category Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{category}</h2>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categorySkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: categoryIndex * 0.1 + index * 0.05 }}
                        className="group"
                      >
                        {/* Skill Name & Level */}
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-sm font-bold text-blue-600">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: categoryIndex * 0.1 + index * 0.05 + 0.2 }}
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                          />
                          
                          {/* Shimmer effect */}
                          <motion.div
                            className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{
                              x: ['-100%', '200%'],
                            }}
                            transition={{
                              duration: 2,
                              delay: categoryIndex * 0.1 + index * 0.05 + 0.5,
                              repeat: 0,
                            }}
                          />
                        </div>

                        {/* Proficiency Label */}
                        <div className="mt-2 text-xs text-gray-500">
                          {skill.level >= 90 && 'Expert'}
                          {skill.level >= 80 && skill.level < 90 && 'Advanced'}
                          {skill.level >= 70 && skill.level < 80 && 'Proficient'}
                          {skill.level < 70 && 'Intermediate'}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skill Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 shadow-xl"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Frontend Frameworks', value: 'React, TypeScript' },
              { label: 'UI/UX Design', value: 'Responsive, Accessible' },
              { label: 'Performance', value: 'Optimization Expert' },
              { label: 'Testing', value: 'Unit, E2E, Integration' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="text-sm text-blue-100 mb-2">{item.label}</div>
                <div className="text-lg font-bold text-white">{item.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

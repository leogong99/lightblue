'use client';

import { motion } from 'framer-motion';
import { experiences } from '../data/portfolio';

export default function Experience() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Experience</h1>
          <p className="text-xl text-gray-700">My professional journey and achievements</p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Company Logo Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white rounded-2xl transform -skew-y-1"></div>

              {/* Content */}
              <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Header Section */}
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

                {/* Main Content */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <svg
                          className="w-5 h-5 text-blue-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {experience.achievements.map((achievement, i) => (
                          <li key={`${experience.company}-achievement-${i}`} className="flex items-start text-gray-700">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <svg
                          className="w-5 h-5 text-blue-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, i) => (
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
          ))}
        </div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
            <div className="flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-blue-500 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <h2 className="text-2xl font-bold text-gray-900">Career Summary</h2>
            </div>
            <p className="text-gray-700 max-w-3xl mx-auto text-center">
              {`With over 15 years of experience in front-end development, I've consistently focused on creating 
              simple, intuitive, and accessible user interfaces. My journey has taken me through major tech companies, 
              where I've led teams, optimized performance, and improved user experiences across various platforms.`}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 
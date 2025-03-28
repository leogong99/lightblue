'use client';

import { motion } from 'framer-motion';
import { experiences } from '../data/portfolio';

export default function Experience() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Experience</h1>
          <p className="text-xl text-gray-700">My professional journey and achievements</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 p-6 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border border-blue-100">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                      <h2 className="text-2xl font-bold text-gray-900">{experience.role}</h2>
                      <span className="text-gray-600 font-medium">{experience.period}</span>
                    </div>
                    <h3 className="text-xl text-gray-800 mb-2">{experience.company}</h3>
                    <p className="text-gray-600 mb-4">{experience.location}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Key Achievements</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          {experience.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-blue-50 text-gray-700 rounded-full text-sm"
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
        </div>
      </div>
    </div>
  );
} 
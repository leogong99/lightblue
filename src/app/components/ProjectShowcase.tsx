'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  category: string;
  demo: string;
  image: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: 'oracle-ide',
    title: 'Oracle IDE Enhancement',
    description: 'Led development of Oracle IDE with 50% faster loading times and Level AA accessibility compliance.',
    tech: ['TypeScript', 'React', 'Webpack', 'Jest'],
    category: 'Enterprise',
    demo: 'https://www.oracle.com/application-development/code-editor/',
    image: '🔧',
    features: ['50% faster loading', 'WCAG 2.1 AA compliance', '99% test coverage']
  },
  {
    id: 'amazon-jobs',
    title: 'Amazon Job Search',
    description: 'Enhanced job search experience for millions of users with responsive design and performance optimization.',
    tech: ['React', 'Redux', 'SASS', 'Jest'],
    category: 'Commerce',
    demo: 'https://amazon.jobs/search',
    image: '🛒',
    features: ['30% increased engagement', 'One-click applications', 'Mobile-first design']
  },
  {
    id: 'math-buddy',
    title: 'Math Buddy',
    description: 'Math Buddy - A friendly AI chatbot to help kids learn math with interactive conversations',
    tech: ['React', 'Tailwind CSS', 'SSO', 'next.js', 'OpenAI API'],
    category: 'Education',
    demo: 'https://mathaibuddy-675937690896.us-central1.run.app/',
    image: '🧮',
    features: ['AI-powered tutoring', 'Conversational learning', 'SSO authentication', 'Responsive design']
  },
  {
    id: 'ai-content-capture',
    title: 'AI Content Capture',
    description: 'AI-Powered Chrome Extension for Local Content Capture, Categorization, and Search',
    tech: ['React', 'Vite', 'Chrome Extension API', 'AI Categorization'],
    category: 'Tools',
    demo: 'https://chromewebstore.google.com/detail/ai-content-capture/kgipgbpgioegdgjljhijgepfocfoolfd',
    image: '🎯',
    features: ['AI-powered categorization', 'Local content storage', 'Smart search functionality', 'Chrome extension']
  }
];

const categories = ['All', 'Enterprise', 'Commerce', 'Security'];
const techStack = ['All', 'TypeScript', 'React', 'JavaScript', 'Redux', 'Webpack', 'Jest', 'SASS', 'CSS3', 'jQuery', 'MVC'];

export default function ProjectShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTech, setSelectedTech] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { currentTheme } = useTheme();

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
    const techMatch = selectedTech === 'All' || project.tech.includes(selectedTech);
    return categoryMatch && techMatch;
  });

  return (
    <div className="max-w-7xl mx-auto">
      {/* Filters */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tech Stack</label>
            <select
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {techStack.map(tech => (
                <option key={tech} value={tech}>{tech}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`${currentTheme === 'retro' ? 'bg-[var(--surface)] border-[var(--border)]' : 'bg-white border-gray-200'} rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-3">{project.image}</div>
                  <div>
                    <h3 className={`text-xl font-semibold ${currentTheme === 'retro' ? 'text-[var(--text-primary)]' : 'text-gray-900'}`}>{project.title}</h3>
                    <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <p className={`${currentTheme === 'retro' ? 'text-[var(--text-secondary)]' : 'text-gray-700'} mb-4`}>{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </motion.button>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors text-center"
                  >
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className={`${currentTheme === 'retro' ? 'bg-[var(--surface)] border-[var(--border)]' : 'bg-white'} rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="text-4xl mr-3">{selectedProject.image}</div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">{selectedProject.title}</h3>
                      <span className="text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                        {selectedProject.category}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <p className="text-gray-700 mb-6">{selectedProject.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={`${selectedProject.id}-feature-${index}`} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <motion.a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
                  >
                    View Live Demo
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

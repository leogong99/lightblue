'use client';

import { motion } from 'framer-motion';
import { FiMapPin, FiCalendar, FiAward, FiCheckCircle, FiBriefcase, FiTrendingUp } from 'react-icons/fi';
import { experiences } from '../data/portfolio';

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto text-center mb-24"
      >
        <div className="inline-flex items-center gap-3 bg-white border-2 border-zinc-200 rounded-xl px-6 py-3 mb-8">
          <FiBriefcase className="text-accent" size={24} />
          <span className="font-heading font-bold text-lg text-primary">Professional Journey</span>
        </div>
        
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-primary mb-8 tracking-tight">
          Career Experience
        </h1>
        <p className="text-2xl text-zinc-600 max-w-4xl mx-auto leading-relaxed">
          15+ years of building exceptional user experiences at leading tech companies
        </p>
      </motion.div>

      {/* Experience Grid - No vertical line */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl p-10 md:p-12 border-2 border-zinc-200 hover:border-accent transition-all duration-200 cursor-pointer card-interactive"
            >
              {/* Geometric accent shape */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-2xl transform rotate-12 -z-10 group-hover:rotate-6 transition-transform duration-200" aria-hidden="true" />
              
              {/* Header Section */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                <div className="flex items-start gap-6">
                  {/* Company Icon */}
                  <div className="flex-shrink-0 w-20 h-20 bg-primary rounded-2xl flex items-center justify-center group-hover:bg-accent transition-colors duration-200">
                    <FiBriefcase className="text-white" size={36} />
                  </div>
                  
                  {/* Company & Role */}
                  <div>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-200">
                      {exp.company}
                    </h2>
                    <h3 className="text-2xl font-heading font-semibold text-accent mb-4">
                      {exp.role}
                    </h3>
                    
                    {/* Meta Info - Inline badges */}
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg border border-zinc-200">
                        <FiCalendar className="text-accent" size={18} />
                        <span className="font-semibold text-primary">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg border border-zinc-200">
                        <FiMapPin className="text-accent" size={18} />
                        <span className="font-semibold text-primary">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Achievement Count Badge */}
                <div className="flex-shrink-0 text-center bg-accent rounded-2xl px-6 py-4 min-w-[120px]">
                  <div className="text-3xl font-heading font-bold text-white mb-1">
                    {exp.achievements.length}
                  </div>
                  <div className="text-sm font-semibold text-white/80">
                    Achievements
                  </div>
                </div>
              </div>

              {/* Achievements Grid */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <FiAward className="text-accent" size={24} />
                  </div>
                  <h4 className="text-2xl font-heading font-bold text-primary">
                    Key Achievements
                  </h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
                      className="flex items-start gap-3 p-4 bg-background rounded-xl border border-zinc-200 hover:border-accent transition-colors duration-200"
                    >
                      <FiCheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                      <span className="text-zinc-700 leading-relaxed">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technologies Section */}
              <div>
                <h4 className="text-lg font-heading font-bold text-primary mb-4 flex items-center gap-2">
                  <FiTrendingUp className="text-accent" size={20} />
                  Technologies & Skills
                </h4>
                <div className="flex flex-wrap gap-3">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-5 py-2 bg-white border-2 border-zinc-200 text-primary rounded-xl font-semibold hover:border-accent hover:text-accent transition-colors duration-200 cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom accent bar on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-3xl" />
            </motion.article>
          ))}
        </div>

        {/* Career Stats Summary - Bold geometric blocks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 relative"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 block-pattern opacity-40 rounded-3xl" aria-hidden="true" />
          
          <div className="relative bg-primary rounded-3xl p-12 md:p-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white text-center mb-12">
              Career Highlights
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border-2 border-white/20 hover:bg-white/20 transition-colors duration-200 cursor-pointer">
                <FiTrendingUp className="text-accent mx-auto mb-4" size={48} />
                <div className="text-6xl font-heading font-bold text-white mb-3">15+</div>
                <div className="text-xl text-zinc-300 font-semibold">Years of Experience</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border-2 border-white/20 hover:bg-white/20 transition-colors duration-200 cursor-pointer">
                <FiBriefcase className="text-accent mx-auto mb-4" size={48} />
                <div className="text-6xl font-heading font-bold text-white mb-3">5</div>
                <div className="text-xl text-zinc-300 font-semibold">Major Companies</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border-2 border-white/20 hover:bg-white/20 transition-colors duration-200 cursor-pointer">
                <FiCheckCircle className="text-accent mx-auto mb-4" size={48} />
                <div className="text-6xl font-heading font-bold text-white mb-3">50+</div>
                <div className="text-xl text-zinc-300 font-semibold">Projects Completed</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Distribution - Optional visual block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Throughout my career, I've specialized in frontend architecture, performance optimization, 
            and building accessible user interfaces at scale.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'TypeScript', 'Performance', 'Accessibility', 'Team Leadership', 'Architecture'].map((skill) => (
              <span
                key={skill}
                className="px-6 py-3 bg-white border-2 border-accent text-accent rounded-xl font-heading font-bold text-lg hover:bg-accent hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

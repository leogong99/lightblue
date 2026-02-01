'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiArrowRight, 
  FiCode, 
  FiLayers, 
  FiZap,
  FiAward,
  FiTrendingUp,
  FiCheckCircle
} from 'react-icons/fi';
import { experiences, projects } from './data/portfolio';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { label: 'Years Experience', value: '15+', icon: FiTrendingUp },
    { label: 'Projects Delivered', value: '50+', icon: FiCheckCircle },
    { label: 'Technologies', value: '20+', icon: FiCode },
  ];

  const highlights = [
    { 
      icon: FiCode, 
      title: 'Clean Architecture', 
      description: 'Writing maintainable, scalable code with modern best practices'
    },
    { 
      icon: FiLayers, 
      title: 'User-Centered Design', 
      description: 'Creating intuitive interfaces that users love to interact with'
    },
    { 
      icon: FiZap, 
      title: 'High Performance', 
      description: 'Building fast, optimized experiences that scale efficiently'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Block-based geometric layout */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-16">
        {/* Geometric pattern background */}
        <div className="absolute inset-0 block-pattern opacity-40" aria-hidden="true" />
        
        {/* Geometric accent shapes */}
        <motion.div
          style={{ y }}
          className="absolute top-32 right-10 w-64 h-64 bg-accent/10 rounded-lg"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: 15 }}
          transition={{ duration: 1 }}
          aria-hidden="true"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '30%']) }}
          className="absolute bottom-32 left-10 w-48 h-48 bg-primary/5 rounded-lg"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: -15 }}
          transition={{ duration: 1, delay: 0.2 }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 30 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Large typography (32px+) */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-heading font-bold text-primary mb-8 leading-none tracking-tight">
              Jing Gong
            </h1>

            <p className="text-2xl sm:text-3xl lg:text-4xl text-secondary mb-6 font-heading font-semibold">
              Senior Frontend Engineer
            </p>

            <p className="text-lg sm:text-xl text-zinc-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Building exceptional web experiences with{' '}
              <span className="text-accent font-semibold">React</span>,{' '}
              <span className="text-accent font-semibold">TypeScript</span>, and modern web technologies.
              15+ years of turning complex problems into elegant solutions.
            </p>

            {/* Bold CTA buttons with color shift on hover */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-10 py-5 bg-primary text-white rounded-lg font-heading font-bold text-lg shadow-lg hover:bg-accent transition-colors duration-200 flex items-center gap-3 cursor-pointer"
                >
                  View My Work
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </Link>
              
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 bg-white text-primary rounded-lg font-heading font-bold text-lg border-3 border-primary hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer shadow-lg"
                >
                  Get in Touch
                </motion.button>
              </Link>
            </div>

            {/* Social Links with proper cursor pointer */}
            <div className="flex gap-8 justify-center">
              <motion.a
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/jinggong"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow text-primary hover:text-accent border-2 border-zinc-200 hover:border-accent cursor-pointer"
                aria-label="GitHub Profile"
              >
                <FiGithub size={28} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/javascriptguru"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow text-primary hover:text-accent border-2 border-zinc-200 hover:border-accent cursor-pointer"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin size={28} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:leogong99@gmail.com"
                className="p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow text-primary hover:text-accent border-2 border-zinc-200 hover:border-accent cursor-pointer"
                aria-label="Email Contact"
              >
                <FiMail size={28} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Large gaps (48px+) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative p-12 bg-background rounded-2xl border-2 border-zinc-200 hover:border-accent transition-colors duration-200 cursor-pointer geometric-accent"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                      <Icon className="text-white" size={32} />
                    </div>
                    <div className="text-6xl font-heading font-bold text-accent mb-3">{stat.value}</div>
                    <div className="text-lg text-zinc-600 font-semibold">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What I Bring Section - Block-based layout */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6">
              What I Bring to the Table
            </h2>
            <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
              Combining technical excellence with user-centered design principles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 content-gap">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative p-10 bg-white rounded-2xl border-2 border-zinc-200 hover:border-accent transition-all duration-200 cursor-pointer card-interactive"
                >
                  <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-200">
                    <Icon className="text-white" size={40} />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-lg text-zinc-600 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects - Portfolio Grid pattern */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-zinc-600">Recent work I'm proud of</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 content-gap mb-16">
            {projects.slice(0, 4).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-background rounded-2xl overflow-hidden border-2 border-zinc-200 hover:border-accent transition-all duration-200 card-interactive"
              >
                <div className="p-10">
                  <h3 className="text-3xl font-heading font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-lg text-zinc-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-white border-2 border-zinc-200 text-primary rounded-lg font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-4 py-2 bg-zinc-100 text-zinc-600 rounded-lg font-semibold">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-primary font-heading font-bold text-lg group/link cursor-pointer"
                    >
                      View Project
                      <FiArrowRight className="group-hover/link:translate-x-2 transition-transform duration-200" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-primary text-white rounded-lg font-heading font-bold text-lg shadow-lg hover:bg-accent transition-colors duration-200 inline-flex items-center gap-3 cursor-pointer"
              >
                View All Projects
                <FiArrowRight />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Highlight */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6">
              Career Highlights
            </h2>
            <p className="text-xl text-zinc-600">Trusted by leading tech companies</p>
          </motion.div>

          <div className="space-y-8">
            {experiences.slice(0, 3).map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-10 border-2 border-zinc-200 hover:border-accent transition-colors duration-200 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <FiAward className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-heading font-bold text-primary">{exp.company}</h3>
                      <p className="text-xl text-accent font-semibold">{exp.role}</p>
                    </div>
                  </div>
                  <div className="text-zinc-500 font-semibold text-lg mt-4 md:mt-0">
                    {exp.period}
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.achievements.slice(0, 3).map((achievement, i) => (
                    <li key={i} className="flex items-start gap-4 text-zinc-600 text-lg leading-relaxed">
                      <FiCheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/experience">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-white text-primary rounded-lg font-heading font-bold text-lg border-3 border-primary hover:bg-primary hover:text-white transition-colors duration-200 inline-flex items-center gap-3 cursor-pointer shadow-lg"
              >
                View Full Experience
                <FiArrowRight />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Bold color */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 block-pattern opacity-10" aria-hidden="true" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-8">
            Let's Connect
          </h2>
          <p className="text-2xl text-zinc-300 mb-12 leading-relaxed">
            Feel free to reach out to discuss technology, projects, or just to connect.
          </p>
          
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-accent text-white rounded-xl font-heading font-bold text-xl shadow-2xl hover:bg-white hover:text-primary transition-colors duration-200 inline-flex items-center gap-4 cursor-pointer"
            >
              <FiMail size={28} />
              Get In Touch
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

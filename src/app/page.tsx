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
  FiTerminal,
  FiCpu,
  FiGlobe,
  FiLayers,
  FiZap,
  FiCheckCircle,
  FiMapPin,
  FiAward,
} from 'react-icons/fi';
import { experiences, projects } from './data/portfolio';

function useTypewriter(text: string, speed = 55, startDelay = 800) {
  const [displayed, setDisplayed] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    const delay = setTimeout(() => {
      const timer = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          setIsComplete(true);
          clearInterval(timer);
        }
      }, speed);
      return () => clearInterval(timer);
    }, startDelay);
    return () => clearTimeout(delay);
  }, [text, speed, startDelay]);

  return { displayed, isComplete };
}

const topSkills = [
  'React', 'TypeScript', 'JavaScript', 'CSS3', 'HTML5', 'Sass',
  'Webpack', 'Git', 'CI/CD', 'Docker', 'Jest', 'Selenium',
  'ESLint', 'Monaco Editor', 'WebSocket', 'Performance Optimization',
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], ['0%', '15%']);

  const { displayed: typedRole, isComplete: roleComplete } = useTypewriter('Senior Frontend Engineer');

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateTime();
    const t = setInterval(updateTime, 1000);
    return () => clearInterval(t);
  }, []);

  const stats = [
    { label: 'Years of Experience', value: '15+', bgVar: '--stat-blue-bg', borderVar: '--stat-blue-border', color: '#3B82F6' },
    { label: 'Projects Delivered', value: '50+', bgVar: '--stat-green-bg', borderVar: '--stat-green-border', color: '#10B981' },
    { label: 'Technologies', value: '20+', bgVar: '--stat-purple-bg', borderVar: '--stat-purple-border', color: '#8B5CF6' },
  ];

  const capabilities = [
    {
      icon: FiCode,
      title: 'Clean Architecture',
      description: 'Maintainable, scalable code with modern design patterns and best practices.',
      tags: ['React', 'TypeScript', 'MVC'],
      color: '#3B82F6',
    },
    {
      icon: FiLayers,
      title: 'User-Centered Design',
      description: 'Intuitive interfaces that prioritize accessibility and delightful experience.',
      tags: ['WCAG AA', 'Responsive', 'UX'],
      color: '#06B6D4',
    },
    {
      icon: FiZap,
      title: 'High Performance',
      description: 'Optimized loading times, caching strategies, and rendering efficiency.',
      tags: ['50% faster', 'Core Web Vitals', 'Caching'],
      color: '#8B5CF6',
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: 'var(--page-bg)' }}>
      {/* Dot grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(circle, var(--dot-color) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />
      {/* Ambient orbs */}
      <div
        className="fixed top-1/4 -left-48 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{ background: `radial-gradient(circle, var(--orb-blue) 0%, transparent 70%)` }}
      />
      <div
        className="fixed bottom-1/3 -right-48 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{ background: `radial-gradient(circle, var(--orb-cyan) 0%, transparent 70%)` }}
      />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 z-10">
        <motion.div style={{ y: heroY }} className="relative max-w-6xl mx-auto w-full">

          {/* Terminal chrome bar */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : -16 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-3"
          >
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <div className="w-3 h-3 rounded-full bg-green-400/80" />
            </div>
            <div
              className="flex-1 rounded-md px-4 py-1.5 text-xs font-mono flex justify-between items-center"
              style={{
                background: 'var(--terminal-bar-bg)',
                border: '1px solid var(--card-border)',
              }}
            >
              <span className="text-slate-400 dark:text-zinc-500">~/portfolio/jing-gong — zsh</span>
              <span className="text-green-600 dark:text-green-400">{currentTime}</span>
            </div>
          </motion.div>

          {/* Main card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: mounted ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              boxShadow: 'var(--card-shadow)',
            }}
          >
            {/* Top line */}
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'var(--top-line)' }} />
            {/* Corner glow */}
            <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none" style={{ background: 'var(--hero-corner)' }} />

            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">

                {/* LEFT */}
                <div className="lg:col-span-3">
                  {/* Prompt */}
                  <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: mounted ? 1 : 0, x: mounted ? 0 : -12 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-center gap-2 mb-6"
                  >
                    <FiTerminal className="text-cyan-600 dark:text-cyan-400" size={14} />
                    <span className="font-mono text-sm text-slate-400 dark:text-zinc-500">user@seattle:~$</span>
                    <span className="font-mono text-sm text-cyan-600 dark:text-cyan-400">whoami</span>
                  </motion.div>

                  {/* Name */}
                  <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 16 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-3 leading-none"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    <span className="text-slate-900 dark:text-white">Jing</span>{' '}
                    <span
                      style={{
                        background: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      Gong
                    </span>
                  </motion.h1>

                  {/* Typewriter role */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: mounted ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex items-center gap-2 mb-8"
                  >
                    <span className="text-slate-300 dark:text-zinc-600 font-mono text-sm">▸</span>
                    <span className="text-xl sm:text-2xl font-mono text-cyan-600 dark:text-cyan-400 tracking-wide">
                      {typedRole}
                      <span
                        className={`inline-block w-[3px] h-6 bg-cyan-600 dark:bg-cyan-400 ml-1 rounded-sm align-middle ${
                          roleComplete ? 'animate-pulse' : ''
                        }`}
                      />
                    </span>
                  </motion.div>

                  {/* Bio as code comments */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 12 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="font-mono text-sm mb-8 space-y-1.5"
                  >
                    <p className="text-slate-400 dark:text-zinc-500">{'// 15+ years turning complex problems'}</p>
                    <p className="text-slate-400 dark:text-zinc-500">{'// into elegant, scalable solutions.'}</p>
                    <p className="text-slate-400 dark:text-zinc-500">{'// React · TypeScript · modern web tech.'}</p>
                  </motion.div>

                  {/* Location + availability */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: mounted ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 0.95 }}
                    className="flex flex-wrap items-center gap-4 mb-10 text-sm font-mono text-slate-500 dark:text-zinc-500"
                  >
                    <span className="flex items-center gap-1.5">
                      <FiMapPin size={13} className="text-cyan-600 dark:text-cyan-400" />
                      Seattle, WA
                    </span>
                    <span className="text-slate-300 dark:text-zinc-700">·</span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-500 dark:bg-green-400 animate-pulse" />
                      Open to opportunities
                    </span>
                  </motion.div>

                  {/* CTAs */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 12 }}
                    transition={{ duration: 0.5, delay: 1.05 }}
                    className="flex flex-wrap gap-3"
                  >
                    <Link href="/projects">
                      <motion.button
                        whileHover={{ scale: 1.03, boxShadow: '0 0 28px rgba(59,130,246,0.5)' }}
                        whileTap={{ scale: 0.97 }}
                        className="group px-7 py-3 rounded-xl font-mono font-semibold text-sm flex items-center gap-2 cursor-pointer text-white transition-all duration-200"
                        style={{
                          background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                          boxShadow: '0 0 20px rgba(59,130,246,0.35)',
                        }}
                      >
                        <FiCode size={15} />
                        ./view-projects
                        <FiArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
                      </motion.button>
                    </Link>

                    <Link href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="px-7 py-3 rounded-xl font-mono font-semibold text-sm flex items-center gap-2 cursor-pointer text-slate-600 dark:text-zinc-300 transition-all duration-200"
                        style={{
                          border: '1px solid var(--card-border)',
                          background: 'var(--badge-bg)',
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = 'rgba(6,182,212,0.4)';
                          (e.currentTarget as HTMLElement).style.color = '#0891b2';
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = '';
                          (e.currentTarget as HTMLElement).style.color = '';
                        }}
                      >
                        <FiMail size={15} />
                        ./contact-me
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>

                {/* RIGHT — stats + socials */}
                <div className="lg:col-span-2 space-y-4">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: mounted ? 1 : 0, x: mounted ? 0 : 20 }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 cursor-default"
                      style={{
                        background: `var(${stat.bgVar})`,
                        border: `1px solid var(${stat.borderVar})`,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 24px ${stat.color}20`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = '';
                      }}
                    >
                      <div className="text-4xl font-bold font-mono" style={{ color: stat.color }}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-zinc-500 font-mono leading-tight">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}

                  {/* Social links */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: mounted ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="flex gap-3 pt-1"
                  >
                    {[
                      { href: 'https://github.com/jinggong', icon: FiGithub, label: 'GitHub' },
                      { href: 'https://linkedin.com/in/javascriptguru', icon: FiLinkedin, label: 'LinkedIn' },
                      { href: 'mailto:leogong99@gmail.com', icon: FiMail, label: 'Email' },
                    ].map(({ href, icon: Icon, label }) => (
                      <motion.a
                        key={label}
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        whileHover={{ y: -3, scale: 1.1 }}
                        whileTap={{ scale: 0.93 }}
                        className="p-3 rounded-xl text-slate-500 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-200 cursor-pointer"
                        style={{ border: '1px solid var(--card-border)', background: 'var(--badge-bg)' }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = 'rgba(6,182,212,0.35)';
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = '';
                        }}
                        aria-label={label}
                      >
                        <Icon size={20} />
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── TECH STACK MARQUEE ── */}
      <section
        className="py-10 overflow-hidden relative z-10"
        style={{ borderTop: '1px solid var(--divider)', borderBottom: '1px solid var(--divider)' }}
      >
        <div className="tech-marquee flex gap-10 whitespace-nowrap">
          {[...topSkills, ...topSkills, ...topSkills].map((skill, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 font-mono text-sm text-slate-400 dark:text-zinc-600 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-default"
            >
              {skill}
              <span className="text-slate-200 dark:text-zinc-800">·</span>
            </span>
          ))}
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <div className="flex items-center gap-2 mb-4">
              <FiTerminal className="text-cyan-600 dark:text-cyan-400" size={13} />
              <span className="font-mono text-xs text-slate-400 dark:text-zinc-600">$ cat capabilities.md</span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              What I Build
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative p-6 rounded-2xl transition-all duration-300 cursor-default"
                  style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', boxShadow: 'var(--card-shadow)' }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.boxShadow = `0 0 40px ${item.color}18`;
                    el.style.borderColor = `${item.color}35`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.boxShadow = 'var(--card-shadow)';
                    el.style.borderColor = 'var(--card-border)';
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${item.color}14`, border: `1px solid ${item.color}28` }}
                  >
                    <Icon style={{ color: item.color }} size={22} />
                  </div>
                  <h3
                    className="text-lg font-bold text-slate-900 dark:text-white mb-2"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-zinc-500 text-sm leading-relaxed mb-5">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-xs font-mono"
                        style={{ color: item.color, background: `${item.color}10`, border: `1px solid ${item.color}22` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section
        className="relative py-28 px-4 sm:px-6 lg:px-8 z-10"
        style={{ borderTop: '1px solid var(--divider)' }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-14"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FiGlobe className="text-cyan-600 dark:text-cyan-400" size={13} />
                <span className="font-mono text-xs text-slate-400 dark:text-zinc-600">$ ls -la projects/</span>
              </div>
              <h2
                className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                Featured Projects
              </h2>
            </div>
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-xs cursor-pointer text-slate-500 dark:text-zinc-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-200"
                style={{ border: '1px solid var(--card-border)', background: 'var(--badge-bg)' }}
              >
                View all <FiArrowRight size={13} />
              </motion.button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {projects.slice(0, 4).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group relative p-6 rounded-2xl transition-all duration-300"
                style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', boxShadow: 'var(--card-shadow)' }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = 'var(--hover-shadow)';
                  el.style.borderColor = 'var(--hover-border)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = 'var(--card-shadow)';
                  el.style.borderColor = 'var(--card-border)';
                }}
              >
                <span className="absolute top-5 right-5 font-mono text-xs text-slate-300 dark:text-zinc-700">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3
                  className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-200 mb-2 pr-8"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {project.title}
                </h3>
                <p className="text-slate-500 dark:text-zinc-500 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-xs font-mono"
                      style={{
                        background: 'var(--tag-blue-bg)',
                        border: '1px solid var(--tag-blue-border)',
                        color: '#3B82F6',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-slate-400 dark:text-zinc-700 text-xs font-mono">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-mono text-xs group/link cursor-pointer transition-colors duration-200"
                  >
                    <FiGlobe size={11} />
                    View Live
                    <FiArrowRight size={11} className="group-hover/link:translate-x-1 transition-transform duration-200" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAREER TIMELINE ── */}
      <section
        className="relative py-28 px-4 sm:px-6 lg:px-8 z-10"
        style={{ borderTop: '1px solid var(--divider)' }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <div className="flex items-center gap-2 mb-4">
              <FiCpu className="text-cyan-600 dark:text-cyan-400" size={13} />
              <span className="font-mono text-xs text-slate-400 dark:text-zinc-600">$ git log --oneline career</span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Career Highlights
            </h2>
          </motion.div>

          <div className="relative">
            <div
              className="absolute left-[7px] top-2 bottom-0 w-px"
              style={{ background: 'var(--timeline-rail)' }}
            />
            <div className="space-y-6 pl-10">
              {experiences.slice(0, 3).map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div
                    className="absolute -left-[2.65rem] top-5 w-3.5 h-3.5 rounded-full border-2 border-blue-500 transition-all duration-300"
                    style={{ background: 'var(--page-bg)' }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = '#3B82F6';
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 0 12px rgba(59,130,246,0.8)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'var(--page-bg)';
                      (e.currentTarget as HTMLElement).style.boxShadow = '';
                    }}
                  />
                  <div
                    className="p-6 rounded-2xl transition-all duration-300"
                    style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', boxShadow: 'var(--card-shadow)' }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.boxShadow = 'var(--hover-shadow)';
                      el.style.borderColor = 'var(--hover-border)';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.boxShadow = 'var(--card-shadow)';
                      el.style.borderColor = 'var(--card-border)';
                    }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                      <div className="flex items-start gap-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: 'var(--stat-blue-bg)', border: '1px solid var(--stat-blue-border)' }}
                        >
                          <FiAward className="text-blue-500 dark:text-blue-400" size={14} />
                        </div>
                        <div>
                          <h3
                            className="text-base font-bold text-slate-900 dark:text-white"
                            style={{ fontFamily: 'var(--font-space-grotesk)' }}
                          >
                            {exp.company}
                          </h3>
                          <p className="text-cyan-600 dark:text-cyan-400 text-xs font-mono mt-0.5">{exp.role}</p>
                        </div>
                      </div>
                      <span
                        className="text-xs font-mono text-slate-500 dark:text-zinc-600 whitespace-nowrap self-start px-3 py-1 rounded-full"
                        style={{ background: 'var(--badge-bg)', border: '1px solid var(--badge-border)' }}
                      >
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.slice(0, 2).map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-zinc-500">
                          <FiCheckCircle className="text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" size={13} />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-10 pl-10"
          >
            <Link href="/experience">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-sm cursor-pointer text-slate-500 dark:text-zinc-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-200"
                style={{ border: '1px solid var(--card-border)', background: 'var(--badge-bg)' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(6,182,212,0.4)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--card-border)';
                }}
              >
                View full history <FiArrowRight size={13} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative py-28 px-4 sm:px-6 lg:px-8 z-10"
        style={{ borderTop: '1px solid var(--divider)' }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-2xl text-center overflow-hidden py-20 px-8"
            style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', boxShadow: 'var(--card-shadow)' }}
          >
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--section-glow)' }} />
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'var(--top-line)' }} />

            <div className="relative z-10">
              <h2
                className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 leading-tight"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                Let&apos;s Build Something
                <br />
                <span
                  style={{
                    background: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Remarkable
                </span>
              </h2>

              <p className="text-slate-600 dark:text-zinc-500 text-lg mb-12 max-w-md mx-auto">
                Reach out to discuss technology, projects, or opportunities.
              </p>

              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(59,130,246,0.6)' }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-10 py-4 rounded-xl font-mono font-semibold text-base cursor-pointer text-white transition-all duration-200"
                  style={{
                    background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                    boxShadow: '0 0 30px rgba(59,130,246,0.35)',
                  }}
                >
                  <FiMail size={18} />
                  ./get-in-touch
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

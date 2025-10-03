'use client';

import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { ZenMode, ZenCard, ZenHeading, ZenText } from '../components/themes/ZenMode';
import { RetroCard, RetroHeading, RetroText, RetroMatrix } from '../components/themes/RetroFuturistic';
import { BrutalCard, BrutalHeading, BrutalText } from '../components/themes/SoftBrutalism';

export default function Contact() {
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
            <ZenHeading level={1} className="mb-4">Contact</ZenHeading>
            <ZenText className="text-xl">Let&apos;s connect and create something amazing together</ZenText>
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
            <RetroHeading level={1} glitch className="mb-4 relative z-10">CONTACT</RetroHeading>
            <RetroText className="text-xl relative z-10">LET&apos;S CONNECT AND CREATE SOMETHING AMAZING TOGETHER</RetroText>
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
            <BrutalHeading level={1} oversized className="mb-4">CONTACT</BrutalHeading>
            <BrutalText className="text-2xl">LET&apos;S CONNECT AND CREATE SOMETHING AMAZING TOGETHER</BrutalText>
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact</h1>
          <p className="text-xl text-gray-700">Let&apos;s connect and create something amazing together</p>
        </motion.div>
        );
    }
  };

  const renderContactInfo = () => {
    switch (currentTheme) {
      case 'zen':
        return (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ZenCard className="p-8">
              <ZenHeading level={2} className="mb-6">Get in Touch</ZenHeading>
            
              {/* Energy orbs */}
              <div className="flex justify-center space-x-4 mb-8">
                <motion.div
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-slate-300 to-slate-400"
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
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-slate-400 to-slate-500"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-slate-500 to-slate-600"
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
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <ZenText>Bellevue, Washington</ZenText>
                </div>

                <div className="flex items-center space-x-4">
                  <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:leogong99@gmail.com" className="text-slate-600 hover:text-slate-800 transition-colors">
                    leogong99@gmail.com
                  </a>
                </div>
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
              <RetroHeading level={2} className="mb-6">GET IN TOUCH</RetroHeading>
              
              {/* Energy orbs */}
              <div className="flex justify-center space-x-4 mb-8">
                <motion.div
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-violet-500 to-purple-600"
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
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-indigo-700"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-700 to-violet-800"
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
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <RetroText>BELLEVUE, WASHINGTON</RetroText>
                </div>

                <div className="flex items-center space-x-4">
                  <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:leogong99@gmail.com" className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors font-mono">
                    leogong99@gmail.com
                  </a>
                </div>
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
              <BrutalHeading level={2} className="mb-6">GET IN TOUCH</BrutalHeading>
              
              {/* Energy orbs */}
              <div className="flex justify-center space-x-4 mb-8">
                <motion.div
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 border-4 border-gray-800"
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
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 border-4 border-gray-800"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 border-4 border-gray-800"
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
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <BrutalText>BELLEVUE, WASHINGTON</BrutalText>
                </div>

                <div className="flex items-center space-x-4">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:leogong99@gmail.com" className="text-gray-800 hover:text-amber-600 transition-colors font-bold">
                    leogong99@gmail.com
                  </a>
                </div>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            
            {/* Light Blue energy orbs */}
            <div className="flex justify-center space-x-4 mb-8">
              <motion.div
                className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-300 to-blue-400"
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
                className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-blue-500"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
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
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-700">Bellevue, Washington</span>
              </div>

              <div className="flex items-center space-x-4">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:leogong99@gmail.com" className="text-gray-700 hover:text-blue-600">
                  leogong99@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        );
    }
  };

  const renderSocialLinks = () => {
    switch (currentTheme) {
      case 'zen':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ZenCard className="p-8">
              <ZenHeading level={2} className="mb-6">Connect With Me</ZenHeading>
              
              <div className="space-y-6">
                {/* LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/in/javascriptguru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border border-slate-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-8 h-8 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.06-1.601-1-1.601-1 0-1.15.781-1.15 1.601v5.604h-3v-11h3v1.765c.5-.8 1.6-1.1 2.35-1.1 1.4 0 3.35.83 3.35 3.601v6.744z"/>
                  </svg>
                  <div>
                    <ZenHeading level={3} className="text-lg">LinkedIn</ZenHeading>
                    <ZenText muted>Connect with me on LinkedIn</ZenText>
                  </div>
                </motion.a>

                {/* GitHub */}
                <motion.a
                  href="https://github.com/leogong99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border border-slate-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-8 h-8 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <div>
                    <ZenHeading level={3} className="text-lg">GitHub</ZenHeading>
                    <ZenText muted>Check out my code repositories</ZenText>
                  </div>
                </motion.a>

                {/* Portfolio */}
                <motion.a
                  href="https://mathaibuddy-675937690896.us-central1.run.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border border-slate-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <div>
                    <ZenHeading level={3} className="text-lg">Math Buddy</ZenHeading>
                    <ZenText muted>Try out my AI-powered math learning app</ZenText>
                  </div>
                </motion.a>
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
          >
            <RetroCard glitch className="p-8">
              <RetroHeading level={2} className="mb-6">CONNECT WITH ME</RetroHeading>
              
              <div className="space-y-6">
                {/* LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/in/javascriptguru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-[var(--surface)] rounded border border-[var(--border)] hover:bg-[var(--primary)] hover:text-[var(--text-primary)] transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-8 h-8 text-[var(--accent)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.06-1.601-1-1.601-1 0-1.15.781-1.15 1.601v5.604h-3v-11h3v1.765c.5-.8 1.6-1.1 2.35-1.1 1.4 0 3.35.83 3.35 3.601v6.744z"/>
                  </svg>
                  <div>
                    <RetroHeading level={3} className="text-lg">LINKEDIN</RetroHeading>
                    <RetroText muted>CONNECT WITH ME ON LINKEDIN</RetroText>
                  </div>
                </motion.a>

                {/* GitHub */}
                <motion.a
                  href="https://github.com/leogong99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-[var(--surface)] rounded border border-[var(--border)] hover:bg-[var(--primary)] hover:text-[var(--text-primary)] transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-8 h-8 text-[var(--accent)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <div>
                    <RetroHeading level={3} className="text-lg">GITHUB</RetroHeading>
                    <RetroText muted>CHECK OUT MY CODE REPOSITORIES</RetroText>
                  </div>
                </motion.a>

                {/* Portfolio */}
                <motion.a
                  href="https://mathaibuddy-675937690896.us-central1.run.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-[var(--surface)] rounded border border-[var(--border)] hover:bg-[var(--primary)] hover:text-[var(--text-primary)] transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <div>
                    <RetroHeading level={3} className="text-lg">MATH BUDDY</RetroHeading>
                    <RetroText muted>TRY OUT MY AI-POWERED MATH LEARNING APP</RetroText>
                  </div>
                </motion.a>
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
          >
            <BrutalCard handDrawn className="p-8">
              <BrutalHeading level={2} className="mb-6">CONNECT WITH ME</BrutalHeading>
              
              <div className="space-y-6">
                {/* LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/in/javascriptguru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-amber-100 border-4 border-gray-800 rounded hover:bg-amber-200 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.06-1.601-1-1.601-1 0-1.15.781-1.15 1.601v5.604h-3v-11h3v1.765c.5-.8 1.6-1.1 2.35-1.1 1.4 0 3.35.83 3.35 3.601v6.744z"/>
                  </svg>
                  <div>
                    <BrutalHeading level={3} className="text-lg">LINKEDIN</BrutalHeading>
                    <BrutalText muted>CONNECT WITH ME ON LINKEDIN</BrutalText>
                  </div>
                </motion.a>

                {/* GitHub */}
                <motion.a
                  href="https://github.com/leogong99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-amber-100 border-4 border-gray-800 rounded hover:bg-amber-200 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <div>
                    <BrutalHeading level={3} className="text-lg">GITHUB</BrutalHeading>
                    <BrutalText muted>CHECK OUT MY CODE REPOSITORIES</BrutalText>
                  </div>
                </motion.a>

                {/* Portfolio */}
                <motion.a
                  href="https://mathaibuddy-675937690896.us-central1.run.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-amber-100 border-4 border-gray-800 rounded hover:bg-amber-200 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <div>
                    <BrutalHeading level={3} className="text-lg">MATH BUDDY</BrutalHeading>
                    <BrutalText muted>TRY OUT MY AI-POWERED MATH LEARNING APP</BrutalText>
                  </div>
                </motion.a>
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
            className="bg-white rounded-lg shadow-lg p-8 border border-blue-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Connect With Me</h2>
            
            <div className="space-y-6">
              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/javascriptguru/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors border border-blue-100"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.06-1.601-1-1.601-1 0-1.15.781-1.15 1.601v5.604h-3v-11h3v1.765c.5-.8 1.6-1.1 2.35-1.1 1.4 0 3.35.83 3.35 3.601v6.744z"/>
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">LinkedIn</h3>
                  <p className="text-gray-600">Connect with me on LinkedIn</p>
                </div>
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com/leogong99"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors border border-blue-100"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">GitHub</h3>
                  <p className="text-gray-600">Check out my code repositories</p>
                </div>
              </motion.a>

              {/* Portfolio */}
              <motion.a
                href="https://mathaibuddy-675937690896.us-central1.run.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors border border-blue-100"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Math Buddy</h3>
                  <p className="text-gray-600">Try out my AI-powered math learning app</p>
                </div>
              </motion.a>
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
            {renderContactInfo()}
            {renderSocialLinks()}
          </div>
        </div>
      </div>
    </ZenMode>
  );
} 
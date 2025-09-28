'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import ProfileCanvas from './backgroundCanvas';
import SkillRadar from './SkillRadar';
import ExperienceTimeline from './ExperienceTimeline';
import InteractiveContact from './InteractiveContact';
import CursorTrail from './CursorTrail';
import ProjectShowcase from './ProjectShowcase';
import ThemeSwitcher from './ThemeSwitcher';
import { ZenMode, ZenCard, ZenButton, ZenHeading, ZenText, ZenAccent } from './themes/ZenMode';
import { RetroCard, RetroButton, RetroHeading, RetroText, RetroAccent, RetroTerminal, RetroMatrix, RetroGlitchText } from './themes/RetroFuturistic';
import { BrutalCard, BrutalButton, BrutalHeading, BrutalText, BrutalAccent, BrutalCallout, BrutalStickyNote, BrutalSandbox, BrutalDoodle } from './themes/SoftBrutalism';

export default function ThemedHome() {
  const { currentTheme, isZenMode, isKonamiUnlocked } = useTheme();
  const [currentTagline, setCurrentTagline] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [easterEggs, setEasterEggs] = useState({
    konami: false,
    clickCount: 0,
    showSecret: false
  });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  const taglines = {
    zen: [
      "Mindful Design, Meaningful Impact",
      "Simplicity in Every Pixel",
      "Thoughtful User Experiences",
      "Clarity Through Design",
      "Accessible by Default",
      "Performance with Purpose"
    ],
    retro: [
      "HACKING THE MATRIX SINCE 2008",
      "NEON DREAMS, CLEAN CODE",
      "SYNTHWAVE UX MASTER",
      "TERMINAL TO TOMORROW",
      "GLITCH IS THE NEW FEATURE",
      "RETRO-FUTURE IS NOW"
    ],
    brutalism: [
      "BOLD DESIGNS, REAL IMPACT",
      "NO BULLSHIT, JUST RESULTS",
      "RAW TALENT, REFINED SKILLS",
      "HUMAN-CENTERED BRUTALISM",
      "ACCESSIBLE BY DESIGN",
      "PERFORMANCE IS EVERYTHING"
    ]
  };

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines[currentTheme].length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentTheme]);

  // Konami code easter egg
  useEffect(() => {
    let konamiCode: string[] = [];
    const konamiSequence = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
      'KeyB', 'KeyA'
    ];

    const handleKeyDown = (e: KeyboardEvent) => {
      konamiCode.push(e.code);
      if (konamiCode.length > konamiSequence.length) {
        konamiCode = konamiCode.slice(-konamiSequence.length);
      }
      
      if (konamiCode.join(',') === konamiSequence.join(',')) {
        setEasterEggs(prev => ({ ...prev, konami: true }));
        konamiCode = [];
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSecretClick = () => {
    setEasterEggs(prev => ({
      ...prev,
      clickCount: prev.clickCount + 1,
      showSecret: prev.clickCount >= 4
    }));
  };

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

  const renderHeroContent = () => {
    switch (currentTheme) {
      case 'zen':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <ZenHeading level={1} className="mb-6">
              Front-End Engineer
            </ZenHeading>
            <div className="h-16 flex items-center justify-center mb-8">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTagline}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="text-xl text-slate-600 max-w-2xl mx-auto font-light"
                >
                  {taglines.zen[currentTagline]}
                </motion.p>
              </AnimatePresence>
            </div>
            <ZenText className="text-lg max-w-2xl mx-auto mb-8">
              Crafting simple, intuitive, and accessible user interfaces with 15+ years of experience
            </ZenText>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects">
                <ZenButton>View Projects</ZenButton>
              </Link>
              <Link href="/contact">
                <button className="zen-hover px-6 py-3 bg-slate-100 text-slate-800 border-2 border-slate-600 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 hover:bg-slate-200 hover:border-slate-700">
                  Contact Me
                </button>
              </Link>
            </div>
          </motion.div>
        );

      case 'retro':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center relative"
          >
            <RetroMatrix />
            <RetroHeading level={1} glitch className="mb-6 relative z-10" aria-label="Front-End Engineer - Jing Gong">
              FRONT-END ENGINEER
            </RetroHeading>
            <div className="h-16 flex items-center justify-center mb-8 relative z-10">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTagline}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="text-xl text-[var(--text-primary)] max-w-2xl mx-auto font-mono neon-glow"
                  aria-live="polite"
                  aria-label={`Professional tagline: ${taglines.retro[currentTagline]}`}
                >
                  {taglines.retro[currentTagline]}
                </motion.p>
              </AnimatePresence>
            </div>
            <RetroText className="text-lg max-w-2xl mx-auto mb-8 relative z-10">
              HACKING THE WEB SINCE 2008 • BUILDING FUTURE-PROOF EXPERIENCES
            </RetroText>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10" role="navigation" aria-label="Main actions">
              <Link href="/projects" aria-label="View my portfolio projects">
                <RetroButton neon aria-label="Navigate to projects showcase">VIEW PROJECTS</RetroButton>
              </Link>
              <Link href="/contact" aria-label="Get in touch with me">
                <button 
                  className="px-6 py-3 bg-violet-900 text-violet-100 border border-violet-400 rounded font-mono font-medium transition-all duration-300 hover:bg-violet-800 hover:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-indigo-900"
                  aria-label="Contact me for collaboration opportunities"
                >
                  CONTACT ME
                </button>
              </Link>
            </div>
          </motion.div>
        );

      case 'brutalism':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <BrutalHeading level={1} oversized className="mb-6">
              FRONT-END ENGINEER
            </BrutalHeading>
            <div className="h-16 flex items-center justify-center mb-8">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTagline}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl text-gray-800 max-w-2xl mx-auto font-black"
                >
                  {taglines.brutalism[currentTagline]}
                </motion.p>
              </AnimatePresence>
            </div>
            <BrutalText className="text-xl max-w-2xl mx-auto mb-8">
              BOLD DESIGNS • REAL IMPACT • HUMAN-CENTERED APPROACH
            </BrutalText>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects">
                <BrutalButton size="large">VIEW PROJECTS</BrutalButton>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 text-lg bg-amber-100 text-gray-800 border-4 border-gray-800 font-bold transition-all duration-100 hover:bg-amber-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-amber-300">
                  CONTACT ME
                </button>
              </Link>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <ZenMode>
      <div className={getThemeClasses()}>
        {/* Cursor Trail Effect */}
        <CursorTrail />
        
        {/* Easter Egg: Konami Code */}
        {easterEggs.konami && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed top-4 left-4 z-50 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold shadow-lg"
          >
            🎉 Konami Code Activated! 🎉
          </motion.div>
        )}
        
        {/* Easter Egg: Secret Click Counter */}
        {easterEggs.showSecret && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-4 right-4 z-50 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
          >
            🎯 You found the secret! Click count: {easterEggs.clickCount}
          </motion.div>
        )}

        {/* Theme Switcher */}
        <ThemeSwitcher />

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
            <ProfileCanvas />
          </div>
          
          {/* Animated Background Elements */}
          {currentTheme === 'zen' && (
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute top-20 left-10 w-20 h-20 bg-slate-100 rounded-full opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute top-40 right-20 w-16 h-16 bg-slate-200 rounded-full opacity-30"
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          )}

          <motion.div 
            style={{ y }}
            className="max-w-7xl mx-auto relative z-10"
          >
            {renderHeroContent()}
          </motion.div>
        </section>

        {/* Philosophy Section */}
        <section className={`py-16 ${currentTheme === 'retro' ? 'bg-[var(--background)]' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              {currentTheme === 'zen' && (
                <>
                  <ZenHeading level={2} className="mb-4">My Philosophy</ZenHeading>
                  <ZenText>Make it work, keep it simple</ZenText>
                </>
              )}
              {currentTheme === 'retro' && (
                <>
                  <RetroHeading level={2} glitch className="mb-4">CORE PRINCIPLES</RetroHeading>
                  <RetroText terminal>EXECUTING DESIGN PHILOSOPHY.EXE</RetroText>
                </>
              )}
              {currentTheme === 'brutalism' && (
                <>
                  <BrutalHeading level={2} oversized className="mb-4">MY PHILOSOPHY</BrutalHeading>
                  <BrutalText className="text-2xl">BOLD • ACCESSIBLE • HUMAN</BrutalText>
                </>
              )}
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Philosophy cards will be rendered here based on theme */}
              {currentTheme === 'zen' && (
                <>
                  <ZenCard>
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <ZenHeading level={3} className="mb-2">Simplicity</ZenHeading>
                    <ZenText>Creating clean, intuitive interfaces that users can navigate without thinking</ZenText>
                  </ZenCard>
                  <ZenCard>
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <ZenHeading level={3} className="mb-2">Accessibility</ZenHeading>
                    <ZenText>Ensuring everyone can use and enjoy the web, regardless of their abilities</ZenText>
                  </ZenCard>
                  <ZenCard>
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <ZenHeading level={3} className="mb-2">Performance</ZenHeading>
                    <ZenText>Building fast, efficient applications that provide a smooth user experience</ZenText>
                  </ZenCard>
                </>
              )}

              {currentTheme === 'retro' && (
                <>
                  <RetroCard glitch>
                    <div className="w-12 h-12 bg-violet-800 rounded border border-violet-600 flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-violet-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <RetroHeading level={3} className="mb-2">EFFICIENCY</RetroHeading>
                    <RetroText>OPTIMIZING CODE FOR MAXIMUM PERFORMANCE AND MINIMAL RESOURCE USAGE</RetroText>
                  </RetroCard>
                  <RetroCard glitch>
                    <div className="w-12 h-12 bg-violet-800 rounded border border-violet-600 flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-violet-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <RetroHeading level={3} className="mb-2">ACCESSIBILITY</RetroHeading>
                    <RetroText>ENSURING UNIVERSAL ACCESS TO DIGITAL EXPERIENCES</RetroText>
                  </RetroCard>
                  <RetroCard glitch>
                    <div className="w-12 h-12 bg-violet-800 rounded border border-violet-600 flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-violet-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <RetroHeading level={3} className="mb-2">INNOVATION</RetroHeading>
                    <RetroText>PUSHING THE BOUNDARIES OF WHAT'S POSSIBLE IN WEB DEVELOPMENT</RetroText>
                  </RetroCard>
                </>
              )}

              {currentTheme === 'brutalism' && (
                <>
                  <BrutalCard handDrawn>
                    <div className="w-12 h-12 bg-amber-500 border-4 border-gray-800 flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <BrutalHeading level={3} className="mb-2">SIMPLICITY</BrutalHeading>
                    <BrutalText>NO BULLSHIT. CLEAN CODE. CLEAR PURPOSE.</BrutalText>
                  </BrutalCard>
                  <BrutalCard handDrawn>
                    <div className="w-12 h-12 bg-amber-500 border-4 border-gray-800 flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <BrutalHeading level={3} className="mb-2">ACCESSIBILITY</BrutalHeading>
                    <BrutalText>EVERYONE DESERVES TO USE THE WEB. PERIOD.</BrutalText>
                  </BrutalCard>
                  <BrutalCard handDrawn>
                    <div className="w-12 h-12 bg-amber-500 border-4 border-gray-800 flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <BrutalHeading level={3} className="mb-2">PERFORMANCE</BrutalHeading>
                    <BrutalText>SPEED IS NOT OPTIONAL. IT'S ESSENTIAL.</BrutalText>
                  </BrutalCard>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className={`py-16 ${currentTheme === 'retro' ? 'bg-[var(--background)]' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              {currentTheme === 'zen' && (
                <>
                  <ZenHeading level={2} className="mb-4">Technical Skills</ZenHeading>
                  <ZenText>Interactive radar chart of my expertise</ZenText>
                </>
              )}
              {currentTheme === 'retro' && (
                <>
                  <RetroHeading level={2} glitch className="mb-4">SKILL MATRIX</RetroHeading>
                  <RetroText terminal>ANALYZING TECHNICAL PROFICIENCY LEVELS...</RetroText>
                </>
              )}
              {currentTheme === 'brutalism' && (
                <>
                  <BrutalHeading level={2} oversized className="mb-4">MY SKILLS</BrutalHeading>
                  <BrutalText className="text-2xl">HARD-WON EXPERTISE • PROVEN RESULTS</BrutalText>
                </>
              )}
            </motion.div>
            
            <div className="flex justify-center">
              <SkillRadar />
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              {currentTheme === 'zen' && (
                <>
                  <ZenHeading level={2} className="mb-4">Career Journey</ZenHeading>
                  <ZenText>15+ years of building great user experiences</ZenText>
                </>
              )}
              {currentTheme === 'retro' && (
                <>
                  <RetroHeading level={2} glitch className="mb-4">CAREER LOG</RetroHeading>
                  <RetroText terminal>EXECUTING PROFESSIONAL TIMELINE.EXE</RetroText>
                </>
              )}
              {currentTheme === 'brutalism' && (
                <>
                  <BrutalHeading level={2} oversized className="mb-4">MY JOURNEY</BrutalHeading>
                  <BrutalText className="text-2xl">15+ YEARS • 3 MAJOR COMPANIES • COUNTLESS PROJECTS</BrutalText>
                </>
              )}
            </motion.div>

            <ExperienceTimeline />
          </div>
        </section>

        {/* Project Showcase */}
        <section className={`py-16 ${currentTheme === 'retro' ? 'bg-[var(--background)]' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              {currentTheme === 'zen' && (
                <>
                  <ZenHeading level={2} className="mb-4">Featured Projects</ZenHeading>
                  <ZenText>Interactive showcase of my work with live demos</ZenText>
                </>
              )}
              {currentTheme === 'retro' && (
                <>
                  <RetroHeading level={2} glitch className="mb-4">PROJECT ARCHIVE</RetroHeading>
                  <RetroText terminal>LOADING PROJECT DATABASE...</RetroText>
                </>
              )}
              {currentTheme === 'brutalism' && (
                <>
                  <BrutalHeading level={2} oversized className="mb-4">MY WORK</BrutalHeading>
                  <BrutalText className="text-2xl">REAL PROJECTS • REAL IMPACT • REAL RESULTS</BrutalText>
                </>
              )}
            </motion.div>

            <ProjectShowcase />
          </div>
        </section>

        {/* Interactive Contact Section */}
        <section className={`py-16 ${currentTheme === 'retro' ? 'bg-[var(--background)]' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              {currentTheme === 'zen' && (
                <>
                  <ZenHeading level={2} className="mb-4">Let's Work Together</ZenHeading>
                  <ZenText>Start a conversation about your next project</ZenText>
                </>
              )}
              {currentTheme === 'retro' && (
                <>
                  <RetroHeading level={2} glitch className="mb-4">INITIATE CONTACT</RetroHeading>
                  <RetroText terminal>ESTABLISHING COMMUNICATION CHANNEL...</RetroText>
                </>
              )}
              {currentTheme === 'brutalism' && (
                <>
                  <BrutalHeading level={2} oversized className="mb-4">LET'S TALK</BrutalHeading>
                  <BrutalText className="text-2xl">READY TO BUILD SOMETHING AMAZING?</BrutalText>
                </>
              )}
            </motion.div>

            <InteractiveContact />
          </div>
        </section>
      </div>
    </ZenMode>
  );
}

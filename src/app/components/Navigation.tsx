'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiTerminal } from 'react-icons/fi';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={
        scrolled
          ? {
              background: 'var(--nav-bg)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--nav-border)',
            }
          : {}
      }
    >
      {/* Top gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'var(--top-line)' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                  boxShadow: '0 0 14px rgba(59,130,246,0.4)',
                }}
              >
                <FiTerminal size={14} className="text-white" />
              </div>
              <span
                className="font-bold text-lg text-slate-900 dark:text-white"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                JG
              </span>
            </motion.div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link key={item.path} href={item.path}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="relative px-4 py-2 rounded-lg font-mono text-sm transition-all duration-200 cursor-pointer"
                    style={{
                      color: isActive ? 'var(--nav-active-color)' : undefined,
                    }}
                  >
                    {!isActive && (
                      <span className="text-slate-500 dark:text-zinc-500 hover:text-slate-800 dark:hover:text-zinc-200 transition-colors duration-200">
                        {item.name}
                      </span>
                    )}
                    {isActive && (
                      <>
                        <motion.div
                          layoutId="nav-indicator"
                          className="absolute inset-0 rounded-lg"
                          style={{
                            border: '1px solid var(--nav-active-border)',
                            background: 'var(--nav-active-bg)',
                          }}
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                        />
                        <span className="relative z-10">{item.name}</span>
                      </>
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-cyan-400 transition-all duration-200 cursor-pointer"
            style={{ border: '1px solid var(--card-border)' }}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            style={{ background: 'var(--nav-bg)', borderTop: '1px solid var(--divider)' }}
            className="md:hidden backdrop-blur-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link key={item.path} href={item.path} onClick={() => setIsOpen(false)}>
                    <motion.div
                      whileTap={{ scale: 0.98 }}
                      className="block px-4 py-3 rounded-lg font-mono text-sm transition-all duration-200 cursor-pointer"
                      style={
                        isActive
                          ? {
                              color: 'var(--nav-active-color)',
                              border: '1px solid var(--nav-active-border)',
                              background: 'var(--nav-active-bg)',
                            }
                          : {
                              border: '1px solid transparent',
                            }
                      }
                    >
                      <span className={isActive ? '' : 'text-slate-500 dark:text-zinc-500'}>
                        {item.name}
                      </span>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

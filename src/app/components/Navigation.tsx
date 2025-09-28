'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useTheme } from '../contexts/ThemeContext';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { currentTheme } = useTheme();

  return (
    <nav id="navigation" className={`fixed top-0 w-full ${currentTheme === 'retro' ? 'bg-indigo-900/95' : 'bg-white/80'} backdrop-blur-sm z-50 shadow-sm`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className={`text-2xl font-bold ${currentTheme === 'retro' ? 'text-slate-50' : 'text-gray-900'}`}>
              JG
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === item.path
                    ? (currentTheme === 'retro' ? 'text-violet-400' : 'text-blue-600')
                    : (currentTheme === 'retro' ? 'text-slate-300 hover:text-violet-400' : 'text-gray-600 hover:text-blue-600')
                }`}
                aria-current={pathname === item.path ? 'page' : undefined}
              >
                {item.name}
                {pathname === item.path && (
                  <motion.div
                    layoutId="underline"
                    className={`absolute left-0 right-0 h-0.5 bottom-0 ${currentTheme === 'retro' ? 'bg-violet-400' : 'bg-blue-600'}`}
                    aria-hidden="true"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset ${
                currentTheme === 'retro' 
                  ? 'text-slate-300 hover:text-slate-100 hover:bg-indigo-800 focus:ring-violet-400' 
                  : 'text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:ring-blue-500'
              }`}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close main menu' : 'Open main menu'}
            >
              <span className="sr-only">{isOpen ? 'Close main menu' : 'Open main menu'}</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`md:hidden ${currentTheme === 'retro' ? 'bg-indigo-900' : 'bg-white'}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.path
                    ? (currentTheme === 'retro' ? 'bg-violet-500 text-slate-50' : 'bg-blue-50 text-blue-600')
                    : (currentTheme === 'retro' ? 'text-slate-300 hover:bg-indigo-800 hover:text-slate-50' : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600')
                }`}
                onClick={() => setIsOpen(false)}
                aria-current={pathname === item.path ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
} 
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useState } from 'react';

const themes = [
  {
    id: 'zen' as const,
    name: 'Zen Mode',
    description: 'Clean, modern, quietly expressive',
    icon: '🧘',
    colors: ['#475569', '#f97316', '#f8fafc'],
    preview: 'Clean lines, soft neutrals, subtle animations'
  },
  {
    id: 'retro' as const,
    name: 'Retro-Futuristic',
    description: '80s synth meets modern dev tools',
    icon: '🕹️',
    colors: ['#8b5cf6', '#ec4899', '#10b981'],
    preview: 'Neon glows, glitch effects, terminal vibes'
  },
  {
    id: 'brutalism' as const,
    name: 'Soft Brutalism',
    description: 'Bold, raw, expressive but approachable',
    icon: '🌈',
    colors: ['#1f2937', '#f59e0b', '#3b82f6'],
    preview: 'Thick borders, bold typography, hand-drawn feel'
  }
];

export default function ThemeSwitcher() {
  const { currentTheme, setTheme, isZenMode, toggleZenMode, isKonamiUnlocked } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [showKonami, setShowKonami] = useState(false);

  const handleThemeChange = (themeId: typeof themes[0]['id']) => {
    setTheme(themeId);
    setIsOpen(false);
  };

  const handleKonamiCode = () => {
    if (isKonamiUnlocked) {
      setShowKonami(true);
      setTimeout(() => setShowKonami(false), 3000);
    }
  };

  return (
    <div className="fixed right-6 z-50">
      {/* Main Theme Switcher */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`
            px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
            flex items-center space-x-2 shadow-lg border-2
            ${currentTheme === 'zen' ? 'bg-slate-100 text-slate-800 border-slate-300' : ''}
            ${currentTheme === 'retro' ? 'bg-violet-900 text-violet-100 border-violet-700 neon-glow' : ''}
            ${currentTheme === 'brutalism' ? 'bg-amber-100 text-gray-800 border-gray-800 hand-drawn' : ''}
          `}
          aria-expanded={isOpen}
          aria-haspopup="menu"
          aria-label={`Current theme: ${themes.find(t => t.id === currentTheme)?.name}. Click to change theme.`}
        >
          <span className="text-lg">
            {themes.find(t => t.id === currentTheme)?.icon}
          </span>
          <span className="hidden sm:inline">
            {themes.find(t => t.id === currentTheme)?.name}
          </span>
          <motion.svg
            className="w-4 h-4"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </motion.button>

        {/* Theme Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`absolute top-full right-0 mt-2 w-80 ${currentTheme === 'retro' ? 'bg-[var(--surface)] border-[var(--border)]' : 'bg-white border-gray-200'} rounded-lg shadow-xl overflow-hidden`}
              role="menu"
              aria-label="Theme selection menu"
            >
              <div className="p-4">
                <h3 className={`text-lg font-semibold ${currentTheme === 'retro' ? 'text-[var(--text-primary)]' : 'text-gray-900'} mb-3`}>Choose Your Vibe</h3>
                <div className="space-y-3">
                  {themes.map((theme) => (
                    <motion.button
                      key={theme.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleThemeChange(theme.id)}
                      className={`
                        w-full p-3 rounded-lg text-left transition-all duration-200
                        ${currentTheme === theme.id 
                          ? (currentTheme === 'retro' ? 'bg-[var(--primary)] border-2 border-[var(--accent)]' : 'bg-blue-50 border-2 border-blue-500')
                          : (currentTheme === 'retro' ? 'bg-[var(--surface)] border-2 border-transparent hover:bg-[var(--surface-elevated)]' : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100')
                        }
                      `}
                      role="menuitem"
                      aria-label={`Switch to ${theme.name} theme: ${theme.description}`}
                      aria-pressed={currentTheme === theme.id}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{theme.icon}</span>
                        <div className="flex-1">
                          <div className={`font-medium ${currentTheme === 'retro' ? 'text-[var(--text-primary)]' : 'text-gray-900'}`}>{theme.name}</div>
                          <div className={`text-sm ${currentTheme === 'retro' ? 'text-[var(--text-secondary)]' : 'text-gray-600'}`}>{theme.description}</div>
                          <div className={`text-xs ${currentTheme === 'retro' ? 'text-[var(--text-muted)]' : 'text-gray-500'} mt-1`}>{theme.preview}</div>
                        </div>
                        <div className="flex space-x-1">
                          {theme.colors.map((color, index) => (
                            <div
                              key={`${theme.id}-color-${index}`}
                              className="w-4 h-4 rounded-full border border-gray-300"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Zen Mode Toggle */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-2"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleZenMode}
          className={`
            px-3 py-2 rounded-full text-xs font-medium transition-all duration-300
            flex items-center space-x-2 shadow-md border
            ${isZenMode 
              ? 'bg-green-100 text-green-800 border-green-300' 
              : 'bg-gray-100 text-gray-600 border-gray-300'
            }
          `}
        >
          <span className="text-sm">🧘</span>
          <span className="hidden sm:inline">
            {isZenMode ? 'Zen Mode On' : 'Zen Mode Off'}
          </span>
        </motion.button>
      </motion.div>

      {/* Konami Code Indicator */}
      {isKonamiUnlocked && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-2"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleKonamiCode}
            className="px-3 py-2 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-300 shadow-md"
          >
            <span className="text-sm">🎮</span>
            <span className="hidden sm:inline ml-1">Konami Unlocked</span>
          </motion.button>
        </motion.div>
      )}

      {/* Konami Code Success Message */}
      <AnimatePresence>
        {showKonami && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="absolute top-0 right-full mr-4 bg-yellow-400 text-black px-4 py-2 rounded-lg shadow-lg font-bold"
          >
            🎉 Konami Code Activated! 🎉
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

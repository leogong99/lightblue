'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeVariant = 'zen' | 'retro' | 'brutalism' | 'minimalist' | 'playful';

interface ThemeContextType {
  currentTheme: ThemeVariant;
  setTheme: (theme: ThemeVariant) => void;
  isZenMode: boolean;
  toggleZenMode: () => void;
  isKonamiUnlocked: boolean;
  unlockKonami: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeVariant>('zen');
  const [isZenMode, setIsZenMode] = useState(false);
  const [isKonamiUnlocked, setIsKonamiUnlocked] = useState(false);

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('portfolio-theme') as ThemeVariant;
    const savedZenMode = localStorage.getItem('portfolio-zen-mode') === 'true';
    const savedKonami = localStorage.getItem('portfolio-konami') === 'true';
    
    if (savedTheme) setCurrentTheme(savedTheme);
    if (savedZenMode) setIsZenMode(savedZenMode);
    if (savedKonami) setIsKonamiUnlocked(savedKonami);
  }, []);

  const setTheme = (theme: ThemeVariant) => {
    setCurrentTheme(theme);
    localStorage.setItem('portfolio-theme', theme);
  };

  const toggleZenMode = () => {
    const newZenMode = !isZenMode;
    setIsZenMode(newZenMode);
    localStorage.setItem('portfolio-zen-mode', newZenMode.toString());
  };

  const unlockKonami = () => {
    setIsKonamiUnlocked(true);
    localStorage.setItem('portfolio-konami', 'true');
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setTheme,
        isZenMode,
        toggleZenMode,
        isKonamiUnlocked,
        unlockKonami,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

'use client';

import { useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { currentTheme, isZenMode } = useTheme();

  useEffect(() => {
    // Apply theme class to HTML element
    const htmlElement = document.documentElement;
    
    // Remove all theme classes
    htmlElement.classList.remove('theme-zen', 'theme-retro', 'theme-brutalism', 'theme-minimalist', 'theme-playful');
    
    // Add current theme class
    const themeClass = `theme-${currentTheme}`;
    htmlElement.classList.add(themeClass);
    
    // Apply zen mode if enabled
    if (isZenMode) {
      htmlElement.classList.add('zen-mode');
    } else {
      htmlElement.classList.remove('zen-mode');
    }
  }, [currentTheme, isZenMode]);

  return <>{children}</>;
}

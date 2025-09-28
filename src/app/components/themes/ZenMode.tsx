'use client';

import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

interface ZenModeProps {
  children: React.ReactNode;
}

export function ZenMode({ children }: ZenModeProps) {
  const { isZenMode } = useTheme();

  if (!isZenMode) return <>{children}</>;

  return (
    <div className="zen-mode">
      {children}
    </div>
  );
}

// Zen Mode specific components
export function ZenCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`zen-hover bg-white rounded-lg shadow-sm border border-slate-200 p-6 transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}

export function ZenButton({ children, className = '', ...props }: { children: React.ReactNode; className?: string; [key: string]: any }) {
  return (
    <button 
      className={`zen-hover px-6 py-3 bg-slate-700 text-white border-2 border-slate-600 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 hover:bg-slate-800 hover:border-slate-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function ZenHeading({ children, level = 1, className = '' }: { children: React.ReactNode; level?: 1 | 2 | 3 | 4 | 5 | 6; className?: string }) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const sizeClasses = {
    1: 'text-4xl sm:text-5xl font-light',
    2: 'text-3xl font-light',
    3: 'text-2xl font-medium',
    4: 'text-xl font-medium',
    5: 'text-lg font-medium',
    6: 'text-base font-medium'
  };

  return (
    <Tag className={`text-slate-900 ${sizeClasses[level]} ${className}`}>
      {children}
    </Tag>
  );
}

export function ZenText({ children, className = '', muted = false }: { children: React.ReactNode; className?: string; muted?: boolean }) {
  return (
    <p className={`text-slate-600 ${muted ? 'text-slate-500' : ''} leading-relaxed ${className}`}>
      {children}
    </p>
  );
}

export function ZenAccent({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`text-orange-500 font-medium ${className}`}>
      {children}
    </span>
  );
}

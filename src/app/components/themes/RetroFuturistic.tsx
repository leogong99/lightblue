'use client';

import React, { useState, useEffect } from 'react';

// Retro theme specific components
export function RetroCard({ children, className = '', glitch = false }: { children: React.ReactNode; className?: string; glitch?: boolean }) {
  return (
    <div className={`bg-[var(--surface)] rounded border border-[var(--border)] p-6 shadow-lg ${glitch ? 'glitch' : ''} ${className}`}>
      {children}
    </div>
  );
}

export function RetroButton({ children, className = '', neon = false, ...props }: { children: React.ReactNode; className?: string; neon?: boolean; [key: string]: unknown }) {
  return (
    <button 
      className={`
        px-6 py-3 bg-[var(--primary)] text-[var(--text-primary)] rounded border border-[var(--primary-light)] 
        font-mono font-medium transition-all duration-300 hover:bg-[var(--primary-dark)] 
        focus:outline-none focus:ring-2 focus:ring-[var(--primary-light)] focus:ring-offset-2 focus:ring-offset-[var(--background)]
        ${neon ? 'neon-glow' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export function RetroHeading({ children, level = 1, className = '', glitch = false, ...props }: { children: React.ReactNode; level?: 1 | 2 | 3 | 4 | 5 | 6; className?: string; glitch?: boolean; [key: string]: unknown }) {
  const sizeClasses = {
    1: 'text-4xl sm:text-5xl font-mono font-bold',
    2: 'text-3xl font-mono font-bold',
    3: 'text-2xl font-mono font-bold',
    4: 'text-xl font-mono font-bold',
    5: 'text-lg font-mono font-bold',
    6: 'text-base font-mono font-bold'
  };

  const content = (
    <div className={`text-[var(--text-primary)] ${sizeClasses[level]} ${className}`} {...props}>
      {children}
    </div>
  );

  if (glitch) {
    return (
      <div className="glitch" data-text={children?.toString()} role="heading" aria-level={level}>
        {content}
      </div>
    );
  }

  return content;
}

export function RetroText({ children, className = '', muted = false, terminal = false }: { children: React.ReactNode; className?: string; muted?: boolean; terminal?: boolean }) {
  return (
    <p className={`text-[var(--text-primary)] ${muted ? 'text-[var(--text-muted)]' : ''} font-mono leading-relaxed ${terminal ? 'terminal-cursor' : ''} ${className}`}>
      {children}
    </p>
  );
}

export function RetroAccent({ children, className = '', neon = false }: { children: React.ReactNode; className?: string; neon?: boolean }) {
  return (
    <span className={`text-[var(--accent)] font-bold ${neon ? 'neon-glow' : ''} ${className}`}>
      {children}
    </span>
  );
}

export function RetroTerminal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-black border border-violet-500 rounded p-4 font-mono text-green-400 ${className}`}>
      <div className="flex items-center mb-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="ml-4 text-violet-300 text-sm">terminal.exe</div>
      </div>
      <div className="border-t border-violet-700 pt-2">
        {children}
      </div>
    </div>
  );
}

export function RetroMatrix({ className = '' }: { className?: string }) {
  const [matrixChars, setMatrixChars] = useState<string[]>([]);

  useEffect(() => {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const newChars = Array.from({ length: 50 }, () => 
      chars[Math.floor(Math.random() * chars.length)]
    );
    setMatrixChars(newChars);

    const interval = setInterval(() => {
      setMatrixChars(prev => 
        prev.map(() => chars[Math.floor(Math.random() * chars.length)])
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className={`matrix-bg absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
      role="presentation"
    >
      <div className="grid grid-cols-10 gap-1 text-green-400 text-xs opacity-20">
        {matrixChars.map((char, index) => (
          <div key={`matrix-char-${index}`} className="text-center">
            {char}
          </div>
        ))}
      </div>
    </div>
  );
}

export function RetroGlitchText({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`glitch neon-glow ${className}`} data-text={children?.toString()}>
      {children}
    </div>
  );
}

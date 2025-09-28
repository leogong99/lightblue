'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

// Brutalism theme specific components
export function BrutalCard({ children, className = '', handDrawn = false }: { children: React.ReactNode; className?: string; handDrawn?: boolean }) {
  return (
    <div className={`bg-amber-100 border-4 border-gray-800 p-6 shadow-lg ${handDrawn ? 'hand-drawn' : ''} ${className}`}>
      {children}
    </div>
  );
}

export function BrutalButton({ children, className = '', size = 'medium', ...props }: { children: React.ReactNode; className?: string; size?: 'small' | 'medium' | 'large'; [key: string]: any }) {
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };

  return (
    <button 
      className={`
        bg-amber-500 text-gray-800 border-4 border-gray-800 font-bold
        transition-all duration-100 hover:bg-amber-400 hover:translate-x-1 hover:translate-y-1 hover:shadow-lg
        focus:outline-none focus:ring-4 focus:ring-amber-300
        ${sizeClasses[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export function BrutalHeading({ children, level = 1, className = '', oversized = false }: { children: React.ReactNode; level?: 1 | 2 | 3 | 4 | 5 | 6; className?: string; oversized?: boolean }) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const sizeClasses = {
    1: oversized ? 'text-6xl sm:text-7xl font-black' : 'text-4xl sm:text-5xl font-black',
    2: oversized ? 'text-5xl sm:text-6xl font-black' : 'text-3xl font-black',
    3: oversized ? 'text-4xl sm:text-5xl font-black' : 'text-2xl font-black',
    4: oversized ? 'text-3xl sm:text-4xl font-black' : 'text-xl font-black',
    5: oversized ? 'text-2xl sm:text-3xl font-black' : 'text-lg font-black',
    6: oversized ? 'text-xl sm:text-2xl font-black' : 'text-base font-black'
  };

  return (
    <Tag className={`text-gray-800 ${sizeClasses[level]} ${className}`}>
      {children}
    </Tag>
  );
}

export function BrutalText({ children, className = '', muted = false, handwritten = false }: { children: React.ReactNode; className?: string; muted?: boolean; handwritten?: boolean }) {
  return (
    <p className={`text-gray-800 ${muted ? 'text-gray-600' : ''} font-medium leading-relaxed ${handwritten ? 'italic' : ''} ${className}`}>
      {children}
    </p>
  );
}

export function BrutalAccent({ children, className = '', color = 'amber' }: { children: React.ReactNode; className?: string; color?: 'amber' | 'blue' | 'red' }) {
  const colorClasses = {
    amber: 'text-amber-600',
    blue: 'text-blue-600',
    red: 'text-red-600'
  };

  return (
    <span className={`${colorClasses[color]} font-black ${className}`}>
      {children}
    </span>
  );
}

export function BrutalCallout({ children, className = '', type = 'info' }: { children: React.ReactNode; className?: string; type?: 'info' | 'warning' | 'success' | 'error' }) {
  const typeClasses = {
    info: 'bg-blue-100 border-blue-800 text-blue-900',
    warning: 'bg-amber-100 border-amber-800 text-amber-900',
    success: 'bg-green-100 border-green-800 text-green-900',
    error: 'bg-red-100 border-red-800 text-red-900'
  };

  return (
    <div className={`border-4 p-4 font-bold ${typeClasses[type]} ${className}`}>
      {children}
    </div>
  );
}

export function BrutalStickyNote({ children, className = '', color = 'yellow' }: { children: React.ReactNode; className?: string; color?: 'yellow' | 'pink' | 'blue' | 'green' }) {
  const colorClasses = {
    yellow: 'bg-yellow-200 border-yellow-800',
    pink: 'bg-pink-200 border-pink-800',
    blue: 'bg-blue-200 border-blue-800',
    green: 'bg-green-200 border-green-800'
  };

  return (
    <motion.div
      initial={{ rotate: -5, scale: 0.8 }}
      animate={{ rotate: 0, scale: 1 }}
      whileHover={{ rotate: 2, scale: 1.05 }}
      className={`${colorClasses[color]} border-4 p-4 shadow-lg transform ${className}`}
    >
      <div className="font-bold text-sm">
        {children}
      </div>
    </motion.div>
  );
}

export function BrutalSandbox({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white border-4 border-gray-800 p-6 shadow-lg ${className}`}>
      <div className="border-b-4 border-gray-800 pb-2 mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-red-500 border-2 border-gray-800"></div>
          <div className="w-4 h-4 bg-yellow-500 border-2 border-gray-800"></div>
          <div className="w-4 h-4 bg-green-500 border-2 border-gray-800"></div>
          <span className="ml-4 font-bold text-gray-800">Build With Me</span>
        </div>
      </div>
      <div className="bg-amber-50 border-2 border-gray-400 p-4">
        {children}
      </div>
    </div>
  );
}

export function BrutalDoodle({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className={`relative ${className}`}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M10,10 Q30,5 50,20 T90,15 L90,85 Q70,80 50,85 T10,90 Z"
          fill="none"
          stroke="#1f2937"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="relative z-10 p-4">
        {children}
      </div>
    </motion.div>
  );
}

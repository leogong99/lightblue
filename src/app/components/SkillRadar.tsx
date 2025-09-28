'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface SkillData {
  name: string;
  level: number;
  color: string;
}

const skills: SkillData[] = [
  { name: 'JavaScript', level: 95, color: '#f59e0b' },
  { name: 'React', level: 90, color: '#3b82f6' },
  { name: 'UX Design', level: 85, color: '#10b981' },
  { name: 'Performance', level: 88, color: '#8b5cf6' },
  { name: 'Accessibility', level: 92, color: '#ef4444' },
  { name: 'AI integration', level: 87, color: '#06b6d4' },
  { name: 'Testing', level: 80, color: '#84cc16' },
  { name: 'Architecture', level: 85, color: '#f97316' }
];

export default function SkillRadar() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [animationProgress, setAnimationProgress] = useState(0);
  const { currentTheme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationProgress(1);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const centerX = 250;
  const centerY = 250;
  const radius = 150;

  const getSkillPosition = (index: number, level: number) => {
    const angle = (index * 2 * Math.PI) / skills.length - Math.PI / 2;
    const adjustedRadius = (level / 100) * radius * animationProgress;
    return {
      x: centerX + adjustedRadius * Math.cos(angle),
      y: centerY + adjustedRadius * Math.sin(angle)
    };
  };

  const getPolygonPoints = () => {
    return skills
      .map((skill, index) => {
        const pos = getSkillPosition(index, skill.level);
        return `${pos.x},${pos.y}`;
      })
      .join(' ');
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <svg width="500" height="500" className="w-full h-auto" viewBox="0 0 500 500">
        {/* Grid circles */}
        {[0.2, 0.4, 0.6, 0.8, 1].map((scale, index) => (
          <circle
            key={`grid-circle-${index}`}
            cx={centerX}
            cy={centerY}
            r={radius * scale}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="1"
            opacity={0.3}
          />
        ))}

        {/* Grid lines */}
        {skills.map((_, index) => {
          const angle = (index * 2 * Math.PI) / skills.length - Math.PI / 2;
          const endX = centerX + radius * Math.cos(angle);
          const endY = centerY + radius * Math.sin(angle);
          return (
            <line
              key={`grid-line-${index}`}
              x1={centerX}
              y1={centerY}
              x2={endX}
              y2={endY}
              stroke="#e5e7eb"
              strokeWidth="1"
              opacity={0.3}
            />
          );
        })}

        {/* Skill area polygon */}
        <motion.polygon
          points={getPolygonPoints()}
          fill="url(#skillGradient)"
          fillOpacity={0.3}
          stroke="#3b82f6"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Gradient definition */}
        <defs>
          <radialGradient id="skillGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
          </radialGradient>
        </defs>

        {/* Skill points */}
        {skills.map((skill, index) => {
          const pos = getSkillPosition(index, skill.level);
          const isHovered = hoveredSkill === skill.name;
          
          return (
            <g key={skill.name}>
              <motion.circle
                cx={pos.x}
                cy={pos.y}
                r={isHovered ? 8 : 6}
                fill={skill.color}
                stroke="white"
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ scale: 1.2 }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="cursor-pointer"
              />
              
              {/* Skill labels */}
              <motion.text
                x={pos.x}
                y={pos.y - 15}
                textAnchor="middle"
                className="text-xs font-medium fill-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                {skill.level}%
              </motion.text>
            </g>
          );
        })}

        {/* Skill names around the circle */}
        {skills.map((skill, index) => {
          const angle = (index * 2 * Math.PI) / skills.length - Math.PI / 2;
          const labelRadius = radius + 50;
          const labelX = centerX + labelRadius * Math.cos(angle);
          const labelY = centerY + labelRadius * Math.sin(angle);
          
          return (
            <motion.text
              key={`label-${skill.name}`}
              x={labelX}
              y={labelY}
              textAnchor="middle"
              className="text-base font-medium fill-gray-600 cursor-pointer hover:fill-blue-600 transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 + index * 0.1 }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {skill.name}
            </motion.text>
          );
        })}
      </svg>

      {/* Skill details tooltip */}
      {hoveredSkill && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className={`absolute top-4 right-4 ${currentTheme === 'retro' ? 'bg-[var(--surface)] border-[var(--border)]' : 'bg-white border-gray-200'} p-4 rounded-lg shadow-lg max-w-xs`}
        >
          <h4 className={`font-semibold ${currentTheme === 'retro' ? 'text-[var(--text-primary)]' : 'text-gray-900'} mb-2`}>
            {hoveredSkill}
          </h4>
          <p className={`text-sm ${currentTheme === 'retro' ? 'text-[var(--text-secondary)]' : 'text-gray-600'}`}>
            {skills.find(s => s.name === hoveredSkill)?.level}% proficiency
          </p>
          <div className={`mt-2 w-full ${currentTheme === 'retro' ? 'bg-[var(--border)]' : 'bg-gray-200'} rounded-full h-2`}>
            <motion.div
              className={`${currentTheme === 'retro' ? 'bg-[var(--accent)]' : 'bg-blue-500'} h-2 rounded-full`}
              initial={{ width: 0 }}
              animate={{ 
                width: `${skills.find(s => s.name === hoveredSkill)?.level}%` 
              }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      )}
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TrailPoint {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

export default function CursorTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const maxTrailLength = 20;

    const handleMouseMove = (e: MouseEvent) => {
      const newPoint: TrailPoint = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
      };

      setTrail(prev => {
        const newTrail = [newPoint, ...prev].slice(0, maxTrailLength);
        return newTrail;
      });
    };

    const handleMouseEnter = () => setIsActive(true);
    const handleMouseLeave = () => setIsActive(false);

    if (isActive) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((point, index) => {
        const opacity = 1 - (index / trail.length);
        const scale = 1 - (index / trail.length) * 0.8;
        
        return (
          <motion.div
            key={point.id}
            className="absolute w-4 h-4 bg-blue-500 rounded-full"
            style={{
              left: point.x - 8,
              top: point.y - 8,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: scale * opacity,
              opacity: opacity * 0.6
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        );
      })}
    </div>
  );
}

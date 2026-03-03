import React from 'react';
import { motion } from 'framer-motion';

interface FloatingOrbProps {
  color?: string;
  size?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  blur?: number;
  opacity?: number;
  duration?: number;
}

export const FloatingOrb: React.FC<FloatingOrbProps> = ({
  color = 'from-blue-600/20 to-purple-600/20',
  size = 200,
  top = '20%',
  left,
  right,
  bottom,
  blur = 80,
  opacity = 0.6,
  duration = 8,
}) => {
  return (
    <motion.div
      animate={{
        y: [0, -30, 0],
        x: [0, 20, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={`pointer-events-none absolute -z-10 rounded-full bg-gradient-to-br ${color}`}
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        filter: `blur(${blur}px)`,
        opacity,
      }}
    />
  );
};

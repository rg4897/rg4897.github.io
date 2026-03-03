import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../utils/theme';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hover = true,
  delay = 0,
  onClick,
}) => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: 'easeOut' }}
      whileHover={hover ? { y: -8, boxShadow: '0 20px 40px rgba(255, 255, 255, 0.1)' } : {}}
      onClick={onClick}
      className={`relative group rounded-3xl overflow-hidden backdrop-blur-2xl transition-all duration-300 ${
        theme === 'light'
          ? 'border border-blue-200 bg-white/20'
          : 'border border-white/20 bg-white/10'
      } ${hover ? 'cursor-pointer ' + (theme === 'light' ? 'hover:border-blue-300' : 'hover:border-white/30') : ''} p-8 ${className}`}
    >
      {/* Gradient overlay on hover */}
      {hover && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

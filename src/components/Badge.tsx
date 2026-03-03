import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../utils/theme';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'glow' | 'outlined';
  className?: string;
  index?: number;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = '',
  index = 0,
}) => {
  const { theme } = useTheme();

  const variants: Record<string, string> = {
    default:
      theme === 'light'
        ? 'bg-blue-50 text-gray-900 border border-blue-200 hover:bg-blue-100 hover:border-blue-300'
        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/40',
    glow:
      theme === 'light'
        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-gray-900 border border-blue-400/30 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/20'
        : 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-400/30 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/20',
    outlined:
      theme === 'light'
        ? 'bg-transparent text-gray-900 border border-gray-300 hover:bg-gray-100 hover:border-gray-400'
        : 'bg-transparent text-white border border-white/30 hover:bg-white/5 hover:border-white/50',
  };

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.05,
        duration: 0.4,
      }}
      className={`inline-block px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-lg ${
        variants[variant]
      } ${className}`}
    >
      {children}
    </motion.span>
  );
};

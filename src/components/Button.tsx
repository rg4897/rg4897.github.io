import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../utils/theme';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'dark';
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
  icon,
  disabled = false,
}) => {
  const { theme } = useTheme();

  const baseClasses =
    'relative px-8 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer overflow-hidden group';

  const variants: Record<string, string> = {
    primary:
      theme === 'light'
        ? 'bg-blue-600 text-white hover:bg-blue-700'
        : 'bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 hover:border-white/30 hover:shadow-lg hover:shadow-white/10',
    secondary:
      theme === 'light'
        ? 'bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700'
        : 'bg-transparent border-2 border-white/30 text-white hover:bg-white/5 hover:border-white/50',
    dark:
      theme === 'light'
        ? 'bg-gray-200 text-gray-900 hover:bg-gray-300'
        : 'bg-black/40 backdrop-blur-xl border border-white/10 text-white hover:bg-black/60 hover:border-white/20',
  };

  const content = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 translate-x-full group-hover:translate-x-0 transition-all duration-500" />
      {icon && <span className="relative">{icon}</span>}
      <span className="relative">{children}</span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
};

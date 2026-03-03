import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../utils/theme';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  className = '',
}) => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-12 ${className}`}
    >
      <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-4 ${
          theme === 'light'
            ? 'from-gray-900 via-gray-800 to-gray-600'
            : 'from-white via-white to-white/60'
        }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`${
          theme === 'light' ? 'text-gray-600' : 'text-white/60'
        } text-lg max-w-2xl leading-relaxed`}>{subtitle}</p>
      )}
    </motion.div>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { useTheme } from '../utils/theme';

export const Footer: React.FC = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`relative border-t py-8 px-4 md:px-8 ${theme === 'light' ? 'border-gray-200' : 'border-white/10'
      }`}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className={`${theme === 'light' ? 'text-gray-900' : 'text-white'} font-semibold mb-2`}>{portfolioData.name}</h3>
            <p className={`${theme === 'light' ? 'text-gray-600' : 'text-white/40'} text-sm`}>
              Copyright © {currentYear}
            </p>
          </div>

          <div className="flex gap-4">
            {[
              { label: 'GitHub', href: portfolioData.socialLinks.github },
              { label: 'LinkedIn', href: portfolioData.socialLinks.linkedin },
              { label: 'Email', href: `mailto:${portfolioData.socialLinks.email}` },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className={`transition-colors text-sm font-medium ${theme === 'light'
                  ? 'text-gray-600 hover:text-gray-900'
                  : 'text-white/60 hover:text-white'
                  }`}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

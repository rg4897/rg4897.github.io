import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Download } from 'lucide-react';
import { useTheme } from '../utils/theme';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [mobileOpen]);

  const pillBase = `backdrop-blur-xl border transition-all duration-300`;
  const pillLight = scrolled
    ? 'bg-white/85 border-gray-200 shadow-lg shadow-black/5'
    : 'bg-white/60 border-gray-200/70 shadow-md shadow-black/5';
  const pillDark = scrolled
    ? 'bg-black/50 border-white/15 shadow-lg shadow-black/40'
    : 'bg-white/8 border-white/12';
  const pill = `${pillBase} ${theme === 'light' ? pillLight : pillDark}`;

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between pointer-events-auto">

        {/* Left — Logo */}
        <div className="flex flex-1 justify-start">
          <motion.a
            href="#"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className={`text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent select-none px-4 py-2 rounded-full ${pill}`}
          >
            RG
          </motion.a>
        </div>

        {/* Center — Desktop floating pill nav */}
        <nav
          className={`hidden md:flex items-center gap-1 px-3 py-2 rounded-full ${pill}`}
          style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${theme === 'light'
                ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80'
                : 'text-white/60 hover:text-white hover:bg-white/12'
                }`}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* Right — Theme toggle + Mobile hamburger */}
        <div className="flex flex-1 justify-end items-center gap-2">
          {/* Download Resume */}
          <motion.a
            href="/Ritesh%20Resume.pdf"
            download="Ritesh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title="Download Resume"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center justify-center gap-2 p-2.5 sm:px-4 sm:py-2 rounded-full text-sm font-medium ${pill} ${theme === 'light' ? 'text-gray-700 hover:text-gray-900' : 'text-white/70 hover:text-white'
              }`}
          >
            <span className="hidden sm:inline">Download Resume</span>
            <Download size={18} className="sm:w-4 sm:h-4" />
          </motion.a>

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-2.5 rounded-full ${pill}`}
          >
            <motion.div
              key={theme}
              initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className={theme === 'light' ? 'text-gray-700' : 'text-white/70'}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </motion.div>
          </motion.button>

          {/* Mobile hamburger */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            className={`md:hidden p-2.5 rounded-full ${pill}`}
          >
            <motion.div
              key={mobileOpen ? 'x' : 'menu'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className={theme === 'light' ? 'text-gray-700' : 'text-white/70'}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className={`md:hidden pointer-events-auto mx-4 mt-1 rounded-2xl overflow-hidden border ${theme === 'light'
              ? 'bg-white/90 border-gray-200 shadow-xl shadow-black/8'
              : 'bg-gray-900/90 border-white/10 shadow-xl shadow-black/50'
              }`}
            style={{ backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
          >
            <div className="flex flex-col p-3 gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.18 }}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${theme === 'light'
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

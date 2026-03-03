import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { Button, FloatingOrb } from '../components';
import { fadeInUp, containerVariants } from '../utils/animations';
import { portfolioData } from '../data/portfolio';
import { useTheme } from '../utils/theme';

export const HeroSection: React.FC = () => {
  const { theme } = useTheme();

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20 px-4 md:px-8">

      {/* Animated background orbs — theme-aware */}
      {theme === 'dark' ? (
        <>
          <FloatingOrb color="from-blue-600/30 to-cyan-600/20" size={300} top="10%" left="5%" duration={8} />
          <FloatingOrb color="from-purple-600/20 to-pink-600/20" size={250} top="40%" right="5%" duration={10} />
          <FloatingOrb color="from-indigo-600/20 to-blue-600/20" size={280} bottom="10%" left="20%" duration={9} />
        </>
      ) : (
        <>
          <FloatingOrb color="from-blue-400/25 to-cyan-400/15" size={300} top="10%" left="5%" duration={8} />
          <FloatingOrb color="from-purple-400/20 to-pink-400/15" size={250} top="40%" right="5%" duration={10} />
          <FloatingOrb color="from-indigo-400/20 to-blue-400/15" size={280} bottom="10%" left="20%" duration={9} />
        </>
      )}

      {/* Grid pattern — theme-aware */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: theme === 'light'
            ? 'linear-gradient(rgba(0,0,0,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.06) 1px, transparent 1px)'
            : 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
          backgroundSize: '4rem 4rem',
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto text-center px-2"
      >
        {/* Main heading */}
        <motion.div variants={fadeInUp} custom={1} className="mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-4">
            <span
              className={`bg-clip-text text-transparent ${theme === 'light'
                ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600'
                : 'bg-gradient-to-r from-white via-white to-white/60'
                }`}
            >
              {portfolioData.name}
            </span>
          </h1>
          <p
            className={`text-xl sm:text-2xl md:text-3xl font-light ${theme === 'light' ? 'text-gray-500' : 'text-white/70'
              }`}
          >
            {portfolioData.title}
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          custom={2}
          className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed ${theme === 'light' ? 'text-gray-500' : 'text-white/60'
            }`}
        >
          {portfolioData.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          custom={3}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button variant="primary" onClick={scrollToProjects} icon={<ArrowRight size={20} />}>
            View My Work
          </Button>
          <Button variant="secondary" onClick={scrollToContact} icon={<ArrowRight size={20} />}>
            Get in Touch
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={fadeInUp}
          custom={4}
          className="flex justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            href={portfolioData.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full backdrop-blur-xl border transition-all duration-300 ${theme === 'light'
              ? 'bg-white/60 border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-white shadow-sm'
              : 'bg-white/10 border-white/20 text-white/70 hover:text-white hover:bg-white/20'
              }`}
          >
            <Github size={22} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            href={portfolioData.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full backdrop-blur-xl border transition-all duration-300 ${theme === 'light'
              ? 'bg-white/60 border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-white shadow-sm'
              : 'bg-white/10 border-white/20 text-white/70 hover:text-white hover:bg-white/20'
              }`}
          >
            <Linkedin size={22} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

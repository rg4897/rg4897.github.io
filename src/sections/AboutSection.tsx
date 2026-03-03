import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard, SectionTitle } from '../components';
import { fadeInUp, containerVariants } from '../utils/animations';
import { portfolioData } from '../data/portfolio';
import { CheckCircle2 } from 'lucide-react';
import { useTheme } from '../utils/theme';

export const AboutSection: React.FC = () => {
  const { theme } = useTheme();
  return (
    <section id="about" className="relative py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="About Me"
          subtitle="Get to know the person behind the code"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Main about content */}
          <motion.div
            variants={fadeInUp}
            custom={0}
            className="lg:col-span-2"
          >
            <GlassCard className="p-8 md:p-10">
              <p className={`text-lg leading-relaxed mb-8 ${theme === 'light' ? 'text-gray-700' : 'text-white/80'
                }`}>
                {portfolioData.about.summary}
              </p>

              <div className="space-y-4">
                {portfolioData.about.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    custom={index + 1}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className={`w-6 h-6 flex-shrink-0 mt-0.5 ${theme === 'light' ? 'text-emerald-500' : 'text-emerald-400'
                      }`} />
                    <span className={`text-base ${theme === 'light' ? 'text-gray-700' : 'text-white/80'
                      }`}>{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Stats cards */}
          <motion.div
            variants={fadeInUp}
            custom={1}
            className="flex flex-col gap-8"
          >
            {[
              { label: 'Years Experience', value: '6+' },
              { label: 'Projects Delivered', value: '20+' },
              { label: 'Team Members Mentored', value: '5+' },
            ].map((stat, index) => (
              <GlassCard key={index} className="text-center p-6" hover={false}>
                <div className={`text-3xl font-bold mb-2 ${theme === 'light' ? 'text-blue-600' : 'text-white'
                  }`}>{stat.value}</div>
                <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-white/60'
                  }`}>{stat.label}</p>
              </GlassCard>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard, SectionTitle } from '../components';
import { fadeInUp, containerVariants } from '../utils/animations';
import { portfolioData } from '../data/portfolio';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../utils/theme';

export const ExperienceSection: React.FC = () => {
  const { theme } = useTheme();
  return (
    <section id="experience" className="relative py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey and key achievements"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {portfolioData.experience.map((job, index) => (
            <motion.div
              key={job.id}
              variants={fadeInUp}
              custom={index}
              className="relative"
            >
              {/* Timeline line */}
              {index !== portfolioData.experience.length - 1 && (
                <div className={`absolute left-[15px] top-20 bottom-0 w-0.5 bg-gradient-to-b ${
                  theme === 'light' ? 'from-blue-300 to-transparent' : 'from-white/30 to-transparent'
                }`} />
              )}

              <div className="flex gap-6">
                {/* Timeline dot */}
                <div className="relative flex flex-col items-center mt-1">
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 shadow-lg shadow-purple-500/50 flex items-center justify-center"
                  >
                    <ArrowRight size={16} className={`${theme === 'light' ? 'text-gray-900' : 'text-white'}`} />
                  </motion.div>
                </div>

                {/* Content */}
                <GlassCard className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className={`text-2xl font-bold mb-1 ${
                        theme === 'light' ? 'text-gray-900' : 'text-white'
                      }`}>{job.role}</h3>
                      <p className={`font-medium ${
                        theme === 'light' ? 'text-blue-600' : 'text-blue-400'
                      }`}>{job.company}</p>
                    </div>
                    <span className={`text-sm font-light mt-2 md:mt-0 md:whitespace-nowrap ${
                      theme === 'light' ? 'text-gray-600' : 'text-white/60'
                    }`}>
                      {job.period}
                    </span>
                  </div>

                  <p className={`mb-4 ${
                    theme === 'light' ? 'text-gray-700' : 'text-white/70'
                  }`}>{job.description}</p>

                  <div className="space-y-2">
                    <p className={`text-sm font-semibold ${
                      theme === 'light' ? 'text-gray-600' : 'text-white/60'
                    }`}>Key Achievements:</p>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * achIndex }}
                          className={`text-sm flex items-start gap-2 ${
                            theme === 'light' ? 'text-gray-700' : 'text-white/70'
                          }`}
                        >
                          <span className={theme === 'light' ? 'text-purple-500 mt-1' : 'text-purple-400 mt-1'}>▸</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

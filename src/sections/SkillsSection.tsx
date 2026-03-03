import React from 'react';
import { motion } from 'framer-motion';
import { Badge, SectionTitle, GlassCard } from '../components';
import { containerVariants, fadeInUp } from '../utils/animations';
import { portfolioData } from '../data/portfolio';
import { useTheme } from '../utils/theme';

type SkillCategory = keyof typeof portfolioData.skills;

const skillCategories: Array<{ label: string; key: SkillCategory }> = [
  { label: 'Frontend', key: 'frontend' },
  { label: 'Backend', key: 'backend' },
  { label: 'Cloud & DevOps', key: 'cloudDevOps' },
  { label: 'Databases', key: 'databases' },
];

export const SkillsSection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="skills" className="relative py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Skills" subtitle="Technologies and tools I work with" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.key}
              variants={fadeInUp}
              custom={categoryIndex}
            >
              <GlassCard className="h-full">
                <h3 className={`text-xl font-bold mb-4 ${
                  theme === 'light' ? 'text-gray-900' : 'text-white'
                }`}>{category.label}</h3>
                <div className="flex flex-wrap gap-3">
                  {portfolioData.skills[category.key].map((skill, skillIndex) => (
                    <Badge key={skill} variant="glow" index={skillIndex}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency statement */}
        <motion.div
          variants={fadeInUp}
          custom={5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className={`${theme === 'light' ? 'text-gray-600' : 'text-white/60'} text-lg max-w-2xl mx-auto`}>
            I'm always learning and staying up-to-date with the latest technologies and best practices in web development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

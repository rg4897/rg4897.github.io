import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard, SectionTitle, Badge } from '../components';
import { containerVariants, fadeInUp, slideInRight } from '../utils/animations';
import { portfolioData } from '../data/portfolio';
// import { Github, ExternalLink } from 'lucide-react';
import { useTheme } from '../utils/theme';

export const ProjectsSection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="projects" className="relative py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Featured Projects"
          subtitle="Showcasing my best work and technical expertise"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={index % 2 === 0 ? fadeInUp : slideInRight}
              custom={index}
            >
              <GlassCard className="h-full flex flex-col hover overflow-hidden">
                {/* Project image */}
                <div className="relative h-48 mb-6 -mx-6 -mt-6 overflow-hidden rounded-t-3xl bg-white flex items-center justify-center p-6">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className={`text-2xl font-bold mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'
                    }`}>{project.title}</h3>
                  <p className={`text-sm mb-4 line-clamp-2 ${theme === 'light' ? 'text-gray-700' : 'text-white/70'
                    }`}>{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge key={tag} variant="outlined" index={tagIndex}>
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Metrics */}
                  {/* <div className="grid grid-cols-3 gap-2 mb-6 p-4 bg-white/5 rounded-xl backdrop-blur-lg border border-white/10">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <p className="text-xs text-white/60 capitalize">{key}</p>
                        <p className="text-sm font-bold text-white">{value}</p>
                      </div>
                    ))}
                  </div> */}

                  {/* Buttons */}
                  {/* <div className="flex gap-3 mt-auto">
                    <Button
                      variant="secondary"
                      href={project.github}
                      className="flex-1"
                      icon={<Github size={18} />}
                    >
                      Code
                    </Button>
                    <Button
                      variant="primary"
                      //   href={project.demo}
                      className="flex-1"
                      icon={<ExternalLink size={18} />}
                    >
                      Demo
                    </Button>
                  </div> */}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

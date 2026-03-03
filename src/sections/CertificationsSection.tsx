import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard, SectionTitle } from '../components';
import { containerVariants, fadeInUp } from '../utils/animations';
import { portfolioData } from '../data/portfolio';
import { Award } from 'lucide-react';
import { useTheme } from '../utils/theme';

export const CertificationsSection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="certifications" className="relative py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="Certifications"
          subtitle="Professional qualifications and achievements"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {portfolioData.certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={fadeInUp}
              custom={index}
            >
              <GlassCard className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-500/20 border border-amber-400/30 flex-shrink-0">
                    <Award size={24} className="text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold mb-1 ${theme === 'light' ? 'text-gray-900' : 'text-white'
                      }`}>{cert.title}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      {cert.issuerLogo && (
                        <div className="bg-white p-0.5 rounded-sm flex items-center justify-center shadow-sm">
                          <img src={cert.issuerLogo} alt={cert.issuer} className="h-3 sm:h-4 w-auto object-contain" />
                        </div>
                      )}
                      <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-white/60'
                        }`}>{cert.issuer}</p>
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t"
                      style={{ borderColor: theme === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)' }}>
                      <span className={`text-xs ${theme === 'light' ? 'text-gray-500' : 'text-white/50'
                        }`}>Credential ID: {cert.credentialId}</span>
                      <span className={`text-sm ${theme === 'light' ? 'text-gray-400' : 'text-white/40'
                        }`}>{cert.date}</span>
                    </div>
                  </div>
                </div>
                {cert.image && (
                  <div className="rounded-xl border border-white/10 overflow-hidden shadow-sm flex items-center justify-center bg-black/5 p-2">
                    <img src={cert.image} alt={`${cert.title} Certificate`} className="w-full h-auto max-h-[400px] object-contain" />
                  </div>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

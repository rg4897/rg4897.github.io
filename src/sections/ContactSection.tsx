import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard, SectionTitle, Button } from '../components';
import { fadeInUp, containerVariants, floatingAnimation } from '../utils/animations';
import { portfolioData } from '../data/portfolio';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { useTheme } from '../utils/theme';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactSection: React.FC = () => {
  const { theme } = useTheme();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Create FormData for Google Forms
      const formBody = new URLSearchParams();
      formBody.append(portfolioData.contact.fields.name, formData.name);
      formBody.append(portfolioData.contact.fields.email, formData.email);
      formBody.append(portfolioData.contact.fields.subject, formData.subject);
      formBody.append(portfolioData.contact.fields.message, formData.message);

      await fetch(portfolioData.contact.formAction, {
        method: 'POST',
        body: formBody,
        mode: 'no-cors', // Google Forms requires no-cors
      });

      // Google Forms with no-cors doesn't return useful info, so we assume success
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const inputClassName = `w-full px-5 py-4 rounded-xl backdrop-blur-md border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/30 ${theme === 'light'
    ? 'bg-white/60 border-gray-200/60 text-gray-900 placeholder-gray-400 focus:bg-white focus:border-blue-400 shadow-sm shadow-blue-900/5'
    : 'bg-white/5 border-white/10 text-white placeholder-white/40 focus:bg-white/10 focus:border-blue-500/50'
    }`;

  return (
    <section id="contact" className="relative py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="Let's Connect"
          subtitle="I'm always interested in hearing about new projects and opportunities"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Contact info */}
          <motion.div variants={fadeInUp} custom={0} className="lg:col-span-1 space-y-4">
            {[
              {
                icon: Mail,
                label: 'Email',
                value: portfolioData.socialLinks.email,
                href: `mailto:${portfolioData.socialLinks.email}`,
              },
              {
                icon: Phone,
                label: 'LinkedIn',
                value: 'Connect with me',
                href: portfolioData.socialLinks.linkedin,
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-6" hover={true}>
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 flex flex-shrink-0 items-center justify-center shadow-inner">
                      <item.icon size={26} className={theme === 'light' ? 'text-blue-600' : 'text-blue-400'} />
                    </div>
                    <div className="overflow-hidden">
                      <p className={`text-sm mb-1 font-medium tracking-wide uppercase ${theme === 'light' ? 'text-gray-500' : 'text-white/50'
                        }`}>{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-lg font-bold truncate block transition-colors ${theme === 'light'
                            ? 'text-gray-900 hover:text-blue-600'
                            : 'text-white hover:text-blue-400'
                            }`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className={`text-lg font-bold truncate block ${theme === 'light' ? 'text-gray-900' : 'text-white'
                          }`}>{item.value}</p>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div variants={fadeInUp} custom={1} className="lg:col-span-2">
            <GlassCard className="p-4 md:p-6">
              {success ? (
                <motion.div
                  animate={floatingAnimation.animate}
                  initial={floatingAnimation.initial}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 100 }}
                    className="mb-4"
                  >
                    <div className="p-4 rounded-full bg-gradient-to-br from-emerald-400/20 to-green-500/20 border border-emerald-400/30">
                      <CheckCircle size={48} className="text-emerald-400" />
                    </div>
                  </motion.div>
                  <h3 className={`text-2xl font-bold mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'
                    }`}>Message Sent! 🎉</h3>
                  <p className={`text-center ${theme === 'light' ? 'text-gray-700' : 'text-white/60'
                    }`}>
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className={inputClassName}
                      />
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                        className={inputClassName}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  {/* <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                      className={inputClassName}
                    />
                  </div> */}

                  {/* Message */}
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows={5}
                      required
                      className={`${inputClassName} resize-none`}
                    />
                  </div>

                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm"
                    >
                      {error}
                    </motion.p>
                  )}

                  <Button
                    variant="primary"
                    onClick={() => { }} // Form submission handled by form's onSubmit
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

import { useEffect } from 'react';
import {
  HeroSection,
  AboutSection,
  ExperienceSection,
  SkillsSection,
  ProjectsSection,
  CertificationsSection,
  ContactSection,
  Footer,
} from './sections';
import { FloatingOrb, Header } from './components';
import { ThemeProvider, useTheme } from './utils/theme';

function AppContent() {
  const { theme } = useTheme();

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className={`relative min-h-screen overflow-x-hidden transition-colors duration-300 ${theme === 'light'
        ? 'bg-gradient-to-br from-white via-blue-50 to-white text-gray-900'
        : 'bg-gradient-to-br from-slate-900 via-black to-black text-white'
      }`}>
      {/* Animated background gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Primary gradient background */}
        <div className={`absolute inset-0 ${theme === 'light'
            ? 'bg-gradient-to-br from-white via-blue-50 to-white'
            : 'bg-gradient-to-br from-slate-900 via-black to-black'
          }`} />

        {/* Animated orbs */}
        {theme === 'dark' && (
          <>
            <FloatingOrb
              color="from-blue-600/30 to-cyan-600/10"
              size={400}
              top="-100"
              left="-100"
              duration={12}
              opacity={0.5}
            />
            <FloatingOrb
              color="from-purple-600/20 to-pink-600/10"
              size={350}
              top="20%"
              right="-50"
              duration={14}
              opacity={0.4}
            />
            <FloatingOrb
              color="from-indigo-600/20 to-blue-600/10"
              size={300}
              bottom="-150"
              left="10%"
              duration={10}
              opacity={0.3}
            />
          </>
        )}
        {theme === 'light' && (
          <>
            <FloatingOrb
              color="from-blue-400/20 to-cyan-400/10"
              size={400}
              top="-100"
              left="-100"
              duration={12}
              opacity={0.3}
            />
            <FloatingOrb
              color="from-purple-400/15 to-pink-400/10"
              size={350}
              top="20%"
              right="-50"
              duration={14}
              opacity={0.2}
            />
            <FloatingOrb
              color="from-indigo-400/15 to-blue-400/10"
              size={300}
              bottom="-150"
              left="10%"
              duration={10}
              opacity={0.2}
            />
          </>
        )}
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

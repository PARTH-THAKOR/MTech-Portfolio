import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import ProfileLinks from './components/ProfileLinks';
import MoreAboutMe from './components/MoreAboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedGridBackground from './components/AnimatedGridBackground';
import IdCardModal from './components/IdCardModal';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isIdCardModalOpen, setIsIdCardModalOpen] = useState(false);

  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'projects', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160; // Offset for sticky navbar

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call to set active section on load
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen relative font-sans selection:bg-white/10 selection:text-white overflow-hidden">
      {/* Global Grid Pattern Background */}
      <AnimatedGridBackground />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-slate-900/5 blur-[150px] pointer-events-none" />

      {/* Navigation bar */}
      <Header activeSection={activeSection} />

      {/* Page Body */}
      <main>
        <Hero onOpenIdCard={() => setIsIdCardModalOpen(true)} />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Achievements />
        <ProfileLinks />
        <MoreAboutMe />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive 3D ID Card Dialog Popup */}
      <IdCardModal isOpen={isIdCardModalOpen} onClose={() => setIsIdCardModalOpen(false)} />
    </div>
  );
}

export default App;

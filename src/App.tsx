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
import Extracurriculars from './components/Extracurriculars';
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
      const scrollPosition = window.scrollY + 160; 

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

    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen relative font-sans selection:bg-white/10 selection:text-white overflow-hidden">

      <AnimatedGridBackground />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-slate-900/5 blur-[150px] pointer-events-none" />

      <Header activeSection={activeSection} />

      <main>
        <Hero onOpenIdCard={() => setIsIdCardModalOpen(true)} />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Achievements />
        <ProfileLinks />
        <Extracurriculars />
        <MoreAboutMe />
        <Contact />
      </main>

      <Footer />

      <IdCardModal isOpen={isIdCardModalOpen} onClose={() => setIsIdCardModalOpen(false)} />
    </div>
  );
}

export default App;

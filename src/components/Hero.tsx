import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenIdCard: () => void;
}

export default function Hero({ onOpenIdCard }: HeroProps) {
  const roles = [
    'M.Tech CSE @ IIT Bombay',
    'Research Assistant',
    'Backend Developer',
    'Microservices Developer',
    'Applied Machine Learning',
    'Technical Writer @ Medium',
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTransitioning(false);
      }, 350);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
    e.preventDefault();
    const target = document.querySelector(selector);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Dynamic Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 rounded-full bg-slate-900/10 blur-[100px] animate-float-1 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 md:w-96 h-72 md:h-96 rounded-full bg-slate-900/10 blur-[100px] animate-float-2 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-slate-900/5 blur-[150px] animate-pulse-slow pointer-events-none" />

      {/* Grid Pattern overlay removed in favor of global AnimatedGridBackground */}

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
        {/* Intro Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300 mb-8">
          <span className="font-semibold tracking-wide uppercase">RESEARCH × ENGINEERING × WRITING</span>
        </div>

        {/* Big Title */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight leading-none mb-6">
          <span className="text-slate-400 font-light block mb-2 text-2xl sm:text-4xl md:text-5xl">HI THERE, I'm</span>
          <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            Parthsinh Thakor
          </span>
        </h1>

        {/* Typewriter Subtitle */}
        <div className="text-lg sm:text-2xl md:text-3xl font-light tracking-wide mb-12 flex items-center justify-center h-16 sm:h-12 md:h-10">
          <span className={`text-slate-400 uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.08)] relative ${isTransitioning ? 'animate-fade-out' : 'animate-fade-in'
            }`}>
            {roles[roleIndex]}
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none">
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, '#about')}
            className="w-44 sm:w-48 px-6 py-3 sm:py-3.5 rounded-xl text-sm font-semibold uppercase tracking-wider text-slate-950 bg-white hover:bg-slate-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-white/5 flex items-center justify-center gap-2"
          >
            <span>Explore</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={onOpenIdCard}
            className="w-44 sm:w-48 px-6 py-3 sm:py-3.5 rounded-xl text-sm font-semibold uppercase tracking-wider text-white bg-slate-950/80 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>Current ID</span>
          </button>
        </div>


      </div>
    </section>
  );
}

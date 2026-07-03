import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80; // height of header
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'glass-header py-4 shadow-xl border-slate-800' : 'bg-transparent py-6 border-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-end md:justify-between items-center">

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center p-1.5 space-x-1 bg-slate-950/45 backdrop-blur-md border border-slate-800/60 rounded-full shadow-inner shadow-white/5">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 outline-none select-none ${
                  isActive
                    ? 'text-white bg-slate-800 border border-slate-700 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 border border-transparent'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Social Icons & Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://github.com/PARTH-THAKOR"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800 rounded-lg transition-all"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/parthsinh-thakor"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800 rounded-lg transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-white hover:bg-slate-200 rounded-lg transition-all duration-300 shadow-md active:scale-95"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center space-x-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-white rounded-md shadow-md"
          >
            Contact
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800/80 rounded-lg transition-all"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div className={`fixed inset-0 top-[72px] z-40 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 transition-all duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
        <nav className="flex flex-col p-8 space-y-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-xl font-semibold tracking-wide border-b border-slate-800 pb-3 transition-colors ${isActive ? 'text-white' : 'text-slate-400'
                  }`}
              >
                {item.name}
              </a>
            );
          })}

          <div className="flex space-x-6 pt-6">
            <a
              href="https://github.com/PARTH-THAKOR"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800 rounded-xl"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/parthsinh-thakor"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800 rounded-xl"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

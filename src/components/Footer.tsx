import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative py-12 border-t border-slate-800/60 bg-slate-950/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Brand & Copyright */}
        <div className="text-left">
          <p className="text-sm font-bold tracking-tight text-white">
            Parthsinh Thakor
          </p>
          <p className="text-xs text-slate-500 mt-1">
            © {new Date().getFullYear()} Parthsinh Thakor. All rights reserved.
          </p>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-xl bg-slate-900 hover:bg-slate-850 hover:text-white text-slate-400 border border-slate-800 transition-all hover:-translate-y-1 active:scale-95 group"
          title="Back to Top"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
        </button>

      </div>
    </footer>
  );
}

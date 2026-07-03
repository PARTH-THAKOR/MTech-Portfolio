import { Linkedin } from 'lucide-react';

export default function MoreAboutMe() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/20 border-t border-slate-900">
      {/* Background glow blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-slate-900/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Want to know more about me?
        </h2>
        <p className="text-slate-400 text-base sm:text-lg mt-4 max-w-xl mx-auto text-center leading-relaxed">
          Let's connect on LinkedIn to dive deeper into my professional journey, research at IIT Bombay, software engineering projects, or to discuss collaborative backend and AI/ML ideas.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="https://linkedin.com/in/parthsinh-thakor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-slate-950 hover:bg-slate-200 font-bold rounded-xl transition-all duration-300 shadow-lg shadow-white/5 group"
          >
            <Linkedin className="w-5 h-5 text-slate-950" />
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}

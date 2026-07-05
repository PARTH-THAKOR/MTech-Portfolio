import { GraduationCap, Calendar, Landmark } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-slate-900/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Education
          </h2>
        </div>

        {/* Bento Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* M.Tech Card - Prominent (span 7) */}
          <div className="lg:col-span-7 p-8 rounded-3xl glass glow-card border border-slate-800 flex flex-col justify-between group relative overflow-hidden h-full">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="p-3.5 rounded-2xl bg-white text-slate-950 shadow-lg shadow-white/5">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    2026 – Present
                  </span>
                </div>
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Postgraduate Degree</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-4 group-hover:text-slate-200 transition-colors">
                M.Tech in Computer Science & Engineering
              </h3>

              <div className="flex items-start gap-3 text-slate-300 mb-6">
                <Landmark className="w-5 h-5 mt-1 text-slate-400 shrink-0" />
                <div>
                  <p className="text-lg sm:text-xl font-bold text-white">Indian Institute of Technology, Bombay</p>
                  <p className="text-sm text-slate-400 mt-1">Research Assistant, Web Team</p>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 mt-8 border-t border-slate-800/60">
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
                Engaged in developing and optimizing institute-scale digital systems while pursuing advanced coursework in computer science and engineering.
              </p>
            </div>
          </div>

          {/* B.E. Card (span 5) */}
          <div className="lg:col-span-5 p-8 rounded-3xl glass glow-card border border-slate-800 flex flex-col justify-between group relative overflow-hidden h-full">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-400">
                  <Calendar className="w-3.5 h-3.5" />
                  2022 – 2026
                </span>
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Undergraduate Degree</span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-2 mb-4 group-hover:text-slate-200 transition-colors">
                B.E. in Information Technology
              </h3>

              <div className="flex items-start gap-3 text-slate-300 mb-6">
                <Landmark className="w-5 h-5 mt-1 text-slate-400 shrink-0" />
                <div>
                  <p className="text-base sm:text-lg font-bold text-white">Gujarat Technological University, Ahmedabad</p>
                  <p className="text-sm text-slate-400 mt-1">Government Engineering College, Gandhinagar</p>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 mt-8 border-t border-slate-800/60 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/60 border border-slate-800/80 text-xs font-bold text-white">
                CGPA: 8.84/10
              </span>
              <span className="text-xs text-slate-500">First Class with Distinction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

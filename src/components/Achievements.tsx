import { Trophy, Award, Medal, Sparkles } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      badge: 'AIR 342',
      title: 'GATE 2026',
      subtitle: 'Computer Science & IT',
      description: 'Secured All India Rank 342 in GATE CS, earning admission to M.Tech at IIT Bombay.',
      tags: ['GATE 2026', 'Score 804'],
      icon: <Trophy className="w-5 h-5 text-white" />
    },
    {
      badge: 'AIR 724',
      title: 'GATE 2025',
      subtitle: 'Computer Science & IT',
      description: 'Secured All India Rank 724 in GATE CS in the 3rd year of engineering.',
      tags: ['GATE 2025', 'AIR 724'],
      icon: <Award className="w-5 h-5 text-slate-300" />
    },
    {
      badge: 'Rank 1',
      title: 'Academic Excellence',
      subtitle: 'B.E. Semester 1 (IT)',
      description: 'Secured Rank 1 with 9.53 SPI in B.E. Information Technology at GEC Gandhinagar.',
      tags: ['GEC Gandhinagar', 'Rank 1'],
      icon: <Medal className="w-5 h-5 text-white" />
    },
    {
      badge: 'Rank 1',
      title: 'Academic Excellence',
      subtitle: 'Higher Secondary Exam',
      description: 'Secured Rank 1 in the Higher Secondary Board Examination at FN School.',
      tags: ['Rank 1', 'FN School'],
      icon: <Sparkles className="w-5 h-5 text-slate-300" />
    }
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-slate-900/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="mb-20 text-center lg:text-left">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Achievements
          </h2>
        </div>

        {/* Timeline Track */}
        <div className="relative">
          {/* Desktop Connecting horizontal dashed line */}
          <div className="hidden lg:block absolute top-7 left-8 right-8 h-[1px] border-t border-dashed border-slate-800 z-0" />
          
          {/* Mobile/Tablet Connecting vertical dashed line */}
          <div className="block lg:hidden absolute top-6 bottom-6 left-6 w-[1px] border-l border-dashed border-slate-800 z-0" />

          {/* Steps flex container */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6 relative z-10">
            {achievements.map((item, idx) => {
              return (
                <div key={idx} className="flex lg:flex-col gap-6 lg:gap-0 relative group h-full justify-between">
                  {/* Timeline Node Point */}
                  <div className="flex lg:justify-start items-center mb-6 shrink-0 relative">
                    <div className="w-12 h-12 rounded-full bg-slate-950 border border-slate-800 text-slate-400 flex items-center justify-center font-bold ring-4 ring-slate-900 relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:border-slate-650 group-hover:text-white">
                      {item.icon}
                    </div>
                  </div>

                  {/* Card Container wrapper for Text Content Block */}
                  <div className="flex-grow flex flex-col justify-between p-6 rounded-2xl bg-slate-950/55 backdrop-blur-xl glow-card border border-slate-800 relative z-10 transition-all duration-300">
                    <div className="space-y-3 mb-6">
                      <div>
                        <h3 className="text-lg font-bold text-white transition-colors">
                          {item.title}
                        </h3>
                        <h4 className="text-sm font-semibold text-slate-300 mt-0.5">
                          {item.badge}
                        </h4>
                        <p className="text-xs text-slate-400 mt-1">
                          {item.subtitle}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed text-justify max-w-sm lg:max-w-none pr-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-900/40">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-extrabold px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-slate-400 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

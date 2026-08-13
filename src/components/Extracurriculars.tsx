import { Trophy, ArrowUpRight } from 'lucide-react';

export default function Extracurriculars() {
  return (
    <section id="extracurriculars" className="py-24 relative overflow-hidden bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Beyond the Code
          </h2>
        </div>

        <div className="w-full">
          <a
            href="https://chess.com/member/apexcoder"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 sm:p-8 rounded-2xl glass glow-card border border-slate-800 hover:border-slate-700 transition-all duration-300 block group relative overflow-hidden w-full"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 relative z-10 pr-6 sm:pr-12">
              <div className="p-3 sm:p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 group-hover:text-white transition-colors flex-shrink-0 self-start sm:self-center">
                <Trophy className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-slate-300 transition-colors">
                  Chess Player
                </h3>
                <span className="text-sm font-semibold text-slate-500 mt-1 block tracking-wide">
                  @apexcoder on Chess.com
                </span>
                <p className="text-slate-400 mt-3 text-sm sm:text-base leading-relaxed max-w-4xl">
                  Passionate about the strategic depth of the game. I am a 1600+ rated player in rapid chess, constantly analyzing positions, studying tactics, and applying structured problem-solving both on and off the board.
                </p>
              </div>
            </div>

            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 text-slate-600 group-hover:text-white transition-colors">
              <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

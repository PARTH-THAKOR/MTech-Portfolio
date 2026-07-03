import { Github, Linkedin, BookOpen, ExternalLink } from 'lucide-react';

const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.411l-9.712 9.712a1.35 1.35 0 0 0-.006 1.913l7.087 7.087a1.35 1.35 0 0 0 1.913-.006l9.712-9.712a1.35 1.35 0 0 0-.006-1.913l-7.087-7.087A1.374 1.374 0 0 0 13.483 0zm.006 3.03l5.526 5.526-8.736 8.736-5.526-5.526 8.736-8.736z" />
  </svg>
);

export default function ProfileLinks() {
  const profiles = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5 text-white" />,
      url: 'https://github.com/PARTH-THAKOR',
      username: 'PARTH-THAKOR',
      description: 'Open-source, microservices systems, scalable backend repositories.'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5 text-white" />,
      url: 'https://linkedin.com/in/parthsinh-thakor',
      username: 'parthsinh-thakor',
      description: 'Professional networking, updates, and career connections.'
    },
    {
      name: 'LeetCode',
      icon: <LeetCodeIcon />,
      url: 'https://leetcode.com/u/CODE_PARTHSINH',
      username: 'CODE_PARTHSINH',
      description: 'Competitive programming, algorithms, and data structures.'
    },
    {
      name: 'Medium',
      icon: <BookOpen className="w-5 h-5 text-white" />,
      url: 'https://medium.com/@myself.parthsinh',
      username: 'myself.parthsinh',
      description: 'In-depth engineering articles, Spring Boot, and design guides.'
    }
  ];

  return (
    <section id="profiles" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Professional Profiles
          </h2>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl glass glow-card border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group h-full relative"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 group-hover:text-white transition-colors">
                    {profile.icon}
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </div>

                {/* Info */}
                <h3 className="text-lg font-bold text-white group-hover:text-slate-300 transition-colors">
                  {profile.name}
                </h3>
                <span className="text-[11px] font-semibold text-slate-500 block mt-1 tracking-wide">
                  {profile.username}
                </span>
                <p className="text-xs text-slate-400 mt-3 leading-relaxed text-justify">
                  {profile.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

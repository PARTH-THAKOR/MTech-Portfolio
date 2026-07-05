import { Github, Cpu, LayoutGrid, Leaf, ShieldAlert } from 'lucide-react';

export default function Projects() {
  const featuredProject = {
    title: 'Rollout.io',
    subtitle: 'Remote Configuration Platform',
    description: 'Production-grade remote configuration platform built using Spring Boot microservices. Features percentage rollouts, user targeting, JSON configuration, SDK integration, and centralized feature management for scalable software delivery.',
    tech: ['Spring Boot', 'Java', 'Microservices', 'React', 'MongoDB', 'Redis', 'RabbitMQ', 'GCP', 'Docker'],
    github: 'https://github.com/TechParaglide/Rollout.io',
    demo: '#',
    icon: <ShieldAlert className="w-6 h-6 text-white" />
  };

  const otherProjects = [
    {
      title: 'Crop Insights Dashboard',
      subtitle: 'Crop Performance & Profitability Insights',
      description: 'An interactive Tableau dashboard visualizing key agricultural metrics including profit, yield, revenue, and expenses. Supports data-driven farming decisions through clear regional and seasonal performance trends.',
      tech: ['Tableau', 'Canva', 'Data Visualization', 'Data Analysis'],
      github: 'https://github.com/PARTH-THAKOR/Crop-Dashboard',
      demo: '#',
      icon: <LayoutGrid className="w-6 h-6 text-slate-300" />
    },
    {
      title: 'KhetExpert',
      subtitle: 'Consulted Farming',
      description: 'A farmer-focused mobile app utilizing the OpenAI API for plant disease identification and AI crop consulting. Features expert video appointments and multi-language support to empower agricultural communities.',
      tech: ['Flutter', 'Spring Boot', 'OpenAI API', 'Firebase'],
      github: 'https://github.com/PARTH-THAKOR/KhetExpert',
      demo: '#',
      icon: <Leaf className="w-6 h-6 text-white" />
    },
    {
      title: 'ChatOFi',
      subtitle: 'Your Lightweight Chat App',
      description: 'A real-time chatting application developed with Flutter and Firebase. Features end-to-end messaging, voice/video calling, and an integrated OpenAI chatbot for secure, responsive, and intelligent communication.',
      tech: ['Flutter', 'Firebase', 'OpenAI API', 'WebRTC'],
      github: 'https://github.com/PARTH-THAKOR/ChatOFi',
      demo: '#',
      icon: <Cpu className="w-6 h-6 text-slate-300" />
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-slate-900/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Research Projects & Engineering Work
          </h2>
        </div>

        {/* Featured Project Card (Rollout.io) */}
        <div className="p-8 md:p-12 rounded-3xl glass glow-card border border-slate-800 flex flex-col lg:flex-row gap-12 items-center mb-12 relative overflow-hidden group">
          {/* Main Info (Left) */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white">
                Featured Highlight
              </span>
              
              <div className="flex space-x-2">
                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-850 border border-slate-800/80 rounded-lg transition-all"
                  title="View GitHub Repository"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                {featuredProject.subtitle}
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 transition-colors">
                {featuredProject.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-4 text-justify">
                {featuredProject.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
              {featuredProject.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-slate-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Console Mockup (Right) */}
          <div className="w-full lg:w-[380px] shrink-0 p-5 rounded-2xl bg-slate-950/80 border border-slate-850 font-mono text-xs select-none pointer-events-none shadow-2xl relative overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-850/60">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
              </div>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Targeting Engine</span>
            </div>
            
            {/* Feature Flag Row 1 */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-850">
                <div>
                  <span className="text-slate-400 font-bold">search_v2_enabled</span>
                  <span className="block text-[9px] text-slate-500 mt-0.5">Rule: User Segment</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-white uppercase px-1.5 py-0.5 rounded bg-white/10 border border-white/20">ACTIVE</span>
                  <div className="w-8 h-4 rounded-full bg-white relative transition-colors">
                    <div className="absolute right-0.5 top-0.5 w-3 h-3 rounded-full bg-slate-950" />
                  </div>
                </div>
              </div>

              {/* Feature Flag Row 2 - Percentage Rollout */}
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-850 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-slate-400 font-bold">recommendation_engine</span>
                    <span className="block text-[9px] text-slate-500 mt-0.5">Algorithm: Collaborative</span>
                  </div>
                  <span className="text-[10px] font-extrabold text-white">45% ROLLOUT</span>
                </div>
                {/* Progress Bar Visual */}
                <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                  <div className="w-[45%] h-full bg-white rounded-full" />
                </div>
              </div>

              {/* Live Console Output Simulation */}
              <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-850/50 text-[10px] text-slate-500 space-y-1">
                <span className="block text-slate-400 font-bold mb-1">Targeting Rules JSON:</span>
                <p className="text-slate-500 font-semibold">{`{`}</p>
                <p className="text-slate-500 pl-3 font-semibold">{`"segment": "beta-testers",`}</p>
                <p className="text-slate-400 pl-3 font-bold">{`"enabled": true`}</p>
                <p className="text-slate-500 font-semibold">{`}`}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="p-6 rounded-2xl glass glow-card border border-slate-800 flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    {project.icon}
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-850 border border-slate-800/80 rounded-lg transition-all"
                      title="View GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Info */}
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  {project.subtitle}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-slate-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-3 mb-6 text-justify">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

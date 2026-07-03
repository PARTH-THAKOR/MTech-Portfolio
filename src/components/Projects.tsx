import { Github, ExternalLink, Cpu, LayoutGrid, Leaf, ShieldAlert } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Rollout.io',
      subtitle: 'Remote Configuration Platform',
      description: 'A microservices-based platform for real-time feature flag management. Enables developers to dynamically control application behavior, execute gradual rollouts, and target users efficiently with high scalability and security.',
      tech: ['Spring Boot', 'Java', 'Microservices', 'MongoDB', 'Docker'],
      github: 'https://github.com/TechParaglide/Rollout.io',
      demo: '#',
      icon: <ShieldAlert className="w-6 h-6 text-white" />
    },
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-8 rounded-2xl glass glow-card border border-slate-800 flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
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
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-850 border border-slate-800/80 rounded-lg transition-all"
                        title="View Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Info */}
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  {project.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 group-hover:text-slate-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mt-4 mb-6 text-justify">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-slate-400"
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

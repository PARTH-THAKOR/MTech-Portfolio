import { Award, GraduationCap, Server, Monitor, Shield, Database } from 'lucide-react';

export default function About() {
  const skillCategories = [
    {
      title: 'Research Interests',
      icon: <Shield className="w-5 h-5 text-white" />,
      skills: ['Artificial Intelligence', 'Machine Learning', 'Backend Engineering', 'Distributed Systems', 'Large Language Models (LLMs)']
    },
    {
      title: 'Backend & Systems',
      icon: <Server className="w-5 h-5 text-white" />,
      skills: ['Java & Spring Boot', 'Microservices Architecture', 'RESTful APIs', 'Docker & Containerization', 'Message Queues']
    },
    {
      title: 'Mobile & Web',
      icon: <Monitor className="w-5 h-5 text-white" />,
      skills: ['Flutter', 'Dart', 'Kotlin', 'Java', 'React', 'Tailwind CSS']
    },
    {
      title: 'Databases & Cloud',
      icon: <Database className="w-5 h-5 text-slate-300" />,
      skills: ['AWS', 'GCP', 'Redis', 'MongoDB', 'Firebase']
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative gradient lines */}
      <div className="absolute top-1/2 left-0 w-1/4 h-0.5 bg-gradient-to-r from-slate-500/10 to-transparent" />
      <div className="absolute top-1/3 right-0 w-1/4 h-0.5 bg-gradient-to-l from-slate-500/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Academic Research & Systems Engineering
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Bio and Education cards */}
          <div className="lg:col-span-6 space-y-8">
            <p className="text-lg text-slate-300 leading-relaxed text-justify">
              I am an M.Tech CSE student and Research Assistant at IIT Bombay with interests in Artificial Intelligence, Machine Learning, backend engineering, and distributed systems. I enjoy building scalable software, designing production-grade backend architectures, and applying AI to solve real-world problems.
            </p>
            <p className="text-slate-400 leading-relaxed text-justify">
              My work spans machine learning, modern backend development. Alongside research, I build open-source projects and write technical articles on Medium covering software engineering and system design.
            </p>

            {/* Academic Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl glass glow-card border border-slate-800 hover:border-slate-700 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800/80">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-white text-base">Education</h3>
                </div>
                <h4 className="font-semibold text-slate-200 text-sm">M.Tech in Computer Science & Engineering at IIT Bombay</h4>
                <p className="text-xs text-slate-500 mt-1">Research Assistant in the Web Team.</p>
              </div>

              <div className="p-6 rounded-2xl glass glow-card border border-slate-800 hover:border-slate-700 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800/80">
                    <Award className="w-5 h-5 text-slate-300" />
                  </div>
                  <h3 className="font-bold text-white text-base">Academic Excellence</h3>
                </div>
                <h4 className="font-semibold text-slate-200 text-sm">All India Rank 342</h4>
                <p className="text-xs text-slate-500 mt-1">Ranked in the top 0.16% nationally among 211k candidates.</p>
              </div>
            </div>
          </div>

          {/* Right: Technical Skills */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <div key={category.title} className="p-6 rounded-2xl glass glow-card border border-slate-800">
                <div className="flex items-center space-x-3 mb-5">
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-white text-sm tracking-wide">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-900/60 border border-slate-800/80 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-900 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

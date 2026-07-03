import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Research Assistant',
      company: 'IIT Bombay',
      period: 'July 2026 – Present',
      description: [
        'Developing and maintaining institute-scale web applications and internal digital platforms.',
        'Implementing new features, optimizing existing systems, and supporting the maintenance of production web services.',
        'Collaborating with faculty, staff, and the Web Team to enhance platform functionality, reliability, and user experience.'
      ],
      tech: ['Java', 'Python', 'REST APIs', 'MySQL', 'Git', 'Linux']
    },
    {
      role: 'Technical Writer',
      company: 'Medium',
      period: 'April 2026 – Present',
      description: [
        'Publishing in-depth technical articles on backend development, distributed systems, and software engineering.',
        'Writing practical guides on Java, Spring Boot, Flutter, and system design.',
        'Sharing insights on scalable software architecture, clean code, and modern development practices.'
      ],
      tech: ['Java', 'Spring Boot', 'Flutter', 'System Design', 'Backend Development', 'Software Engineering']
    },
    {
      role: 'Java Backend Developer Intern',
      company: 'Mitra Media Labs',
      period: 'January 2026 – April 2026',
      description: [
        'Developed backend services using Java, Spring Boot, and microservices architecture.',
        'Designed and implemented RESTful APIs, business logic, and database integrations.',
        'Collaborated with the development team to build scalable, production-ready backend applications.',
        'Improved application reliability through clean architecture, testing, and API optimization.'
      ],
      tech: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'MySQL', 'Git']
    },
    {
      role: 'Data Analytics Intern',
      company: 'CSRBOX',
      period: 'July 2025',
      description: [
        'Completed a data analytics internship under the GTU Summer Internship Program in collaboration with IBM SkillsBuild.',
        'Analyzed datasets and created interactive dashboards using Tableau for data visualization and insights.',
        'Applied data cleaning, visualization, and analytical techniques through hands-on projects and IBM SkillsBuild coursework.'
      ],
      tech: ['Tableau', 'Data Analysis', 'Data Visualization', 'IBM SkillsBuild']
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Professional Experience
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-10 group">
              {/* Timeline dot */}
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-700 group-hover:border-white transition-colors duration-300" />

              {/* Experience Card */}
              <div className="p-6 md:p-8 rounded-2xl glass glow-card border border-slate-800 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 mt-0.5">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <h4 className="text-lg sm:text-xl font-bold text-white mt-1">
                        {exp.company}
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm font-medium pt-3 md:pt-1">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6 text-slate-400 text-sm md:text-base leading-relaxed list-disc list-inside">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="marker:text-slate-600">{desc}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

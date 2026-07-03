import { Mail, MapPin, ExternalLink } from 'lucide-react';

export default function Contact() {

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Glow Backdrops */}
      <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-slate-900/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-slate-900/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 max-w-xl mx-auto">
            Whether you want to discuss systems research, backend architecture, or potential collaborations, feel free to reach out.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Email Card */}
          <div className="p-8 rounded-2xl glass glow-card border border-slate-800 flex flex-col justify-between group h-full">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-white">
                  <Mail className="w-6 h-6" />
                </div>
                <a
                  href="mailto:work.parthsinh@gmail.com"
                  className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-850 hover:text-white text-slate-400 border border-slate-800 transition-all active:scale-95 flex items-center gap-1.5 text-xs font-semibold"
                  title="Send Mail"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Send Mail</span>
                </a>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Direct Email</h3>
              <p className="text-slate-400 text-sm leading-relaxed text-justify mb-6">
                Have a question, collaboration proposal, or just want to chat? Send me an email directly.
              </p>
            </div>
            <a
              href="mailto:work.parthsinh@gmail.com"
              className="text-lg font-bold text-white hover:text-slate-300 transition-colors inline-flex items-center gap-1.5 self-start group/link"
            >
              <span>work.parthsinh@gmail.com</span>
            </a>
          </div>

          {/* Location Card */}
          <div className="p-8 rounded-2xl glass glow-card border border-slate-800 flex flex-col justify-between group h-full">
            <div>
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-white">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Current Location</h3>
              <p className="text-slate-400 text-sm leading-relaxed text-justify mb-6">
                Currently based in India, researching and developing institute-scale applications at IIT Bombay.
              </p>
            </div>
            <span className="text-lg font-bold text-white inline-flex items-center gap-1.5 self-start">
              Mumbai, India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

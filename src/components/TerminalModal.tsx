import { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  id: string;
  command: string;
  output: React.ReactNode;
  isUser: boolean;
}

export default function TerminalModal({ isOpen, onClose }: TerminalModalProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [isMaximized, setIsMaximized] = useState(false);
  const [fontSize, setFontSize] = useState(14);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const hasInitialized = useRef(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (history.length === 0 && !hasInitialized.current) {
        hasInitialized.current = true;
        setHistory([
          {
            id: 'init',
            command: '',
            output: (
              <div className="text-slate-300">
                Welcome to Parthsinh Thakor's Interactive Terminal v1.0.0
                <br />
                Type <span className="text-white font-bold">'help'</span> to see a list of available commands.
              </div>
            ),
            isUser: false,
          }
        ]);
      }
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, history]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    const newHistory = [...history, { id: Date.now().toString(), command: trimmed, output: null, isUser: true }];
    
    const args = trimmed.split(' ').map(arg => arg.toLowerCase());
    const baseCommand = args[0];
    const flags = args.slice(1);

    let output: React.ReactNode = null;
    const showLink = flags.includes('-lnk');

    switch (baseCommand) {
      case 'help':
        output = (
          <div className="space-y-2">
            <p className="text-slate-200 font-bold mb-2">Available commands & flags:</p>
            <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-x-2 gap-y-4 sm:gap-y-3">
              <div><span className="text-white font-bold">about</span></div>
              <div className="text-slate-400 sm:text-slate-300">Summary about me.<br/><span className="text-slate-500 text-xs">-s, --short: Quick one-liner</span></div>
              
              <div><span className="text-white font-bold">skills</span></div>
              <div className="text-slate-400 sm:text-slate-300">Technical skills.<br/><span className="text-slate-500 text-xs">-t, --tech: Only tech stack</span><br/><span className="text-slate-500 text-xs">-a, --areas: Areas of interest</span></div>
              
              <div><span className="text-white font-bold">education, edu</span></div>
              <div className="text-slate-400 sm:text-slate-300">Academic background.<br/><span className="text-slate-500 text-xs">-c, --current: Only current degree</span></div>
              
              <div><span className="text-white font-bold">experience, exp</span></div>
              <div className="text-slate-400 sm:text-slate-300">Professional experience.<br/><span className="text-slate-500 text-xs">-l, --latest: Only latest role</span></div>
              
              <div><span className="text-white font-bold">projects, proj</span></div>
              <div className="text-slate-400 sm:text-slate-300">Key projects.<br/><span className="text-slate-500 text-xs">-f, --featured: Only featured project</span></div>
              
              <div><span className="text-white font-bold">achievements, ach</span></div>
              <div className="text-slate-400 sm:text-slate-300">Key accomplishments.</div>
              
              <div><span className="text-white font-bold">extracurriculars, extra</span></div>
              <div className="text-slate-400 sm:text-slate-300">Activities outside academics.</div>
              
              <div><span className="text-white font-bold">contact, cnt</span></div>
              <div className="text-slate-400 sm:text-slate-300">Contact details.<br/><span className="text-slate-500 text-xs">-e, --email: Only email</span><br/><span className="text-slate-500 text-xs">-l, --linkedin: Only LinkedIn</span><br/><span className="text-slate-500 text-xs">-g, --github: Only GitHub</span></div>
              
              <div><span className="text-white font-bold">clear</span></div>
              <div className="text-slate-400 sm:text-slate-300">Clear terminal screen.</div>
            </div>
            <p className="text-slate-400 text-xs mt-4">Append -lnk flag to applicable commands to generate clickable URLs.</p>
          </div>
        );
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'about':
        if (flags.includes('-s') || flags.includes('--short')) {
          output = <p>I am an M.Tech CSE student and Research Assistant at IIT Bombay with interests in Computing systems, operating systems, backend engineering, and distributed systems.</p>;
        } else {
          output = (
            <p>
              I am an M.Tech CSE student and Research Assistant at IIT Bombay with interests in Computing systems, operating systems, backend engineering, and distributed systems. I enjoy building scalable high-performance software, designing production-grade backend architectures, and optimizing system bottlenecks.
            </p>
          );
        }
        break;
      case 'skills':
        if (flags.includes('-t') || flags.includes('--tech')) {
          output = <p>Java, Spring Boot, Microservices, React, Tailwind, Flutter, AWS, GCP, Docker, MongoDB.</p>;
        } else if (flags.includes('-a') || flags.includes('--areas')) {
          output = <p>Computing Systems, Operating Systems, Cloud Computing, Distributed Systems.</p>;
        } else {
          output = (
            <div className="space-y-2">
              <p><span className="text-slate-300 font-bold w-32 inline-block">Backend:</span> Java & Spring Boot, Microservices, Docker</p>
              <p><span className="text-slate-300 font-bold w-32 inline-block">Mobile & Web:</span> Flutter, Dart, React, Tailwind CSS</p>
              <p><span className="text-slate-300 font-bold w-32 inline-block">Cloud & DB:</span> AWS, GCP, Redis, MongoDB, Firebase</p>
            </div>
          );
        }
        break;
      case 'education':
      case 'edu':
        if (flags.includes('-c') || flags.includes('--current')) {
          output = (
            <div>
              <p className="font-bold text-white">Indian Institute of Technology, Bombay</p>
              <p>M.Tech in Computer Science and Engineering (July 2026 - Present)</p>
              <p>Research Assistant, Web Team</p>
              {showLink && <a href="https://www.iitb.ac.in/" target="_blank" rel="noreferrer" className="text-slate-400 underline font-semibold hover:text-white transition-colors mt-1 block">Visit IITB</a>}
            </div>
          );
        } else {
          output = (
            <div className="space-y-4">
              <div>
                <p className="font-bold text-white">Indian Institute of Technology, Bombay</p>
                <p>M.Tech in Computer Science and Engineering (2026 - Present)</p>
                {showLink && <a href="https://www.iitb.ac.in/" target="_blank" rel="noreferrer" className="text-slate-400 underline font-semibold hover:text-white transition-colors">IITB Website</a>}
              </div>
              <div>
                <p className="font-bold text-white">Gujarat Technological University, Ahmedabad</p>
                <p>B.E in Information Technology (2022-2026) | CGPA: 8.84</p>
                <p className="text-xs text-slate-400">Government Engineering College, Gandhinagar</p>
                {showLink && <a href="https://www.gtu.ac.in/" target="_blank" rel="noreferrer" className="text-slate-400 underline font-semibold hover:text-white transition-colors">GTU Website</a>}
              </div>
            </div>
          );
        }
        break;
      case 'experience':
      case 'exp':
        if (flags.includes('-l') || flags.includes('--latest')) {
          output = (
            <div>
              <p className="font-bold text-white">Research Assistant @ IIT Bombay</p>
              <p className="text-slate-300">July 2026 - Present</p>
              <p>Developing and maintaining institute-scale web applications.</p>
              {showLink && <a href="https://www.iitb.ac.in" target="_blank" rel="noreferrer" className="text-slate-400 underline font-semibold hover:text-white transition-colors mt-1 block">IIT Bombay</a>}
            </div>
          );
        } else {
          output = (
            <div className="space-y-4">
              <div>
                <p className="font-bold text-white">Research Assistant @ IIT Bombay</p>
                <p className="text-slate-300 mb-1">July 2026 - Present</p>
              </div>
              <div>
                <p className="font-bold text-white">Technical Writer @ Medium</p>
                <p className="text-slate-300 mb-1">April 2026 - Present</p>
              </div>
              <div>
                <p className="font-bold text-white">Java Backend Developer Intern @ Mitra Media Labs</p>
                <p className="text-slate-300 mb-1">Jan 2026 - Apr 2026</p>
              </div>
              {showLink && <a href="https://linkedin.com/in/parth-thakor" target="_blank" rel="noreferrer" className="text-slate-400 underline font-semibold hover:text-white transition-colors mt-2 block">View LinkedIn</a>}
            </div>
          );
        }
        break;
      case 'projects':
      case 'proj':
        if (flags.includes('-f') || flags.includes('--featured')) {
          output = (
            <div>
              <p className="font-bold text-white">Rollout.io</p>
              <p className="text-slate-300 mt-1">Production-grade remote configuration platform built using Spring Boot microservices.</p>
              {showLink && <a href="https://github.com/TechParaglide/Rollout.io" target="_blank" rel="noreferrer" className="text-slate-400 underline font-semibold hover:text-white transition-colors mt-1 block">GitHub Repo</a>}
            </div>
          );
        } else {
          output = (
            <div className="space-y-3">
              <div>
                <p className="font-bold text-white">Rollout.io</p>
                <p>Remote Configuration Platform (Spring Boot, Microservices).</p>
              </div>
              <div>
                <p className="font-bold text-white">Crop Insights Dashboard</p>
                <p>Data visualization using Tableau.</p>
              </div>
              <div>
                <p className="font-bold text-white">KhetExpert & ChatOFi</p>
                <p>Flutter and Firebase based mobile applications.</p>
              </div>
              {showLink && <a href="https://github.com/PARTH-THAKOR" target="_blank" rel="noreferrer" className="text-slate-400 underline font-semibold hover:text-white transition-colors mt-2 block">View all projects on GitHub</a>}
            </div>
          );
        }
        break;
      case 'achievements':
      case 'ach':
        output = (
          <div className="space-y-1">
            <p>- <span className="text-slate-200 font-bold">GATE 2026:</span> AIR 342 in CS, Score 804.</p>
            <p>- <span className="text-slate-200 font-bold">GATE 2025:</span> AIR 724 in CS.</p>
            <p>- <span className="text-slate-200 font-bold">Academic Excellence:</span> Rank 1 (9.53 SPI) in B.E. Sem 1, GEC Gandhinagar.</p>
            <p>- <span className="text-slate-200 font-bold">Academic Excellence:</span> Rank 1 in Higher Secondary, FN School.</p>
            {showLink && <a href="https://linkedin.com/in/parthsinh-thakor" target="_blank" rel="noreferrer" className="text-slate-400 underline font-semibold hover:text-white transition-colors block mt-2">Verify on LinkedIn</a>}
          </div>
        );
        break;
      case 'extracurriculars':
      case 'extra':
        output = (
          <div className="space-y-2">
            <p>- <span className="text-slate-200 font-bold">Chess Player:</span> 1600+ rated in rapid chess. Analyzing positions, studying tactics.</p>
            {showLink && <a href="https://chess.com/member/apexcoder" target="_blank" rel="noreferrer" className="text-slate-400 underline font-semibold hover:text-white transition-colors block mt-2">@apexcoder on Chess.com</a>}
          </div>
        );
        break;
      case 'contact':
      case 'cnt':
        if (flags.includes('-e') || flags.includes('--email')) {
          output = <p>{showLink ? <a href="mailto:parth@paraglide.in" className="text-slate-400 underline font-semibold hover:text-white transition-colors">parth@paraglide.in</a> : "parth@paraglide.in"}</p>;
        } else if (flags.includes('-l') || flags.includes('--linkedin')) {
          output = <p>{showLink ? <a href="https://linkedin.com/in/parthsinh-thakor" target="_blank" rel="noreferrer" className="text-slate-400 underline font-semibold hover:text-white transition-colors">linkedin.com/in/parthsinh-thakor</a> : "linkedin.com/in/parthsinh-thakor"}</p>;
        } else if (flags.includes('-g') || flags.includes('--github')) {
          output = <p>{showLink ? <a href="https://github.com/PARTH-THAKOR" target="_blank" rel="noreferrer" className="text-slate-400 underline font-semibold hover:text-white transition-colors">github.com/PARTH-THAKOR</a> : "github.com/PARTH-THAKOR"}</p>;
        } else {
          output = (
            <div className="space-y-1">
              <p><span className="w-24 inline-block text-slate-400">Email:</span> {showLink ? <a href="mailto:parth@paraglide.in" className="text-slate-400 underline font-semibold hover:text-white transition-colors">parth@paraglide.in</a> : "parth@paraglide.in"}</p>
              <p><span className="w-24 inline-block text-slate-400">LinkedIn:</span> {showLink ? <a href="https://linkedin.com/in/parthsinh-thakor" target="_blank" rel="noreferrer" className="text-slate-400 underline font-semibold hover:text-white transition-colors">linkedin.com/in/parthsinh-thakor</a> : "linkedin.com/in/parthsinh-thakor"}</p>
              <p><span className="w-24 inline-block text-slate-400">GitHub:</span> {showLink ? <a href="https://github.com/PARTH-THAKOR" target="_blank" rel="noreferrer" className="text-slate-400 underline font-semibold hover:text-white transition-colors">github.com/PARTH-THAKOR</a> : "github.com/PARTH-THAKOR"}</p>
              <p><span className="w-24 inline-block text-slate-400">LeetCode:</span> {showLink ? <a href="https://leetcode.com/u/CODE_PARTHSINH" target="_blank" rel="noreferrer" className="text-slate-400 underline font-semibold hover:text-white transition-colors">leetcode.com/u/CODE_PARTHSINH</a> : "leetcode.com/u/CODE_PARTHSINH"}</p>
              <p><span className="w-24 inline-block text-slate-400">Medium:</span> {showLink ? <a href="https://medium.com/@myself.parthsinh" target="_blank" rel="noreferrer" className="text-slate-400 underline font-semibold hover:text-white transition-colors">medium.com/@myself.parthsinh</a> : "medium.com/@myself.parthsinh"}</p>
              <p><span className="w-24 inline-block text-slate-400">Location:</span> Mumbai, India</p>
            </div>
          );
        }
        break;
      default:
        output = <p className="text-slate-400 font-bold">Command not found: {baseCommand}. Type 'help' for available commands.</p>;
    }

    setHistory([...newHistory, { id: Date.now().toString() + '-out', command: '', output, isUser: false }]);
    setInput('');
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const userCommands = history.filter(h => h.isUser).map(h => h.command);
      if (userCommands.length > 0) {
        const newIndex = historyIndex < userCommands.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(userCommands[userCommands.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const userCommands = history.filter(h => h.isUser).map(h => h.command);
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(userCommands[userCommands.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300`}>
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />
      <div 
        className={`relative z-10 w-full flex flex-col glass border border-slate-700 bg-slate-950/90 shadow-[0_0_60px_rgba(0,0,0,0.9)] transition-all duration-300 ease-out overflow-hidden
          ${isMaximized ? 'h-full max-w-none rounded-xl' : 'max-w-3xl h-[550px] max-h-[85vh] rounded-2xl'}`}
      >
        {/* Terminal Header */}
        <div className="h-12 border-b border-slate-800 flex items-center justify-between px-4 bg-slate-900/50">
          <div className="flex items-center space-x-2">
            <button onClick={() => { setHistory([]); onClose(); }} className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer" title="Close & Clear" />
            <button onClick={onClose} className="w-3.5 h-3.5 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer" title="Minimize" />
            <button onClick={() => setIsMaximized(!isMaximized)} className="w-3.5 h-3.5 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer" title="Maximize" />
          </div>
          <div className="flex items-center space-x-2 text-slate-400 text-xs font-mono font-bold tracking-wider">
            <TerminalIcon className="w-4 h-4" />
            <span>Terminal</span>
          </div>
          <div className="flex items-center space-x-2">
            <button onClick={() => setFontSize(p => Math.max(10, p - 1))} className="text-[10px] font-bold text-slate-400 hover:text-white px-1.5 py-0.5 border border-slate-700 rounded bg-slate-800 transition-colors" title="Decrease Font">A-</button>
            <button onClick={() => setFontSize(p => Math.min(24, p + 1))} className="text-[10px] font-bold text-slate-400 hover:text-white px-1.5 py-0.5 border border-slate-700 rounded bg-slate-800 transition-colors" title="Increase Font">A+</button>
          </div>
        </div>

        {/* Terminal Body */}
        <div 
          className="flex-1 overflow-y-auto p-4 sm:p-6 font-mono text-slate-300 scroll-smooth custom-scrollbar"
          style={{ fontSize: `${fontSize}px` }}
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((entry) => (
            <div key={entry.id} className="mb-4">
              {entry.isUser && (
                <div className="flex flex-wrap sm:flex-nowrap items-center text-slate-200 mb-1">
                  <span className="text-slate-400 font-bold mr-2 shrink-0">visitor@paraglide:~$</span>
                  <span className="font-bold break-all">{entry.command}</span>
                </div>
              )}
              {!entry.isUser && entry.output && (
                <div className="pl-4 border-l-2 border-slate-800/60 text-slate-300 whitespace-pre-wrap leading-relaxed py-1">
                  {entry.output}
                </div>
              )}
            </div>
          ))}
          
          <div className="flex flex-wrap sm:flex-nowrap items-center text-slate-200 mt-2">
            <span className="text-slate-400 font-bold mr-2 shrink-0">visitor@paraglide:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none border-none text-slate-200 font-bold w-full min-w-[120px]"
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </div>
          <div ref={bottomRef} className="h-4" />
        </div>
      </div>
    </div>
  );
}

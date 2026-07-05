import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import phtImage from '../assets/pht.png';

interface IdCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function IdCardModal({ isOpen, onClose }: IdCardModalProps) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const rotateX = (yc - y) / 10;
    const rotateY = (x - xc) / 10;
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop glass overlay */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
        onClick={onClose}
      />

      <div className="relative z-10 animate-fade-in max-w-sm w-full flex flex-col items-center">
        
        {/* Close Button above the card */}
        <button 
          onClick={onClose}
          className="absolute -top-14 right-2 sm:right-0 p-3 text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-slate-600 rounded-full transition-all duration-300 shadow-lg active:scale-95 z-20"
          aria-label="Close ID Card"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Interactive 3D ID Card */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={() => setIsHovered(true)}
          style={{
            transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(${isHovered ? 1.02 : 1})`,
            transition: isHovered ? 'none' : 'all 0.5s ease-out',
          }}
          className="w-[350px] h-[540px] rounded-3xl glass border border-slate-800 bg-slate-950/70 p-6 flex flex-col justify-between relative overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.9)] cursor-pointer select-none group"
        >
          {/* Subtle Background dot pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          {/* Ambient Glow highlights inside the card */}
          <div className="absolute -top-20 -left-20 w-44 h-44 rounded-full bg-white/5 blur-3xl pointer-events-none transition-opacity group-hover:opacity-75" />
          <div className="absolute -bottom-20 -right-20 w-44 h-44 rounded-full bg-slate-500/5 blur-3xl pointer-events-none transition-opacity group-hover:opacity-75" />

          {/* Holographic Active Badge Ribbon */}
          <div className="absolute top-5 right-[-28px] rotate-45 bg-gradient-to-r from-slate-200/10 via-white/20 to-slate-200/10 text-white border-y border-white/10 text-[6.5px] font-mono font-black py-1 px-8 tracking-widest uppercase select-none shadow-sm transition-all duration-500 group-hover:via-white/30">
            ACTIVE
          </div>

          {/* Holographic light shine overlay */}
          {isHovered && (
            <div 
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-30"
              style={{
                transform: `translateY(${rotate.x * 8}px) translateX(${rotate.y * -8}px)`,
              }}
            />
          )}

          {/* Card Header */}
          <div className="relative z-10">
            {/* Lanyard Slot */}
            <div className="w-12 h-2 rounded-full bg-slate-950 border border-slate-900 mx-auto mb-3" />
            
            {/* Header Title */}
            <p className="text-center text-[9px] font-black font-mono tracking-[0.2em] text-slate-300 uppercase">
              CURRENT STATUS ID
            </p>
            <div className="w-10 h-[1px] bg-slate-800/80 mx-auto mt-2" />
          </div>

          {/* Card Body - Photo */}
          <div className="relative z-10 my-2 flex flex-col items-center">

            {/* Photo Container */}
            {/* HOW TO ADD YOUR OWN PHOTO:
                1. Save your portrait photo (e.g. `profile.jpg`) in the `public/` directory.
                2. Change the `src` attribute of the <img> tag below to "/profile.jpg".
            */}
            <div className="w-28 h-36 rounded-2xl border border-white/10 bg-slate-950/90 overflow-hidden relative shadow-[0_0_20px_rgba(0,0,0,0.5)] group/img">
              <img
                src={phtImage}
                alt="Parthsinh Thakor ID Photo"
                className={`w-full h-full object-cover origin-center transition-all duration-700 ease-in-out ${
                  isHovered ? 'grayscale-0 scale-[1.3]' : 'grayscale contrast-115 brightness-95 scale-[1.25]'
                }`}
              />
              {isHovered && (
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none" />
              )}
            </div>
          </div>

          {/* Name & Title */}
          <div className="relative z-10 text-center">
            <h3 className="font-extrabold text-white text-base tracking-wide uppercase drop-shadow-sm font-sans">
              Parthsinh Thakor
            </h3>
          </div>

          {/* Data Box Container (Cyberpunk credentials panel) */}
          <div className="relative z-10 border border-white/5 rounded-2xl bg-black/45 p-3.5 mt-1.5 font-mono select-none">
            <div className="flex flex-col gap-y-3.5">
              <div className="grid grid-cols-2 gap-x-3">
                <div>
                  <span className="text-slate-300 font-extrabold block text-[9.5px] tracking-wider uppercase">ROLE</span>
                  <span className="text-white font-black block mt-1 text-[11px] tracking-wide">
                    Research Assistant
                  </span>
                </div>
                <div>
                  <span className="text-slate-300 font-extrabold block text-[9.5px] tracking-wider uppercase">SINCE</span>
                  <span className="text-white font-black block mt-1 text-[11px] tracking-wide">
                    2026
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-3">
                <div>
                  <span className="text-slate-300 font-extrabold block text-[9.5px] tracking-wider uppercase">COURSE</span>
                  <span className="text-white font-black block mt-1 text-[11px] tracking-wide">
                    M.Tech CSE
                  </span>
                </div>
                
                <div>
                  <span className="text-slate-300 font-extrabold block text-[9.5px] tracking-wider uppercase">INSTITUTE</span>
                  <span className="text-white font-black block mt-1 text-[11px] tracking-wide">
                    IIT Bombay
                  </span>
                </div>
              </div>

              <div>
                <span className="text-slate-300 font-extrabold block text-[9.5px] tracking-wider uppercase">OTHER</span>
                <span className="text-white font-black block mt-1 text-[11px] tracking-wide leading-relaxed">
                  Technical Writer @ Medium
                </span>
              </div>
            </div>
          </div>

          {/* QR Code + Barcode Footer */}
          <div className="relative z-10 w-full border-t border-slate-900 pt-3 mt-1.5 flex items-center justify-between opacity-90 select-none">
            
            {/* Barcode */}
            <div className="flex flex-col gap-0.5">
              <svg className="w-32 h-6 text-slate-400" viewBox="0 0 100 20" fill="currentColor">
                <rect x="5" y="2" width="1.5" height="16" />
                <rect x="8" y="2" width="3" height="16" />
                <rect x="12.5" y="2" width="1" height="16" />
                <rect x="15" y="2" width="2" height="16" />
                <rect x="18.5" y="2" width="1" height="16" />
                <rect x="21" y="2" width="4.5" height="16" />
                <rect x="27" y="2" width="1" height="16" />
                <rect x="29" y="2" width="2" height="16" />
                <rect x="32" y="2" width="1" height="16" />
                <rect x="34" y="2" width="3" height="16" />
                <rect x="38.5" y="2" width="1.5" height="16" />
                <rect x="41" y="2" width="1" height="16" />
                <rect x="43.5" y="2" width="2.5" height="16" />
                <rect x="47.5" y="2" width="4" height="16" />
                <rect x="53" y="2" width="1" height="16" />
                <rect x="55.5" y="2" width="2" height="16" />
                <rect x="59" y="2" width="1" height="16" />
                <rect x="61.5" y="2" width="3.5" height="16" />
                <rect x="66" y="2" width="1.5" height="16" />
                <rect x="69" y="2" width="4" height="16" />
                <rect x="74" y="2" width="1" height="16" />
                <rect x="76.5" y="2" width="2" height="16" />
                <rect x="80" y="2" width="1.5" height="16" />
                <rect x="83" y="2" width="3" height="16" />
                <rect x="87.5" y="2" width="1" height="16" />
                <rect x="89.5" y="2" width="2" height="16" />
                <rect x="93" y="2" width="1.5" height="16" />
              </svg>
            </div>

            {/* Cryptographic QR Code */}
            <svg className="w-7 h-7 text-white/80" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2 2h6v6H2V2zm1 1v4h4V3H3zm11-1h8v8h-8V2zm1 1v6h6V3h-6zM2 14h6v6H2v-6zm1 1v4h4v-4H3zm14-2h2v2h-2v-2zm-3 2h2v2h-2v-2zm3 2h2v2h-2v-2zm-3 2h2v2h-2v-2zm9-6h2v2h-2v-2zm-3 3h2v2h-2v-2zm3 3h2v2h-2v-2zm-6-6h2v2h-2v-2zm3 3h2v2h-2v-2zm-3 3h2v2h-2v-2zm6-6h2v2h-2v-2zm3 3h2v2h-2v-2zm3 3h2v2h-2v-2z" />
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
}

import { useEffect, useRef } from 'react';

const AnimatedGridBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const laserCount = 150; 
    let lasers: { x: number; y: number; length: number; speed: number; color: string; alpha: number; thickness: number; }[] = [];

    const colors = [
      '59, 130, 246', 
      '139, 92, 246', 
      '236, 72, 153', 
      '16, 185, 129'  
    ];

    const createLaser = (resetY: boolean = false) => {
      return {
        x: Math.random() * width,
        y: resetY ? -Math.random() * 500 - 100 : Math.random() * height,
        length: Math.random() * 200 + 50,
        speed: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.4 + 0.1,
        thickness: Math.random() * 1.5 + 0.5
      };
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      lasers = [];
      for (let i = 0; i < laserCount; i++) {
        lasers.push(createLaser());
      }
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      lasers.forEach(laser => {
        laser.y += laser.speed;

        if (laser.y - laser.length > height) {
          Object.assign(laser, createLaser(true));
        }

        const gradient = ctx.createLinearGradient(laser.x, laser.y - laser.length, laser.x, laser.y);
        gradient.addColorStop(0, `rgba(${laser.color}, 0)`);
        gradient.addColorStop(0.8, `rgba(${laser.color}, ${laser.alpha})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, ${laser.alpha * 1.5})`); 

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = laser.thickness;
        ctx.lineCap = 'round';
        ctx.moveTo(laser.x, laser.y - laser.length);
        ctx.lineTo(laser.x, laser.y);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(laser.x, laser.y, laser.thickness * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${laser.alpha * 1.5})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
    />
  );
};

export default AnimatedGridBackground;

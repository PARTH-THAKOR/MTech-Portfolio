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
    
    // Grid configuration
    const gridSize = 64; // 4rem = 64px
    let cols = 0;
    let rows = 0;
    let cells: { x: number; y: number; alpha: number; targetAlpha: number; speed: number; color: string; }[] = [];
    let idleIndices: number[] = [];

    const refillIdleIndices = () => {
      idleIndices = Array.from({ length: cells.length }, (_, i) => i);
      // Fisher-Yates shuffle
      for (let i = idleIndices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [idleIndices[i], idleIndices[j]] = [idleIndices[j], idleIndices[i]];
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      
      // Handle high DPI displays for crisp rendering
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      cols = Math.ceil(width / gridSize);
      rows = Math.ceil(height / gridSize);
      
      cells = [];
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          cells.push({
            x: i,
            y: j,
            alpha: 0,
            targetAlpha: 0,
            speed: 0,
            color: '255, 255, 255'
          });
        }
      }
      refillIdleIndices();
    };

    window.addEventListener('resize', resize);
    resize();

    let lastTime = 0;
    let timeAccumulator = 0;
    
    // 30 seconds (30000ms) to cover all cells.
    const getActivationInterval = () => 30000 / Math.max(1, cells.length);

    const draw = (time: number) => {
      if (!lastTime) lastTime = time;
      const deltaTime = time - lastTime;
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Draw grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = 0; i <= cols; i++) {
        ctx.moveTo(i * gridSize, 0);
        ctx.lineTo(i * gridSize, height);
      }
      for (let j = 0; j <= rows; j++) {
        ctx.moveTo(0, j * gridSize);
        ctx.lineTo(width, j * gridSize);
      }
      ctx.stroke();

      // Determine activations
      const activationInterval = getActivationInterval();
      timeAccumulator += deltaTime;
      
      // While we have enough accumulated time, activate cells
      while (timeAccumulator > activationInterval) {
        timeAccumulator -= activationInterval;
        
        if (cells.length > 0) {
          if (idleIndices.length === 0) {
            refillIdleIndices();
          }
          
          const activeIndex = idleIndices.pop();
          if (activeIndex !== undefined) {
            const cell = cells[activeIndex];
            // Only activate if it's currently inactive
            if (cell.targetAlpha === 0 && cell.alpha === 0) {
              cell.targetAlpha = (Math.random() * 0.13) + 0.05; // max alpha between 0.05 and 0.18
              cell.speed = (Math.random() * 0.003) + 0.001; // fade speed
              const dimColors = ['239, 68, 68', '59, 130, 246', '234, 179, 8', '249, 115, 22', '34, 197, 94'];
              cell.color = dimColors[Math.floor(Math.random() * dimColors.length)];
            }
          }
        }
      }

      // Update and draw cells
      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        
        if (cell.alpha < cell.targetAlpha) {
          cell.alpha = Math.min(cell.targetAlpha, cell.alpha + cell.speed);
          if (cell.alpha === cell.targetAlpha) {
            // Reached max alpha, start fading out immediately
            cell.targetAlpha = 0;
            cell.speed = (Math.random() * 0.002) + 0.0005; // slower fade out
          }
        } else if (cell.alpha > cell.targetAlpha) {
          cell.alpha = Math.max(cell.targetAlpha, cell.alpha - cell.speed);
        }

        if (cell.alpha > 0) {
          ctx.fillStyle = `rgba(${cell.color}, ${cell.alpha})`;
          ctx.fillRect(cell.x * gridSize, cell.y * gridSize, gridSize, gridSize);
        }
      }

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
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default AnimatedGridBackground;

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const WebBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<{ x: number; y: number; vx: number; vy: number }[]>([]);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize points
    for (let i = 0; i < 50; i++) {
      points.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      });
    }

    const draw = () => { 
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update the colors here
      ctx.fillStyle = 'rgba(0, 123, 255, 0.5)'; // Blue fill color
      ctx.strokeStyle = 'rgba(255, 0, 123, 0.1)'; // Pink stroke color

      points.current.forEach((point, i) => {
        point.x += point.vx;
        point.y += point.vy;

        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;

        const dx = mouse.current.x - point.x;
        const dy = mouse.current.y - point.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 200) {
          point.x += dx * 0.01;
          point.y += dy * 0.01;
        }

        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fill();

        points.current.forEach((otherPoint, j) => {
          if (i === j) return;
          const dx = point.x - otherPoint.x;
          const dy = point.y - otherPoint.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(draw);
    };

    canvas.addEventListener('mousemove', (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    });

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', () => {});
    };
  }, []);

  return <canvas ref={canvasRef} className="web-background" />;
};

export default WebBackground;
'use client';

import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

export default function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      width = rect?.width || canvas.offsetWidth;
      height = rect?.height || canvas.offsetHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initNodes();
    };

    const initNodes = () => {
      const area = width * height;
      // Scale count based on area: 1 node per 22000 pixels, min 25, max 90 nodes
      const count = Math.min(Math.max(Math.floor(area / 22000), 25), 90);
      nodesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        radius: 1.2 + Math.random() * 1.8,
        opacity: 0.25 + Math.random() * 0.55,
      }));
    };

    const edgeFade = (x: number, y: number): number => {
      const margin = 80;
      const fx = Math.min(x / margin, (width - x) / margin, 1);
      const fy = Math.min(y / margin, (height - y) / margin, 1);
      return Math.min(fx, fy, 1);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const nodes = nodesRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const maxDist = 130;
      const mouseDist = 100;

      // Update positions
      for (const n of nodes) {
        // Gentle mouse repulsion
        const dx = n.x - mx;
        const dy = n.y - my;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < mouseDist && d > 0) {
          const force = (mouseDist - d) / mouseDist * 0.3;
          n.vx += (dx / d) * force;
          n.vy += (dy / d) * force;
        }

        // Dampen
        n.vx *= 0.995;
        n.vy *= 0.995;

        // Clamp speed
        const speed = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
        if (speed > 0.4) {
          n.vx = (n.vx / speed) * 0.4;
          n.vy = (n.vy / speed) * 0.4;
        }

        n.x += n.vx;
        n.y += n.vy;

        // Soft bounce
        if (n.x < 0) { n.x = 0; n.vx = Math.abs(n.vx); }
        if (n.x > width) { n.x = width; n.vx = -Math.abs(n.vx); }
        if (n.y < 0) { n.y = 0; n.vy = Math.abs(n.vy); }
        if (n.y > height) { n.y = height; n.vy = -Math.abs(n.vy); }
      }

      // Draw edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const fade = edgeFade((a.x + b.x) / 2, (a.y + b.y) / 2);
            const alpha = (1 - dist / maxDist) * 0.18 * fade;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(59,130,246,${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        const fade = edgeFade(n.x, n.y);
        const alpha = n.opacity * fade * 0.55;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59,130,246,${alpha})`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    resize();
    draw();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouse);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: 'block' }}
    />
  );
}

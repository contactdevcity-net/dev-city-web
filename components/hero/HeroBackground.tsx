"use client";

import { useEffect, useRef } from "react";

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
      opacityDirection: number;
      hue: number; // 0 = blue, 1 = purple
    }

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx!.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    function createParticles() {
      if (!canvas) return;
      particles = [];
      const count = Math.min(50, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 15000));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.4 + 0.1,
          opacityDirection: Math.random() > 0.5 ? 1 : -1,
          hue: Math.random(),
        });
      }
    }

    function drawParticles() {
      if (!canvas || !ctx) return;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.opacity += p.opacityDirection * 0.002;

        if (p.opacity >= 0.5) p.opacityDirection = -1;
        if (p.opacity <= 0.05) p.opacityDirection = 1;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        // Blue (#2563eb) or purple (#7c3aed) based on hue
        const r = p.hue < 0.5 ? 37 : 124;
        const g = p.hue < 0.5 ? 99 : 58;
        const b = p.hue < 0.5 ? 235 : 237;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.opacity})`;
        ctx.fill();
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${0.04 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(drawParticles);
    }

    resize();
    createParticles();
    drawParticles();

    const handleResize = () => {
      resize();
      createParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ opacity: 0.6 }}
      />

      {/* Top-right gradient blob - blue */}
      <div
        className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full opacity-[0.12]"
        style={{
          background: "radial-gradient(circle, #2563eb 0%, transparent 70%)",
          animation: "meshBlob1 20s ease-in-out infinite",
        }}
      />

      {/* Left gradient blob - purple */}
      <div
        className="absolute -left-20 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full opacity-[0.08]"
        style={{
          background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
          animation: "meshBlob2 25s ease-in-out infinite",
        }}
      />

      {/* Bottom center blob */}
      <div
        className="absolute -bottom-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
          animation: "meshBlob3 18s ease-in-out infinite",
        }}
      />

      {/* Horizontal accent glow line */}
      <div
        className="absolute left-[10%] top-0 h-[1px] w-[80%]"
        style={{
          background: "linear-gradient(90deg, transparent, #2563eb33, #7c3aed22, transparent)",
          animation: "glowLine 5s ease-in-out infinite",
        }}
      />
    </div>
  );
}

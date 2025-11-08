"use client";

import React, { useEffect, useRef } from "react";
import styles from "./background.module.scss";

const NUM_PARTICLES = 40;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Центр глобуса
    let centerX = width / 2;
    let centerY = height / 2;

    // Инициализация частиц
    particlesRef.current = Array.from({ length: NUM_PARTICLES }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 1,
    }));

    const drawGlobeLines = () => {
      ctx.strokeStyle = "rgba(50, 120, 200, 0.15)";
      ctx.lineWidth = 1;

      // Радиус глобуса
      const maxR = Math.min(width, height) * 0.45;

      // ✅ Круговые линии (широтные)
      for (let i = 0; i <= 6; i++) {
        const r = (maxR / 6) * i;
        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // ✅ Радиальные линии (долготные)
      for (let angle = 0; angle < 360; angle += 20) {
        const rad = (angle * Math.PI) / 180;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(centerX + maxR * Math.cos(rad), centerY + maxR * Math.sin(rad));
        ctx.stroke();
      }
    };

    const drawGrid = () => {
      ctx.strokeStyle = "rgba(38, 28, 100, 0.03)";
      ctx.lineWidth = 1;

      const step = 80;

      // Вертикальные линии
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Горизонтальные линии
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y)
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // ✅ Фоновая сетка
      drawGrid();

      // ✅ Линии глобуса
      drawGlobeLines();

      // ✅ Частицы
      ctx.fillStyle = "rgba(0, 200, 255, 0.7)";

      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Обработка ресайза
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      centerX = width / 2;
      centerY = height / 2;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
};

export default Background;

"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function LivingSystemOrb({ compact = false }: { compact?: boolean }) {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useSpring(useTransform(scrollYProgress, [0, 1], compact ? [0, 24] : [0, -28]), {
    stiffness: 80,
    damping: 24
  });
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (shouldReduceMotion || compact) return;

    const handleMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 14;
      const yValue = (event.clientY / window.innerHeight - 0.5) * 14;
      setPointer({ x, y: yValue });
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [compact, shouldReduceMotion]);

  const sizeClass = compact ? "h-28 w-28" : "h-56 w-56";

  return (
    <motion.div
      className={`relative ${sizeClass}`}
      style={{ y }}
      animate={shouldReduceMotion ? undefined : { x: pointer.x, rotate: compact ? 0 : pointer.x * 0.2 }}
      transition={{ type: "spring", stiffness: 70, damping: 20 }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-2xl dark:bg-cyan-400/18" />
      <svg className="relative h-full w-full overflow-visible" viewBox="0 0 220 220">
        <defs>
          <radialGradient id="orbCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#2563eb" stopOpacity="0.78" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.1" />
          </radialGradient>
        </defs>
        <motion.circle
          cx="110"
          cy="110"
          r="46"
          fill="url(#orbCore)"
          animate={shouldReduceMotion ? undefined : { scale: [1, 1.05, 1], opacity: [0.86, 1, 0.86] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        {[72, 92, 112].map((radius, index) => (
          <motion.circle
            key={radius}
            cx="110"
            cy="110"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-blue-300/50 dark:text-cyan-300/30"
            strokeDasharray={index === 1 ? "6 8" : "2 8"}
            animate={shouldReduceMotion ? undefined : { rotate: index % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 28 + index * 8, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "110px 110px" }}
          />
        ))}
        {[
          { x: 110, y: 28 },
          { x: 186, y: 96 },
          { x: 150, y: 184 },
          { x: 42, y: 150 },
          { x: 52, y: 62 }
        ].map((node, index) => (
          <motion.g
            key={`${node.x}-${node.y}`}
            animate={shouldReduceMotion ? undefined : { y: [0, index % 2 ? 4 : -4, 0] }}
            transition={{ duration: 3.6 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <line x1="110" y1="110" x2={node.x} y2={node.y} stroke="currentColor" className="text-blue-200/50 dark:text-cyan-300/20" strokeWidth="1" />
            <circle cx={node.x} cy={node.y} r="8" fill="#ffffff" className="dark:fill-slate-900" stroke="#38bdf8" strokeWidth="1.5" />
            <circle cx={node.x} cy={node.y} r="3" fill="#2563eb" />
          </motion.g>
        ))}
      </svg>
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-md border border-blue-100 bg-white/90 px-3 py-1 text-[11px] font-semibold text-accent shadow-soft dark:border-blue-400/20 dark:bg-slate-950/90 dark:text-blue-200">
        Live Layer
      </div>
    </motion.div>
  );
}

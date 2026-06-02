"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect } from "react";

export function MouseGlow() {
  const shouldReduceMotion = useReducedMotion();
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const x = useSpring(mouseX, { stiffness: 80, damping: 30 });
  const y = useSpring(mouseY, { stiffness: 80, damping: 30 });

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMove = (event: PointerEvent) => {
      mouseX.set(event.clientX - 220);
      mouseY.set(event.clientY - 220);
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [mouseX, mouseY, shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[440px] w-[440px] rounded-full bg-blue-400/12 blur-3xl dark:bg-cyan-400/10 lg:block"
      style={{ x, y }}
      aria-hidden="true"
    />
  );
}

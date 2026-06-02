"use client";

import { motion, useReducedMotion } from "framer-motion";

export function DataDivider() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none relative hidden h-12 overflow-hidden md:block" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 h-px w-[min(760px,82vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-200 to-transparent dark:via-blue-400/25" />
      <motion.div
        className="absolute top-1/2 h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.75)]"
        initial={{ left: "22%", opacity: 0 }}
        animate={shouldReduceMotion ? { opacity: 0.5 } : { left: ["22%", "78%"], opacity: [0, 1, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

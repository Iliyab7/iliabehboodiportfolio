"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import type { Language } from "@/data/content";
import { LivingSystemOrb } from "@/components/LivingSystemOrb";

const labels = {
  en: ["Systems", "Projects", "KPIs", "Workflow", "Contact"],
  fa: ["سیستم‌ها", "پروژه‌ها", "KPI", "فرآیند", "تماس"]
};

export function ScrollCompanion({ language }: { language: Language }) {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [20, -80]), {
    stiffness: 70,
    damping: 24
  });
  const opacity = useTransform(scrollYProgress, [0, 0.08, 0.94, 1], [0, 0.78, 0.78, 0]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (value) => {
      if (value < 0.2) setActiveIndex(0);
      else if (value < 0.42) setActiveIndex(1);
      else if (value < 0.58) setActiveIndex(2);
      else if (value < 0.78) setActiveIndex(3);
      else setActiveIndex(4);
    });
  }, [scrollYProgress]);

  if (shouldReduceMotion) return null;

  const sideClass = language === "fa" ? "left-6" : "right-6";

  return (
    <motion.div
      className={`pointer-events-none fixed top-1/2 z-30 hidden -translate-y-1/2 lg:block ${sideClass}`}
      style={{ y, opacity }}
      aria-hidden="true"
    >
      <div className="rounded-2xl border border-slate-200 bg-white/72 p-3 shadow-premium backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/60">
        <LivingSystemOrb compact />
        <div className="mt-4 rounded-md border border-blue-100 bg-blue-50 px-3 py-2 text-center text-xs font-semibold text-accent dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-200">
          {labels[language][activeIndex]}
        </div>
      </div>
    </motion.div>
  );
}

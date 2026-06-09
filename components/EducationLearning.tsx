"use client";

import { BookOpen, GraduationCap } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import type { Language } from "@/data/content";

const content = {
  en: {
    eyebrow: "Education",
    title: "Education & Continuous Learning",
    formalTitle: "Formal & Structured Learning",
    focusTitle: "Self-Study Focus Areas",
    formal: [
      "MBA - University of Tehran, in progress",
      "AI in Business - University of Tehran",
      "CS50 - Harvard University, programming and Python foundations",
      "Python - Tehran Institute of Technology",
      "n8n beginner and advanced courses - Automation + AI Workflows",
      "Excel beginner and professional courses - Hamkaran System"
    ],
    focus: ["SEO", "UX", "Content Creation", "Prompt Engineering", "AI Tools", "Business Automation", "Data-Driven Systems", "Operational Process Modeling"]
  },
  fa: {
    eyebrow: "یادگیری",
    title: "تحصیلات و یادگیری مستمر",
    formalTitle: "یادگیری رسمی و ساختاریافته",
    focusTitle: "حوزه‌های خودآموزی",
    formal: [
      "MBA - دانشگاه تهران، در حال گذراندن",
      "هوش مصنوعی در کسب‌وکار - دانشگاه تهران",
      "CS50 - Harvard University، مبانی برنامه‌نویسی و Python",
      "Python - مجتمع فنی تهران",
      "دوره‌های مقدماتی و پیشرفته n8n - Automation + AI Workflows",
      "Excel مقدماتی و حرفه‌ای - همکاران سیستم"
    ],
    focus: ["SEO", "UX", "تولید محتوا", "مهندسی پرامپت", "ابزارهای AI", "اتوماسیون کسب‌وکار", "سیستم‌های داده‌محور", "مدل‌سازی فرایندهای عملیاتی"]
  }
} as const;

export function EducationLearning({ language }: { language: Language }) {
  const t = content[language];

  return (
    <section className="section-surface border-y border-slate-200 py-12 dark:border-slate-800 md:py-20 lg:py-28">
      <Container>
        <SectionHeader lang={language} eyebrow={t.eyebrow} title={t.title} />
        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 md:hidden">
          <article className="card-premium min-w-[78vw] snap-start rounded-lg p-4">
            <div className="flex items-center gap-3 text-base font-semibold text-ink dark:text-white">
              <GraduationCap className="h-5 w-5 text-accent" />
              {t.formalTitle}
            </div>
            <ul className="mt-4 grid gap-2">
              {t.formal.slice(0, 3).map((item) => (
                <li key={item} className="mobile-clamp-2 text-sm leading-7 text-muted dark:text-slate-300">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs font-semibold text-accent dark:text-blue-200">+ {t.formal.length - 3} more</p>
          </article>
          <article className="card-premium min-w-[78vw] snap-start rounded-lg p-4">
            <div className="flex items-center gap-3 text-base font-semibold text-ink dark:text-white">
              <BookOpen className="h-5 w-5 text-accent" />
              {t.focusTitle}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {t.focus.slice(0, 6).map((item) => (
                <span key={item} className="rounded-md bg-blue-50 px-2.5 py-1.5 text-xs font-semibold text-accent dark:bg-blue-400/10 dark:text-blue-200">
                  {item}
                </span>
              ))}
            </div>
          </article>
        </div>
        <div className="hidden gap-4 md:grid lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="h-full">
            <details className="card-premium rounded-lg p-5 md:p-6" open>
              <summary className="flex cursor-pointer list-none items-center gap-3 text-xl font-semibold text-ink dark:text-white">
                <GraduationCap className="h-5 w-5 text-accent" />
                {t.formalTitle}
              </summary>
              <ul className="mt-5 grid gap-3">
                {t.formal.map((item) => (
                  <li key={item} className="rounded-md border border-slate-200 bg-white/70 px-3 py-2 text-sm leading-7 text-muted dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300">
                    {item}
                  </li>
                ))}
              </ul>
            </details>
          </Reveal>
          <Reveal className="h-full" delay={0.05}>
            <details className="card-premium rounded-lg p-5 md:p-6" open>
              <summary className="flex cursor-pointer list-none items-center gap-3 text-xl font-semibold text-ink dark:text-white">
                <BookOpen className="h-5 w-5 text-accent" />
                {t.focusTitle}
              </summary>
              <div className="mt-5 flex flex-wrap gap-2">
                {t.focus.map((item) => (
                  <span key={item} className="rounded-md bg-blue-50 px-3 py-2 text-sm font-semibold text-accent dark:bg-blue-400/10 dark:text-blue-200">
                    {item}
                  </span>
                ))}
              </div>
            </details>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

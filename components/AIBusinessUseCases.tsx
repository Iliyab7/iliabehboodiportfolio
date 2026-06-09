"use client";

import { BarChart3, BrainCircuit, FileSearch, LineChart, MessagesSquare, Workflow } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import type { Language } from "@/data/content";

const icons = [BrainCircuit, Workflow, BarChart3, LineChart, FileSearch, MessagesSquare];

const content = {
  en: {
    eyebrow: "AI Use Cases",
    title: "Practical AI Use Cases for Business Operations",
    description:
      "AI becomes valuable when it is connected to real workflows: reporting, decision support, automation, knowledge retrieval, content systems, and operational visibility.",
    cards: [
      ["Decision Support", "AI-assisted systems that help managers ask questions, understand KPIs, and make faster decisions based on structured data."],
      ["Process Automation", "Automating repetitive steps, data movement, reminders, forms, approvals, and reporting workflows."],
      ["Automated Reporting", "Turning operational data into management summaries, status reports, and decision-ready insights."],
      ["Trend Analysis & Forecasting", "Using historical data and patterns to support planning, operational improvement, and early issue detection."],
      ["Knowledge Retrieval", "Helping teams search internal data, documents, reports, and operational records faster."],
      ["Content & Communication", "Using AI for professional writing, translation, localization, product descriptions, business profiles, and multilingual communication."]
    ]
  },
  fa: {
    eyebrow: "کاربردهای AI",
    title: "کاربردهای عملی AI در عملیات کسب‌وکار",
    description:
      "هوش مصنوعی زمانی ارزشمند می‌شود که به جریان‌های واقعی کسب‌وکار وصل شود؛ مثل گزارش‌گیری، تصمیم‌یاری مدیریتی، اتوماسیون، بازیابی اطلاعات، سیستم‌های محتوا و شفافیت عملیاتی.",
    cards: [
      ["تصمیم‌یاری مدیریتی", "سیستم‌های مبتنی بر AI که به مدیران کمک می‌کنند سوال بپرسند، KPIها را بفهمند و سریع‌تر بر اساس داده ساختاریافته تصمیم بگیرند."],
      ["اتوماسیون فرایند", "خودکارسازی مراحل تکراری، انتقال داده، یادآوری‌ها، فرم‌ها، تاییدها و جریان‌های گزارش‌گیری."],
      ["گزارش‌سازی خودکار", "تبدیل داده‌های عملیاتی به خلاصه‌های مدیریتی، گزارش وضعیت و بینش‌های قابل تصمیم‌گیری."],
      ["تحلیل روند و پیش‌بینی", "استفاده از داده‌های تاریخی و الگوها برای برنامه‌ریزی، بهبود عملیات و تشخیص زودتر مشکلات."],
      ["بازیابی دانش", "کمک به تیم‌ها برای جست‌وجوی سریع‌تر در داده‌های داخلی، اسناد، گزارش‌ها و سوابق عملیاتی."],
      ["محتوا و ارتباطات", "استفاده از AI برای نوشتار حرفه‌ای، ترجمه، بومی‌سازی، معرفی محصول، پروفایل شرکتی و ارتباطات چندزبانه."]
    ]
  }
} as const;

export function AIBusinessUseCases({ language }: { language: Language }) {
  const t = content[language];

  return (
    <section id="ai-use-cases" className="relative overflow-hidden py-12 md:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      <Container>
        <SectionHeader lang={language} eyebrow={t.eyebrow} title={t.title} description={t.description} />
        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 md:mx-0 md:grid md:grid-cols-2 md:gap-4 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
          {t.cards.map(([title, description], index) => {
            const Icon = icons[index];
            return (
              <Reveal key={title} delay={index * 0.035} className="min-w-[74vw] snap-start md:min-w-0">
                <article className="card-premium card-premium-hover relative h-full overflow-hidden rounded-lg p-4 md:p-5">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full border border-blue-400/20" />
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-blue-50 text-accent dark:bg-blue-400/10 dark:text-blue-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-ink dark:text-white md:text-lg">{title}</h3>
                  <p className="mobile-clamp-2 mt-2 text-sm leading-7 text-muted dark:text-slate-400">{description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

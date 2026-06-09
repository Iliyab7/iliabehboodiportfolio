"use client";

import type { Language } from "@/data/content";

const content = {
  en: {
    title: "Additional Expertise",
    items: [
      ["AI for Operations", "Applying AI inside reporting, follow-up, visibility, and operational workflows."],
      ["Workflow Design & Process Improvement", "Mapping work, removing friction, and making repeatable processes easier to run."],
      ["Data Modeling & Operational Databases", "Structuring business data so dashboards, automations, and AI layers can use it."],
      ["Prompt Engineering", "Designing practical prompts for analysis, summaries, documents, content, and decision support."],
      ["Data-Driven Decision Making", "Turning operational signals into clearer choices for managers and teams."]
    ]
  },
  fa: {
    title: "حوزه‌های تخصصی تکمیلی",
    items: [
      ["AI برای عملیات", "استفاده از AI در گزارش‌گیری، پیگیری، شفافیت و جریان‌های عملیاتی."],
      ["طراحی جریان کار و بهبود فرایند", "مدل‌سازی کار، حذف اصطکاک و ساده‌تر کردن اجرای فرایندهای تکرارشونده."],
      ["مدل‌سازی داده و دیتابیس عملیاتی", "ساختاردهی داده کسب‌وکار برای استفاده در داشبورد، اتوماسیون و لایه‌های AI."],
      ["مهندسی پرامپت", "طراحی پرامپت‌های کاربردی برای تحلیل، خلاصه‌سازی، سند، محتوا و تصمیم‌یاری."],
      ["تصمیم‌گیری داده‌محور", "تبدیل سیگنال‌های عملیاتی به انتخاب‌های روشن‌تر برای مدیران و تیم‌ها."]
    ]
  }
} as const;

export function AdditionalExpertise({ language }: { language: Language }) {
  const t = content[language];

  return (
    <div className="mt-5">
      <h3 className="text-lg font-semibold text-ink dark:text-white">{t.title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {t.items.map(([label, description]) => (
          <span
            key={label}
            title={description}
            className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-charcoal transition hover:border-blue-200 hover:text-accent dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-400/50"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

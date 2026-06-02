"use client";

import { Bot, Code2, FileText, Image, Mic, Search, Video } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import type { Language } from "@/data/content";

const icons = [Bot, Code2, FileText, Image, Video, Mic, Search];

const content = {
  en: {
    title: "AI Tool Stack",
    description: "A practical ecosystem for analysis, system building, content, research, and operational communication.",
    groups: [
      ["LLMs & Chatbots", "ChatGPT, Claude, Gemini, Grok, DeepSeek, Qwen", "Analysis, ideation, reporting, content creation, summarization, system design, and decision support."],
      ["Coding & System Building", "Cursor, GitHub Copilot, ChatGPT, Claude", "Faster system design, code analysis, automation building, debugging, and technical documentation."],
      ["Presentation & Documentation", "Gamma, NotebookLM", "Creating presentations, summarizing documents, structuring content, and turning scattered information into clear outputs."],
      ["AI Image & Design", "Midjourney, DALL-E, Stable Diffusion, Adobe Firefly", "Visual ideation, concept design, image generation, branding support, and digital content."],
      ["AI Video & Visual Content", "Runway, Pika, Kling", "Video content generation, advertising concepts, visual storytelling, and fast marketing content production."],
      ["Voice AI", "ElevenLabs", "Voice generation, narration, dubbing, audio content, and voice-based AI concept testing."],
      ["AI Search & Research", "Perplexity", "Fast research, source discovery, market research, and content/business decision support."]
    ]
  },
  fa: {
    title: "پشته ابزارهای هوش مصنوعی",
    description: "یک اکوسیستم عملی برای تحلیل، ساخت سیستم، محتوا، تحقیق و ارتباطات عملیاتی.",
    groups: [
      ["LLMs و چت‌بات‌ها", "ChatGPT, Claude, Gemini, Grok, DeepSeek, Qwen", "تحلیل، ایده‌پردازی، گزارش‌سازی، تولید محتوا، خلاصه‌سازی، طراحی سیستم و پشتیبانی تصمیم‌گیری."],
      ["کدنویسی و ساخت سیستم", "Cursor, GitHub Copilot, ChatGPT, Claude", "طراحی سریع‌تر سیستم، تحلیل کد، ساخت اتوماسیون، رفع خطا و مستندسازی فنی."],
      ["ارائه و مستندسازی", "Gamma, NotebookLM", "ساخت ارائه، خلاصه‌سازی اسناد، آماده‌سازی ساختار محتوا و تبدیل اطلاعات پراکنده به خروجی قابل ارائه."],
      ["تصویر و طراحی با AI", "Midjourney, DALL-E, Stable Diffusion, Adobe Firefly", "ایده‌پردازی بصری، طراحی کانسپت، تولید تصویر، کمک به برندینگ و محتوای دیجیتال."],
      ["ویدیو و محتوای بصری", "Runway, Pika, Kling", "تولید محتوای ویدیویی، ساخت کانسپت تبلیغاتی، روایت تصویری و تولید سریع محتوای مارکتینگ."],
      ["Voice AI", "ElevenLabs", "تولید صدا، روایت، دوبله، محتوای صوتی و تست سناریوهای Voice AI."],
      ["جست‌وجو و تحقیق با AI", "Perplexity", "تحقیق سریع، پیدا کردن منابع، بررسی بازار و پشتیبانی از تصمیم‌گیری محتوایی و کسب‌وکاری."]
    ]
  }
} as const;

export function AIToolStack({ language }: { language: Language }) {
  const t = content[language];

  return (
    <div className="mt-8 overflow-hidden rounded-lg border border-slate-200 bg-white/70 p-4 dark:border-slate-700/70 dark:bg-slate-950/50 md:mt-10 md:p-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-ink dark:text-white">{t.title}</h3>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-muted dark:text-slate-400">{t.description}</p>
        </div>
      </div>
      <div className="no-scrollbar -mx-4 mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-2 md:gap-4 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-4">
        {t.groups.map(([title, tools, use], index) => {
          const Icon = icons[index];
          return (
            <Reveal key={title} delay={index * 0.025} className={index === 0 ? "min-w-[76vw] snap-start md:min-w-0 xl:col-span-2" : "min-w-[76vw] snap-start md:min-w-0"}>
              <details className="group h-full rounded-md border border-slate-200 bg-slate-50 p-4 open:bg-white dark:border-slate-700 dark:bg-slate-900/70 dark:open:bg-slate-900 md:open:bg-slate-50 md:dark:open:bg-slate-900/70" open>
                <summary className="flex cursor-pointer list-none items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-blue-50 text-accent dark:bg-blue-400/10 dark:text-blue-200">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-base font-semibold leading-6 text-ink dark:text-white">{title}</span>
                </summary>
                <div className="mt-4">
                  <p className="text-xs font-semibold text-accent dark:text-blue-200">{tools}</p>
                  <p className="mobile-clamp-2 mt-2 text-sm leading-7 text-muted dark:text-slate-400">{use}</p>
                </div>
              </details>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}

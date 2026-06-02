"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Moon, Sun } from "lucide-react";
import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Reveal } from "@/components/Reveal";
import { caseStudies } from "@/data/caseStudies";
import { contactLinks, content, type Language } from "@/data/content";

type Theme = "light" | "dark";

export function ProjectDetailClient({ slug }: { slug: string }) {
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);
  const isFa = language === "fa";
  const isDark = theme === "dark";
  const t = content[language];
  const project = caseStudies[language].find((item) => item.slug === slug);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme") as Theme | null;
    const savedLanguage = window.localStorage.getItem("language") as Language | null;
    const preferredTheme: Theme =
      savedTheme ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    if (savedLanguage === "en" || savedLanguage === "fa") {
      setLanguage(savedLanguage);
    }
    setTheme(preferredTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.dir = isFa ? "rtl" : "ltr";
    document.documentElement.lang = language;
    if (mounted) {
      window.localStorage.setItem("language", language);
    }
  }, [isFa, language, mounted]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    if (mounted) {
      window.localStorage.setItem("theme", theme);
    }
  }, [isDark, mounted, theme]);

  if (!project) {
    return (
      <main className="min-h-screen bg-offwhite py-20 dark:bg-[#050a12]">
        <Container>
          <Link href="/" className="text-accent">
            Back to home
          </Link>
        </Container>
      </main>
    );
  }

  return (
    <main dir={isFa ? "rtl" : "ltr"} className="min-h-screen bg-offwhite text-ink dark:bg-[#050a12] dark:text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/82 backdrop-blur-xl dark:border-slate-800 dark:bg-[#07111f]/82">
        <Container className="flex h-16 items-center justify-between gap-3">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-navy dark:text-white">
            <ArrowLeft className="h-4 w-4" />
            {isFa ? "بازگشت به سایت" : "Back to portfolio"}
          </Link>
          <div className="flex items-center gap-2">
            <div className="flex rounded-md border border-slate-200 bg-slate-50 p-1 dark:border-slate-700 dark:bg-slate-900">
              {(["en", "fa"] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setLanguage(item)}
                  className={`rounded px-3 py-1.5 text-xs font-semibold transition ${
                    language === item ? "bg-navy text-white dark:bg-blue-500" : "text-muted dark:text-slate-400"
                  }`}
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-navy dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </Container>
      </header>

      <section className="subtle-grid section-surface relative overflow-hidden border-b border-slate-200 py-20 dark:border-slate-800">
        <div className="noise-layer pointer-events-none absolute inset-0 opacity-[0.14]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-100/70 blur-3xl dark:bg-blue-500/16" />
        <Container className="relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <div>
              <Badge>{project.category}</Badge>
              <h1 className={`mt-6 max-w-4xl font-semibold leading-[1.08] text-navy dark:text-white ${isFa ? "text-3xl sm:text-5xl" : "text-4xl sm:text-6xl"}`}>
                {project.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted dark:text-slate-400">
                {project.summary}
              </p>
              <p className="mt-5 inline-flex rounded-md border border-blue-100 bg-blue-50 px-3 py-2 text-sm font-semibold text-accent dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-200">
                {isFa
                  ? "طراحی‌شده بر اساس مسئله‌های واقعی عملیاتی، نه دموهای نمایشی."
                  : "Built around real operational problems, not theoretical demo flows."}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-charcoal dark:bg-blue-500 dark:hover:bg-blue-400"
                  >
                    {isFa ? "مشاهده وب‌سایت" : "Visit Website"}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
                <a
                  href={contactLinks.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:border-blue-300 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                >
                  {isFa ? "گفتگو درباره پروژه مشابه" : "Discuss a similar system"}
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <ProjectVisual slug={project.slug} />
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <InfoBlock title={isFa ? "مسئله" : "Problem"} body={project.problem} />
            <InfoBlock title={isFa ? "راه‌حل" : "Solution"} body={project.solution} />
          </div>
        </Container>
      </section>

      <section className="section-surface border-y border-slate-200 py-20 dark:border-slate-800 sm:py-28">
        <Container>
          <SectionTitle title={isFa ? "چه چیزی ساختم" : "What I Built"} />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {project.whatIBuilt.map((item) => (
              <div key={item} className="card-premium rounded-lg p-5">
                <p className="text-sm leading-7 muted-copy">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionTitle title={isFa ? "ابزارها" : "Tools Used"} />
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-charcoal dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <SectionTitle title={isFa ? "اثر کسب‌وکار" : "Business Impact"} />
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {project.impactMetrics.map((metric) => (
                  <div key={metric.label} className="card-premium rounded-lg p-5">
                    <p className="text-2xl font-semibold text-ink dark:text-white">{metric.value}</p>
                    <p className="mt-2 text-sm muted-copy">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-surface border-y border-slate-200 py-20 dark:border-slate-800 sm:py-28">
        <Container>
          <SectionTitle title={isFa ? "فرآیند اجرا" : "Process"} />
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {project.process.map((step, index) => (
              <div key={step} className="card-premium rounded-lg p-5">
                <p className="text-sm font-semibold text-accent">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-3 text-sm leading-7 muted-copy">{step}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-16 text-white">
        <Container>
          <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <h2 className="text-3xl font-semibold">{isFa ? "به سیستم مشابه نیاز دارید؟" : "Need a similar system?"}</h2>
              <p className="mt-3 text-slate-300">{t.footer.positioning}</p>
            </div>
            <a
              href={contactLinks.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-navy"
            >
              {isFa ? "شروع گفتگو" : "Start a Conversation"}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}

function InfoBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="card-premium rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-ink dark:text-white">{title}</h2>
      <p className="mt-4 leading-8 muted-copy">{body}</p>
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return <h2 className="text-3xl font-semibold text-ink dark:text-white">{title}</h2>;
}

"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Moon,
  Phone,
  Send,
  Sun
} from "lucide-react";
import { AdditionalExpertise } from "@/components/AdditionalExpertise";
import { AIBusinessUseCases } from "@/components/AIBusinessUseCases";
import { AIToolStack } from "@/components/AIToolStack";
import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import { DataDivider } from "@/components/DataDivider";
import { EducationLearning } from "@/components/EducationLearning";
import { ExperienceSection } from "@/components/ExperienceSection";
import { HeroVisual } from "@/components/HeroVisual";
import { HowIHelp } from "@/components/HowIHelp";
import { ImpactDashboard } from "@/components/ImpactDashboard";
import { LivingSystemOrb } from "@/components/LivingSystemOrb";
import { MouseGlow } from "@/components/MouseGlow";
import { ProcessStep } from "@/components/ProcessStep";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { ScrollCompanion } from "@/components/ScrollCompanion";
import { SystemArchitecture } from "@/components/SystemArchitecture";
import { TechStackItem } from "@/components/TechStackItem";
import { WorkingPrinciples } from "@/components/WorkingPrinciples";
import { caseStudies } from "@/data/caseStudies";
import { contactLinks, content, type Language } from "@/data/content";

type Theme = "light" | "dark";

const contactIcons = [Mail, Linkedin, Send, MessageCircle, Instagram, Phone];

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);
  const t = content[language];
  const projects = caseStudies[language];
  const isFa = language === "fa";
  const isDark = theme === "dark";
  const headerNav =
    language === "fa"
      ? [
          { label: "کمک به کسب‌وکار", href: "#help" },
          { label: "کاربردهای AI", href: "#ai-use-cases" },
          { label: "پروژه‌ها", href: "#projects" },
          { label: "اثرگذاری", href: "#impact" },
          { label: "تجربه", href: "#experience" },
          { label: "ابزارها", href: "#tech" },
          { label: "تماس", href: "#contact" }
        ]
      : t.nav.items;
  const projectsSection = isFa
    ? {
        ...t.projectsSection,
        title: "نمونه‌هایی از تبدیل کارهای دستی و پراکنده به سیستم‌های شفاف‌تر.",
        description:
          "این پروژه‌ها همان منطق عارضه‌یابی بهره‌وری را نشان می‌دهند: پیدا کردن گلوگاه دستی، ساختاردهی داده، خودکارسازی کارهای تکراری و تبدیل گزارش‌ها به تصمیم‌گیری سریع‌تر مدیریتی."
      }
    : t.projectsSection;

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

  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  return (
    <main dir={isFa ? "rtl" : "ltr"} className="min-h-screen bg-offwhite text-ink transition-colors dark:bg-[#050a12] dark:text-slate-100">
      <MouseGlow />
      <ScrollCompanion language={language} />
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/82 backdrop-blur-xl transition-colors dark:border-slate-800 dark:bg-[#07111f]/82">
        <Container className="flex h-16 items-center justify-between gap-3">
          <a href="#hero" className="min-w-fit text-sm font-semibold tracking-normal text-navy dark:text-white">
            {t.nav.brand}
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-muted dark:text-slate-400 lg:flex">
            {headerNav.map((item) => (
              <a key={item.href} className="transition hover:text-ink dark:hover:text-white" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <div className="flex rounded-md border border-slate-200 bg-slate-50 p-1 dark:border-slate-700 dark:bg-slate-900">
              {(["en", "fa"] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setLanguage(item)}
                  className={`rounded px-3 py-1.5 text-xs font-semibold transition ${
                    language === item
                      ? "bg-navy text-white shadow-sm dark:bg-blue-500"
                      : "text-muted hover:bg-white hover:text-ink dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                  }`}
                  aria-pressed={language === item}
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-navy transition hover:border-blue-300 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-blue-400/50 dark:hover:bg-slate-800"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a
              href="#contact"
              className="hidden rounded-md bg-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-charcoal dark:bg-white dark:text-navy dark:hover:bg-blue-50 sm:inline-flex"
            >
              {t.nav.cta}
            </a>
          </div>
        </Container>
      </header>

      <section id="hero" className="subtle-grid relative overflow-hidden border-b border-slate-200 bg-white transition-colors dark:border-slate-800 dark:bg-[#07111f]">
        <div className="noise-layer pointer-events-none absolute inset-0 opacity-[0.16]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-100/80 blur-3xl dark:bg-blue-500/20" />
        <div className="pointer-events-none absolute bottom-10 right-0 h-80 w-80 rounded-full bg-cyan-100/70 blur-3xl dark:bg-cyan-400/16" />
        <Container className="relative grid items-center gap-8 py-12 md:min-h-[calc(100vh-4rem)] md:gap-10 md:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
          <Reveal>
            <div className="max-w-4xl">
              <Badge>{t.hero.badge}</Badge>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-accent dark:text-blue-200">
                {t.hero.name}
              </p>
              <h1 className={`text-balance mt-4 max-w-5xl font-semibold tracking-normal text-navy dark:text-white ${isFa ? "text-3xl leading-[1.45] sm:text-5xl sm:leading-[1.25] lg:text-6xl" : "text-4xl leading-[1.08] sm:text-6xl lg:text-7xl"}`}>
                {t.hero.headline}
              </h1>
              <p className={`mt-5 max-w-3xl text-base text-muted dark:text-slate-400 sm:text-xl ${isFa ? "leading-8 sm:leading-9" : "leading-7 sm:leading-8"}`}>
                <span className="md:hidden">{t.hero.shortSubheadline}</span>
                <span className="hidden md:inline">{t.hero.subheadline}</span>
              </p>
              <p className="mt-5 text-sm font-semibold text-charcoal dark:text-slate-300">
                {t.hero.microcopy}
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-md border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-semibold text-accent dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-200">
                <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.8)]" />
                {isFa ? "لایه سیستم زنده" : "Live system layer"}
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row md:mt-9">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-charcoal dark:bg-blue-500 dark:hover:bg-blue-400"
                >
                  {t.hero.primaryCta}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:border-blue-300 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-blue-400/50 dark:hover:bg-slate-800"
                >
                  {t.hero.secondaryCta}
                </a>
                {/* TODO: replace with actual PDF profile link. */}
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white/70 px-5 py-3 text-sm font-semibold text-navy transition hover:border-blue-300 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-900/70 dark:text-white dark:hover:border-blue-400/50 dark:hover:bg-slate-800"
                >
                  {t.hero.downloadProfile}
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {[contactLinks.email, contactLinks.linkedin, contactLinks.telegram].map((href, index) => (
                  <a
                    key={href}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="rounded-md border border-slate-200 bg-white/80 px-3 py-2 text-xs font-semibold text-muted transition hover:border-blue-200 hover:text-accent dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-blue-400/50"
                  >
                    {t.hero.quickLinks[index]}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="hidden md:grid md:gap-5">
              <HeroVisual isRtl={isFa} />
              <div className="mx-auto hidden lg:block">
                <LivingSystemOrb compact />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 md:hidden">
              {["AI", "KPI", "Flow"].map((item) => (
                <div key={item} className="card-premium rounded-lg p-3 text-center text-xs font-semibold text-accent">
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>
      <DataDivider />

      <HowIHelp language={language} />
      <DataDivider />

      <AIBusinessUseCases language={language} />
      <DataDivider />

      <section className="relative py-12 md:py-20 lg:py-28">
        <div className="pointer-events-none absolute left-0 top-24 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl dark:bg-blue-500/10" />
        <Container>
          <SectionHeader
            lang={language}
            eyebrow={t.whatIBuild.eyebrow}
            title={t.whatIBuild.title}
            description={t.whatIBuild.description}
          />
          <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-[1.2fr_1fr]">
            {t.whatIBuild.cards.map((area, index) => (
              <Reveal key={area.title} delay={index * 0.04}>
                <article className={`card-premium card-premium-hover relative overflow-hidden rounded-lg p-4 md:p-6 ${index === 0 ? "lg:row-span-2 lg:p-8" : ""}`}>
                  {index === 0 ? (
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-transparent" />
                  ) : null}
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-md bg-blue-50 text-xs font-semibold text-accent dark:bg-blue-400/10 dark:text-blue-200 md:mb-5 md:h-11 md:w-11 md:text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className={index === 0 ? "text-lg font-semibold text-ink dark:text-white md:text-2xl" : "text-base font-semibold text-ink dark:text-white md:text-xl"}>
                    {area.title}
                  </h3>
                  <p className="mt-2 mobile-clamp-2 text-xs leading-6 muted-copy md:mt-3 md:text-base md:leading-8">{area.description}</p>
                  {index === 0 ? (
                    <div className="mt-8 grid grid-cols-3 gap-3">
                      {["Data", "Flow", "AI"].map((item) => (
                        <div key={item} className="rounded-md border border-slate-200 bg-white/70 p-3 text-center text-xs font-semibold text-muted dark:border-slate-700 dark:bg-slate-950/50 dark:text-slate-300">
                          {item}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <DataDivider />

      <section className="section-surface border-y border-slate-200 py-12 dark:border-slate-800 md:py-20 lg:py-28">
        <Container>
          <SectionHeader
            lang={language}
            eyebrow={isFa ? "معماری سیستم" : "System Architecture"}
            title={isFa ? "چطور کار دستی را به سیستم دیجیتال تبدیل می‌کنم" : "How I Turn Manual Work Into Digital Systems"}
            description={
              isFa
                ? "یک سیستم عملی معمولاً از یک فرآیند دستی و پراکنده شروع می‌شود. ارزش اصلی در ساختاردهی داده، خودکارسازی جریان کار، ایجاد شفافیت و افزودن هوش مصنوعی در نقاطی است که تصمیم‌گیری را بهتر می‌کند."
                : "A practical system usually starts with messy manual work. The value comes from structuring the data, automating the workflow, building visibility, and adding AI only where it improves decisions."
            }
          />
          <Reveal>
            <SystemArchitecture language={language} />
          </Reveal>
        </Container>
      </section>
      <DataDivider />

      <section id="projects" className="border-y border-slate-200 bg-white py-12 transition-colors dark:border-slate-800 dark:bg-[#07111f] md:py-20 lg:py-28">
        <Container>
          <SectionHeader
            lang={language}
            eyebrow={projectsSection.eyebrow}
            title={projectsSection.title}
            description={projectsSection.description}
          />
          <p className="mb-3 text-xs font-semibold text-muted dark:text-slate-400 lg:hidden">
            {isFa ? "پروژه‌ها را افقی مرور کنید" : "Swipe projects"}
          </p>
          <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:snap-none md:overflow-visible md:pb-0 lg:grid-cols-12 lg:gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`min-w-[85vw] snap-start md:w-auto md:min-w-0 ${
                  index === 0
                    ? "md:col-span-2 lg:col-span-7"
                    : index === 1
                      ? "lg:col-span-5"
                      : "lg:col-span-4"
                }`}
              >
                <Reveal delay={index * 0.04}>
                  <ProjectCard project={project} labels={t.projectsSection.labels} />
                </Reveal>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <DataDivider />

      <ExperienceSection language={language} />
      <DataDivider />

      <section className="py-12 md:py-20 lg:py-28">
        <Container>
          <SectionHeader
            lang={language}
            eyebrow={t.proof.eyebrow}
            title={t.proof.title}
            description={t.proof.description}
          />
          <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-[1fr_1.15fr_1fr_1.15fr]">
            {t.proof.cards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.04}>
                <article className="card-premium card-premium-hover h-full rounded-lg p-4 md:p-6">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md bg-blue-50 text-xs font-semibold text-accent dark:bg-blue-400/10 dark:text-blue-200 md:mb-5 md:h-10 md:w-10 md:text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-base font-semibold text-ink dark:text-white md:text-xl">{card.title}</h3>
                  <p className="mt-2 mobile-clamp-2 text-xs leading-6 text-muted dark:text-slate-400 md:mt-3 md:text-base md:leading-7">{card.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <DataDivider />

      <section id="impact" className="relative py-12 md:py-20 lg:py-28">
        <div className="pointer-events-none absolute right-10 top-16 h-64 w-64 rounded-full bg-cyan-100/50 blur-3xl dark:bg-cyan-400/12" />
        <Container>
          <SectionHeader
            lang={language}
            eyebrow={t.impact.eyebrow}
            title={t.impact.title}
            description={t.impact.description}
          />
          <Reveal>
            <ImpactDashboard lang={language} data={t.impact} />
          </Reveal>
        </Container>
      </section>
      <DataDivider />

      <section id="process" className="section-surface border-y border-slate-200 py-12 dark:border-slate-800 md:py-20 lg:py-28">
        <Container>
          <SectionHeader
            lang={language}
            eyebrow={t.process.eyebrow}
            title={t.process.title}
            description={t.process.description}
          />
          <div className="relative grid gap-3 sm:grid-cols-2 md:gap-5 lg:grid-cols-5">
            <div className="absolute left-0 right-0 top-10 hidden h-px overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800 lg:block">
              <div className="h-full w-2/3 bg-gradient-to-r from-blue-600 to-cyan-400" />
            </div>
            {t.process.steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.04}>
                <ProcessStep index={index} title={step.title} description={step.description} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <DataDivider />

      <section id="tech" className="subtle-grid py-12 md:py-20 lg:py-28">
        <Container>
          <SectionHeader
            lang={language}
            eyebrow={t.techStack.eyebrow}
            title={t.techStack.title}
            description={t.techStack.description}
          />
          <div className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 lg:grid lg:grid-cols-4 lg:gap-5 lg:overflow-visible lg:pb-0">
            {t.techStack.groups.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.04}>
                <div className="card-premium card-premium-hover h-full min-w-[78vw] snap-start rounded-lg p-4 lg:min-w-0 lg:p-5">
                  <h3 className="text-lg font-semibold text-ink dark:text-white">{group.title}</h3>
                  <div className="mt-5 grid gap-3">
                    {group.items.map((item) => (
                      <TechStackItem key={item} name={item} />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <AIToolStack language={language} />
        </Container>
      </section>

      <WorkingPrinciples language={language} />
      <DataDivider />

      <EducationLearning language={language} />

      <section id="about" className="border-y border-slate-200 bg-white py-12 transition-colors dark:border-slate-800 dark:bg-[#07111f] md:py-20 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeader lang={language} eyebrow={t.about.eyebrow} title={t.about.title} />
            <Reveal>
              <div className="glass-panel rounded-lg p-6 sm:p-8">
                <p className="text-lg leading-8 muted-copy">{t.about.body}</p>
                <AdditionalExpertise language={language} />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="contact" className="relative overflow-hidden bg-navy py-12 text-white md:py-20 lg:py-28">
        <div className="noise-layer pointer-events-none absolute inset-0 opacity-20" />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className={isFa ? "mb-3 text-sm font-semibold text-blue-200" : "mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-200"}>
                {t.contact.eyebrow}
              </p>
              <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">
                {t.contact.title}
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
                {t.contact.description}
              </p>
              <div className="mt-7 rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-2xl">
                <p className="font-semibold text-white">{t.contact.bestForTitle}</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                  {t.contact.bestFor.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={contactLinks.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:bg-blue-50"
                >
                  <Send className="h-4 w-4" />
                  {t.contact.primaryCta}
                </a>
                <a
                  href={contactLinks.email}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <Mail className="h-4 w-4" />
                  {t.contact.secondaryCta}
                </a>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {t.contact.methods.map((method, index) => {
                const Icon = contactIcons[index] ?? Mail;
                return (
                  <Reveal key={method.href} delay={index * 0.03}>
                    <a
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                      className={`group flex min-h-24 items-center gap-4 rounded-lg border border-white/10 bg-white/[0.06] p-4 transition hover:-translate-y-1 hover:border-blue-300/50 hover:bg-white/[0.1] ${index === 0 ? "sm:col-span-2" : ""}`}
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white text-navy transition group-hover:bg-blue-100">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-white">{method.label}</span>
                        <span className="mt-1 block break-all text-sm text-slate-300">{method.value}</span>
                      </span>
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <footer className="border-t border-slate-200 bg-white pb-28 pt-10 transition-colors dark:border-slate-800 dark:bg-[#050a12] md:pb-10">
        <Container>
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-lg font-semibold text-navy dark:text-white">{t.meta.name}</p>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-muted dark:text-slate-400">
                {t.footer.positioning}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {t.contact.methods.map((method, index) => {
                const Icon = contactIcons[index] ?? Mail;
                return (
                  <a
                    key={method.href}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={method.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-muted transition hover:border-blue-300 hover:text-accent dark:border-slate-700 dark:text-slate-400 dark:hover:border-blue-400/50 dark:hover:text-blue-200"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
          <p className="mt-8 text-sm text-muted dark:text-slate-500">
            © {new Date().getFullYear()} {t.meta.name}. {t.footer.copyright}
          </p>
        </Container>
      </footer>
      <div className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-2 gap-2 rounded-lg border border-slate-200 bg-white/92 p-2 shadow-premium backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/92 md:hidden">
        <a
          href={contactLinks.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-3 py-3 text-sm font-semibold text-white"
        >
          <Send className="h-4 w-4" />
          {isFa ? "تلگرام" : "Telegram"}
        </a>
        <a
          href={contactLinks.email}
          className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 px-3 py-3 text-sm font-semibold text-navy dark:border-slate-700 dark:text-white"
        >
          <Mail className="h-4 w-4" />
          {isFa ? "ایمیل" : "Email"}
        </a>
      </div>
    </main>
  );
}

import { ArrowUpRight, Mail } from "lucide-react";
import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import { MetricCard } from "@/components/MetricCard";
import { ProcessStep } from "@/components/ProcessStep";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { TechStackItem } from "@/components/TechStackItem";
import {
  buildAreas,
  impactMetrics,
  processSteps,
  projects,
  techStackGroups
} from "@/data/projects";

const processDescription =
  "I start by understanding the current workflow, then design a cleaner data structure, automate repetitive steps, build reporting dashboards, and add AI-assisted decision support where it creates real business value.";

export default function Home() {
  return (
    <main className="min-h-screen bg-offwhite text-ink">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <a href="#hero" className="text-sm font-semibold tracking-normal text-navy">
            AI Systems Strategist
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-muted md:flex">
            <a className="transition hover:text-ink" href="#projects">Projects</a>
            <a className="transition hover:text-ink" href="#metrics">Impact</a>
            <a className="transition hover:text-ink" href="#process">Process</a>
            <a className="transition hover:text-ink" href="#about">About</a>
          </nav>
          <a
            href="#contact"
            className="rounded-md bg-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-charcoal"
          >
            Contact Me
          </a>
        </Container>
      </header>

      <section id="hero" className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-100/70 blur-3xl" />
        <Container className="relative grid min-h-[calc(100vh-4rem)] items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div>
              <Badge>AI Automation & Digital Systems Strategist</Badge>
              <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.05] tracking-normal text-navy sm:text-6xl lg:text-7xl">
                Building AI-Powered Digital Systems for B2B & Industrial Businesses
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
                I design automation workflows, dashboards, SEO-driven websites, and AI-assisted reporting systems that help traditional businesses reduce manual work, improve visibility, and make faster decisions.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-charcoal"
                >
                  View Projects
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:border-blue-300 hover:bg-blue-50"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
              <div className="border-b border-slate-200 pb-5">
                <p className="text-sm font-medium text-muted">System Focus</p>
                <h2 className="mt-2 text-2xl font-semibold text-ink">Automation, reporting, and digital growth infrastructure</h2>
              </div>
              <div className="grid gap-3 py-5">
                {[
                  "Workflow automation",
                  "KPI dashboards",
                  "SEO-driven websites",
                  "AI-assisted reporting"
                ].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-md bg-slate-50 px-4 py-3">
                    <span className="text-sm font-medium text-charcoal">{item}</span>
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Active</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3 border-t border-slate-200 pt-5">
                {["B2B", "Ops", "AI"].map((item) => (
                  <div key={item} className="rounded-md border border-slate-200 p-4 text-center">
                    <p className="text-2xl font-semibold text-navy">{item}</p>
                    <p className="mt-1 text-xs text-muted">systems</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="What I Build"
            title="Practical systems for traditional businesses becoming more digital."
            description="The work is focused on reducing manual effort, improving reporting quality, and making business operations easier to manage."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {buildAreas.map((area, index) => (
              <Reveal key={area.title} delay={index * 0.04}>
                <article className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-blue-200">
                  <h3 className="text-xl font-semibold text-ink">{area.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{area.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="projects" className="border-y border-slate-200 bg-white py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Featured Projects"
            title="Industrial automation, B2B websites, dashboards, and AI reporting concepts."
            description="Each project is structured around a real business problem, the system designed to solve it, and the operational outcomes it supports."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.04}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="metrics" className="py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Impact Metrics"
            title="Built around measurable operational improvement."
            description="The goal is not just cleaner tools. It is faster reporting, fewer errors, clearer ownership, and better management visibility."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {impactMetrics.map((metric, index) => (
              <Reveal key={metric.label} delay={index * 0.04}>
                <MetricCard value={metric.value} label={metric.label} />
              </Reveal>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted">
            Metrics are based on internal project goals and operational improvement estimates.
          </p>
        </Container>
      </section>

      <section id="process" className="border-y border-slate-200 bg-white py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Process"
            title="A clear path from messy workflow to smarter system."
            description={processDescription}
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <Reveal key={step} delay={index * 0.04}>
                <ProcessStep index={index} title={step} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Tech Stack"
            title="Tools chosen for speed, clarity, and maintainability."
            description="The stack stays close to what B2B teams can actually adopt, operate, and improve over time."
          />
          <div className="grid gap-5 lg:grid-cols-4">
            {techStackGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.04}>
                <div className="h-full rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
                  <h3 className="text-lg font-semibold text-ink">{group.title}</h3>
                  <div className="mt-5 grid gap-3">
                    {group.items.map((item) => (
                      <TechStackItem key={item} name={item} />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="about" className="border-y border-slate-200 bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeader
              eyebrow="About"
              title="A systems-minded strategist for B2B and industrial operations."
            />
            <Reveal>
              <div className="rounded-lg border border-slate-200 bg-offwhite p-6 shadow-soft sm:p-8">
                <p className="text-lg leading-8 text-muted">
                  I work at the intersection of AI automation, digital marketing, and business operations. My focus is on building practical systems that help traditional and B2B companies reduce manual work, improve reporting, and grow through smarter digital infrastructure.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="contact" className="bg-navy py-20 text-white sm:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">Contact CTA</p>
              <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">
                Let's build a smarter system for your business.
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
                If you need a website, dashboard, automation workflow, or AI-assisted reporting system, this portfolio shows the kind of practical systems I build.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:bg-blue-50"
              >
                <Mail className="h-4 w-4" />
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                LinkedIn
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

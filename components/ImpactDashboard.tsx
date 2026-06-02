"use client";

import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import type { Language } from "@/data/content";

type ChartPoint = {
  name: string;
  value: number;
};

type ImpactDashboardProps = {
  lang: Language;
  data: {
    note: string;
    metricCards: readonly { value: string; label: string }[];
    projectImpact: readonly ChartPoint[];
    workflowStages: readonly ChartPoint[];
    automationCoverage: readonly ChartPoint[];
  };
};

const coverageColors = ["#2563eb", "#06b6d4", "#38bdf8", "#64748b", "#0f172a"];

function Panel({
  title,
  children
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="card-premium rounded-lg p-3 md:p-4">
      <h3 className="mb-4 text-sm font-semibold text-ink dark:text-slate-100">{title}</h3>
      <div className="h-56 md:h-64">{children}</div>
    </div>
  );
}

export function ImpactDashboard({ lang, data }: ImpactDashboardProps) {
  const [activeChart, setActiveChart] = useState<"impact" | "workflow" | "coverage">("impact");
  const isFa = lang === "fa";
  const projectImpact = [...data.projectImpact];
  const workflowStages = [...data.workflowStages];
  const automationCoverage = [...data.automationCoverage];
  const tooltipStyle = {
    border: "1px solid rgba(148, 163, 184, 0.35)",
    borderRadius: 8,
    background: "rgba(8, 17, 31, 0.92)",
    color: "#f8fafc",
    boxShadow: "0 18px 60px rgba(8, 17, 31, 0.18)"
  };

  const chartTabs = [
    { id: "impact", label: isFa ? "اثر پروژه" : "Impact" },
    { id: "workflow", label: isFa ? "فرآیند" : "Workflow" },
    { id: "coverage", label: isFa ? "پوشش" : "Coverage" }
  ] as const;

  return (
    <div className="glass-panel subtle-grid rounded-xl p-4 sm:p-6">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {data.metricCards.map((metric, index) => (
          <motion.div
            key={metric.label}
            className="card-premium rounded-lg p-4 sm:p-5"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
          >
            <p className="text-2xl font-semibold text-ink dark:text-white sm:text-3xl">{metric.value}</p>
            <p className={`mt-2 text-xs text-muted dark:text-slate-400 sm:text-sm ${isFa ? "leading-7" : ""}`}>{metric.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-5 flex gap-2 lg:hidden">
        {chartTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveChart(tab.id)}
            className={`flex-1 rounded-md border px-3 py-2 text-xs font-semibold transition ${
              activeChart === tab.id
                ? "border-blue-300 bg-blue-50 text-accent dark:border-blue-400/40 dark:bg-blue-400/10 dark:text-blue-200"
                : "border-slate-200 bg-white text-muted dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-5 lg:hidden">
        {activeChart === "impact" ? (
          <Panel title={isFa ? "مقایسه اثر پروژه‌ها" : "Project Impact Comparison"}>
            <ImpactBar data={projectImpact} isFa={isFa} tooltipStyle={tooltipStyle} />
          </Panel>
        ) : null}
        {activeChart === "workflow" ? (
          <Panel title={isFa ? "رشد بلوغ جریان کاری" : "Workflow Improvement Stages"}>
            <WorkflowLine data={workflowStages} tooltipStyle={tooltipStyle} />
          </Panel>
        ) : null}
        {activeChart === "coverage" ? (
          <Panel title={isFa ? "پوشش اتوماسیون" : "Automation Coverage"}>
            <CoveragePie data={automationCoverage} tooltipStyle={tooltipStyle} />
          </Panel>
        ) : null}
      </div>

      <div className="mt-6 hidden gap-5 lg:grid xl:grid-cols-[1.1fr_1fr]">
        <Panel title={isFa ? "مقایسه اثر پروژه‌ها" : "Project Impact Comparison"}>
          <ImpactBar data={projectImpact} isFa={isFa} tooltipStyle={tooltipStyle} />
        </Panel>

        <Panel title={isFa ? "رشد بلوغ جریان کاری" : "Workflow Improvement Stages"}>
          <WorkflowLine data={workflowStages} tooltipStyle={tooltipStyle} />
        </Panel>
      </div>

      <div className="mt-5 hidden gap-5 lg:grid lg:grid-cols-[0.9fr_1.1fr]">
        <Panel title={isFa ? "پوشش اتوماسیون" : "Automation Coverage"}>
          <CoveragePie data={automationCoverage} tooltipStyle={tooltipStyle} />
        </Panel>
        <div className="card-premium rounded-lg p-5">
          <p className="text-sm font-semibold text-ink dark:text-slate-100">
            {isFa ? "لایه‌های اثرگذاری سیستم" : "System Impact Layers"}
          </p>
          <div className="mt-5 grid gap-3">
            {automationCoverage.map((item) => (
              <div key={item.name}>
                <div className="mb-2 flex items-center justify-between gap-4 text-sm text-muted dark:text-slate-400">
                  <span>{item.name}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-muted dark:text-slate-400">{data.note}</p>
        </div>
      </div>
    </div>
  );
}

function ImpactBar({
  data,
  isFa,
  tooltipStyle
}: {
  data: ChartPoint[];
  isFa: boolean;
  tooltipStyle: CSSProperties;
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 8, right: 8, left: -18, bottom: 28 }}>
        <CartesianGrid stroke="#334155" strokeDasharray="3 3" vertical={false} opacity={0.18} />
        <XAxis dataKey="name" tick={{ fill: "#94a3b8", fontSize: 10 }} interval={0} angle={isFa ? 0 : -18} textAnchor={isFa ? "middle" : "end"} height={58} />
        <YAxis tick={{ fill: "#94a3b8", fontSize: 11 }} axisLine={false} tickLine={false} />
        <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "rgba(37, 99, 235, 0.08)" }} />
        <Bar dataKey="value" radius={[6, 6, 0, 0]} fill="#2563eb" />
      </BarChart>
    </ResponsiveContainer>
  );
}

function WorkflowLine({
  data,
  tooltipStyle
}: {
  data: ChartPoint[];
  tooltipStyle: CSSProperties;
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 12, right: 12, left: -18, bottom: 18 }}>
        <CartesianGrid stroke="#334155" strokeDasharray="3 3" vertical={false} opacity={0.18} />
        <XAxis dataKey="name" tick={{ fill: "#94a3b8", fontSize: 10 }} />
        <YAxis tick={{ fill: "#94a3b8", fontSize: 11 }} axisLine={false} tickLine={false} />
        <Tooltip contentStyle={tooltipStyle} />
        <Line type="monotone" dataKey="value" stroke="#06b6d4" strokeWidth={3} dot={{ r: 4, fill: "#2563eb", strokeWidth: 0 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

function CoveragePie({
  data,
  tooltipStyle
}: {
  data: ChartPoint[];
  tooltipStyle: CSSProperties;
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" innerRadius={50} outerRadius={82} paddingAngle={3}>
          {data.map((entry, index) => (
            <Cell key={entry.name} fill={coverageColors[index % coverageColors.length]} />
          ))}
        </Pie>
        <Tooltip contentStyle={tooltipStyle} />
      </PieChart>
    </ResponsiveContainer>
  );
}

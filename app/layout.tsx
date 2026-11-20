import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteUrl } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ilia Behboodi | AI Agents & Digital Systems",
  description:
    "Ilia Behboodi builds AI agents, document libraries, sales and reporting tools, and websites for B2B and industrial operations. Explore project case studies and public GitHub repositories.",
  keywords: [
    "Ilia Behboodi",
    "AI Automation",
    "Digital Systems",
    "Workflow Automation",
    "Business Process Automation",
    "KPI Dashboard",
    "KPI Dashboards",
    "AI Business Automation",
    "AI Reporting Systems",
    "Operational Dashboards",
    "B2B Digital Systems",
    "Google Apps Script",
    "n8n",
    "B2B Marketing",
    "Industrial SEO",
    "Digital Transformation",
    "Management Reporting"
  ],
  alternates: {
    canonical: `${siteUrl}/`
  },
  openGraph: {
    title: "Ilia Behboodi | AI Agents & Digital Systems",
    description:
      "Selected case studies in AI agents, knowledge systems, sales workflows, industrial operations, and B2B websites.",
    type: "website",
    url: `${siteUrl}/`,
    siteName: "Ilia Behboodi Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ilia Behboodi | AI Agents & Digital Systems",
    description:
      "AI agent starters, document libraries and digital systems for business and industrial teams."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

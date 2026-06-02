import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ilia Behboodi | AI Automation & Digital Systems Strategist",
  description:
    "Portfolio of Ilia Behboodi, an AI Automation and Digital Systems Strategist building workflow automation, dashboards, SEO-driven websites, AI-assisted reporting systems, and digital infrastructure for B2B and industrial businesses.",
  keywords: [
    "Ilia Behboodi",
    "AI Automation",
    "Digital Systems",
    "Workflow Automation",
    "Business Process Automation",
    "KPI Dashboard",
    "Google Apps Script",
    "n8n",
    "B2B Marketing",
    "Industrial SEO",
    "Digital Transformation",
    "Management Reporting"
  ],
  alternates: {
    canonical: "https://iliabehboodi.com"
  },
  openGraph: {
    title: "Ilia Behboodi | AI Automation & Digital Systems Strategist",
    description:
      "Workflow automation, dashboards, SEO-driven websites, AI-assisted reporting systems, and digital infrastructure for B2B and industrial businesses.",
    type: "website",
    url: "https://iliabehboodi.com",
    siteName: "Ilia Behboodi Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ilia Behboodi | AI Automation & Digital Systems Strategist",
    description:
      "AI automation, KPI dashboards, industrial SEO, and digital systems for B2B and industrial businesses."
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

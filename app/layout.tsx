import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Automation & Digital Systems Strategist",
  description:
    "Premium portfolio for AI automation, dashboards, SEO, digital marketing, and business process automation for B2B and industrial teams."
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

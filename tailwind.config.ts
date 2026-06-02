import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#08111f",
        charcoal: "#17202e",
        ink: "#101828",
        muted: "#667085",
        accent: "#2563eb",
        offwhite: "#f8fafc",
        skyline: "#e6f0ff"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(8, 17, 31, 0.08)",
        premium: "0 28px 90px rgba(8, 17, 31, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;

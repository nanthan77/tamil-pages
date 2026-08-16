import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ca: {
          red: "#E00624",
          "red-dark": "#B0041B",
          "red-deep": "#7E0010",
          navy: "#002D62",
          "navy-dark": "#0B1D3A",
          "navy-light": "#0A4D92",
          cobalt: "#1E60B5",
          ice: "#F0F7FF",
          "ice-border": "#CCE3F8",
          snow: "#FAFCFF",
          mist: "#F1F5F9",
          ink: "#0F172A",
          slate: "#334155",
          muted: "#64748B",
        },
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
        work: ["var(--font-work)", "sans-serif"],
        tamil: ["var(--font-tamil)", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -5px rgba(0, 45, 98, 0.08), 0 4px 12px -2px rgba(224, 6, 36, 0.06)",
        "card-hover": "0 20px 35px -5px rgba(0, 45, 98, 0.14), 0 8px 16px -2px rgba(224, 6, 36, 0.12)",
        glow: "0 0 25px rgba(224, 6, 36, 0.25)",
        "navy-glow": "0 0 25px rgba(0, 45, 98, 0.3)",
      },
    },
  },
  plugins: [],
} satisfies Config;

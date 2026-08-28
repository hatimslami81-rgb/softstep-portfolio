import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-elev": "var(--bg-elev)",
        "bg-elev-2": "var(--bg-elev-2)",
        border: "var(--border)",
        text: "var(--text)",
        "text-muted": "var(--text-muted)",
        cyan: {
          DEFAULT: "var(--brand-cyan)",
          soft: "var(--brand-cyan-soft)",
        },
        navy: {
          DEFAULT: "var(--brand-navy)",
          deep: "var(--brand-navy-deep)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        arabic: ["var(--font-arabic)", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-cyan) 100%)",
        "brand-radial":
          "radial-gradient(circle at 50% 50%, var(--brand-cyan) 0%, transparent 70%)",
      },
      boxShadow: {
        glow: "0 0 60px -15px var(--brand-cyan)",
        card: "0 8px 30px -10px rgba(0, 0, 0, 0.5)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.9" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;

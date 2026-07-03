import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#0e0e10",
        "surface-2": "#17171a",
        foreground: "#f2f1ec",
        muted: "#8c8c93",
        border: "rgba(255,255,255,0.08)",
        gold: {
          DEFAULT: "#cba135",
          light: "#e4c368",
          dark: "#9c7c24",
        },
        emerald: {
          DEFAULT: "#34d399",
          dark: "#0f9d63",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(203,161,53,0.15), transparent 60%)",
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
  },
  plugins: [],
};

export default config;

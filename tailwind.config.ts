import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#d62828",
          dark: "#a4161a",
          light: "#f77f6a"
        },
        espresso: "#2f1b12",
        parchment: "#fff4e6"
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "grainy-texture":
          "radial-gradient(circle at 25px 25px, rgba(255,255,255,0.05) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(0,0,0,0.08) 1%, transparent 0%)"
      }
    }
  },
  plugins: []
};

export default config;

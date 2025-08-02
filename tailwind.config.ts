import type { Config } from "tailwindcss";

/**
 * Tailwind CSS configuration.
 * - Custom colors and fonts for the portfolio.
 * - Content paths for purging unused styles.
 */

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./src/styles/**/*.{css,scss}",
    "./src/app/**/*.tsx",
    "./src/components/**/*.tsx",
  ],

  theme: {
    extend: {
      backgroundColor: {
        DEFAULT: "#0a192f",
      },
      colors: {
        background: "#0a192f", // Bleu nuit sombre
        accent: "#3b82f6", // Bleu principal
        accentLight: "#60a5fa", // Bleu plus clair
        accentDark: "#1e3a8a", // Bleu foncé
        gradientStart: "#8490ff",
        gradientEnd: "#62bdfc",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

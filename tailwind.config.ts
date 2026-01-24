import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0A0E14",
        steel: "#1A1F2E",
        titanium: "#C0C5CE",
        midnight: "#1E3A5F",
        border: "rgba(255, 255, 255, 0.1)",
      },
      backgroundImage: {
        "gradient-tech": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "gradient-success": "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
        "gradient-premium": "linear-gradient(135deg, #ffd89b 0%, #19547b 100%)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        arabic: ["var(--font-cairo)", "system-ui", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightgray: "#f4f5f7",
        mediumblue: "#0077cc",
        warmorange: "#ff8a00",
        darkgray: "#333333",
        midgray: "#555555",
        darkbackground: "#1e1e1e",
        brightorange: "#FF9800",
        cyanblue: "#00E5FF"
      },
      screens: {
        "3xl": "1780px"
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar")
  ],
};
export default config;

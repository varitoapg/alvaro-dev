/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#001f3f",
        secondary: "#00BFA6",
        "secondary-accent": "#FFC107",
        background: "#DDDDDD",
        "background-dark": "#0D091C",
        "main-text": "#333333",
        "main-text-dark": "#E0E0E0",
        "secondary-text-dark": "#0A0A0A",
        "border-color": "#CCCCCC"
      },
      fontFamily: {
        "main-font": ["Inter", "sans-serif"],
        "secondary-font": ["Poppins", "sans-serif"]
      },
      boxShadow: {
        "dark-lg":
          "0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.5)",
        "dark-sm-soft":
          "0 5px 10px -3px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.3)",
        "dark-glow":
          "0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.1)",
        "dark-xs-glow":
          "0 4px 6px -1px rgba(255, 255, 255, 0.05), 0 2px 4px -1px rgba(255, 255, 255, 0.05)"
      },
      maxWidth: {
        "70ch": "70ch"
      }
    }
  },

  plugins: [require("tailwind-scrollbar-hide")]
};

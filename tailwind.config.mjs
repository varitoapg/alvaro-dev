/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#001f3f",
        "primary-accent": "#7FDBFF",
        secondary: "#147B20",
        "secondary-accent": "#FF851B",
        background: "#DDDDDD",
        "main-text": "#333333",
        "border-color": "#CCCCCC",
        hover: "#FF4136"
      },
      fontFamily: {
        "main-font": ["Inter", "sans-serif"],
        "secondary-font": ["Poppins", "sans-serif"]
      },
      boxShadow: {
        "dark-lg":
          "0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.5)",
        "dark-sm-soft":
          "0 5px 10px -3px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.3)" // Smaller and less harsh shadow
      },
      maxWidth: {
        "70ch": "70ch"
      }
    }
  },

  plugins: [require("tailwind-scrollbar-hide")]
};

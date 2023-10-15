/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero_img: "url('/assets/images/tool_image.png')",
        about_img: "url('/assets/images/aboutus/aboutbg.jpg')",
      },
      colors: {
        dark: "#111827", //dark purple
        medium: "#581C87", // medium purple
        light: "#7C3AED", // light purple
        // primary_one: {
        //   50: "#faf5ff",
        //   100: "#f3e8ff",
        //   200: "#e9d5ff",
        //   300: "#d8b4fe",
        //   400: "#c084fc",
        //   500: "#a855f7",
        //   600: "#9333ea",
        //   700: "#7e22ce",
        //   800: "#6b21a8",
        //   900: "#581c87",
        //   950: "#3b0764",
        // },
        primary: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
          950: "#2e1065",
        },
        secondary: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

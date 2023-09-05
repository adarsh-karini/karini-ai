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
      },
      colors: {
        dark: "#111827", //dark purple
        medium: "#581C87", // medium purple
        light: "#7C3AED", // light purple
        primary: {
          50: "#faf5ff",
          200: "#e9d5ff",
          600: "#9333ea",
          900: "#581c87",
        },
        gray: {
          100: "#f3f4f6",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          800: "#1f2937",
        },
      },
    },
  },
  plugins: [],
};

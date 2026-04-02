/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B1F3A",
        nav: "#10284A",
        secondary: "#F4F6F8",
        accent: "#C28A34",
        slateWarm: "#5A6678",
        borderSoft: "#D8DEE6",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(11, 31, 58, 0.08)",
      },
      maxWidth: {
        content: "1200px",
      },
      fontFamily: {
        sans: ["Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

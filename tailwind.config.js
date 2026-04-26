/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}", "./*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    "bg-blue-500", "bg-emerald-500", "bg-red-500", "bg-amber-500", "bg-purple-500",
    "text-blue-400", "text-emerald-400", "text-red-400", "text-amber-400", "text-purple-400",
  ],
};

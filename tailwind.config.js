/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  // Wichtig: dynamische Klassen aus COLOR_MAP sicher behalten
  safelist: [
    "bg-blue-500/10", "border-blue-500", "text-blue-300", "bg-blue-500",
    "bg-emerald-500/10", "border-emerald-500", "text-emerald-300", "bg-emerald-500",
    "bg-red-500/10", "border-red-500", "text-red-300", "bg-red-500",
    "bg-amber-500/10", "border-amber-500", "text-amber-300", "bg-amber-500",
    "bg-purple-500/10", "border-purple-500", "text-purple-300", "bg-purple-500",
  ],
};

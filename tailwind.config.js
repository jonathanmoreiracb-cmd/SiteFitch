/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b0b0b",
        stone: "#f4f4f2",
        accent: "#0f766e",
        gold: "#c7a34d"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.08)"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem"
      }
    },
    fontFamily: {
      sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      brand: ["var(--font-playfair)", "ui-serif", "Georgia", "serif"]
    }
  },
  plugins: []
};

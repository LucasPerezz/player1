/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "grid-home": "0.2fr 1.7fr"
      }
    },
  },
  plugins: [],
}

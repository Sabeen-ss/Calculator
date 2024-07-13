/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '60px': '60px',
      },
      lineHeight: {
        '60px': '60px',
      },
    },
  },
  plugins: [],
}

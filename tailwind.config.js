/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],

  theme: {
    extend: {
      FontFamily: {
        sans: ['Source Sans 3', 'sans-serif'],
      },
      fontWeight: {
        regular: 400,
        bold: 700,
      },
    },
  },
  plugins: [],
}


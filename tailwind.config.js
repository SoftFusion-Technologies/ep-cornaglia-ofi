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
      backgroundColor: {
        'black-70': 'rgba(0, 0, 0, 0.7)', // Negro con opacidad del 70%
        'black-80': 'rgba(0, 0, 0, 0.8)', // Negro con opacidad del 80%
      },
      borderWidth: {
        '2': '2px',
        '4': '4px',
      },
      colors: {
        'custom-blue': 'rgb(0, 148, 221)', // Añade el color personalizado si no está ya en tu configuración
      },
    },
  },
  plugins: [
  ],
}


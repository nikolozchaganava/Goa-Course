/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '3xl': '1.875rem',
      },
      colors: {
        red: {
          400: '#fc8181',
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.heading-after::after': {
          content: '"20% discount"',
          display: 'block',
          fontWeight: 'bold',
          fontSize: '1.875rem',
          color: '#fc8181',
          position: 'absolute',
          bottom: '-2.5rem',
        },
      });
    },
  ],
}

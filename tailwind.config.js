/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        plum: '#47284A',
        onyx: '#1A1A1A',
        gold: '#D4AF37',
        ivory: '#FDFBF5',
        alabaster: '#EFEFEF',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Source Sans Pro"', 'sans-serif'],
      },
      letterSpacing: {
        extra: '0.2em',
      }
    },
  },
  plugins: [],
}
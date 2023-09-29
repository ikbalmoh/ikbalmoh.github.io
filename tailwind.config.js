/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        exo: ['Exo', 'sans-serif']
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px'
      }
    }
  },
  plugins: []
}

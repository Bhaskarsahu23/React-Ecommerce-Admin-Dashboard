/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkblue: '#000220',
      },
      flexBasis: {
        20: '18%',
        80: '82%',
      },
      fontFamily: {
        playFairDisplay: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        bs: '11px 1px 10px -1px rgba(92,88,92,0.78)',
      },
    },
  },
  plugins: [],
};

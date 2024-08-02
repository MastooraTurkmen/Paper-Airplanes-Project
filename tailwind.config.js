/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { primary: '#1E1D2F', secondary: '#FF8704' },
    },
  },
  plugins: [require('daisyui')],
};

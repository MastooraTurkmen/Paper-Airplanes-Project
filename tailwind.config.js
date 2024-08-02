import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E1D2F',
        secondary: '#FF8704',
      },
      fontFamily: {
        pop: ['var(--font-sora)', ...fontFamily.sans],
      },
    },
  },
  plugins: [require('daisyui')],
};

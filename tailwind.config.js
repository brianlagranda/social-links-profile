/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        tPrimary: 'hsl(0, 0%, 100%)',
        tSecondary: 'hsl(75, 94%, 57%)',
        bgButton: 'hsl(0, 0%, 20%)',
        bgPrimary: 'hsl(0, 0%, 8%)',
        bgSecondary: 'hsl(0, 0%, 12%)',
      },
      fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

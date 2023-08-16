/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      // pizza: 'Roboto Mono, monospace',
      // sans: 'Montserrat', // use font-pizza
      sans: 'Poppins', // use font-pizza
    },
    extend: {
      colors: {
        pizza: '#123456', // use bg-pizza
      },
      fontSize: {
        huge: ['80rem', { lineHeight: '1' }], // use text-huge
      },
      height: {
        screen: '100dvh', // use h-screen, overwrited 100vh to 100dvh dynamic view height
      },
    },
  },
  plugins: [],
};

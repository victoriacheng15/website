/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // disable Tailwind's reset
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./docs/**/**/*.mdx"],
  theme: {
    extend: {
      colors: {
        'midnight': {
          DEFAULT: '#00172E',
          '50': '#61B0FF',
          '100': '#4DA6FF',
          '200': '#2491FF',
          '300': '#007DFA',
          '400': '#0069D1',
          '500': '#0054A8',
          '600': '#004080',
          '700': '#002B57',
          '800': '#00172E',
          '900': '#000000'
        },
      }
    },
  },
  plugins: [],
}
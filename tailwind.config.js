/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#008080',
        'secondery': '#2B2B2B',
        'light-black-100': '#575757',
        'light-black-200': '#1E1E1E',
        'light-gray': '#AFAFAF'
      }
    },
  },
  plugins: [],
}
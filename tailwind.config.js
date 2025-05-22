/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: '#FF715B',
        green: '#73956F',
        'dark-blue': '#2E294E',
        blue: '#1098F7',
        'sober-blue': '#4281A4',
        gray: '#DECDF5',
        'soft-white': '#F8F1FF',
        'gray-dark': '#2D2D2D',
        white: '#FFFFFF',
        black: '#000000',
      },
      fontFamily: {
        sans: ['Urbanist', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        ibm: ['"IBM Plex Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'very-light-pink': '#C7C7C7',
        'text-input': '#F7F7F7',
        'hospital-green': '#ACD9B2'
      }
    }
  },
  plugins: []
}

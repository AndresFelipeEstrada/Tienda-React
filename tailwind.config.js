/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'very-gray': '#C7C7C7',
        'button-text': '#fffffe',
        'background-button': '#3da9fc',
        paragraph: '#5f6c7b',
        headline: '#094067'
      }
    }
  },
  plugins: []
}

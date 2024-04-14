/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bronze': '#B7561F',
        'teal': '#0C7890',
        // 'grey': '#393939',
        'grey': '#595959',
        // 'lightgrey': '#ababab'
        'lightgrey': '#B3B3B3'
      },
    },
  },
  plugins: [],
}


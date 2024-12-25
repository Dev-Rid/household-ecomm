/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,css}',  // Add paths to your HTML and JS/JSX/TS/TSX files
    './public/index.html', 
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "100": "#b86b00",
          "200": "#ad6501"
        }
      }
    },
  },
  plugins: [],
}

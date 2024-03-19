/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // Add other paths here if you have html or template files outside the src directory
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Roboto', 'sans-serif'],
      }

    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'custom-blue': '#4A90E2',
          'custom-green': '#50C878',
          'custom-red': '#FF6B6B',
        },
        boxShadow: {
          'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        }
      },
    },
    plugins: [],
  }
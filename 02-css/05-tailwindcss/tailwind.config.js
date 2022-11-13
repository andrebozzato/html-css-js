/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blue-facebook': '#1877f2',
        'bg-gray-facebook': '#F0F2F5'
      },
      spacing: {
        '580': '580px',
        '380': '380px'
      }
    },
  },
  plugins: [],
}

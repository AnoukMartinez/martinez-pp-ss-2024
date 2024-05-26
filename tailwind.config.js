/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './*.{html,js}',
    './src/*.vue',
    './src/components/*.vue'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ]
}


/** @type {import('tailwindcss').Config} */
module.exports = {
    purge:[],
  content: /** @type {import('tailwindcss').Config} */
      module.exports = {
          content: [
              "./index.html",
              "./src/**/*.{vue,js,ts,jsx,tsx}",

          ],
          theme: {
              extend: {},
          },
          plugins: [],
      },
  plugins: ['@tailwindcss/forms'],
}

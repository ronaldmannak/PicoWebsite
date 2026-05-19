/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './blog/**/*.html',
    './_layouts/**/*.html',
    './_includes/**/*',
    './_posts/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1d1d1f',
        subtle: '#6e6e73',
        hairline: '#d2d2d7',
        mist: '#f5f5f7',
        accent: '#0071e3',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Inter', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ملف المصدر اللي فيه JSX أو TSX
  ],
  theme: {
    extend: {
      colors: {
        nileBlue: '#005f73',
        nileYellow: '#ffb703',
        nileLight: '#e0fbfc',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        notstarted:"#BA3A44",
        inProgress:"#B68D17",
        completed:"#209A57",
        testing:"#3368C8"
      },
    },
  },
  plugins: [],
}
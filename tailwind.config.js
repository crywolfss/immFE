const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    colors: {
      'imm-main': '#0F1F3E',
      'imm-secondary': '#4D7EF7',
      'imm-background': '#f7f6fb',
      'imm-accent': '#6543fc',
      'imm-text': '#0e0d13',
    },
    extend: {

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    flowbite.plugin(),
  ],
}


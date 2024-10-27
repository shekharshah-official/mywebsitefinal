/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    "./node_modules/@shadcn/**/*.js"
  ],

  theme: {
    extend: {
      animation: {
        bounce: 'bounce 1s infinite',
        swing: 'swing 0.5s infinite',
      },
      keyframes: {
        swing: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(15deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'max':'450px'},
        'xxs': {'max':'300px'},
      },
    },
    screens: {
      '2xl': {'max': '1300px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1100px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '992px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '768px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '576px'},
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [
  ],
}


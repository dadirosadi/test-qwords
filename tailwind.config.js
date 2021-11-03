module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
      extend: {
        borderColor: () => ({
          'primary': '#0F8995',
        }),
        textColor: {
          'primary': '#0F8995',
          'secondary': "#DE4564",
          'thirdary': "#0F8995"
        },
        backgroundColor: {
          primary: "#FBFBFB",
          secondary: "#DE4564",
          thirdary: "#0F8995"
        },
        fontFamily: {
          'montserrat': ['Montserrat'],
        },
        backgroundImage: {
          'home': "url('/src/assets/images/home/background.png')",
         }
      },
    },
     variants: {
       extend: {},
     },
     plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/line-clamp')
    ],
   }
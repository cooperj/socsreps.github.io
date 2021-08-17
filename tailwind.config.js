module.exports = {
    purge: [
        "./**/*.html",
        "./js/*.js"
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                'max-2xl': {'max': '1535px'},
                'max-xl': {'max': '1279px'},
                'max-lg': {'max': '1023px'},
                'max-md': {'max': '767px'},
                'max-sm': {'max': '639px'},
            }
        },
    },
    variants: {
        ringColor: ['responsive', 'dark', 'focus-within', 'focus-visible', 'focus', 'hover'],
        extend: {
          borderColor: ['first'],
          borderOpacity:  ['first'],
          borderRadius:  ['first'],
          borderStyle:  ['first'],
          borderWidth:  ['first'],
          scale: ['active'],
          backgroundColor: ['active'],
          ringWidth: ['focus-visible'],
          ringOffsetWidth: ['focus-visible']
        }
    },
    plugins: [],
}
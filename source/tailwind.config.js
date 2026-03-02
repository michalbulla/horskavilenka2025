const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./templates/**/*.twig'],
  theme: {
    fontFamily: {
      primary: ['ui-sans-serif', 'sans-serif'],
      secondary: ['Blinker', 'sans-serif'],
    },
    screens: {
      sm: '450px',
      md: '768px',
      lg: '1024px',
      xl: '1100px',
      // We want the maximum container to stop at 1350px
      // so we set the last breakpoint to the same value
      '2xl': '1100px',
      // The original Tailwind 2xl breakpoint value
      // '2xl': '1536px',
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        brand: {
          // put the custom site color here
          'yellow': '#EBB110',
          'gold': '#B88800',
          'green': '#52981A',
          'red': '#ff0000',
        },
        content: {
          'text': '#515151',
          'link': '#00e',
          'h2': colors.gray[600],
          'h3': colors.gray[600],
          'h4': colors.gray[600],
          'divider': colors.gray[300],
          image: {
            'caption': colors.gray[600],
            'ring': colors.gray[300],
          },
          table: {
            'heading': '#333',
            'heading-bg': '#ccc',
            'border': '#ccc',
            'grid-row': '#ccc',
            'grid-column': '#ccc',
            'alt-row-bg': '#eee',
          },
          reveal: {
            'heading': '#333',
            'heading-bg': '#f5f5f5',
            'border': '##ddd',
          },
          doc: {
            'size': colors.gray[700],
            'description': colors.gray[700],
            'card-bg': colors.white,
            'card-ring': colors.gray[300],
          },
        },
        social: {
          facebook: '#3c5a99',
          linkedin: '#0077b5',
          twitter: '#55acee',
          pinterest: '#cb2027',
        },
      },
      backgroundImage: {
        // 'callout-red': "url('/img/callout-graphic_red.svg'), linear-gradient(to right, #E7751F, #D33D4C)",
      },
      boxShadow: {
        'btn' : '0 2px 4px rgba(0, 0, 0, .2)',
        'box' : '0 0 3px rgba(0, 0, 0, 1)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

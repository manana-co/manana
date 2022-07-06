import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brandRed: '#D03228',
    brandBlue: '#317491',
    brandTan: '#F7F1E3',
    brandWhite: '#FFFFFF',
  },
  fonts: {
    title: 'Vollkorn, sans-serif',
    body: 'Open Sans, sans-serif',
    // font3: 'Open Sans Regular, sans-serif',
    // font4: 'Open Sans Semi Bold, sans-serif',
    // font5: 'Open Sans Semi Bold Italic, sans-serif',
  },
  heights: {
    topNavBar: '6rem',
  },
  components: {
    Button: {
      variants: {
        unstyled: {
          ':focus': {
            outline: 'none',
            boxShadow: 'none',
          },
        },
      },
    },
  },
})

export { theme }

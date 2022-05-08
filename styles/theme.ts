import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brandRed: '#E82810',
    brandBlue: '#317491',
    brandTan: '#EBE2D7',
    brandWhite: '#FFFFFF',
  },
  fonts: {
    title: 'Vollkorn, sans-serif',
    body: 'Open Sans, sans-serif',
    // font3: 'Open Sans Regular, sans-serif',
    // font4: 'Open Sans Semi Bold, sans-serif',
    // font5: 'Open Sans Semi Bold Italic, sans-serif',
  },
})

export { theme }

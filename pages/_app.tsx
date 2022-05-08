import '../styles/globals.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/vollkorn/900.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { theme } from 'styles/theme'
import { Footer } from 'components/footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp

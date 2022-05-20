import '../styles/globals.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/vollkorn/900.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'styles/theme'
import { TopNavbar } from 'components/top-navbar'
import { Footer } from 'components/footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Mañana Co.</title>
      </Head>
      <TopNavbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp

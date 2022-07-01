import 'reset-css'
import '../styles/global.css'
import '@fontsource/open-sans/500.css'
import '@fontsource/vollkorn/900.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'styles/theme'
import { TopNavbar } from 'components/top-navbar'
import { Footer } from 'components/footer'
import { CheckoutProvider } from 'hooks/useCheckout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CheckoutProvider>
      <ChakraProvider theme={theme}>
        <Head>
          <title>Mañana Co.</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <TopNavbar />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </CheckoutProvider>
  )
}

export default MyApp

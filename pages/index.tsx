import Head from 'next/head'
import { Box, Image, useTheme } from '@chakra-ui/react'
import { TopNavbar } from 'components/top-navbar'
import { ProductSection } from 'components/product-section'
import { CarouselSection } from 'components/carousel-section'

function Home() {
  const {
    colors: { brandBlue },
  } = useTheme()

  return (
    <Box bg={brandBlue}>
      <Head>
        <title>Mañana Co.</title>
      </Head>
      <TopNavbar />
      <Box maxHeight="100vh" overflow="hidden" display="flex" alignItems="center">
        <Image src="main-landing-defender.jpeg" alt="main landing image" width="100vw" />
      </Box>
      <ProductSection title="SURF STUFF" />
      <CarouselSection />
      <ProductSection title="BEST SELLERS" />
      {/* <main>
        <Box height="12000px" />
      </main> */}
    </Box>
  )
}

export default Home

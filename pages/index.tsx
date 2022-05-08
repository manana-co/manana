import Head from 'next/head'
import Image from 'next/image'
import { Box, useTheme } from '@chakra-ui/react'
import defenderImage from 'public/main-landing-defender.jpeg'
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
      <Box maxHeight="100vh" width="100%" overflow="hidden" display="flex" alignItems="center">
        <Image src={defenderImage} alt="main landing image" layout="intrinsic" priority />
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

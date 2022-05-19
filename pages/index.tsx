import { useEffect } from 'react'
import Image from 'next/image'
import { Box, useTheme } from '@chakra-ui/react'
import defenderImage from 'public/main-landing-defender.jpeg'
import { TopNavbar } from 'components/top-navbar'
import { ProductSection } from 'components/product-section'
import { CarouselSection } from 'components/carousel-section'
import { useAllProducts } from 'hooks/useAllProducts'

function Home() {
  const {
    colors: { brandBlue },
  } = useTheme()
  const { isLoading, products, isError } = useAllProducts()
  console.log(2, isLoading, products)

  return (
    <Box bg={brandBlue}>
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

// async function getStaticProps() {
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }

export default Home

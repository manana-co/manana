import { Box, useTheme } from '@chakra-ui/react'
import { ProductSection } from 'components/product-section'
import { CarouselSection } from 'components/carousel-section'
import { useAllProducts } from 'hooks/useAllProducts'
import defenderImage from 'public/main-landing-defender.jpeg'
import { SplashImage } from 'components/splash-image'

function Home() {
  const {
    colors: { brandBlue },
  } = useTheme()
  const { products, isLoading, isError } = useAllProducts()

  console.log({ products, isLoading, isError })

  return (
    <Box as="section" bg={brandBlue}>
      <SplashImage image={defenderImage} imagePosition="bottom center" />
      <ProductSection title="SURF STUFF" />
      <CarouselSection />
      <ProductSection title="BEST SELLERS" />
    </Box>
  )
}

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Home

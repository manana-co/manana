import { Box, useTheme } from '@chakra-ui/react'
import { SWRConfig } from 'swr'
import { ProductSection } from 'components/product-section'
import { CarouselSection } from 'components/carousel-section'
import defenderImage from 'public/main-landing-defender.jpeg'
import { SplashImage } from 'components/splash-image'
// import { getAllProducts } from 'hooks/useAllProducts'

function Home({ fallback }: Props) {
  const {
    colors: { brandBlue },
  } = useTheme()

  return (
    <SWRConfig value={{ fallback }}>
      <Box as="section" bg={brandBlue}>
        <SplashImage image={defenderImage} imagePosition="bottom center" />
        <ProductSection title="SURF STUFF" />
        <CarouselSection />
        <ProductSection title="BEST SELLERS" />
      </Box>
    </SWRConfig>
  )
}

export async function getStaticProps() {
  // const allProducts = await getAllProducts()

  return {
    props: {
      fallback: {
        '/products': [],
        // '/products': allProducts,
      },
    },
  }
}

type Props = {
  fallback: { [key: string]: unknown } | undefined
}

export default Home

import { Box, useTheme } from '@chakra-ui/react'
import { ProductSection } from 'components/product-section'
import { MissionStatement } from 'components/mission-statement'
// import defenderImage from 'public/defender.jpg'
// import { SplashImage } from 'components/splash-image'
import { SplashVideo } from 'components/splash-video'

function Home() {
  const {
    colors: { brandBlue },
  } = useTheme()

  return (
    <Box as="section" bg={brandBlue}>
      {/* <SplashImage image={defenderImage} imagePosition="bottom center" /> */}
      <SplashVideo />
      <ProductSection title="SURF STUFF" collectionType="surf-stuff" />
      <MissionStatement />
      <ProductSection title="BEST SELLERS" collectionType="best-sellers" />
    </Box>
  )
}

export default Home

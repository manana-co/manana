import { Box, useTheme } from '@chakra-ui/react'
import { ProductSection } from 'components/product-section'
import { MissionStatement } from 'components/mission-statement'
import defenderImage from 'public/main-landing-defender.jpeg'
import { SplashImage } from 'components/splash-image'

function Home() {
  const {
    colors: { brandBlue },
  } = useTheme()

  return (
    <Box as="section" bg={brandBlue}>
      <SplashImage image={defenderImage} imagePosition="bottom center" />
      <ProductSection title="SURF STUFF" />
      <MissionStatement />
      <ProductSection title="BEST SELLERS" />
    </Box>
  )
}

export default Home

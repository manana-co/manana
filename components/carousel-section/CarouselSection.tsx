import { useTheme, Box } from '@chakra-ui/react'

function CarouselSection() {
  const {
    colors: { brandBlue },
  } = useTheme()
  return <Box bg={brandBlue} height="50rem" />
}

export { CarouselSection }

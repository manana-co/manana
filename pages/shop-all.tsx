import { Box } from '@chakra-ui/react'
import { SectionHeading } from 'components/section-heading'
import Image from 'next/image'
import boatHatImage from 'public/boat-with-hat.jpeg'

function ShopAll() {
  return (
    <Box>
      <Box
        maxHeight="100vh"
        width="100%"
        overflow="hidden"
        display="flex"
        alignItems="center"
        userSelect="none"
      >
        <Image src={boatHatImage} alt="main landing image" layout="intrinsic" priority />
      </Box>
      <SectionHeading text="SHOP ALL" />
    </Box>
  )
}

export default ShopAll

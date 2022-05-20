import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import { ProductGroup } from 'components/product-group'
import { SectionHeading } from 'components/section-heading'
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
      <Box height="1000rem">
        <SectionHeading text="SHOP ALL" />
        <ProductGroup />
      </Box>
    </Box>
  )
}

export default ShopAll

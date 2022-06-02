import Image from 'next/image'
import { Box, useTheme, Stack } from '@chakra-ui/react'
import { ProductImage } from 'components/product-image'

function ImageCarousel() {
  const {
    colors: { brandTan },
  } = useTheme()
  return (
    <Box bg={brandTan} height="100%" width="100%">
      <Stack
        direction="row"
        spacing="2rem"
        padding="2rem"
        overflowX="auto"
        height="100%"
        border="1px solid red"
      >
        <Image layout="fill" src="/hat-example.png" alt="test" />
        <Image layout="fill" src="/board-example.png" alt="test" />
        <Image layout="fill" src="/mug-example.png" alt="test" />
        <Image layout="fill" src="/shirt-example.png" alt="test" />
        <Image layout="fill" src="/shorts-example.png" alt="test" />
      </Stack>
    </Box>
  )
}

export { ImageCarousel }

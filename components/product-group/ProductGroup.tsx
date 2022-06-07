import { Box, Button, Stack, Heading, useTheme } from '@chakra-ui/react'
import { ProductImage } from 'components/product-image'
import { Product } from 'utils/shared-types'

function ProductGroup({ product: { imageSrc, title, price } }: Props) {
  const {
    colors: { brandBlue, brandRed, brandWhite },
    fonts: { title: titleFont, body },
  } = useTheme()
  return (
    <Stack direction="column" alignItems="center" justifyContent="space-between">
      <Box height="22rem" width="100%">
        <ProductImage imageSrc={imageSrc} alternateText="test" inGroup />
      </Box>
      <Stack
        direction="column"
        height="6rem"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading size="xl" fontFamily={titleFont} color={brandBlue}>
          {title}
        </Heading>
        <Button
          variant="unstyled"
          fontFamily={body}
          color={brandRed}
          border={`0.1rem solid ${brandRed}`}
          borderRadius="none"
          width="80%"
          display="flex"
          alignItems="center"
          _hover={{ background: brandRed, color: brandWhite }}
        >
          {`SHOP NOW - ${price}`}
        </Button>
      </Stack>
    </Stack>
  )
}

type Props = {
  product: Product
}

export { ProductGroup }

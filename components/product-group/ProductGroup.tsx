import { Box, Button, Stack, Heading, useTheme } from '@chakra-ui/react'
import Link from 'next/link'
import { ProductImage } from 'components/product-image'
import { getId } from 'utils'

function ProductGroup({ product }: Props) {
  const {
    colors: { brandBlue, brandRed, brandWhite },
    fonts: { title: titleFont, body },
  } = useTheme()

  return (
    <Stack direction="column" alignItems="center" justifyContent="space-between" maxWidth="25rem">
      <Box height="22rem" width="100%">
        <ProductImage imageSrc={product.images[0].src} alternateText="test" inGroup />
      </Box>
      <Stack
        direction="column"
        height="6rem"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading size="xl" fontFamily={titleFont} color={brandBlue}>
          {product.title}
        </Heading>
        <Link
          href={{
            pathname: '/product/[productId]',
            query: { productId: getId(product.id as string) },
          }}
        >
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
            {`SHOP NOW - ${product.variants[0].price}`}
          </Button>
        </Link>
      </Stack>
    </Stack>
  )
}

type Props = {
  product: ShopifyBuy.Product
}

export { ProductGroup }

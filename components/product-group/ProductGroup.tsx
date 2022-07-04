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
    <Link
      href={{
        pathname: '/product/[productId]',
        query: { productId: getId(product.id as string) },
      }}
    >
      <Stack
        direction="column"
        width={['20rem', '25rem', '20rem', '25rem']}
        margin="2rem 1rem"
        cursor="pointer"
      >
        <Box height="22rem" width="100%">
          {product?.images?.[0] && (
            <ProductImage imageSrc={product.images[0].src} alternateText="test" inGroup />
          )}
        </Box>
        <Stack direction="column" width="100%" justifyContent="space-between" alignItems="center">
          <Heading
            size="lg"
            fontFamily={titleFont}
            color={brandBlue}
            overflow="hidden"
            textOverflow="ellipsis"
            margin="0 1rem"
            whiteSpace="nowrap"
            maxWidth="20rem"
          >
            {product.title}
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
            {`SHOP NOW - ${product.variants[0].price}`}
          </Button>
        </Stack>
      </Stack>
    </Link>
  )
}

type Props = {
  product: ShopifyBuy.Product
}

export { ProductGroup }

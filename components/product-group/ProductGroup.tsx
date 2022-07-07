import { Box, Button, Stack, Heading, useTheme } from '@chakra-ui/react'
import Link from 'next/link'
import { ProductImage } from 'components/product-image'
import { getId } from 'utils'

function ProductGroup({ product }: Props) {
  const {
    colors: { brandBlue, brandRed, brandTan },
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
        justifyContent="space-between"
      >
        <Box height="22rem" width="100%">
          {product?.images?.[0] && (
            <ProductImage imageSrc={product.images[0].src} alternateText="test" inGroup />
          )}
        </Box>
        <Stack
          direction="column"
          width="100%"
          height="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading
            size="lg"
            fontFamily={titleFont}
            color={brandBlue}
            height="100%"
            margin="0 0.5rem"
            maxWidth="90%"
            display="flex"
            alignItems="center"
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
            height="4rem"
            display="flex"
            alignItems="center"
            _hover={{ background: brandRed, color: brandTan }}
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

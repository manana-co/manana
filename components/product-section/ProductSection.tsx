import { Box, Stack, useTheme } from '@chakra-ui/react'
import { ProductImage } from 'components/product-image'
import { SectionHeading } from 'components/section-heading'
import { useAllProducts } from 'hooks/useAllProducts'

function ProductSection({ title }: Props) {
  const {
    colors: { brandWhite },
  } = useTheme()
  const { products, isLoading, isError } = useAllProducts()

  return (
    <Box as="section" bg={brandWhite}>
      <SectionHeading text={title} />
      <Stack
        direction="row"
        height={['30rem', '30rem', '35rem', '35rem']}
        spacing="2rem"
        padding={['1rem', '2rem']}
        overflowX="auto"
      >
        <ProductImage imageSrc="hat-example.png" alternateText="test" />
        <ProductImage imageSrc="board-example.png" alternateText="test" />
        <ProductImage imageSrc="mug-example.png" alternateText="test" />
        <ProductImage imageSrc="shirt-example.png" alternateText="test" />
        <ProductImage imageSrc="shorts-example.png" alternateText="test" />
      </Stack>
    </Box>
  )
}

type Props = {
  title: string
}

export { ProductSection }

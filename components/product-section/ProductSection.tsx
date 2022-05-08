import { Box, Divider, Heading, Stack, useTheme } from '@chakra-ui/react'
import { ProductImage } from 'components/product-image'

function ProductSection({ title }: Props) {
  const {
    colors: { brandWhite, brandRed },
  } = useTheme()
  return (
    <Box as="section" height="50rem" bg={brandWhite} padding="2rem">
      <Divider bg={brandRed} height="0.1rem" opacity={1} />
      <Heading color={brandRed} size="lg" marginTop="1rem">
        {title}
      </Heading>
      <Stack
        direction="row"
        spacing="2rem"
        height="calc(100% - 60px)"
        paddingY="2rem"
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

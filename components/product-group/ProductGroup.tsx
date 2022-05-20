import { Button, Stack, Heading, useTheme } from '@chakra-ui/react'
import { ProductImage } from 'components/product-image'

function ProductGroup() {
  const {
    colors: { brandBlue, brandRed },
    fonts: { title, body },
  } = useTheme()
  return (
    <Stack
      display="inline-flex"
      direction="column"
      alignItems="center"
      margin="1rem"
      height="30rem"
    >
      {/* <ProductImage imageSrc="hat-example.png" alternateText="" /> */}
      <ProductImage imageSrc="board-example.png" alternateText="test" />
      <Heading size="xl" fontFamily={title} color={brandBlue} padding="1rem 0 0.5rem">
        Red Hat
      </Heading>
      <Button
        variant="unstyled"
        fontFamily={body}
        color={brandRed}
        border={`0.1rem solid ${brandRed}`}
        borderRadius="none"
        width="80%"
      >
        SHOP NOW - $35
      </Button>
    </Stack>
  )
}

// <ProductImage imageSrc="board-example.png" alternateText="test" />
// <ProductImage imageSrc="mug-example.png" alternateText="test" />
// <ProductImage imageSrc="shirt-example.png" alternateText="test" />
// <ProductImage imageSrc="shorts-example.png" alternateText="test" />

export { ProductGroup }

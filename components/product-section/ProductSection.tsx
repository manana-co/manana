import { Box, Divider, Heading, useTheme } from '@chakra-ui/react'

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
    </Box>
  )
}

type Props = {
  title: string
}

export { ProductSection }

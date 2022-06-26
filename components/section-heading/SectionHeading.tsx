import { Box, Divider, Heading, useTheme } from '@chakra-ui/react'

function SectionHeading({ text }: Props) {
  const {
    colors: { brandRed },
  } = useTheme()

  return (
    <Box padding={['2rem 1rem 0', '2rem 2rem 0']} userSelect="none">
      <Divider bg={brandRed} height="1.5px" opacity={1} variant="unstyled" />
      <Heading color={brandRed} size="lg" marginTop="1rem">
        {text}
      </Heading>
    </Box>
  )
}

type Props = {
  text: string
}

export { SectionHeading }

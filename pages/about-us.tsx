import { Box, Center, Heading, Text, useTheme } from '@chakra-ui/react'

function About() {
  const {
    colors: { brandTan, brandBlue },
    fonts: { title },
  } = useTheme()

  return (
    <Box bg={brandTan} color={brandBlue} padding={['7rem 1rem 1rem', '8rem 2rem 2rem']}>
      <Center>
        <Heading
          size="4xl"
          fontSize={[48, 64, 82, 96, 120, 180]}
          fontFamily={title}
          maxWidth={['100%', '100%', '80%', '80%']}
        >
          Rooted in Austin Crafted in Baja
        </Heading>
      </Center>
      {/* <Text >Hello</Text> */}
    </Box>
  )
}

export { About as default }

import { Box, Text, useTheme } from '@chakra-ui/react'

function About() {
  const {
    colors: { brandTan },
  } = useTheme()

  return (
    <Box bg={brandTan} h="1000px">
      <Text>Hello</Text>
    </Box>
  )
}

export { About as default }

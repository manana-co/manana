import { Box, useTheme } from '@chakra-ui/react'

function About() {
  const {
    colors: { brandTan },
  } = useTheme()
  return (
    <Box bg={brandTan} h="1000px">
      Hello
    </Box>
  )
}

export { About as default }

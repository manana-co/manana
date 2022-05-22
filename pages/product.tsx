import { useTheme, Divider, Box, Heading, Flex, Stack } from '@chakra-ui/react'
import { ArrowButton } from 'components/arrow-button'

function Product() {
  const {
    colors: { brandRed, brandTan, brandBlue },
    heights: { topNavBar },
    fonts: { title, body },
  } = useTheme()

  const borderStyle = `2px solid ${brandRed}`

  return (
    <Box background={brandTan} padding={`${topNavBar} 1rem 0`}>
      <Box borderY={borderStyle}>
        <ArrowButton direction="back" color={brandRed} />
      </Box>
      <Box padding="2rem">
        <Heading size="4xl" color={brandBlue} fontFamily={title}>
          Semi-Pro
        </Heading>
        <Heading size="lg" color={brandBlue} fontFamily={body}>
          Cupidatat cupidatat nulla sunt non consectetur deserunt.
        </Heading>
      </Box>
      <Flex height="45rem" paddingBottom="2rem" borderTop={borderStyle}>
        <Box height="100%" width="50%" borderRight={borderStyle}></Box>
        <Stack direction="column" height="100%" width="50%">
          <Box height="33.33%" margin="0 !important" width="100%" border="1px solid blue"></Box>
          <Box height="33.33%" margin="0 !important" width="100%" border="1px solid blue"></Box>
          <Box height="33.33%" margin="0 !important" width="100%" border="1px solid blue"></Box>
        </Stack>
      </Flex>
    </Box>
  )
}

export default Product

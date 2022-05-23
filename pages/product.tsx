import { useTheme, Divider, Box, Heading, Flex, Stack, Button } from '@chakra-ui/react'
import { ArrowButton } from 'components/arrow-button'

function Product() {
  const {
    colors: { brandRed, brandTan, brandBlue },
    heights: { topNavBar },
    fonts: { title, body },
  } = useTheme()

  const borderStyle = `2px solid ${brandRed}`
  const price = 800

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
        <Stack direction="column" height="100%" width="50%" fontFamily={body} paddingLeft="3rem">
          <Flex alignItems="center" height="33.33%" borderBottom={borderStyle} width="100%">
            <Heading size="md" color={brandRed}>
              COLORS
            </Heading>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="center"
            height="33.33%"
            borderBottom={borderStyle}
            width="100%"
          >
            <Heading size="md" color={brandRed} marginBottom="2rem">
              SIZE
            </Heading>
            <Stack direction="row">
              <Button
                variant="unstyled"
                color={brandRed}
                border={borderStyle}
                borderRadius={0}
                display="flex"
                alignItems="center"
                width="5rem"
                _hover={{ background: brandRed, color: brandTan }}
              >{`6' 0"`}</Button>
              <Button
                variant="unstyled"
                color={brandRed}
                border={borderStyle}
                borderRadius={0}
                display="flex"
                alignItems="center"
                width="5rem"
                _hover={{ background: brandRed, color: brandTan }}
              >{`6' 6"`}</Button>
            </Stack>
          </Flex>
          <Flex height="33.33%" marginLeft="3rem" width="100%" alignItems="center">
            <Button
              variant="unstyled"
              fontSize={32}
              color={brandRed}
              border={borderStyle}
              borderRadius={0}
              padding="2rem 4rem"
              display="flex"
              alignItems="center"
              _hover={{ background: brandRed, color: brandTan }}
            >{`ADD TO CARD - $${price}`}</Button>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  )
}

export default Product

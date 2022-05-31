import Image from 'next/image'
import {
  useTheme,
  Box,
  Heading,
  Flex,
  Stack,
  Button,
  Grid,
  Center,
  useMediaQuery,
} from '@chakra-ui/react'
import { ArrowButton } from 'components/arrow-button'

function Product() {
  const {
    colors: { brandRed, brandTan, brandBlue },
    heights: { topNavBar },
    fonts: { title, body },
  } = useTheme()
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')

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
      {/* <Grid height="40rem" templateColumns="2" width="100%" border="1px solid red"> */}
      <Grid templateColumns={isLargerThan1280 ? 'repeat(2, 1fr)' : '1fr'} gap={5} height="40rem">
        <Image src="/boards-on-car.jpeg" alt="test" height="100%" width="100%" />
        <Image src="/wave-yellow-board.jpeg" alt="test" height="100%" width="100%" />
      </Grid>
      <Center height="30rem" flexDirection="column">
        <Heading
          size="4xl"
          marginBottom="2rem"
          fontFamily={title}
          color={brandBlue}
          _before={{ content: 'open-quote' }}
          _after={{ content: 'close-quote' }}
        >
          Hunk-o-shit
        </Heading>
        <Heading size="lg" fontFamily={body} color={brandRed}>
          Some guy on yelp
        </Heading>
      </Center>
    </Box>
  )
}

export default Product

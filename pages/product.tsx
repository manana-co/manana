import Image from 'next/image'
import {
  useTheme,
  Box,
  Heading,
  Flex,
  Stack,
  Button,
  SimpleGrid,
  Grid,
  Center,
  useMediaQuery,
} from '@chakra-ui/react'
import { ArrowButton } from 'components/arrow-button'
import { ImageCarousel } from 'components/image-carousel'

function Product() {
  const {
    colors: { brandRed, brandTan, brandBlue },
    heights: { topNavBar },
    fonts: { title, body },
  } = useTheme()
  const [isLargerThan400] = useMediaQuery('(min-width: 400px)')

  const borderStyle = `2px solid ${brandRed}`
  const price = 800

  return (
    <Box background={brandTan} padding={`${topNavBar} 1rem 0`} scrollPaddingTop="5rem">
      <Box maxWidth="2000px" margin="0 auto">
        <Box borderY={borderStyle}>
          <ArrowButton direction="back" color={brandRed} />
        </Box>
        <Box padding="1rem">
          <Heading size="4xl" color={brandBlue} fontFamily={title}>
            Semi-Pro
          </Heading>
          <Heading size="lg" color={brandBlue} fontFamily={body}>
            Cupidatat cupidatat nulla sunt non consectetur deserunt.
          </Heading>
        </Box>
        <SimpleGrid
          minChildWidth="30rem"
          maxWidth="100%"
          paddingBottom="2rem"
          borderTop={borderStyle}
        >
          <Box height="30rem" maxWidth="calc(100vw - 2rem)">
            <ImageCarousel />
          </Box>
          <Stack direction="column" fontFamily={body} maxWidth="calc(100vw - 2rem)">
            <Flex alignItems="center" height="10rem" borderBottom={borderStyle} width="100%">
              <Heading size="md" color={brandRed}>
                COLORS
              </Heading>
            </Flex>
            <Flex
              flexDirection="column"
              justifyContent="center"
              height="10rem"
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
            <Flex height="10rem" width="100%" alignItems="center">
              <Button
                variant="unstyled"
                fontSize={28}
                color={brandRed}
                border={borderStyle}
                borderRadius={0}
                padding="2rem"
                display="flex"
                alignItems="center"
                width="30rem"
                _hover={{ background: brandRed, color: brandTan }}
              >{`ADD TO CARD - $${price}`}</Button>
            </Flex>
          </Stack>
        </SimpleGrid>
        <SimpleGrid
          minChildWidth="40rem"
          spacing="1rem"
          height={isLargerThan400 ? '80rem' : '30rem'}
          maxWidth="calc(100vw - 2rem)"
        >
          <Box position="relative" maxWidth="calc(100vw - 2rem)">
            <Image src="/boards-on-car.jpeg" alt="test" layout="fill" objectFit="contain" />
          </Box>
          <Box position="relative" maxWidth="calc(100vw - 2rem)">
            <Image src="/wave-yellow-board.jpeg" alt="test" layout="fill" objectFit="contain" />
          </Box>
        </SimpleGrid>
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
    </Box>
  )
}

export default Product

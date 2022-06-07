import Image from 'next/image'
import { useTheme, Box, SimpleGrid, Heading, Text, Flex, Stack } from '@chakra-ui/react'
import glassingImage from 'public/glassing.jpeg'

function CarouselSection() {
  const {
    colors: { brandBlue, brandTan },
    fonts: { title, body },
  } = useTheme()

  return (
    <Box bg={brandBlue} padding={['1rem', '2rem']}>
      <SimpleGrid minChildWidth="30rem">
        <Stack
          color={brandTan}
          justifyContent="center"
          padding={['1rem', '2rem']}
          maxWidth="calc(100vw - 2rem)"
        >
          <Heading as="h1" size="4xl" fontFamily={title}>
            Mission Statement
          </Heading>
          <Text fontSize={['xl', '2xl']} fontFamily={body}>
            Born improbably out of a garage in the landlocked capital of Texas, Mañana started as a
            passion project of making custom wakesurf boards for the fine people of Austin.
          </Text>
        </Stack>
        {/* <Box>
          <Flex height="100%" maxWidth="20rem" overflow="hidden">
            <Image
              src={glassingImage}
              aria-label="Working on boards"
              // width="100%"
              // layout="fill"
            />
          </Flex>
        </Box> */}
      </SimpleGrid>
    </Box>
  )
}

export { CarouselSection }

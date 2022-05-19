import Image from 'next/image'
import { useTheme, Box, Stack, Heading, Text, Flex } from '@chakra-ui/react'
import glassingImage from 'public/glassing.jpeg'

function CarouselSection() {
  const {
    colors: { brandBlue, brandTan },
    fonts: { title, body },
  } = useTheme()

  return (
    <Box bg={brandBlue} height="40rem" width="100vw">
      <Stack
        direction="row"
        padding="4rem"
        height="100%"
        width="100%"
        justify="space-between"
        userSelect="none"
      >
        <Box width="40rem" color={brandTan}>
          <Heading as="h1" size="4xl" fontSize="92px" fontFamily={title}>
            Mission Statement
          </Heading>
          <Text fontSize="2xl" fontFamily={body}>
            Born improbably out of a garage in the landlocked capital of Texas, Mañana started as a
            passion project of making custom wakesurf boards for the fine people of Austin.
          </Text>
        </Box>
        <Box height="100%" width="auto" padding="1.5rem" bg={brandTan} alignItems="center">
          <Flex height="100%" maxWidth="20rem" overflow="hidden">
            <Image
              src={glassingImage}
              aria-label="Working on boards"
              // width="100%"
              // layout="fill"
            />
          </Flex>
        </Box>
      </Stack>
    </Box>
  )
}

export { CarouselSection }

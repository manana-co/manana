import { useTheme, Box, Stack, Heading, Text, Image, Flex } from '@chakra-ui/react'

function CarouselSection() {
  const {
    colors: { brandBlue, brandTan },
    fonts: { title, body },
  } = useTheme()
  return (
    <Box bg={brandBlue} height="40rem">
      <Stack direction="row" padding="4rem" height="100%" justify="space-between">
        <Box width="45%" color={brandTan}>
          <Heading as="h1" size="4xl" fontSize="92px" fontFamily={title}>
            Mission Statement
          </Heading>
          <Text fontSize="2xl" fontFamily={body}>
            Born improbably out of a garage in the landlocked capital of Texas, Mañana started as a
            passion project of making custom wakesurf boards for the fine people of Austin.
          </Text>
        </Box>
        <Box height="100%" width="45%" padding="1.5rem" bg={brandTan} alignItems="center">
          <Flex maxHeight="100%" overflow="hidden">
            <Image src="glassing.jpeg" aria-label="Working on boards" fit="cover" />
          </Flex>
        </Box>
      </Stack>
    </Box>
  )
}

export { CarouselSection }

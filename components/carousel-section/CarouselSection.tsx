import Image from 'next/image'
import { useTheme, Box, SimpleGrid, Heading, Text, Flex, Stack } from '@chakra-ui/react'
import glassingImage from 'public/glassing.jpeg'

function CarouselSection() {
  const {
    colors: { brandBlue, brandTan },
    fonts: { title, body },
  } = useTheme()

  return (
    <SimpleGrid minChildWidth="30rem" padding={['1rem', '2rem']} bg={brandBlue}>
      <Stack
        color={brandTan}
        justifyContent="center"
        padding={['1rem', '2rem']}
        maxWidth={['calc(100vw - 2rem)', '90vw', '90vw', '60rem']}
        placeSelf={['unset', 'center']}
      >
        <Heading as="h1" size="4xl" fontFamily={title}>
          Mission Statement
        </Heading>
        <Text fontSize={['xl', '2xl']} fontFamily={body}>
          Born improbably out of a garage in the landlocked capital of Texas, Mañana started as a
          passion project of making custom wakesurf boards for the fine people of Austin.
        </Text>
      </Stack>
      {/* <Box
        position="relative"
        maxWidth="calc(100vw - 2rem)"
        padding="1rem"
        background={brandTan}
        minHeight="36rem"
      >
        <Image
          src={glassingImage}
          aria-label="Working on boards"
          layout="fill"
          objectFit="scale-down"
          quality={100}
          priority
        />
      </Box> */}
    </SimpleGrid>
  )
}

export { CarouselSection }

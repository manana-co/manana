import { Box, Center, Heading, Text, useTheme, Divider, SimpleGrid, Flex } from '@chakra-ui/react'
// import { DefenderIllustration } from 'components/defender-illustration'

function About() {
  const {
    colors: { brandTan, brandBlue, brandRed },
    fonts: { title, body },
  } = useTheme()

  return (
    <Box bg={brandTan} color={brandBlue} padding={['7rem 1rem 1rem', '8rem 2rem 2rem']}>
      <Flex maxWidth="1800px" direction="column" alignItems="center" margin="0 auto">
        <Center flexDirection="column" width="100%">
          <Heading
            size="4xl"
            fontSize={[48, 64, 82, 96, 120, 160]}
            fontFamily={title}
            width="100%"
            maxWidth={['100%', '100%', '80%', '80%']}
          >
            Rooted in Austin
          </Heading>
          <Heading
            size="4xl"
            fontSize={[48, 64, 82, 96, 120, 160]}
            fontFamily={title}
            width="100%"
            maxWidth={['100%', '100%', '80%', '80%']}
          >
            Crafted in Baja
          </Heading>
        </Center>
        <Divider
          bg={brandRed}
          height="2px"
          opacity={1}
          variant="unstyled"
          margin={['2rem 0', '4rem 0']}
        />
        <SimpleGrid minChildWidth="30rem" fontFamily={body} fontSize={['32px', '48px']}>
          <Center minHeight="20rem" maxWidth="calc(100vw - 2rem)" padding="2rem">
            {/* <DefenderIllustration /> */}
          </Center>
          <Text borderLeft={`2px solid ${brandRed}`} padding="0 2rem" maxWidth="calc(100vw - 2rem)">
            Born improbably out of a garage in the landlocked capital of Texas, Mañana started as a
            passion project of making custom wakesurf boards for the fine people of Austin.
          </Text>
        </SimpleGrid>
        <Divider
          bg={brandRed}
          height="2px"
          opacity={1}
          variant="unstyled"
          margin={['2rem 0', '4rem 0']}
        />
        <SimpleGrid minChildWidth="30rem" fontFamily={body} fontSize={['32px', '48px']}>
          <Text
            borderRight={`2px solid ${brandRed}`}
            padding="0 2rem"
            maxWidth="calc(100vw - 2rem)"
          >
            As demand grew, Alec set out on a journey in search for a factory. He needed access to
            quality materials in a place that supported the surf community. He packed his car and
            set out on his trip.
          </Text>
          <Center minHeight="20rem" maxWidth="calc(100vw - 2rem)" padding="2rem">
            {/* <DefenderIllustration /> */}
          </Center>
        </SimpleGrid>
        <Divider
          bg={brandRed}
          height="2px"
          opacity={1}
          variant="unstyled"
          margin={['2rem 0', '4rem 0']}
        />
        <SimpleGrid minChildWidth="30rem" fontFamily={body} fontSize={['32px', '48px']}>
          <Center minHeight="20rem" maxWidth="calc(100vw - 2rem)" padding="2rem">
            {/* <DefenderIllustration /> */}
          </Center>
          <Text borderLeft={`2px solid ${brandRed}`} padding="0 2rem" maxWidth="calc(100vw - 2rem)">
            After months of searching, surfing, and more searching throughout southern California
            and Mexico, Alec settled on a quaint spot in Baja.
          </Text>
        </SimpleGrid>
        <Divider
          bg={brandRed}
          height="2px"
          opacity={1}
          variant="unstyled"
          margin={['2rem 0', '4rem 0']}
        />
        <SimpleGrid minChildWidth="30rem" fontFamily={body} fontSize={['32px', '48px']}>
          <Text
            borderRight={`2px solid ${brandRed}`}
            padding="0 2rem"
            maxWidth="calc(100vw - 2rem)"
          >
            He formed a small crew dedi- cated to shaping and the hand-built process of boards.
            Whenever he asked the crew when a board would be fin- ished, they always replied
            “mañana.” And the brand was born.
          </Text>
          <Center minHeight="20rem" maxWidth="calc(100vw - 2rem)" padding="2rem">
            {/* <DefenderIllustration /> */}
          </Center>
        </SimpleGrid>
      </Flex>
    </Box>
  )
}

export { About as default }

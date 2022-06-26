import { IconButton, Stack, Text, useTheme, SimpleGrid } from '@chakra-ui/react'
import { Badge } from 'components/badge'
import { Instagram, Facebook } from 'components/icons'

function Footer() {
  const {
    colors: { brandTan, brandBlue },
    fonts: { body },
  } = useTheme()
  return (
    <Stack
      bg={brandBlue}
      direction="row"
      as="footer"
      padding="2rem"
      justify="space-between"
      fontFamily={body}
      userSelect="none"
    >
      <SimpleGrid minChildWidth="18rem" spacing="4rem" height="100%" width="100%">
        <Badge />
        <Stack direction="column" spacing="1.5rem" color={brandTan} height="100%" paddingY="5px">
          <Text>CONTACT:</Text>
          <Text>
            2708 S. Lamar <br /> Austin, TX 78704
          </Text>
          <Text>+1 512-763-2737</Text>
          <Text>Howdy@manana.Co</Text>
        </Stack>
        <Stack direction="column" spacing="1.5rem" color={brandTan} height="100%" paddingY="5px">
          <Text>SUPPORT:</Text>
          <Text>
            Returns <br />
            Refund Policy <br />
            Terms of Service
          </Text>
        </Stack>
        <Stack direction="column" fill={brandTan}>
          <IconButton
            icon={<Instagram />}
            aria-label="Instagram"
            variant="unstyled"
            padding="3px"
          />
          <IconButton icon={<Facebook />} aria-label="Facebook" variant="unstyled" padding="3px" />
        </Stack>
      </SimpleGrid>
    </Stack>
  )
}

export { Footer }

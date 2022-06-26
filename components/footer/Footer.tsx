import { IconButton, Stack, Text, useTheme, SimpleGrid, Button } from '@chakra-ui/react'
import { Badge } from 'components/badge'
import { Instagram, Facebook } from 'components/icons'
import Link from 'next/link'

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
      <SimpleGrid minChildWidth="15rem" spacing="4rem" height="100%" width="100%">
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
          <Link href="/returns">
            <Button variant="unstyled" textAlign="start" height="2rem">
              Returns
            </Button>
          </Link>
          <Link href="/privacy-policy">
            <Button variant="unstyled" textAlign="start" height="2rem">
              Privacy Policy
            </Button>
          </Link>
          <Stack direction="row" fill={brandTan}>
            <Link href="https://www.instagram.com/manana.surf/">
              <IconButton
                icon={<Instagram />}
                aria-label="Instagram"
                variant="unstyled"
                padding="3px"
              />
            </Link>
            <Link href="https://www.facebook.com/manana.surf/">
              <IconButton
                icon={<Facebook />}
                aria-label="Facebook"
                variant="unstyled"
                padding="3px"
              />
            </Link>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Stack>
  )
}

export { Footer }

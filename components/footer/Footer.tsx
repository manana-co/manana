import { IconButton, Stack, Text, useTheme } from '@chakra-ui/react'
import { Badge } from 'components/badge'
import { Instagram, Twitter, Facebook } from 'components/icons'

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
      padding="3rem"
      height="22rem"
      justify="space-between"
      fontFamily={body}
      userSelect="none"
    >
      <Stack direction="row" spacing="4rem" height="100%" width="100%" align="center">
        <Badge />
        <Stack direction="column" spacing="1.5rem" color={brandTan} height="100%" paddingY="5px">
          <Text>CONTACT:</Text>
          <Text>
            2205 Rebel Rd <br /> Austin, TX 78704
          </Text>
          <Text>(512) 431-9127</Text>
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
      </Stack>
      <Stack direction="column" fill={brandTan}>
        <IconButton
          _focus={{ boxShadow: 'none' }}
          icon={<Instagram />}
          aria-label="Instagram"
          variant="unstyled"
          padding="3px"
        />
        <IconButton
          _focus={{ boxShadow: 'none' }}
          icon={<Twitter />}
          aria-label="Twitter"
          variant="unstyled"
          padding="3px"
        />
        <IconButton
          _focus={{ boxShadow: 'none' }}
          icon={<Facebook />}
          aria-label="Facebook"
          variant="unstyled"
          padding="3px"
        />
      </Stack>
    </Stack>
  )
}

export { Footer }

import { Box, Flex, HStack, Stack, Text, useTheme } from '@chakra-ui/react'
import { Badge } from 'components/badge'

function Footer() {
  const {
    colors: { brandTan },
  } = useTheme()
  return (
    <Stack direction="row" as="footer" padding="3rem" height="22rem" border="1px solid green">
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
    </Stack>
  )
}

export { Footer }

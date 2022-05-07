import { Flex } from '@chakra-ui/react'
import { Badge } from 'components/badge'

function Footer() {
  return (
    <Flex as="footer" padding="3rem" alignItems="center">
      <Badge />
    </Flex>
  )
}

export { Footer }

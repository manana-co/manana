import { Center, useTheme } from '@chakra-ui/react'
import { Logo } from 'components/logo'

function TopNavbar() {
  const {
    colors: { brandWhite, brandBlue },
  } = useTheme()

  return (
    <Center h="8rem" position="fixed" width="100vw" bg={brandBlue}>
      <Logo color={brandWhite} />
    </Center>
  )
}

export { TopNavbar }

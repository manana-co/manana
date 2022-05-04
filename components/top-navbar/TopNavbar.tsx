import { Center, useTheme } from '@chakra-ui/react'
import { Logo } from 'components/logo'

function TopNavbar() {
  const {
    colors: { brandRed },
  } = useTheme()

  return (
    <Center h="5rem" border="1px" borderColor="green">
      <Logo color={brandRed} />
    </Center>
  )
}

export { TopNavbar }

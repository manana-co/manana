import { Box, useTheme } from '@chakra-ui/react'
import { HamburgerButton } from 'components/hamburger-button'
import { Logo } from 'components/logo'
import { ShoppingCartButton } from 'components/shopping-cart-button'

function TopNavbar() {
  const {
    colors: { brandWhite, brandBlue },
  } = useTheme()

  return (
    <Box
      h="8rem"
      position="fixed"
      width="100vw"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding={10}
      // border="1px solid red"
    >
      <HamburgerButton />
      <Logo color={brandWhite} />
      <ShoppingCartButton />
    </Box>
  )
}

export { TopNavbar }

import { Box, useTheme } from '@chakra-ui/react'
import { HamburgerIcon } from 'components/hamburger-icon'
import { Logo } from 'components/logo'
import { ShoppingCartIcon } from 'components/shopping-cart-icon'

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
      <HamburgerIcon />
      <Logo color={brandWhite} />
      <ShoppingCartIcon />
    </Box>
  )
}

export { TopNavbar }

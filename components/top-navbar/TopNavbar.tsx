import { Box, useTheme } from '@chakra-ui/react'
import { HamburgerIcon } from 'components/hamburger-icon'
import { Logo } from 'components/logo'

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
      padding={10}
    >
      <HamburgerIcon />
      <Logo color={brandWhite} />
    </Box>
  )
}

export { TopNavbar }

import { useState, useEffect } from 'react'
import { Box, useTheme } from '@chakra-ui/react'
import { HamburgerButton } from 'components/hamburger-button'
import { Logo } from 'components/logo'
import { ShoppingCartButton } from 'components/shopping-cart-button'
import { MainMenu } from 'components/main-menu'

function TopNavbar() {
  const {
    colors: { brandWhite, brandRed },
  } = useTheme()
  const [scrollValue, setScrollValue] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrollValue(window.pageYOffset)
    const watchScroll = () => window.addEventListener('scroll', onScroll)
    watchScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  })

  const toggleMenu = () => setIsMenuOpen((currentState) => !currentState)

  const iconColor = scrollValue > 0 ? brandRed : brandWhite

  return (
    <Box
      h="8rem"
      position="fixed"
      width="100vw"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding={10}
      bg={scrollValue > 0 ? brandWhite : 'transparent'}
      sx={{
        transition: 'background 0.3s ease-in',
      }}
      zIndex={100}
    >
      <HamburgerButton color={iconColor} onClick={toggleMenu} />
      <Logo color={iconColor} />
      <ShoppingCartButton color={iconColor} />
      <MainMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </Box>
  )
}

export { TopNavbar }

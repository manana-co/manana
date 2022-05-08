import { useState, useEffect } from 'react'
import { Box, useTheme } from '@chakra-ui/react'
import { HamburgerButton } from 'components/hamburger-button'
import { Logo } from 'components/logo'
import { ShoppingCartButton } from 'components/shopping-cart-button'

function TopNavbar() {
  const {
    colors: { brandWhite, brandRed },
  } = useTheme()
  const [scrollValue, setScrollValue] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollValue(window.pageYOffset)
    const watchScroll = () => window.addEventListener('scroll', onScroll)
    watchScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  })

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
    >
      <HamburgerButton color={iconColor} />
      <Logo color={iconColor} />
      <ShoppingCartButton color={iconColor} />
    </Box>
  )
}

export { TopNavbar }

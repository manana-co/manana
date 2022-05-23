import { useState, useEffect, useMemo, memo } from 'react'
import { useRouter } from 'next/router'
import { Flex, useTheme } from '@chakra-ui/react'
import { HamburgerButton } from 'components/hamburger-button'
import { Logo } from 'components/logo'
import { ShoppingCartButton } from 'components/shopping-cart-button'
import { MainMenu } from 'components/main-menu'
import { SubMenu } from 'components/sub-menu'
import { ShoppingCart } from 'components/shopping-cart'

function TopNavbar() {
  const {
    colors: { brandWhite, brandRed, brandTan },
  } = useTheme()
  const navColors: Record<ColorGroup, ColorSetup> = useMemo(
    () => ({
      '/': {
        main: [brandWhite, 'transparent'],
        scroll: [brandRed, brandWhite],
      },
      '/product': {
        main: [brandRed, brandTan],
        scroll: [brandRed, brandWhite],
      },
    }),
    [brandRed, brandTan, brandWhite],
  )

  const { pathname } = useRouter()
  const [scrollValue, setScrollValue] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrollValue(window.pageYOffset)
    const watchScroll = () => window.addEventListener('scroll', onScroll)
    watchScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  })

  const toggleMenu = () => setIsMenuOpen((currentState) => !currentState)
  const toggleSubMenu = () => setIsSubMenuOpen((currentState) => !currentState)
  const closeBothMenus = () => {
    toggleMenu()
    setIsSubMenuOpen(false)
  }

  const toggleShoppingCart = () => setIsShoppingCartOpen((currentState) => !currentState)

  const [iconColor, backgroundColor] =
    navColors[pathname as ColorGroup][scrollValue > 0 ? 'scroll' : 'main']

  return (
    <Flex
      h="6rem"
      position="fixed"
      width="100vw"
      alignItems="center"
      justifyContent="space-between"
      padding={10}
      bg={backgroundColor}
      sx={{ transition: 'background 0.3s ease-in' }}
      zIndex={100}
    >
      <HamburgerButton color={iconColor} onClick={toggleMenu} />
      <Logo color={iconColor} />
      <ShoppingCartButton color={iconColor} onClick={toggleShoppingCart} />
      <MainMenu isOpen={isMenuOpen} onClose={toggleMenu} openSubMenu={toggleSubMenu} />
      <SubMenu isOpen={isSubMenuOpen} onClose={toggleSubMenu} onCloseMenu={closeBothMenus} />
      <ShoppingCart isOpen={isShoppingCartOpen} onClose={toggleShoppingCart} />
    </Flex>
  )
}

type ColorGroup = '/product' | '/'

type ColorSetup = {
  main: [string, string]
  scroll: [string, string]
}

export { TopNavbar }

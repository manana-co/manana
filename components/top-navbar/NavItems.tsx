import { useState, useEffect, useMemo, memo } from 'react'
import { useRouter } from 'next/router'
import { Flex, useTheme } from '@chakra-ui/react'
import { HamburgerButton } from 'components/hamburger-button'
import { Logo } from 'components/logo'
import { ShoppingCartButton } from 'components/shopping-cart-button'

function NavItems({ toggleMenu, toggleShoppingCart }: Props) {
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
        scroll: [brandTan, brandRed],
      },
    }),
    [brandRed, brandTan, brandWhite],
  )
  const { pathname } = useRouter()
  const [scrollValue, setScrollValue] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollValue(window.pageYOffset)
    const watchScroll = () => window.addEventListener('scroll', onScroll)
    watchScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  })

  const [iconColor, backgroundColor] =
    navColors[pathname as ColorGroup]?.[scrollValue > 0 ? 'scroll' : 'main'] ||
    navColors['/'][scrollValue > 0 ? 'scroll' : 'main']

  return (
    <Flex
      height="6rem"
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
    </Flex>
  )
}

type Props = {
  toggleMenu: () => void
  toggleShoppingCart: () => void
}

type ColorGroup = '/product' | '/'

type ColorSetup = {
  main: [string, string]
  scroll: [string, string]
}

export { NavItems }

import { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import { Flex, useTheme } from '@chakra-ui/react'
import { HamburgerButton } from 'components/hamburger-button'
import { Logo } from 'components/logo'
import { ShoppingCartButton } from 'components/shopping-cart-button'

function NavItems({ toggleMenu, toggleShoppingCart }: Props) {
  const {
    colors: { brandRed, brandTan, brandBlue },
  } = useTheme()
  const navColors: Record<ColorGroup, ColorSetup> = useMemo(
    () => ({
      '/': {
        main: [brandTan, 'transparent'],
        scroll: [brandRed, brandTan],
      },
      '/product/example': {
        main: [brandRed, brandTan],
        scroll: [brandTan, brandRed],
      },
      '/product/[id]': {
        main: [brandRed, brandTan],
        scroll: [brandTan, brandRed],
      },
      '/shop-all': {
        main: [brandTan, 'transparent'],
        scroll: [brandTan, brandBlue],
      },
      '/about-us': {
        main: [brandRed, 'transparent'],
        scroll: [brandRed, brandTan],
      },
      '/privacy-policy': {
        main: [brandRed, 'transparent'],
        scroll: [brandTan, brandRed],
      },
      '/returns': {
        main: [brandRed, 'transparent'],
        scroll: [brandTan, brandRed],
      },
    }),
    [brandRed, brandTan, brandBlue],
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
      height="5rem"
      position="fixed"
      width="100vw"
      maxWidth="100vw"
      alignItems="center"
      justifyContent="space-between"
      paddingX={5}
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

type ColorGroup = '/product/[id]' | '/'

type ColorSetup = {
  main: [string, string]
  scroll: [string, string]
}

export { NavItems }

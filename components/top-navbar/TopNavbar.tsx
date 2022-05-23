import { useState } from 'react'
import { MainMenu } from 'components/main-menu'
import { SubMenu } from 'components/sub-menu'
import { ShoppingCart } from 'components/shopping-cart'
import { NavItems } from './NavItems'

function TopNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((currentState) => !currentState)
  const toggleSubMenu = () => setIsSubMenuOpen((currentState) => !currentState)
  const closeBothMenus = () => {
    toggleMenu()
    setIsSubMenuOpen(false)
  }

  const toggleShoppingCart = () => setIsShoppingCartOpen((currentState) => !currentState)

  return (
    <>
      <NavItems toggleMenu={toggleMenu} toggleShoppingCart={toggleShoppingCart} />
      <MainMenu isOpen={isMenuOpen} onClose={toggleMenu} openSubMenu={toggleSubMenu} />
      <SubMenu isOpen={isSubMenuOpen} onClose={toggleSubMenu} onCloseMenu={closeBothMenus} />
      <ShoppingCart isOpen={isShoppingCartOpen} onClose={toggleShoppingCart} />
    </>
  )
}

export { TopNavbar }

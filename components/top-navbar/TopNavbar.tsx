import { useState } from 'react'
import { MainMenu } from 'components/main-menu'
import { SubMenu } from 'components/sub-menu'
import { ShoppingCart } from 'components/shopping-cart'
import { NavItems } from './NavItems'
import { CollectionType } from 'hooks/useCollection'

function TopNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false)
  const [currentCollection, setCurrentCollection] = useState<CollectionType | undefined>(undefined)

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
      <MainMenu
        isOpen={isMenuOpen}
        onClose={toggleMenu}
        openSubMenu={toggleSubMenu}
        setCurrentCollection={setCurrentCollection}
      />
      <SubMenu
        isOpen={isSubMenuOpen}
        onClose={toggleSubMenu}
        onCloseMenu={closeBothMenus}
        collectionType={currentCollection}
      />
      <ShoppingCart isOpen={isShoppingCartOpen} onClose={toggleShoppingCart} />
    </>
  )
}

export { TopNavbar }

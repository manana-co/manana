import { useState } from 'react'
import { MainMenu } from 'components/main-menu'
import { SubMenu } from 'components/sub-menu'
import { ShoppingCart } from 'components/shopping-cart'
import { NavItems } from './NavItems'
import { CollectionType } from 'hooks/useCollection'
import { useCheckout } from 'hooks/useCheckout'

function TopNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const [currentCollection, setCurrentCollection] = useState<CollectionType | undefined>(undefined)
  const { toggleShoppingCart, isShoppingCartOpen } = useCheckout()

  const toggleMenu = () => setIsMenuOpen((currentState) => !currentState)
  const toggleSubMenu = () => setIsSubMenuOpen((currentState) => !currentState)
  const closeBothMenus = () => {
    toggleMenu()
    setIsSubMenuOpen(false)
  }

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

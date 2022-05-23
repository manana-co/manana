import { Drawer, DrawerBody, DrawerContent, useTheme, Heading, Divider } from '@chakra-ui/react'
import { ArrowButton } from 'components/arrow-button'
import { MainMenuButton } from 'components/main-menu-button'
import { MenuHeading } from 'components/menu-heading'
import Link from 'next/link'

function SubMenu({ onClose, isOpen, onCloseMenu }: Props) {
  const {
    colors: { brandRed },
  } = useTheme()

  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="lg" placement="left">
      <DrawerContent bg={brandRed}>
        <ArrowButton direction="back" onClick={onClose} isMenuButton />
        <DrawerBody>
          <MenuHeading text="WAKESURF" />
          <MainMenuButton text="Molo" />
          <MainMenuButton text="Semi-Pro" onClick={onCloseMenu} route="product" />
          <MainMenuButton text="Leslie" />
          <MainMenuButton text="Cousin Greg" />
          <MainMenuButton text="Shop All" />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

type Props = {
  onClose: () => void
  isOpen: boolean
  onCloseMenu: () => void
}

export { SubMenu }

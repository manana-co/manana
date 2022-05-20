import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useTheme,
  Divider,
} from '@chakra-ui/react'

import { CloseButton } from 'components/close-button'
import { MainMenuButton } from 'components/main-menu-button'
import { MenuHeading } from 'components/menu-heading'

function MainMenu({ isOpen, onClose, openSubMenu }: Props) {
  const {
    colors: { brandBlue, brandWhite },
  } = useTheme()
  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="lg" placement="left">
      <DrawerOverlay />
      <DrawerContent bg={brandBlue}>
        <CloseButton onClick={onClose} />
        <DrawerBody paddingTop="2rem">
          <MenuHeading text="BOARDS" />
          <MainMenuButton text="Surf" showArrow />
          <MainMenuButton text="Wakesurf" showArrow onClick={openSubMenu} />
          <MenuHeading text="APPAREL" />
          <MainMenuButton text="Hats" />
          <MainMenuButton text="Shirts" />
          <MainMenuButton text="Shorts" />
          <MenuHeading text="GEAR" />
          <MainMenuButton text="Gear" />
          <Divider bg={brandWhite} height="1px" mt="2rem" mb="1rem" />
          <MainMenuButton text="Shop All" size="2xl" />
          <MainMenuButton text="About Us" size="2xl" />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

type Props = {
  isOpen: boolean
  onClose: () => void
  openSubMenu: () => unknown
}

export { MainMenu }

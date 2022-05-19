import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useTheme,
  Heading,
  Divider,
} from '@chakra-ui/react'

import { CloseButton } from 'components/close-button'
import { MainMenuButton } from 'components/main-menu-button'
import { MenuHeading } from 'components/menu-heading'

function MainMenu({ isOpen, onClose, openSubMenu }: Props) {
  const {
    colors: { brandBlue },
  } = useTheme()
  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="lg" placement="left">
      <DrawerOverlay />
      <DrawerContent bg={brandBlue}>
        <CloseButton onClick={onClose} />
        <DrawerBody>
          <MenuHeading text="BOARDS" />
          <MainMenuButton text="Surf" showArrow />
          <MainMenuButton text="Wakesurf" showArrow onClick={openSubMenu} />
          <MenuHeading text="APPAREL" />
          <MainMenuButton text="Hats" />
          <MainMenuButton text="Shirts" />
          <MainMenuButton text="Shorts" />
          <MenuHeading text="GEAR" />
          <MainMenuButton text="Gear" />
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

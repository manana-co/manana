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

function MainMenu({ isOpen, onClose, openSubMenu }: Props) {
  const {
    colors: { brandBlue, brandWhite },
  } = useTheme()
  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="full" placement="left">
      <DrawerOverlay />
      <DrawerContent bg={brandBlue}>
        <CloseButton onClick={onClose} />
        <DrawerBody>
          <Heading color={brandWhite} size="md" mt="2rem" mb="1rem">
            BOARDS
          </Heading>
          <Divider bg={brandWhite} height="1px" mb="1rem" />
          <MainMenuButton text="Surf" showArrow />
          <MainMenuButton text="Wakesurf" showArrow onClick={openSubMenu} />
          <Heading color={brandWhite} size="md" mt="2rem" mb="1rem">
            APPAREL
          </Heading>
          <Divider bg={brandWhite} height="1px" mb="1rem" />
          <MainMenuButton text="Hats" />
          <MainMenuButton text="Shirts" />
          <MainMenuButton text="Shorts" />
          <Heading color={brandWhite} size="md" mt="2rem" mb="1rem">
            GEAR
          </Heading>
          <Divider bg={brandWhite} height="1px" mb="1rem" />
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

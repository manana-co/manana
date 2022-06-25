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
import { CollectionType } from 'hooks/useCollection'
import { Dispatch, SetStateAction } from 'react'

function MainMenu({ isOpen, onClose, openSubMenu, setCurrentCollection }: Props) {
  const {
    colors: { brandBlue, brandWhite },
  } = useTheme()

  const selectCollection = (collectionType: CollectionType) => {
    setCurrentCollection(collectionType)
    openSubMenu()
  }

  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="md" placement="left">
      <DrawerOverlay />
      <DrawerContent bg={brandBlue}>
        <CloseButton onClick={onClose} />
        <DrawerBody paddingTop="2rem">
          <MenuHeading text="BOARDS" />
          <MainMenuButton text="Surf" showArrow route="home" />
          <MainMenuButton text="Wakesurf" showArrow onClick={() => selectCollection('wakesurf')} />
          <MenuHeading text="APPAREL" />
          <MainMenuButton text="Hats" route="home" />
          <MainMenuButton text="Shirts" route="home" />
          <MainMenuButton text="Shorts" route="home" />
          <MenuHeading text="GEAR" />
          <MainMenuButton text="Gear" route="home" />
          <Divider bg={brandWhite} height="1px" mt="2rem" mb="1rem" variant="unstyled" />
          <MainMenuButton text="Shop All" size="2xl" route="shopAll" onClick={onClose} />
          <MainMenuButton text="About Us" size="2xl" route="aboutUs" onClick={onClose} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

type Props = {
  isOpen: boolean
  onClose: () => void
  openSubMenu: () => unknown
  setCurrentCollection: Dispatch<SetStateAction<CollectionType>>
}

export { MainMenu }

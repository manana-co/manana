import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useTheme,
  Heading,
  Divider,
} from '@chakra-ui/react'
import { ArrowButton } from 'components/arrow-button'
import { MainMenuButton } from 'components/main-menu-button'

function SubMenu({ onClose, isOpen }: Props) {
  const {
    colors: { brandRed, brandWhite },
  } = useTheme()
  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="full" placement="left">
      <DrawerOverlay />
      <DrawerContent bg={brandRed}>
        {/* <CloseButton onClick={onClose} /> */}
        <ArrowButton direction="back" onClick={onClose} isMenuButton />
        <DrawerBody>
          <Heading color={brandWhite} size="md" mt="2rem" mb="1rem">
            BOARDS
          </Heading>
          <Divider bg={brandWhite} height="1px" mb="1rem" />
          <MainMenuButton text="Molo" />
          <MainMenuButton text="Semi-Pro" />
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
}

export { SubMenu }

import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useTheme,
  Heading,
  Divider,
  Flex,
  Button,
} from '@chakra-ui/react'

import { ArrowButton } from 'components/arrow-button'
import { MainMenuButton } from 'components/main-menu-button'

function MainMenu({ isOpen, onClose }: Props) {
  const {
    colors: { brandBlue, brandWhite },
    fonts: { title },
  } = useTheme()
  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="full" placement="left">
      <DrawerOverlay />
      <DrawerContent bg={brandBlue}>
        <DrawerCloseButton _focus={{ boxShadow: 'none' }} color={brandWhite} size="lg" />
        <DrawerBody>
          <Heading color={brandWhite} size="md" mt="2rem" mb="1rem">
            BOARDS
          </Heading>
          <Divider bg={brandWhite} height="1px" mb="1rem" />
          <MainMenuButton text="Surf" showArrow />
          <MainMenuButton text="Wakesurf" showArrow />
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
}

export { MainMenu }

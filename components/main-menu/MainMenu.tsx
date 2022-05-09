import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useTheme,
  Heading,
  Divider,
} from '@chakra-ui/react'

function MainMenu({ isOpen, onClose }: Props) {
  const {
    colors: { brandBlue, brandWhite, brandRed },
  } = useTheme()
  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="full" placement="left">
      <DrawerOverlay />
      <DrawerContent bg={brandBlue}>
        <DrawerCloseButton _focus={{ boxShadow: 'none' }} color={brandWhite} size="lg" />
        <DrawerBody>
          <Heading color={brandWhite} size="md" marginY="1rem">
            BOARDS
          </Heading>
          <Divider bg={brandWhite} height="1px" />
          <Heading color={brandWhite} size="md" marginY="1rem">
            APPAREL
          </Heading>
          <Divider bg={brandWhite} height="1px" />
          <Heading color={brandWhite} size="md" marginY="1rem">
            GEAR
          </Heading>
          <Divider bg={brandWhite} height="1px" />
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

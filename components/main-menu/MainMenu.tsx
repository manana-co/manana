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
          <Button
            display="flex"
            alignItems="center"
            height="5rem"
            variant="unstyled"
            _focus={{ boxShadow: 'none' }}
          >
            <Heading color={brandWhite} size="4xl" fontFamily={title}>
              Surf
            </Heading>
            <ArrowButton />
          </Button>
          <Flex align="center" height="5rem">
            <Heading color={brandWhite} size="4xl" fontFamily={title}>
              Wakesurf
            </Heading>
            <ArrowButton />
          </Flex>
          <Heading color={brandWhite} size="md" mt="2rem" mb="1rem">
            APPAREL
          </Heading>
          <Divider bg={brandWhite} height="1px" mb="1rem" />
          <Heading color={brandWhite} size="4xl" fontFamily={title}>
            Hats
          </Heading>
          <Heading color={brandWhite} size="4xl" fontFamily={title}>
            Shirts
          </Heading>
          <Heading color={brandWhite} size="4xl" fontFamily={title}>
            Shorts
          </Heading>
          <Heading color={brandWhite} size="md" mt="2rem" mb="1rem">
            GEAR
          </Heading>
          <Divider bg={brandWhite} height="1px" mb="1rem" />
          <Heading color={brandWhite} size="4xl" fontFamily={title}>
            Gear
          </Heading>
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

import { Drawer, DrawerBody, DrawerOverlay, DrawerContent, useTheme } from '@chakra-ui/react'

import { CloseButton } from 'components/close-button'

function ShoppingCart({ isOpen, onClose }: Props) {
  const {
    colors: { brandBlue },
  } = useTheme()

  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="md" placement="right">
      <DrawerOverlay />
      <DrawerContent bg={brandBlue}>
        <CloseButton onClick={onClose} />
        <DrawerBody paddingTop="2rem">Hello</DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

type Props = {
  isOpen: boolean
  onClose: () => void
}

export { ShoppingCart }

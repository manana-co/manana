import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useTheme,
  Heading,
  DrawerFooter,
  Text,
  Button,
  Flex,
  Stack,
  DrawerHeader,
} from '@chakra-ui/react'

import { CloseButton } from 'components/close-button'
import { ShoppingCartItem } from 'components/shopping-cart-item'

function ShoppingCart({ isOpen, onClose }: Props) {
  const {
    colors: { brandBlue, brandWhite },
  } = useTheme()

  const numberOfCartItems = 2

  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="md" placement="right">
      <DrawerOverlay />
      <DrawerContent bg={brandBlue} color={brandWhite}>
        <CloseButton onClick={onClose} />
        <DrawerHeader>
          <Heading size="lg">Shopping Cart ({`${numberOfCartItems}`} items)</Heading>
        </DrawerHeader>
        <DrawerBody padding="2rem">
          <ShoppingCartItem />
        </DrawerBody>
        <DrawerFooter>
          <Stack direction="column" width="100%">
            <Flex justifyContent="space-between">
              <Heading size="lg">Subtotal:</Heading>
              <Heading size="lg">{`$${899.0}`}</Heading>
            </Flex>
            <Text opacity={0.7} pb="1rem">
              Shipping and taxes calculated at checkout
            </Text>
            <Button color="#000000">Checkout</Button>
          </Stack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

type Props = {
  isOpen: boolean
  onClose: () => void
}

export { ShoppingCart }

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
    fonts: { title, body },
  } = useTheme()

  const numberOfCartItems = 2

  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="md" placement="right">
      <DrawerOverlay />
      <DrawerContent bg={brandBlue} color={brandWhite}>
        <CloseButton onClick={onClose} />
        <DrawerHeader>
          <Heading size="lg" fontFamily={title}>
            Shopping Cart ({`${numberOfCartItems}`} items)
          </Heading>
        </DrawerHeader>
        <DrawerBody padding="2rem">
          <ShoppingCartItem />
        </DrawerBody>
        <DrawerFooter>
          <Stack direction="column" width="100%">
            <Flex justifyContent="space-between">
              <Heading size="lg" fontFamily={title}>
                Subtotal:
              </Heading>
              <Heading size="lg" fontFamily={title}>{`$${899.0}`}</Heading>
            </Flex>
            <Text opacity={0.7} pb="1rem" fontFamily={body}>
              Shipping and taxes calculated at checkout
            </Text>
            <Button color="#000000" fontFamily={body}>
              Checkout
            </Button>
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

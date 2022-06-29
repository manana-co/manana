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
import { useRouter } from 'next/router'

import { client } from 'client'
import { CloseButton } from 'components/close-button'
import { ShoppingCartItem } from 'components/shopping-cart-item'
import { useCheckout, createNewCart } from 'hooks/useCheckout'
import { LineItemToAdd } from 'shopify-buy'

function ShoppingCart({ isOpen, onClose }: Props) {
  const {
    colors: { brandBlue, brandWhite },
    fonts: { title, body },
  } = useTheme()
  const { lineItems } = useCheckout()
  const { push } = useRouter()

  const goToCheckout = async () => {
    if (!lineItems || !lineItems.length) return
    const { id, webUrl } = await createNewCart()
    const lineItemsToAdd = lineItems.map(({ id }) => ({ variantId: id, quantity: 1 }))
    await client.checkout.addLineItems(id as string, lineItemsToAdd)
    push(webUrl)
  }

  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="md" placement="right">
      <DrawerOverlay />
      <DrawerContent bg={brandBlue} color={brandWhite}>
        <CloseButton onClick={onClose} />
        <DrawerHeader>
          <Heading size="lg" fontFamily={title}>
            Shopping Cart ({lineItems?.length} items)
          </Heading>
        </DrawerHeader>
        <DrawerBody padding="2rem">
          {lineItems?.map((item) => (
            <ShoppingCartItem key={item.id} item={item} />
          ))}
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
            <Button
              color="#000000"
              fontFamily={body}
              onClick={goToCheckout}
              disabled={!lineItems?.length}
            >
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

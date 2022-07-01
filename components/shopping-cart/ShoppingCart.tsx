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
import { useState } from 'react'

function ShoppingCart({ isOpen, onClose }: Props) {
  const {
    colors: { brandBlue, brandWhite },
    fonts: { title, body },
  } = useTheme()
  const { lineItems, changeQuantity } = useCheckout()
  const { push } = useRouter()
  const [loading, setLoading] = useState(false)

  const goToCheckout = async () => {
    setLoading(true)
    if (!lineItems || !lineItems.length) return
    const { id, webUrl } = await createNewCart()
    const lineItemsToAdd = lineItems.map(({ variant: { id }, quantity }) => ({
      variantId: id,
      quantity,
    }))
    await client.checkout.addLineItems(id as string, lineItemsToAdd)
    push(webUrl)
  }

  const subTotal =
    lineItems?.reduce((finalPrice, { variant }) => {
      return finalPrice + Number(variant.price)
    }, 0) || 0

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
        <DrawerBody padding="1rem">
          {lineItems?.length
            ? lineItems.map((item) => (
                <ShoppingCartItem
                  key={item?.variant?.id}
                  item={item}
                  changeQuantity={changeQuantity}
                />
              ))
            : null}
        </DrawerBody>
        <DrawerFooter>
          <Stack direction="column" width="100%">
            <Flex justifyContent="space-between">
              <Heading size="lg" fontFamily={title}>
                Subtotal:
              </Heading>
              <Heading size="lg" fontFamily={title}>
                {`$${subTotal}`}
              </Heading>
            </Flex>
            <Text opacity={0.7} pb="1rem" fontFamily={body}>
              Shipping and taxes calculated at checkout
            </Text>
            <Button
              color="#000000"
              fontFamily={body}
              onClick={goToCheckout}
              disabled={!lineItems || lineItems.length === 0}
              isLoading={loading}
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

import { createContext, ReactNode, useContext, useState } from 'react'
import { client } from 'client'
import { useLocalStorage } from 'react-use'
import { ProductVariant, Product } from 'shopify-buy'

type LineItem = {
  title: Product['title']
  variant: ProductVariant
  quantity: number
}

type CheckoutContext = {
  addLineItem: (lineItem: LineItem) => void
  lineItems: LineItem[] | undefined
  toggleShoppingCart: () => void
  isShoppingCartOpen: boolean
  changeQuantity: (variantId: string, newQuantity: number) => void
}

const Checkout = createContext<CheckoutContext>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addLineItem: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleShoppingCart: () => {},
  lineItems: [],
  isShoppingCartOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  changeQuantity: () => {},
})

async function createNewCart() {
  const newCart = await client.checkout.create()
  return newCart
}

function CheckoutProvider({ children }: Props) {
  const [lineItems, setLineItems] = useLocalStorage<LineItem[]>('line-items', [])
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false)

  const toggleShoppingCart = () => setIsShoppingCartOpen((currentState) => !currentState)

  const addLineItem = async (lineItem: LineItem) => {
    if (!lineItems || !lineItems.length) return setLineItems([lineItem])
    const newLineItems = lineItems.concat(lineItem)
    setLineItems(newLineItems)
  }

  const changeQuantity = (variantId: string, newQuantity: number) => {
    const newLineItems = lineItems?.map((lineItem) => {
      if (lineItem.variant.id === variantId) return { ...lineItem, quantity: newQuantity }
      return lineItem
    })
    setLineItems(newLineItems)
  }

  console.log(lineItems)

  return (
    <Checkout.Provider
      value={{ lineItems, addLineItem, toggleShoppingCart, isShoppingCartOpen, changeQuantity }}
    >
      {children}
    </Checkout.Provider>
  )
}

function useCheckout() {
  const { lineItems, addLineItem, toggleShoppingCart, isShoppingCartOpen, changeQuantity } =
    useContext(Checkout)
  return { lineItems, addLineItem, toggleShoppingCart, isShoppingCartOpen, changeQuantity }
}

type Props = {
  children: ReactNode
}

export type { LineItem }
export { useCheckout, CheckoutProvider, createNewCart }

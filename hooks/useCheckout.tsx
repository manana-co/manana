import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { client } from 'client'
import { useLocalStorage } from 'react-use'
import { ProductVariant, Product } from 'shopify-buy'

type LineItem = {
  title: Product['title']
  variant: ProductVariant
}
type CheckoutContext = {
  addLineItem: (lineItem: LineItem) => void
  lineItems: LineItem[] | undefined
  toggleShoppingCart: () => void
  isShoppingCartOpen: boolean
}

const Checkout = createContext<CheckoutContext>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addLineItem: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleShoppingCart: () => {},
  lineItems: [],
  isShoppingCartOpen: false,
})

async function createNewCart() {
  const newCart = await client.checkout.create()
  return newCart
}

function CheckoutProvider({ children }: Props) {
  const [lineItems, setLineItems, removeLineItems] = useLocalStorage<LineItem[]>('line-items', [])
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false)

  useEffect(() => {
    console.log('running')
    removeLineItems()
  }, [removeLineItems])

  const toggleShoppingCart = () => setIsShoppingCartOpen((currentState) => !currentState)

  const addLineItem = async (lineItem: LineItem) => {
    if (!lineItems || !lineItems.length) return setLineItems([lineItem])
    const newLineItems = lineItems.concat(lineItem)
    setLineItems(newLineItems)
  }

  return (
    <Checkout.Provider value={{ lineItems, addLineItem, toggleShoppingCart, isShoppingCartOpen }}>
      {children}
    </Checkout.Provider>
  )
}

function useCheckout() {
  const { lineItems, addLineItem, toggleShoppingCart, isShoppingCartOpen } = useContext(Checkout)
  return { lineItems, addLineItem, toggleShoppingCart, isShoppingCartOpen }
}

type Props = {
  children: ReactNode
}

export type { LineItem }
export { useCheckout, CheckoutProvider, createNewCart }

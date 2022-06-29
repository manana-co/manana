import { createContext, ReactNode, useContext, useEffect } from 'react'
import { client } from 'client'
import { useLocalStorage } from 'react-use'
import { ProductVariant } from 'shopify-buy'

type CheckoutContext = {
  addLineItem: (variant: ProductVariant) => void
  lineItems: ProductVariant[] | undefined
}

const Checkout = createContext<CheckoutContext>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addLineItem: () => {},
  lineItems: [],
})

async function createNewCart() {
  const newCart = await client.checkout.create()
  return newCart
}

function CheckoutProvider({ children }: Props) {
  const [lineItems, setLineItems] = useLocalStorage<ProductVariant[]>('line-items', [])
  console.log('line items >>>', lineItems)

  // useEffect(() => () => removeLineItems(), [removeLineItems])

  const addLineItem = async (variant: ProductVariant) => {
    if (!lineItems || !lineItems.length) return setLineItems([variant])
    const newLineItems = lineItems.concat(variant)
    setLineItems(newLineItems)
  }

  return <Checkout.Provider value={{ lineItems, addLineItem }}>{children}</Checkout.Provider>
}

function useCheckout() {
  const { lineItems, addLineItem } = useContext(Checkout)
  return { lineItems, addLineItem }
}

type Props = {
  children: ReactNode
}

export { useCheckout, CheckoutProvider, createNewCart }

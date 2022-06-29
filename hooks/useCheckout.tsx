import { createContext, ReactNode, useContext } from 'react'
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
  const [lineItems, setLineItems] = useLocalStorage<LineItem[]>('line-items', [])
  console.log('line items >>>', lineItems)

  // useEffect(() => () => removeLineItems(), [removeLineItems])

  const addLineItem = async (lineItem: LineItem) => {
    if (!lineItems || !lineItems.length) return setLineItems([lineItem])
    const newLineItems = lineItems.concat(lineItem)
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

export type { LineItem }
export { useCheckout, CheckoutProvider, createNewCart }

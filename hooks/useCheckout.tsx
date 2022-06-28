import { createContext, ReactNode, useContext, useState } from 'react'
// import useSWR from 'swr'
import { client } from 'client'
// import { LineItem, LineItemToAdd } from 'shopify-buy'
import { ProductVariant } from 'shopify-buy'

type CheckoutContext = {
  // checkoutId: string | undefined
  lineItems: ProductVariant[]
  addToCheckout: (itemsToAdd: ProductVariant) => void
}

const Checkout = createContext<CheckoutContext>({
  // checkoutId: undefined,
  lineItems: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addToCheckout: () => {},
})

async function createNewCheckout() {
  return await client.checkout.create()
}

function CheckoutProvider({ children }: Props) {
  // const { data: checkout } = useSWR('checkout', createNewCheckout)
  // const [lineItems, setLineItems] = useState<LineItem[]>([])
  const [lineItems, setLineItems] = useState<ProductVariant[]>([])

  // const checkoutId = (checkout?.id as string) || undefined

  // async function addToCheckout(itemToAdd: LineItemToAdd) {
  async function addToCheckout(itemToAdd: ProductVariant) {
    // const lineItemsToSave = [itemToAdd]
    // const newCheckout = await client.checkout.addLineItems(checkoutId as string, lineItemsToSave)
    // console.log('new checkout >>>', newCheckout)

    // const newLineItems = newCheckout.lineItems

    setLineItems((currItems) => currItems.concat(itemToAdd))
  }
  console.log(lineItems)

  return (
    // <Checkout.Provider value={{ checkoutId, lineItems, addToCheckout }}>
    <Checkout.Provider value={{ lineItems, addToCheckout }}>{children}</Checkout.Provider>
  )
}

function useCheckout() {
  const { lineItems, addToCheckout } = useContext(Checkout)
  return { lineItems, addToCheckout }
}

type Props = {
  children: ReactNode
}

export { useCheckout, CheckoutProvider }

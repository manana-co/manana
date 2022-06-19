import useSWR from 'swr'
import { client } from 'client'

async function getProduct(url: string, id: string) {
  return await client.product.fetch(`gid://shopify/Product/${id}`)
}

function useProduct(id: string) {
  const { data: product, error } = useSWR(id ? [`/product/${id}`, id] : null, getProduct)

  return {
    product,
    isLoading: !product && !error,
    isError: error,
  }
}

export { useProduct }

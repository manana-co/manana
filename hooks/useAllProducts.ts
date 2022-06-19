import useSWR from 'swr'
import { client } from 'client'

async function getAllProducts() {
  return await client.product.fetchAll()
}

function useAllProducts() {
  const { data, error } = useSWR('/shop-all', getAllProducts)
  return {
    products: data,
    isLoading: !data && !error,
    isError: !!error,
  }
}

export { useAllProducts, getAllProducts }

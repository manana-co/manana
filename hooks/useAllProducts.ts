import useSWR from 'swr'
import { client } from 'client'

async function getAllProducts() {
  const allProducts = await client.product.fetchAll()
  return allProducts.map(({ title, description, images, options, variants, ...allElse }) => ({
    title,
    description,
    images,
    options,
    variants,
    ...allElse,
  }))
}

function useAllProducts() {
  const { data, error } = useSWR('allProducts', getAllProducts)
  return {
    products: data,
    isLoading: !data && !error,
    isError: error,
  }
}

export { useAllProducts, getAllProducts }

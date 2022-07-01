import useSWR from 'swr'
import { client } from 'client'
import { Collection, Product } from 'shopify-buy'

const getCollection = async (
  url: string,
  collectionType: CollectionType,
): Promise<ModifiedCollection> => {
  const response = await client.collection.fetchByHandle(collectionType)
  return response as unknown as ModifiedCollection
}

function useCollection(collectionType: CollectionType | undefined) {
  const { data: collection, error } = useSWR(
    collectionType ? [`/${collectionType}`, collectionType] : null,
    getCollection,
  )

  return {
    collection,
    isLoading: !collection && !error,
    isError: !!error,
  }
}

type CollectionType =
  | 'wakesurf'
  | 'surf'
  | 'gear'
  | 'shorts'
  | 't-shirts'
  | 'hats'
  | 'best-sellers'
  | 'surf-stuff'

type ModifiedCollection = Collection & {
  products: Product[]
}
export type { CollectionType }
export { useCollection }

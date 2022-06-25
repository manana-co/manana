import { SimpleGrid } from '@chakra-ui/react'
import { ProductGroup } from 'components/product-group'
import { SectionHeading } from 'components/section-heading'
import boatHatImage from 'public/boat-with-hat.jpeg'
import { SplashImage } from 'components/splash-image'
import { CollectionType, useCollection } from 'hooks/useCollection'
import { useRouter } from 'next/router'

function ShopAllByCollection() {
  const {
    query: { collectionType },
  } = useRouter()

  const { collection, isLoading, isError } = useCollection(collectionType as CollectionType)

  if (!collection || isLoading || isError) return null

  return (
    <>
      <SplashImage image={boatHatImage} />
      <SectionHeading text={`SHOP ALL ${typeMap[collectionType as CollectionType]}`} />
      <SimpleGrid minChildWidth="20rem" padding="1rem" spacing={10}>
        {collection.products?.map((product) => (
          <ProductGroup key={product.title} product={product} />
        )) || []}
      </SimpleGrid>
    </>
  )
}

const typeMap: Record<CollectionType, string> = {
  't-shirts': 'SHIRTS',
  gear: 'GEAR',
  shorts: 'SHORTS',
  hats: 'HATS',
  wakesurf: 'WAKESURF BOARDS',
  surf: 'SURF BOARDS',
}

export default ShopAllByCollection

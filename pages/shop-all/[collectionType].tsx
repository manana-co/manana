import { Flex, useMediaQuery } from '@chakra-ui/react'
import { ProductGroup } from 'components/product-group'
import { SectionHeading } from 'components/section-heading'
import hatsImage from 'public/boat-with-hat.jpeg'
import shopAll from 'public/shop-all.jpeg'
import shortsImage from 'public/shorts.jpeg'
import shirtsImage from 'public/shirts.jpeg'
import { SplashImage } from 'components/splash-image'
import { CollectionType, useCollection } from 'hooks/useCollection'
import { useRouter } from 'next/router'
import { StaticImageData } from 'next/image'

function ShopAllByCollection() {
  const {
    query: { collectionType },
  } = useRouter()
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)')
  const { collection, isLoading, isError } = useCollection(collectionType as CollectionType)
  const { image, position } = imageMap[collectionType as CollectionType] || {
    image: shopAll,
    position: 'center -150px',
  }

  const shouldLeftAlignProducts = (collection?.products?.length || 1) < 3 && !isSmallerThan800
  return (
    <>
      <SplashImage image={image} specificHeight={0.5} imagePosition={position} />
      <SectionHeading text={`SHOP ALL ${typeMap[collectionType as CollectionType]}`} />
      <Flex
        justifyContent={shouldLeftAlignProducts ? 'flex-start' : 'space-evenly'}
        flexWrap="wrap"
        minHeight="450px"
      >
        {((collection || !isLoading || !isError) &&
          collection?.products?.map((product) => (
            <ProductGroup key={product.id} product={product} />
          ))) ||
          []}
      </Flex>
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
  'best-sellers': 'BEST SELLERS',
  'surf-stuff': 'SURF STUFF',
}

type ImageAndPosition = {
  image?: StaticImageData
  position?: string
}

const imageMap: Record<CollectionType, ImageAndPosition | undefined> = {
  hats: {
    image: hatsImage,
  },
  shorts: {
    image: shortsImage,
  },
  't-shirts': {
    image: shirtsImage,
    position: '50% 40%',
  },
  wakesurf: undefined,
  surf: undefined,
  gear: undefined,
  'best-sellers': undefined,
  'surf-stuff': undefined,
}

export default ShopAllByCollection

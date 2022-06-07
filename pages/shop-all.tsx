import { SimpleGrid } from '@chakra-ui/react'
import { ProductGroup } from 'components/product-group'
import { SectionHeading } from 'components/section-heading'
import boatHatImage from 'public/boat-with-hat.jpeg'
import { Product } from 'utils/shared-types'
import { SplashImage } from 'components/splash-image'

function ShopAll() {
  return (
    <>
      <SplashImage image={boatHatImage} />
      <SectionHeading text="SHOP ALL" />
      <SimpleGrid minChildWidth="20rem" padding="1rem" spacing={10}>
        {testProducts.map((product) => (
          <ProductGroup key={product.title} product={product} />
        ))}
      </SimpleGrid>
    </>
  )
}

const testProducts: Product[] = [
  {
    title: 'Molo',
    imageSrc: 'board-example.png',
    price: '$899',
  },
  {
    title: 'Enamel Mug',
    imageSrc: 'mug-example.png',
    price: '$19',
  },
  {
    title: 'Logo Tee',
    imageSrc: 'shirt-example.png',
    price: '$45',
  },
  {
    title: 'Red Hat',
    imageSrc: 'hat-example.png',
    price: '$35',
  },
  {
    title: 'Striped Shorts',
    imageSrc: 'shorts-example.png',
    price: '$35',
  },
]

export default ShopAll

import { SimpleGrid } from '@chakra-ui/react'
import { ProductGroup } from 'components/product-group'
import { SectionHeading } from 'components/section-heading'
import boatHatImage from 'public/boat-with-hat.jpeg'
import { SplashImage } from 'components/splash-image'
import { useAllProducts } from 'hooks/useAllProducts'

function ShopAll() {
  const { products } = useAllProducts()

  return (
    <>
      <SplashImage image={boatHatImage} />
      <SectionHeading text="SHOP ALL" />
      <SimpleGrid minChildWidth="20rem" padding="1rem" spacing={10}>
        {products?.map((product) => <ProductGroup key={product.title} product={product} />) || []}
      </SimpleGrid>
    </>
  )
}

export default ShopAll

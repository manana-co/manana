import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import { ProductGroup } from 'components/product-group'
import { SectionHeading } from 'components/section-heading'
import boatHatImage from 'public/boat-with-hat.jpeg'
import { Product } from 'utils/shared-types'

function ShopAll() {
  return (
    <>
      <Box
        maxHeight="100vh"
        width="100%"
        overflow="hidden"
        display="flex"
        alignItems="center"
        userSelect="none"
      >
        <Image src={boatHatImage} alt="main landing image" layout="intrinsic" priority />
      </Box>
      <SectionHeading text="SHOP ALL" />
      <Box height="100rem" padding="1rem">
        {testProducts.map((product) => (
          <ProductGroup key={product.title} product={product} />
        ))}
      </Box>
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
// <ProductImage imageSrc="board-example.png" alternateText="test" />
// <ProductImage imageSrc="mug-example.png" alternateText="test" />
// <ProductImage imageSrc="shirt-example.png" alternateText="test" />
// <ProductImage imageSrc="shorts-example.png" alternateText="test" />

export default ShopAll

import { Box, Button, Stack, useTheme } from '@chakra-ui/react'
import Link from 'next/link'
import { ProductImage } from 'components/product-image'
import { SectionHeading } from 'components/section-heading'
import { CollectionType, useCollection } from 'hooks/useCollection'
import { getId } from 'utils'

function ProductSection({ title, collectionType }: Props) {
  const {
    colors: { brandWhite, brandTan },
  } = useTheme()
  const { collection, isLoading, isError } = useCollection(collectionType)

  if (!collection || isLoading || isError) {
    return null
  }

  return (
    <Box as="section" bg={brandWhite}>
      <SectionHeading text={title} />
      <Stack
        direction="row"
        height={['30rem', '30rem', '35rem', '35rem']}
        spacing="2rem"
        padding={['1rem', '2rem']}
        overflowX="auto"
      >
        {collection.products.map(({ images, id }) => (
          <Link
            key={id}
            href={{
              pathname: '/product/[productId]',
              query: { productId: getId(id as string) },
            }}
            style={{ cursor: 'pointer' }}
          >
            <Button
              height="100%"
              minWidth={'20rem'}
              background={brandTan}
              _hover={{ background: brandTan }}
            >
              <ProductImage imageSrc={images?.[0]?.src} alternateText="test" />
            </Button>
          </Link>
        ))}
      </Stack>
    </Box>
  )
}

type Props = {
  title: string
  collectionType: CollectionType
}

export { ProductSection }

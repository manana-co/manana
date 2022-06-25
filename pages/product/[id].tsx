import { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  useTheme,
  Box,
  Heading,
  Flex,
  Stack,
  Button,
  SimpleGrid,
  Center,
  useMediaQuery,
} from '@chakra-ui/react'
// import { ArrowButton } from 'components/arrow-button'
import { ImageCarousel } from 'components/image-carousel'
import { useRouter } from 'next/router'
import { useProduct } from 'hooks/useProduct'
import { VariantButton } from 'components/variant-button'

function Product() {
  const { query } = useRouter()
  const {
    colors: { brandRed, brandTan, brandBlue },
    heights: { topNavBar },
    fonts: { title: titleFont, body },
  } = useTheme()
  const [isLargerThan400] = useMediaQuery('(min-width: 400px)')

  const { product, isLoading, isError } = useProduct(query.id as string)

  const [selectedVariant, setSelectedVariant] = useState<ModifiedProductVariant | undefined>(
    product?.variants[0] as ModifiedProductVariant,
  )
  const [activeImageId, setActiveImageId] = useState<string>(selectedVariant?.image.id as string)

  useEffect(() => {
    if (product && !selectedVariant) {
      setSelectedVariant(product.variants[0] as ModifiedProductVariant)
    }
  }, [selectedVariant, product])

  const setNewSelectedVariant = (optionType: 'Color' | 'Size', optionValue: string) => {
    const currentSelectedOptions: Record<'Color' | 'Size', string> | undefined =
      selectedVariant?.selectedOptions.reduce(
        (final, current) => ({
          ...final,
          [current.name]: current.value,
        }),
        {} as Record<'Color' | 'Size', string>,
      )

    const newVariant = (product?.variants as ModifiedProductVariant[]).find(({ selectedOptions }) =>
      selectedOptions.every(({ name, value }) => {
        if (name === optionType) return value === optionValue
        return currentSelectedOptions?.[name as 'Color' | 'Size'] === value
      }),
    )
    setSelectedVariant(newVariant)
    setActiveImageId(newVariant?.image.id as string)
  }

  const setVariantById = (variantId: string) => {
    const variantToSet = product?.variants.find(({ id }) => id === variantId)
    setSelectedVariant(variantToSet as ModifiedProductVariant)
  }

  const borderStyle = `2px solid ${brandRed}`

  if (!product || isLoading || isError) return null

  const { title, description, options, variants } = product
  const variantImages = variants.map(({ image, id }: ShopifyBuy.ProductVariant) => ({
    image,
    variantId: id as string,
  }))

  const { value: selectedColor } = selectedVariant?.selectedOptions.find(
    ({ name }: { name: string }) => name === 'Color',
  ) || { value: undefined }
  const { value: selectedSize } = selectedVariant?.selectedOptions.find(
    ({ name }: { name: string }) => name === 'Size',
  ) || { value: undefined }

  return (
    <Box background={brandTan} padding={`${topNavBar} 1rem 0`} scrollPaddingTop="5rem">
      <Box maxWidth="2000px" margin="0 auto">
        {/* <Box borderY={borderStyle}>
          <ArrowButton direction="back" color={brandRed} />
        </Box> */}
        <Box padding="1rem">
          <Heading size="4xl" color={brandBlue} fontFamily={titleFont}>
            {title}
          </Heading>
          <Heading size="lg" color={brandBlue} fontFamily={body}>
            {description}
          </Heading>
        </Box>
        <SimpleGrid
          minChildWidth="30rem"
          maxWidth="100%"
          paddingBottom="2rem"
          borderTop={borderStyle}
          minHeight="50rem"
        >
          <Box height="40rem" maxWidth="calc(100vw - 2rem)" padding="2rem 1rem 2rem 0">
            <ImageCarousel
              images={variantImages}
              activeImageId={activeImageId}
              setActiveImageId={setActiveImageId}
              setVariant={setVariantById}
            />
          </Box>
          <Stack
            direction="column"
            fontFamily={body}
            maxWidth="calc(100vw - 2rem)"
            borderLeft={borderStyle}
            paddingLeft="1rem"
          >
            {options.map((option) => (
              <Flex
                key={option.name}
                flexDirection="column"
                justifyContent="center"
                height="10rem"
                borderBottom={borderStyle}
                width="100%"
              >
                <Heading size="md" color={brandRed} marginBottom="2rem">
                  {option.name.toUpperCase()}
                </Heading>
                <Stack direction="row">
                  {option.values.map((value) => {
                    if (option.name === 'Color') {
                      return (
                        <VariantButton
                          key={value.value}
                          text={value.value}
                          optionType="Color"
                          selected={selectedColor === value.value}
                          onSelect={setNewSelectedVariant}
                        />
                      )
                    }
                    if (option.name === 'Size') {
                      return (
                        <VariantButton
                          key={value.value}
                          text={value.value}
                          optionType="Size"
                          selected={selectedSize === value.value}
                          onSelect={setNewSelectedVariant}
                        />
                      )
                    }
                    return null
                  })}
                </Stack>
              </Flex>
            ))}
            <Flex height="10rem" width="100%" alignItems="center">
              <Button
                variant="unstyled"
                fontSize={28}
                color={brandRed}
                border={borderStyle}
                borderRadius={0}
                padding="2rem"
                display="flex"
                alignItems="center"
                width="30rem"
                _hover={{ background: brandRed, color: brandTan }}
              >{`ADD TO CARD - $${selectedVariant?.price}`}</Button>
            </Flex>
          </Stack>
        </SimpleGrid>
        <SimpleGrid
          minChildWidth="40rem"
          spacing="1rem"
          height={isLargerThan400 ? '80rem' : '30rem'}
          maxWidth="calc(100vw - 2rem)"
        >
          <Box position="relative" maxWidth="calc(100vw - 2rem)">
            <Image src="/boards-on-car.jpeg" alt="test" layout="fill" objectFit="contain" />
          </Box>
          <Box position="relative" maxWidth="calc(100vw - 2rem)">
            <Image src="/wave-yellow-board.jpeg" alt="test" layout="fill" objectFit="contain" />
          </Box>
        </SimpleGrid>
        <Center height="30rem" flexDirection="column">
          <Heading
            size="4xl"
            marginBottom="2rem"
            fontFamily={titleFont}
            color={brandBlue}
            _before={{ content: 'open-quote' }}
            _after={{ content: 'close-quote' }}
          >
            Hunk-o-shit
          </Heading>
          <Heading size="lg" fontFamily={body} color={brandRed}>
            Some guy on yelp
          </Heading>
        </Center>
      </Box>
    </Box>
  )
}

type ModifiedProductVariant = ShopifyBuy.ProductVariant & {
  selectedOptions: {
    name: string
    value: string
  }[]
}

export default Product

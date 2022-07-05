import { useMemo, Dispatch, SetStateAction, useEffect } from 'react'
import Image from 'next/image'
import { Flex, Box, Button, useTheme, IconButton } from '@chakra-ui/react'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

function ImageCarousel({
  variantImages,
  productImages,
  activeImageId,
  setActiveImageId,
  setVariant,
}: Props) {
  const {
    colors: { brandBlue },
  } = useTheme()

  const uniqueImages = useMemo(
    () => getUniqueImages(variantImages, productImages),
    [variantImages, productImages],
  )
  // prob don't need this ^ when products have unique variants

  useEffect(() => {
    const photo = document.getElementById(activeImageId as string)

    photo?.scrollIntoView({ block: 'nearest' })
  }, [activeImageId])

  const changeImageByArrow = (direction: boolean) => {
    const currentImageIndex = uniqueImages.findIndex(({ id }) => id === activeImageId)
    const nextIndex = direction ? currentImageIndex + 1 : currentImageIndex - 1 || 0
    const lastIndex = uniqueImages.length - 1
    if (nextIndex === -1) {
      const variantId = uniqueImages[lastIndex].variantId
      if (variantId) setVariant(variantId as string)
      return setActiveImageId(uniqueImages[lastIndex].id as string)
    }
    if (nextIndex > lastIndex) {
      const variantId = uniqueImages[0].variantId
      if (variantId) setVariant(variantId as string)
      return setActiveImageId(uniqueImages[0].id as string)
    }
    const variantId = uniqueImages[nextIndex].variantId
    if (variantId) setVariant(variantId as string)
    setActiveImageId(uniqueImages[nextIndex].id as string)
  }

  const changeImageByButton = (imageId: string, variantId: string | undefined) => {
    setActiveImageId(imageId)
    if (variantId) setVariant(variantId)
  }

  return (
    <Box bg="transparent" height="100%" position="relative">
      <Flex height="100%" alignItems="center" position="relative">
        <IconButton
          display="flex"
          alignItems="center"
          variant="unstyled"
          aria-label="left arrow"
          icon={<AiOutlineArrowLeft />}
          onClick={() => changeImageByArrow(false)}
          position="absolute"
          zIndex={1}
          background="#ffffff70"
          left={3}
        />
        <Flex
          overflowX="auto"
          scrollSnapType="x mandatory"
          scrollBehavior="smooth"
          height="100%"
          width="100%"
          sx={{
            scrollbarWidth: 'none',
            '::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {uniqueImages.map(({ id, src, altText }, index) => (
            <Box
              key={id}
              id={id as string}
              flexShrink={0}
              height="100%"
              width="100%"
              position="relative"
            >
              <Image
                src={src}
                alt={altText}
                layout="fill"
                objectFit="contain"
                priority={index === 0}
              />
            </Box>
          ))}
        </Flex>
        <IconButton
          display="flex"
          alignItems="center"
          variant="unstyled"
          aria-label="right arrow"
          icon={<AiOutlineArrowRight />}
          onClick={() => changeImageByArrow(true)}
          position="absolute"
          zIndex={1}
          background="#ffffff70"
          right={3}
        />
      </Flex>
      <Flex justifyContent="center" marginTop="2rem">
        {uniqueImages.map(({ id, variantId }, index) => {
          const isSelected = activeImageId ? activeImageId === id : index === 0
          return (
            <Button
              key={id}
              onClick={() => changeImageByButton(id as string, variantId)}
              background={isSelected ? brandBlue : 'none'}
              variant="unstyled"
              border={`1px solid ${brandBlue}`}
              height="1rem"
              width="1rem"
              minWidth="1rem"
              borderRadius="10px"
              margin="1rem 0.5rem"
            ></Button>
          )
        })}
      </Flex>
    </Box>
  )
}

function getUniqueImages(
  variantImages: Props['variantImages'],
  productImages: Props['productImages'],
) {
  const transformedVariantImages: TransformedImage[] = variantImages.map(
    ({ image: { id, src, attrs }, variantId }) => ({
      id: id as string,
      src,
      altText: attrs.altText,
      variantId,
    }),
  )
  const transformedProductImages: TransformedImage[] = productImages.map(
    ({ image: { id, src, attrs } }) => ({
      id: id as string,
      src,
      altText: attrs.altText,
      variantId: undefined,
    }),
  )

  return transformedVariantImages
    .concat(transformedProductImages)
    .reduce((finalList, currentImage) => {
      const imageAlreadyThere = finalList.some(({ id }) => id === currentImage.id)
      if (imageAlreadyThere) return finalList
      return finalList.concat(currentImage)
    }, [] as TransformedImage[])
}

type Props = {
  variantImages: Image[]
  productImages: {
    image: ShopifyBuy.Image
  }[]
  activeImageId: string
  setActiveImageId: Dispatch<SetStateAction<string>>
  setVariant: (variantId: string) => void
}

type Image = {
  image: ShopifyBuy.Image
  variantId: string
}

type TransformedImage = {
  id: string
  src: string
  altText: string
  variantId: string | undefined
}

export { ImageCarousel }

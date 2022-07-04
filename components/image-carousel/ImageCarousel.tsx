import { useMemo, Dispatch, SetStateAction, useEffect } from 'react'
import Image from 'next/image'
import { Flex, Box, Button, useTheme, IconButton } from '@chakra-ui/react'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

function ImageCarousel({ images, activeImageId, setActiveImageId, setVariant }: Props) {
  const {
    colors: { brandBlue },
  } = useTheme()
  // console.log('>>', images)

  const uniqueImages = useMemo(() => getUniqueImages(images), [images])
  // prob don't need this ^ when products have unique variants

  useEffect(() => {
    const photo = document.getElementById(activeImageId as string)
    photo?.scrollIntoView({ block: 'nearest' })
  }, [activeImageId])

  const changeImageByArrow = (direction: boolean) => {
    const currentImageIndex = uniqueImages.findIndex(({ image }) => image.id === activeImageId)
    const nextIndex = direction ? currentImageIndex + 1 : currentImageIndex - 1 || 0
    const lastIndex = uniqueImages.length - 1
    if (nextIndex === -1) {
      setVariant(uniqueImages[lastIndex].variantId)
      return setActiveImageId(uniqueImages[lastIndex].image.id as string)
    }
    if (nextIndex > lastIndex) {
      setVariant(uniqueImages[0].variantId)
      return setActiveImageId(uniqueImages[0].image.id as string)
    }
    setVariant(uniqueImages[nextIndex].variantId)
    setActiveImageId(uniqueImages[nextIndex].image.id as string)
  }

  const changeImageByButton = (imageId: string, variantId: string) => {
    setActiveImageId(imageId)
    setVariant(variantId)
  }

  return (
    <Box bg="transparent" height="100%" width="100%" position="relative">
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
          {uniqueImages.map(({ image }, index) =>
            image ? (
              <Box
                key={image.id}
                id={image.id as string}
                flexShrink={0}
                height="100%"
                width="100%"
                position="relative"
              >
                <Image
                  src={image.src}
                  alt={image.attrs.altText}
                  layout="fill"
                  objectFit="contain"
                  priority={index === 0}
                />
              </Box>
            ) : null,
          )}
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
          right={0}
        />
      </Flex>
      <Flex justifyContent="center" marginTop="2rem">
        {uniqueImages.map(({ image, variantId }, index) => {
          if (!image) return null
          const isSelected = activeImageId ? activeImageId === image.id : index === 0
          return (
            <Button
              key={image.id}
              onClick={() => changeImageByButton(image.id as string, variantId)}
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

function getUniqueImages(images: Image[]) {
  return images.reduce((finalList, currentImage) => {
    const imageAlreadyThere = finalList.some(({ image }) => image.id === currentImage.image.id)
    if (imageAlreadyThere) return finalList
    return finalList.concat(currentImage)
  }, [] as Image[])
}

type Props = {
  images: Image[]
  activeImageId: string
  setActiveImageId: Dispatch<SetStateAction<string>>
  setVariant: (variantId: string) => void
}

type Image = {
  image: ShopifyBuy.Image
  variantId: string
}

export { ImageCarousel }

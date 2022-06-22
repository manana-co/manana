import { useMemo, Dispatch, SetStateAction, useEffect } from 'react'
import Image from 'next/image'
import { Flex, Box, Button, useTheme, IconButton } from '@chakra-ui/react'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

function ImageCarousel({ images, activeImageId, setActiveImageId }: Props) {
  const {
    colors: { brandBlue },
  } = useTheme()
  const uniqueImages = useMemo(() => getUniqueImages(images), [images])
  // prob don't need this ^ when products have unique variants

  useEffect(() => {
    const photo = document.getElementById(activeImageId as string)
    photo?.scrollIntoView({ block: 'nearest' })
  }, [activeImageId])

  const changeImage = (direction: boolean) => {
    const currentImageIndex = uniqueImages.findIndex((image) => image.id === activeImageId)
    const nextIndex = direction ? currentImageIndex + 1 : currentImageIndex - 1 || 0
    const lastIndex = uniqueImages.length - 1
    if (nextIndex === -1) {
      return setActiveImageId(uniqueImages[lastIndex].id as string)
    }
    if (nextIndex > lastIndex) {
      return setActiveImageId(uniqueImages[0].id as string)
    }
    setActiveImageId(uniqueImages[nextIndex].id as string)
  }

  return (
    <Box bg="transparent" height="100%" width="100%" position="relative">
      <Flex height="100%" justifyContent="space-between" alignItems="center">
        <IconButton
          variant="unstyled"
          aria-label="left arrow"
          icon={<AiOutlineArrowLeft />}
          onClick={() => changeImage(false)}
        />
        <Flex
          overflowX="auto"
          scrollSnapType="x mandatory"
          scrollBehavior="smooth"
          height="100%"
          width="80%"
          position="relative"
          sx={{
            scrollbarWidth: 'none',
            '::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {uniqueImages.map(({ src, id, attrs: { altText } }) => (
            <Box
              key={id}
              id={id as string}
              flexShrink={0}
              height="100%"
              width="100%"
              position="relative"
            >
              <Image src={src} alt={altText} layout="fill" objectFit="contain" priority />
            </Box>
          ))}
        </Flex>
        <IconButton
          variant="unstyled"
          aria-label="right arrow"
          icon={<AiOutlineArrowRight />}
          onClick={() => changeImage(true)}
        />
      </Flex>
      <Flex justifyContent="center">
        {uniqueImages.map(({ id }) => (
          <Button
            key={id}
            onClick={() => setActiveImageId(id as string)}
            background={activeImageId === id ? brandBlue : 'none'}
            variant="unstyled"
            border={`1px solid ${brandBlue}`}
            height="1rem"
            width="1rem"
            minWidth="1rem"
            borderRadius="10px"
            margin="1rem 0.5rem"
          ></Button>
        ))}
      </Flex>
    </Box>
  )
}

function getUniqueImages(images: ShopifyBuy.Image[]) {
  return images.reduce((finalList, currentImage) => {
    const imageAlreadyThere = finalList.some(({ id }) => id === currentImage.id)
    if (imageAlreadyThere) return finalList
    return finalList.concat(currentImage)
  }, [] as ShopifyBuy.Image[])
}

type Props = {
  images: ShopifyBuy.Image[]
  activeImageId: string
  setActiveImageId: Dispatch<SetStateAction<string>>
}

export { ImageCarousel }

import { useMemo, Dispatch, SetStateAction, useEffect } from 'react'
import Image from 'next/image'
import { Flex, Box, Button, useTheme } from '@chakra-ui/react'

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

  return (
    <Box bg="transparent" height="100%" width="100%">
      <Flex
        overflowX="auto"
        scrollSnapType="x mandatory"
        scrollBehavior="smooth"
        height="100%"
        position="relative"
        sx={{
          scrollbarWidth: 'none',
          '::-webkit-scrollbar': {
            display: 'none',
          },
        }}
        overflow="hidden"
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
      <Flex justifyContent="center">
        {uniqueImages.map(({ id }) => (
          <Button
            key={id}
            onClick={(e) => {
              e.preventDefault()
              const photo = document.getElementById(id as string)
              setActiveImageId(id as string)
              photo?.scrollIntoView({ block: 'nearest' })
            }}
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

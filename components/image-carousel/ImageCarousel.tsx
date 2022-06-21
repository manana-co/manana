import { useState } from 'react'
import Image from 'next/image'
import { Flex, Box, Button, useTheme } from '@chakra-ui/react'

function ImageCarousel({ images }: Props) {
  const {
    colors: { brandBlue },
  } = useTheme()
  const [activePicture, setActivePicture] = useState(0)

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
      >
        {images.map(({ src, id, attrs: { altText } }) => (
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
        {images.map(({ id }, index) => (
          <Button
            key={id}
            onClick={(e) => {
              e.preventDefault()
              const photo = document.getElementById(id as string)
              setActivePicture(index)
              photo?.scrollIntoView({ block: 'nearest' })
            }}
            background={activePicture === index ? brandBlue : 'none'}
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

type Props = {
  images: ShopifyBuy.Image[]
}

export { ImageCarousel }

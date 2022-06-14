import { useState } from 'react'
import Image from 'next/image'
import { Flex, Box, Button, useTheme } from '@chakra-ui/react'

import hatImage from 'public/hat-example.png'
import boardImage from 'public/board-example.png'
import mugImage from 'public/mug-example.png'
import shirtImage from 'public/shirt-example.png'
import shortsImage from 'public/shorts-example.png'

const mockImageSrcs = [
  { src: hatImage, id: 'hat' },
  { src: boardImage, id: 'board' },
  { src: mugImage, id: 'mug' },
  { src: shirtImage, id: 'shirt' },
  { src: shortsImage, id: 'shorts' },
]

function ImageCarousel() {
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
          '-ms-overflow-style': 'none',
        }}
      >
        {mockImageSrcs.map(({ src, id }) => (
          <Box key={id} id={id} flexShrink={0} height="100%" width="100%" position="relative">
            <Image src={src} alt="test" layout="fill" objectFit="contain" priority />
          </Box>
        ))}
      </Flex>
      <Flex justifyContent="center">
        {mockImageSrcs.map(({ id }, index) => (
          <Button
            key={id}
            onClick={(e) => {
              e.preventDefault()
              const photo = document.getElementById(id)
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
            margin="0 0.5rem"
            _focus={{ boxShadow: 'none' }}
          ></Button>
        ))}
      </Flex>
    </Box>
  )
}

export { ImageCarousel }

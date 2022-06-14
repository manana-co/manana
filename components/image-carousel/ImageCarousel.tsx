import Image from 'next/image'
import { Flex, Box, Button } from '@chakra-ui/react'

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
  return (
    <Box bg="transparent" height="100%" width="100%">
      <Flex
        overflowX="auto"
        scrollSnapType="x mandatory"
        scrollBehavior="smooth"
        height="100%"
        position="relative"
      >
        {mockImageSrcs.map(({ src, id }) => (
          <Box key={id} id={id} flexShrink={0} height="100%" width="100%" position="relative">
            <Image src={src} alt="test" layout="fill" objectFit="contain" />
          </Box>
        ))}
      </Flex>
      {mockImageSrcs.map(({ id }) => (
        <Button
          as="a"
          key={id}
          onClick={(e) => {
            e.preventDefault()
            const photo = document.getElementById(id)
            photo?.scrollIntoView({ block: 'nearest' })
          }}
        ></Button>
      ))}
    </Box>
  )
}

export { ImageCarousel }

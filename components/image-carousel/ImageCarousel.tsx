import Image from 'next/image'
import { Flex, Box, Button } from '@chakra-ui/react'
// import { ProductImage } from 'components/product-image'

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
          <Box
            key={id}
            id={`${id}`}
            scrollSnapAlign="start"
            flexShrink={0}
            marginRight="50px"
            height="100%"
            width="100%"
            borderRadius="10px"
            transformOrigin="center center"
            transform="scale(1)"
            transition="transform 0.5s"
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
            scrollMarginTop="10rem"
          >
            <Image src={src} alt="test" layout="fill" width="100%" />
          </Box>
        ))}
        {/* <Box
          scrollSnapAlign="start"
          flexShrink={0}
          marginRight="50px"
          height="100%"
          width="100%"
          borderRadius="10px"
          transformOrigin="center center"
          transform="scale(1)"
          transition="transform 0.5s"
          position="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
        > */}
        {/* <Image src={hatImage} alt="test" layout="fill" width="100%" /> */}
        {/* </Box> */}
      </Flex>
      {/* Buttons <a href="#picture-1" /> */}
      {mockImageSrcs.map(({ id }) => (
        <Button as="a" key={id} href={`#${id}`} style={{ width: '10px', height: '10px' }}></Button>
      ))}
    </Box>
  )
}

export { ImageCarousel }

// {/* <Image src={src} alt="test" layout='fill'/> */}
// {/* <Image src={src} alt="test" height={200} width={200} /> */}

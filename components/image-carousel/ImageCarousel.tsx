import Image from 'next/image'
import { Flex, Box, Button } from '@chakra-ui/react'
// import { ProductImage } from 'components/product-image'

const mockImageSrcs = [
  '/hat-example.png',
  '/board-example.png',
  '/mug-example.png',
  '/shirt-example.png',
  '/shorts-example.png',
]

function ImageCarousel() {
  return (
    <Box bg="transparent" height="100%" width="100%">
      <Flex overflowX="auto" scrollSnapType="x mandatory" scrollBehavior="smooth" height="100%">
        {mockImageSrcs.map((src) => (
          <Box
            key={src}
            id={src}
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
          >
            <Image src={src} alt="test" height={200} width={200} />
          </Box>
        ))}
      </Flex>
      {/* Buttons <a href="#picture-1" /> */}
      {mockImageSrcs.map((src) => (
        <Button
          as="a"
          key={src}
          href={`#${src}`}
          style={{ width: '10px', height: '10px' }}
        ></Button>
      ))}
    </Box>
  )
}

export { ImageCarousel }

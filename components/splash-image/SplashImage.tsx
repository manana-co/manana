import Image, { StaticImageData } from 'next/image'
import { AspectRatio } from '@chakra-ui/react'
import { useAspectRatio } from 'hooks/useAspectRatio'

function SplashImage({ image, imagePosition = 'center' }: Props) {
  const [width, height] = useAspectRatio()
  return (
    <AspectRatio position="relative" maxWidth="100vw" maxHeight="100vh" ratio={width / height}>
      <Image
        src={image}
        alt="main landing image"
        layout="fill"
        objectFit="cover"
        objectPosition={imagePosition}
        quality={100}
        priority
      />
    </AspectRatio>
  )
}

type Props = {
  image: StaticImageData
  imagePosition?: string
}

export { SplashImage }

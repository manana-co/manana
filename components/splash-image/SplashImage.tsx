import Image, { StaticImageData } from 'next/image'
import { AspectRatio, useMediaQuery } from '@chakra-ui/react'

import { useAspectRatio } from 'hooks/useAspectRatio'

function SplashImage({ image, imagePosition = 'center' }: Props) {
  const [width, height] = useAspectRatio()
  const [isSmallerThan400] = useMediaQuery('(max-width: 500px)')

  if (isSmallerThan400) {
    return <Image src={image} alt="main landing image" layout="responsive" quality={100} priority />
  }

  return (
    <AspectRatio position="relative" ratio={width / height}>
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

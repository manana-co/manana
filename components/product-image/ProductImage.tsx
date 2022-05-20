import { Image, useTheme, Center } from '@chakra-ui/react'

function ProductImage({ imageSrc, alternateText }: Props) {
  const {
    colors: { brandTan },
  } = useTheme()

  return (
    <Center height="100%" minWidth="30rem" bg={brandTan} userSelect="none" padding="2rem 1rem">
      <Image src={imageSrc} alt={alternateText} maxHeight="100%" maxWidth="100%" />
    </Center>
  )
}

type Props = {
  imageSrc: string
  alternateText: string
}

export { ProductImage }

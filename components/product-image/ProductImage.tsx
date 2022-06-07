import { Image, useTheme, Center } from '@chakra-ui/react'

function ProductImage({ imageSrc, alternateText, inGroup = false }: Props) {
  const {
    colors: { brandTan },
  } = useTheme()

  return (
    <Center
      height="100%"
      minWidth={inGroup ? '100%' : '20rem'}
      background={brandTan}
      userSelect="none"
      padding="2rem 1rem"
    >
      <Image src={imageSrc} alt={alternateText} maxHeight="100%" maxWidth="100%" />
    </Center>
  )
}

type Props = {
  imageSrc: string
  alternateText: string
  inGroup?: boolean
}

export { ProductImage }

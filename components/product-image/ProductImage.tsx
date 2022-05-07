import { Image, useTheme } from '@chakra-ui/react'

function ProductImage({ imageSrc, alternateText }: Props) {
  const {
    colors: { brandTan },
  } = useTheme()
  return (
    <Image
      src={imageSrc}
      alt={alternateText}
      height="100%"
      width="30rem"
      minWidth="30rem"
      bg={brandTan}
    />
  )
}

type Props = {
  imageSrc: string
  alternateText: string
}

export { ProductImage }

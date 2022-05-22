import { useTheme, Divider } from '@chakra-ui/react'

function Product() {
  const {
    colors: { brandRed },
  } = useTheme()
  return (
    <>
      <Divider bg={brandRed} height="1px" mb="1rem" />
      <Divider bg={brandRed} height="1px" mb="1rem" />
    </>
  )
}

export default Product

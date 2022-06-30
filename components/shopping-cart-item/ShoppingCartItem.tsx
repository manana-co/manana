import { Text, SimpleGrid, VStack, Image, Heading, Select, Box } from '@chakra-ui/react'
import { LineItem } from 'hooks/useCheckout'

function ShoppingCartItem({ item: { title, variant } }: Props) {
  return (
    <SimpleGrid minChildWidth="30%">
      <Image
        objectFit="contain"
        alt="thumbnail shopping cart image"
        src={variant.image.src}
        height="10rem"
      />
      <VStack justifyContent="center">
        <Heading size="md">{title}</Heading>
        <Text opacity="0.7">{variant.title}</Text>
        <Box>
          <Select
            // maxW="64px"
            aria-label="Select quantity"
            // focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
            // {...props}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </Select>
        </Box>
      </VStack>
      <VStack direction="column" justifyContent="center">
        <Heading size="md">{`$${variant.price}`}</Heading>
        <Text>Remove</Text>
      </VStack>
    </SimpleGrid>
  )
}

type Props = {
  item: LineItem
}

export { ShoppingCartItem }

import { Text, SimpleGrid, VStack, Image, Heading, Select, Box } from '@chakra-ui/react'
import { LineItem } from 'hooks/useCheckout'
import { makeArrOfNums } from 'utils'

function ShoppingCartItem({ item: { title, variant, quantity }, changeQuantity }: Props) {
  const quantities = makeArrOfNums(quantity + 3)

  return (
    <SimpleGrid minChildWidth="30%">
      <Image
        objectFit="contain"
        alt="thumbnail shopping cart image"
        src={variant?.image?.src}
        height="10rem"
      />
      <VStack justifyContent="center">
        <Heading size="md">{title}</Heading>
        <Text opacity="0.7">{variant.title}</Text>
        <Box>
          <Select
            aria-label="Select quantity"
            size="xs"
            onChange={(event) => changeQuantity(variant.id as string, Number(event.target.value))}
            value={quantity}
          >
            {quantities.map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
            {/* <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option> */}
          </Select>
        </Box>
      </VStack>
      <VStack direction="column" justifyContent="center">
        <Heading size="md">{`$${Number(variant.price) * quantity}`}</Heading>
        <Text>Remove</Text>
      </VStack>
    </SimpleGrid>
  )
}

type Props = {
  item: LineItem
  changeQuantity: (variantId: string, newQuantity: number) => void
}

export { ShoppingCartItem }

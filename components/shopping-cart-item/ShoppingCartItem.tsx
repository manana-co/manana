import { Grid, Text, Stack, Box } from '@chakra-ui/react'
// import { LineItem, ProductVariant } from 'shopify-buy'
import { ProductVariant } from 'shopify-buy'
function ShoppingCartItem({ item }: Props) {
  // const quantity = 2
  // const dropDownItems = Array.from(new Array(quantity + 2), x => x)

  return (
    <Grid height="5rem" templateColumns="3" templateRows="1">
      <Stack>
        <Text>{item.title}</Text>
        {/* <Text>{`Tan, 6' 0"`}</Text> */}
        {/* <Text>{`${item.selectedOptions.}, 6' 0"`}</Text> */}
      </Stack>
      <Stack direction="column">
        <Text>{item.price}</Text>
        {/* <Text>Remove</Text> */}
      </Stack>
    </Grid>
  )
}

type Props = {
  item: ProductVariant
}

export { ShoppingCartItem }

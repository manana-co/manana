import { Grid, Text, Stack } from '@chakra-ui/react'
import { LineItem } from 'hooks/useCheckout'

function ShoppingCartItem({ item: { title, variant } }: Props) {
  return (
    <Grid height="5rem" templateColumns="3" templateRows="1">
      <Stack>
        <Text>{title}</Text>
        <Text>{variant.title}</Text>
      </Stack>
      <Stack direction="column">
        <Text>{variant.price}</Text>
        <Text>Remove</Text>
      </Stack>
    </Grid>
  )
}

type Props = {
  item: LineItem
}

export { ShoppingCartItem }

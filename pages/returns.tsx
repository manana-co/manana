import { Divider, Flex, Heading, Text, useTheme } from '@chakra-ui/react'

function Returns() {
  const {
    colors: { brandTan, brandRed },
  } = useTheme()
  return (
    <Flex
      direction="column"
      alignItems="center"
      padding="2rem"
      background={brandTan}
      color={brandRed}
      minHeight="100vh"
      paddingTop="6rem"
    >
      <Heading size="2xl" padding="1rem 0" maxWidth="40rem">
        Returns and Exchanges
      </Heading>
      <Divider color={brandRed} maxWidth="40rem" />
      <Text padding="1rem 0" maxWidth="40rem">
        All returns or exchanges must be made within 30 days of the original purchase date and items
        must be in their original, unwashed and unworn condition with tags attached. Shipping
        charges are non refundable, unless the reason for return is a result of damage during
        shipping. To submit a return or exchange request please email us at howdy@manana.co with
        your order number and reason for return/exchange. We will send you a shipping label and when
        the order has been scanned to be sent back to us by the postal carrier, your refund or
        exchange credit will be processed.
      </Text>
    </Flex>
  )
}

export default Returns

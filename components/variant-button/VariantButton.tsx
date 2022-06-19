import { Button, useTheme } from '@chakra-ui/react'

function VariantButton({ text }: Props) {
  const {
    colors: { brandRed, brandTan },
  } = useTheme()
  const borderStyle = `2px solid ${brandRed}`

  return (
    <Button
      variant="unstyled"
      color={brandRed}
      border={borderStyle}
      borderRadius={0}
      display="flex"
      alignItems="center"
      width="5rem"
      _hover={{ background: brandRed, color: brandTan }}
    >
      {text}
    </Button>
  )
}

type Props = {
  text: string | number
}

export { VariantButton }

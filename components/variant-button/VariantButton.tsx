import { Button, useTheme } from '@chakra-ui/react'

function VariantButton({ text, selected = false, optionType, onSelect }: Props) {
  const {
    colors: { brandRed, brandTan, brandBlue },
  } = useTheme()
  const borderStyle = `1.5px solid ${brandRed}`

  return (
    <Button
      variant="unstyled"
      color={selected ? brandTan : brandRed}
      background={selected ? brandRed : 'transparent'}
      border={borderStyle}
      borderRadius={0}
      display="flex"
      alignItems="center"
      width="5rem"
      _hover={{ background: selected ? brandRed : `${brandBlue}50` }}
      onClick={() => onSelect(optionType, text)}
    >
      {text}
    </Button>
  )
}

type Props = {
  text: string
  selected?: boolean
  onSelect: (optionType: Props['optionType'], value: string) => void
  optionType: 'Color' | 'Size'
}

export { VariantButton }

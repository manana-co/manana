import { Button, Heading, useTheme } from '@chakra-ui/react'
import { ArrowButton } from 'components/arrow-button'

function MainMenuButton({ text, showArrow = false }: Props) {
  const {
    colors: { brandWhite },
    fonts: { title },
  } = useTheme()
  return (
    <Button
      display="flex"
      alignItems="center"
      height="5rem"
      variant="unstyled"
      _focus={{ boxShadow: 'none' }}
    >
      <Heading color={brandWhite} size="4xl" fontFamily={title}>
        {text}
      </Heading>
      {showArrow && <ArrowButton />}
    </Button>
  )
}

type Props = {
  text: string
  showArrow?: boolean
}

export { MainMenuButton }

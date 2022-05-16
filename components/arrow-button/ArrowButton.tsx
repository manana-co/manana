import { IconButton, useTheme } from '@chakra-ui/react'
import { Arrow } from 'components/icons/Arrow'

function ArrowButton({ direction = 'forward', onClick = () => {}, isMenuButton = false }: Props) {
  const {
    colors: { brandWhite },
  } = useTheme()

  const extraStyles = isMenuButton ? menuButtonStyles : {}

  return (
    <IconButton
      icon={<Arrow direction={direction} color={brandWhite} />}
      aria-label={`${direction} arrow button`}
      variant="unstyled"
      _focus={{ boxShadow: 'none' }}
      height="4rem"
      width="5rem"
      display="flex"
      justifyContent="center"
      onClick={onClick}
      sx={extraStyles}
    />
  )
}

type Props = {
  direction?: 'back' | 'forward'
  onClick?: () => unknown
  isMenuButton?: boolean
}

const menuButtonStyles = {
  position: 'absolute',
  right: 0,
  width: '4rem',
  marginRight: '1rem',
}

export { ArrowButton }

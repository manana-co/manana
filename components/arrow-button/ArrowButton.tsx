import { IconButton, useTheme } from '@chakra-ui/react'

function ArrowButton({ direction = 'forward', onClick }: Props) {
  const {
    colors: { brandWhite },
  } = useTheme()

  return (
    <IconButton
      icon={<Icon direction={direction} color={brandWhite} />}
      aria-label={`${direction} arrow button`}
      variant="unstyled"
      _focus={{ boxShadow: 'none' }}
      height="4rem"
      width="5rem"
      display="flex"
      justifyContent="center"
      onClick={onClick}
    />
  )
}

type Props = {
  direction?: 'back' | 'forward'
}

function Icon({ direction, color }: IconProps) {
  const transform = direction === 'back' ? 'rotate(180deg)' : ''
  return (
    <svg fill={color} width="54px" height="37px" style={{ transform }}>
      <polygon
        // transform="rotate(180deg)"
        transform="scale(0.5)"
        points="69.86,0 66.32,3.54 96.67,33.89 0,33.89 0,38.89 96.67,38.89 66.32,69.24 69.86,72.77 106.24,36.39 "
      />
    </svg>
  )
}

type IconProps = {
  direction: Props['direction']
  color: string
}

export { ArrowButton }

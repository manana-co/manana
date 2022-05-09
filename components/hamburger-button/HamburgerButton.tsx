import { IconButton } from '@chakra-ui/react'

function HamburgerButton({ color, onClick }: Props) {
  return (
    <IconButton
      aria-label="menu button"
      variant="unstyled"
      _focus={{ boxShadow: 'none' }}
      onClick={onClick}
    >
      <svg height="25px" width="42px" fill={color}>
        <rect width="40" height="3" />
        <rect y="10" width="40" height="3" />
        <rect y="20" width="40" height="3" />
      </svg>
    </IconButton>
  )
}

type Props = {
  color: string
  onClick: () => void
}

export { HamburgerButton }

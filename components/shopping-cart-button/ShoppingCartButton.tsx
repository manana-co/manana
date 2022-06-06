import { IconButton } from '@chakra-ui/react'

function ShoppingCartButton({ color, onClick }: Props) {
  return (
    <IconButton
      aria-label="shopping cart button"
      variant="unstyled"
      _focus={{ boxShadow: 'none' }}
      onClick={onClick}
      transform={['scale(0.7)', 'scale(0.7)', 'scale(1)', 'scale(1)']}
    >
      <svg width="30px" height="35px" fill={color} transform="scale(0.8)">
        <path
          transform="scale(0.5)"
          d="M49.68,24.5v-4.47C49.68,8.98,40.69,0,29.65,0C18.61,0,9.62,8.98,9.62,20.03v4.47H0v44.03h59.3V24.5H49.68z
	 M14.62,20.03C14.62,11.74,21.37,5,29.65,5s15.03,6.74,15.03,15.03v4.47H14.62V20.03z M54.3,63.53H5V29.5h49.3V63.53z"
        />
      </svg>
    </IconButton>
  )
}

type Props = {
  color: string
  onClick: () => void
}

export { ShoppingCartButton }

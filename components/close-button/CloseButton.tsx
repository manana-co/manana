import { Button, useTheme } from '@chakra-ui/react'

function CloseButton({ onClick }: Props) {
  const {
    colors: { brandWhite },
  } = useTheme()
  return (
    <Button
      variant="unstyled"
      _focus={{ boxShadow: 'none' }}
      position="absolute"
      right={0}
      width="4rem"
      height="4rem"
      display="flex"
      justifyContent="center"
      alignItems="center"
      onClick={onClick}
    >
      <svg fill={brandWhite} height="29px" width="29px">
        <polygon
          transform="scale(0.5)"
          points="58.82,3.54 55.29,0 29.41,25.88 3.54,0 0,3.54 25.88,29.41 0,55.29 3.54,58.82 29.41,32.95
	55.29,58.82 58.82,55.29 32.95,29.41 "
        />
      </svg>
    </Button>
  )
}

type Props = {
  onClick: () => unknown
}

export { CloseButton }

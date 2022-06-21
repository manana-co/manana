import Link from 'next/link'
import { Button, Heading, useTheme } from '@chakra-ui/react'
import { Arrow } from 'components/icons/Arrow'
import { routes, RouteName } from 'utils'

function MainMenuButton({
  text,
  showArrow = false,
  onClick,
  size = '4xl',
  route = 'notARoute',
}: Props) {
  const {
    colors: { brandWhite },
    fonts: { title },
  } = useTheme()
  return (
    <Link href={routes[route]}>
      <Button display="flex" alignItems="center" height="5rem" variant="unstyled" onClick={onClick}>
        <Heading color={brandWhite} size={size} fontFamily={title}>
          {text}
        </Heading>
        {showArrow && <Arrow color={brandWhite} />}
      </Button>
    </Link>
  )
}

type Props = {
  text: string
  showArrow?: boolean
  onClick?: () => unknown
  size?: '4xl' | '2xl'
  route?: RouteName
}

export { MainMenuButton }

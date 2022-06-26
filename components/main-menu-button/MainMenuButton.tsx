import Link from 'next/link'
import { Button, Heading, useTheme, TypographyProps, ThemingProps } from '@chakra-ui/react'
import { Arrow } from 'components/icons/Arrow'
import { routes, RouteName } from 'utils'
import { UrlObject } from 'url'

function MainMenuButton({
  text,
  showArrow = false,
  onClick,
  size = '4xl',
  fontSize = undefined,
  route = 'notARoute',
  routeQuery,
}: Props) {
  const {
    colors: { brandWhite },
    fonts: { title },
  } = useTheme()

  const ActualButton = (
    <Button
      display="flex"
      alignItems="center"
      height={['3rem', '5rem']}
      variant="unstyled"
      onClick={onClick}
    >
      <Heading
        color={brandWhite}
        size={size}
        fontSize={fontSize}
        fontFamily={title}
        marginRight={'0.5rem'}
      >
        {text}
      </Heading>
      {showArrow && <Arrow color={brandWhite} />}
    </Button>
  )

  if (route === 'notARoute') return ActualButton

  const href = routeQuery || {
    pathname: routes[route],
    query: {},
  }

  return <Link href={href}>{ActualButton}</Link>
}

type Props = {
  text: string
  showArrow?: boolean
  onClick?: () => unknown
  // eslint-disable-next-line @typescript-eslint/ban-types
  size?: ThemingProps['size']
  fontSize?: TypographyProps['fontSize']
  route?: RouteName
  routeQuery?: UrlObject
}

export { MainMenuButton }

function HamburgerButton({ color }: Props) {
  return (
    <svg height="25px" width="42px" fill={color}>
      <rect width="40" height="3" />
      <rect y="10" width="40" height="3" />
      <rect y="20" width="40" height="3" />
    </svg>
  )
}

type Props = {
  color: string
}

export { HamburgerButton }

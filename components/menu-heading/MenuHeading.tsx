import { useTheme, Heading, Divider } from '@chakra-ui/react'

function MenuHeading({ text }: Props) {
  const {
    colors: { brandTan },
  } = useTheme()
  return (
    <>
      <Heading color={brandTan} size="md" mt="2rem" mb="1rem" userSelect="none">
        {text}
      </Heading>
      <Divider bg={brandTan} height="1px" mb="1rem" variant="unstyled" />
    </>
  )
}

type Props = {
  text: string
}

export { MenuHeading }

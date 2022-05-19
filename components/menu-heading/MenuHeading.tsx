import { useTheme, Heading, Divider } from '@chakra-ui/react'

function MenuHeading({ text }: Props) {
  const {
    colors: { brandWhite },
  } = useTheme()
  return (
    <>
      <Heading color={brandWhite} size="md" mt="2rem" mb="1rem">
        {text}
      </Heading>
      <Divider bg={brandWhite} height="1px" mb="1rem" />
    </>
  )
}

type Props = {
  text: string
}

export { MenuHeading }

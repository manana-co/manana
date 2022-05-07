import Head from 'next/head'
import { Box, Image, useTheme } from '@chakra-ui/react'
import { TopNavbar } from 'components/top-navbar'

function Home() {
  const {
    colors: { brandBlue },
  } = useTheme()
  return (
    <Box bg={brandBlue}>
      <Head>
        <title>Mañana Co.</title>
      </Head>
      <TopNavbar />
      <Box maxHeight="100vh" overflow="hidden" display="flex" alignItems="center">
        <Image src="main-landing-defender.jpeg" alt="main landing image" width="100vw" />
      </Box>
      {/* <main>
        <Box height="12000px" />
      </main> */}
    </Box>
  )
}

export default Home

import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Image } from '@chakra-ui/react'
import { TopNavbar } from 'components/top-navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mañana Co.</title>
      </Head>
      <TopNavbar />
      <Image
        src="main-landing-defender.jpeg"
        alt="main landing image"
        width="100vw"
      />
      <main>
        <Box height="12000px" />
      </main>
      <footer></footer>
    </div>
  )
}

export default Home

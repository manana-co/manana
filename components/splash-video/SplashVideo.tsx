import { AspectRatio } from '@chakra-ui/react'

function SplashVideo() {
  return (
    <AspectRatio ratio={16 / 9}>
      <video autoPlay loop muted playsInline onContextMenu={() => false} preload="auto">
        <source src="main_vid.mp4" type="video/mp4" />
      </video>
    </AspectRatio>
  )
}

export { SplashVideo }

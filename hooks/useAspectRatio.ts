import { useEffect, useState } from 'react'

function useAspectRatio() {
  const [ratio, setRatio] = useState([4, 3])

  useEffect(() => {
    const width = window.innerWidth
    const height = window.innerHeight * 0.8
    const newRatio: number = getRatio(width, height)
    setRatio([width / newRatio, height / newRatio])
  }, [])

  return ratio
}

function getRatio(w: number, h: number): number {
  return h == 0 ? w : getRatio(h, w % h)
}

export { useAspectRatio }

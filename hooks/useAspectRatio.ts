import { useEffect, useState } from 'react'

function useAspectRatio() {
  const [ratio, setRatio] = useState([4, 3])

  useEffect(() => {
    const width = window.innerWidth
    const height = window.innerHeight
    const newRatio: number = getRatio(width, height)
    setRatio([width / newRatio, height / newRatio])
  }, [])

  return ratio
}

function getRatio(w: number, h: number): number {
  return h == 0 ? w : getRatio(h, w % h)
}

export { useAspectRatio }

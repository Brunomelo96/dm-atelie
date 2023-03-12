import { useLayoutEffect, useState } from 'react'

const useResize = (): [number, number] => {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  })

  const onResize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useLayoutEffect(() => {
    onResize()
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return [size.width, size.height]
}

export default useResize
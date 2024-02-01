import { useState, useEffect } from 'react'

const useWindowDimensions = () => {

  const hasWindow = typeof window !== 'undefined'

  const getWindowDimensions = () => ({
    width: hasWindow ? window.innerWidth : 0,
    height:  hasWindow ? window.innerHeight : 0,
    isMobile: hasWindow ? window.innerWidth <= 730 : false
  })

  const [windowDimensions, setWindowDimensions] = useState<{
    width: number,
    height: number,
    isMobile: boolean
  }>(getWindowDimensions())

  const handleResize = () => {
    setWindowDimensions(getWindowDimensions())
  }
  
  useEffect(() => {
    if (hasWindow) {
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [hasWindow])

  return windowDimensions
}

export default useWindowDimensions

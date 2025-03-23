'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

interface ScrollToTopProps {
  children: React.ReactNode
}

export const ScrollToTop = ({ children }: ScrollToTopProps) => {
  const pathName = usePathname()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }, [pathName])

  return children
}

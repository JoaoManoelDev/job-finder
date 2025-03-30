import { useCallback, useRef } from 'react'

type GeneicType = (...args: any[]) => void

interface UseDebounceProps<T extends GeneicType> {
  callback: T
  time?: number
}

export const useDebounce = <T extends (...args: Parameters<T>) => void>({
  callback,
  time = 500
}: UseDebounceProps<T>) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const debouncedCallback = useCallback((...args: Parameters<T>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      callback(...args)
    }, time)
  }, [callback, time])

  return debouncedCallback
}

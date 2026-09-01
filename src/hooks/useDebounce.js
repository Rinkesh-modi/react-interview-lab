import { useEffect, useState } from "react"

/**
 * Custom Hook: useDebounce
 * Delays updating the returned value until `delay` ms pass without a new update.
 * 
 * @param {any} value - The state/value to debounce (e.g. search query)
 * @param {number} delay - The delay in milliseconds (default: 500ms)
 * @returns {any} debouncedValue
 */
const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    // 1. Start a timer to update debouncedValue after delay ms
    const timerId = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // 2. Cleanup: Cancel previous timer if value changes before delay finishes
    return () => {
      clearTimeout(timerId)
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce

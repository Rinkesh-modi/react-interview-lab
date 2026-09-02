import { useEffect, useState } from "react"

export const useDebounce = (searchTerm, delay = 500) => {
  const [debTerm, setDebTerm] = useState("");
  useEffect((() => {
      const timerId = setTimeout(() => {
      setDebTerm(searchTerm)
    }, delay)
    return () => { clearTimeout(timerId) }
  }), [searchTerm, delay])
  return debTerm;
}
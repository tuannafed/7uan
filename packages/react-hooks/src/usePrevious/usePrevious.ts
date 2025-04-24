import { useEffect, useRef } from 'react'

/**
 * Custom hook that stores the previous value of a state.
 *
 * @template T The type of the state.
 * @param {T} state - The current state value.
 * @returns {T | undefined} The previous state value or `undefined` if it hasn't changed.
 * @see [Documentation](https://domain.com/use-previous)
 * @example
 * ```tsx
 * const previousValue = usePrevious(currentValue);
 *
 * console.log(previousValue); // Logs the previous value of currentValue
 * ```
 */
export function usePrevious<T>(state: T): T | undefined {
  const ref = useRef<T>(undefined)

  useEffect(() => {
    ref.current = state
  }, [state]) // Ensure it updates only when `state` changes

  return ref.current
}

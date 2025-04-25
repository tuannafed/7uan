import { useCallback, useState } from 'react';

import type { Dispatch, SetStateAction } from 'react';

/**
 * Return type for the useCounter hook.
 * @public
 */
export interface UseCounterReturn {
  /** The current count value. */
  count: number;
  /** Function to increment the counter by 1. */
  increment: () => void;
  /** Function to decrement the counter by 1. */
  decrement: () => void;
  /** Function to reset the counter to its initial value. */
  reset: () => void;
  /** Function to set a specific value to the counter. */
  setCount: Dispatch<SetStateAction<number>>;
}

/**
 * Custom hook that manages a counter with increment, decrement, reset, and setCount functionalities.
 *
 * @param initialValue - The initial value for the counter (default is 0).
 * @returns An object containing the current count and functions to interact with the counter.
 *
 * @example
 * ```tsx
 * const { count, increment, decrement, reset, setCount } = useCounter(5);
 *
 * // Increment by 1
 * increment();
 *
 * // Decrement by 1
 * decrement();
 *
 * // Reset to initial value
 * reset();
 *
 * // Set to a specific value
 * setCount(10);
 * ```
 *
 * @public
 */
export function useCounter(initialValue?: number): UseCounterReturn {
  const [count, setCount] = useState(initialValue ?? 0);

  const increment = useCallback(() => {
    setCount((x) => x + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((x) => x - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(initialValue ?? 0);
  }, [initialValue]);

  return {
    count,
    increment,
    decrement,
    reset,
    setCount,
  };
}

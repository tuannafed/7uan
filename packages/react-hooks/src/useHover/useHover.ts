import { useState } from 'react'

import type { RefObject } from 'react'

import { useEventListener } from '../useEventListener'

/**
 * Custom hook that tracks whether a DOM element is being hovered over.
 * @template T - The type of the DOM element. Defaults to `HTMLElement`.
 * @param {RefObject<T>} elementRef - The ref object for the DOM element to track.
 * @returns {boolean} A boolean value indicating whether the element is being hovered over.
 * @public
 * @see [Documentation](https://domain.com//use-hover)
 * @example
 * ```tsx
 * const buttonRef = useRef<HTMLButtonElement>(null);
 * const isHovered = useHover(buttonRef);
 * // Access the isHovered variable to determine if the button is being hovered over.
 * ```
 */
export function useHover<T extends HTMLElement = HTMLElement>(
  elementRef: RefObject<T | null>
): boolean {
  const [value, setValue] = useState<boolean>(false)

  const handleMouseEnter = () => {
    setValue(true)
  }
  const handleMouseLeave = () => {
    setValue(false)
  }

  useEventListener('mouseenter', handleMouseEnter, elementRef as RefObject<T>)
  useEventListener('mouseleave', handleMouseLeave, elementRef as RefObject<T>)

  return value
}

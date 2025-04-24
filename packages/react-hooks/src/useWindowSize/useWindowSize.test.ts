import { act, renderHook } from '@testing-library/react'

import { useWindowSize } from './useWindowSize'

const windowResize = (dimension: 'width' | 'height', value: number): void => {
  if (dimension === 'width') {
    window.innerWidth = value
  }

  if (dimension === 'height') {
    window.innerHeight = value
  }

  window.dispatchEvent(new Event('resize'))
}

describe('useWindowSize()', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.useFakeTimers() // Mock timers

    // Set initial window size
    windowResize('width', 1920)
    windowResize('height', 1080)
  })

  it('should initialize', () => {
    const { result } = renderHook(() => useWindowSize())
    const { height, width } = result.current
    expect(typeof height).toBe('number')
    expect(typeof width).toBe('number')
    expect(result.current.width).toBe(1920)
    expect(result.current.height).toBe(1080)
  })

  it('should return the corresponding height', () => {
    const { result } = renderHook(() => useWindowSize())

    act(() => {
      windowResize('height', 420)
    })
    // Advance timers to allow the debounced update
    vi.advanceTimersByTime(500) // Ensure debounced updates
    expect(result.current.height).toBe(420)

    act(() => {
      windowResize('height', 2196)
    })
    // Advance timers again for the second resize event
    vi.advanceTimersByTime(500)
    expect(result.current.height).toBe(2196)
  })

  it('should return the corresponding width', async () => {
    const { result } = renderHook(() => useWindowSize())

    act(() => {
      windowResize('width', 420)
    })
    // Advance timers to allow debounced update
    vi.advanceTimersByTime(500)
    expect(result.current.width).toBe(420)

    act(() => {
      windowResize('width', 2196)
    })
    // Advance timers again for the second resize event
    vi.advanceTimersByTime(500)
    expect(result.current.width).toBe(2196)
  })
})

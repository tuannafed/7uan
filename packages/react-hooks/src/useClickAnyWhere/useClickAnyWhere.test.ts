import { act, fireEvent, renderHook } from '@testing-library/react'

import { useClickAnyWhere } from './useClickAnyWhere'

describe('useClickAnyWhere()', () => {
  it('should call handler (1) with MouseEvent on document click', async () => {
    const mockHandler = vitest.fn()

    // Render the hook with the mock handler
    renderHook(() => useClickAnyWhere(mockHandler))

    // Simulate a click event on the document
    await act(async () => {
      fireEvent.click(document) // Ensure we're simulating the click on the correct element
    })

    // Ensure the handler was called once and with a MouseEvent
    expect(mockHandler).toHaveBeenCalledTimes(1)
    expect(mockHandler).toHaveBeenCalledWith(expect.any(MouseEvent))
  })

  it('should call handler (2) with MouseEvent on two clicks', async () => {
    const mockHandler = vitest.fn()

    // Render the hook with the mock handler
    renderHook(() => useClickAnyWhere(mockHandler))

    // Simulate two click events on the document
    await act(async () => {
      fireEvent.click(document) // First click
      fireEvent.click(document) // Second click
    })

    // Ensure the handler was called twice and with MouseEvent each time
    expect(mockHandler).toHaveBeenCalledTimes(2)
    expect(mockHandler).toHaveBeenCalledWith(expect.any(MouseEvent))
  })
})

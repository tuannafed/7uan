import { describe, expect, test } from 'vitest'

import { sleep } from './sleep'

describe('sleep function', () => {
  test('should sleep for the given number of seconds', async () => {
    const start = Date.now()
    await sleep(2) // Sleep for 2 seconds
    const end = Date.now()
    const duration = end - start

    // Check that the sleep duration is at least 2 seconds
    expect(duration).toBeGreaterThanOrEqual(2000)
  })

  test('should resolve immediately when given 0 seconds', async () => {
    const start = Date.now()
    await sleep(0) // Sleep for 0 seconds
    const end = Date.now()
    const duration = end - start

    // Check that the sleep duration is as close to 0 as possible
    expect(duration).toBeLessThanOrEqual(50) // Small tolerance for processing time
  })
})

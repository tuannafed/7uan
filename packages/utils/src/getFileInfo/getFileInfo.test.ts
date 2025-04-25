/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, expect, test } from 'vitest'

import { getFileInfo } from './getFileInfo'

describe('getFileInfo', () => {
  describe('name()', () => {
    test('should return empty string for empty input', () => {
      expect(getFileInfo.name('')).toBe('')
    })

    test('should return filename from path', () => {
      expect(getFileInfo.name('path/to/file.txt')).toBe('file.txt')
      expect(getFileInfo.name('file.txt')).toBe('file.txt')
    })
  })

  describe('extension()', () => {
    test('should return empty string for empty input', () => {
      expect(getFileInfo.extension('')).toBe('')
    })

    test('should return file extension', () => {
      expect(getFileInfo.extension('file.txt')).toBe('txt')
      expect(getFileInfo.extension('image.jpg')).toBe('jpg')
    })

    test('should return empty string for files without extension', () => {
      expect(getFileInfo.extension('file')).toBe('')
    })
  })

  describe('size()', () => {
    test('should return "0 Bytes" for 0 bytes', () => {
      expect(getFileInfo.size(0)).toBe('0 Bytes')
    })

    test('should format file sizes correctly', () => {
      expect(getFileInfo.size(1024)).toBe('1.0 KB')
      expect(getFileInfo.size(1024 * 1024)).toBe('1.0 MB')
      expect(getFileInfo.size(1024 * 1024 * 1024)).toBe('1.0 GB')
    })
  })

  describe('dimensions()', () => {
    test('should return zero dimensions for non-image file', async () => {
      const file = new File(['content'], 'test.txt')
      const dimensions = await getFileInfo.dimensions(file)
      expect(dimensions).toEqual({ width: 0, height: 0 })
    })

    test('should return zero dimensions for image file in Node.js environment', async () => {
      // In Node.js environment, we can't get actual image dimensions
      const file = new File(['content'], 'test.jpg', { type: 'image/jpeg' })
      const dimensions = await getFileInfo.dimensions(file)
      expect(dimensions).toEqual({ width: 0, height: 0 })
    })
  })

  describe('all()', () => {
    test('should return empty info for null file', async () => {
      const info = await getFileInfo.all(null as any)
      expect(info).toEqual({
        name: '',
        extension: '',
        size: '0 Bytes',
        width: 0,
        height: 0,
      })
    })

    test('should return basic file info in Node.js environment', async () => {
      const file = new File(['content'], 'test.jpg', { type: 'image/jpeg' })
      const info = await getFileInfo.all(file)
      expect(info).toEqual({
        name: 'test',
        extension: 'jpg',
        size: expect.any(String),
        width: 0,
        height: 0,
      })
    })
  })
})

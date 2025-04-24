import { describe, expect, test } from 'vitest'

import { formatQueryString } from './formatQueryString'

describe('formatQueryString', () => {
  test('should format URL with pathParams and query parameters', () => {
    const baseUrl = 'https://api.example.com'
    const pathParams = ['users', 123]
    const query = { search: 'test', limit: 10 }

    const expectedOutput =
      'https://api.example.com/users/123?search=test&limit=10'

    expect(formatQueryString(baseUrl, pathParams, query)).toEqual(
      expectedOutput,
    )
  })

  test('should format URL with only baseUrl and pathParams', () => {
    const baseUrl = 'https://api.example.com'
    const pathParams = ['posts', 456]

    const expectedOutput = 'https://api.example.com/posts/456'

    expect(formatQueryString(baseUrl, pathParams)).toEqual(expectedOutput)
  })

  test('should format URL with only query parameters', () => {
    const baseUrl = 'https://api.example.com'
    const query = { category: 'books', page: 2 }

    const expectedOutput = 'https://api.example.com?category=books&page=2'

    expect(formatQueryString(baseUrl, undefined, query)).toEqual(expectedOutput)
  })

  test('should handle an empty query object correctly', () => {
    const baseUrl = 'https://api.example.com'
    const query = {}

    expect(formatQueryString(baseUrl, undefined, query)).toEqual(
      'https://api.example.com',
    )
  })

  test('should handle an empty pathParams array correctly', () => {
    const baseUrl = 'https://api.example.com'
    const pathParams: string[] = []

    expect(formatQueryString(baseUrl, pathParams)).toEqual(
      'https://api.example.com',
    )
  })

  test('should remove empty query parameters (null, undefined, empty string)', () => {
    const baseUrl = 'https://api.example.com'
    const query = { search: '', filter: undefined, sort: null, active: true }

    const expectedOutput = 'https://api.example.com?active=true'

    expect(formatQueryString(baseUrl, undefined, query)).toEqual(expectedOutput)
  })

  test('should format correctly when pathParams is a single string', () => {
    const baseUrl = 'https://api.example.com'
    const pathParams = 'products'

    const expectedOutput = 'https://api.example.com/products'

    expect(formatQueryString(baseUrl, pathParams)).toEqual(expectedOutput)
  })

  test('should format correctly when pathParams is a single number', () => {
    const baseUrl = 'https://api.example.com'
    const pathParams = 789

    const expectedOutput = 'https://api.example.com/789'

    expect(formatQueryString(baseUrl, pathParams)).toEqual(expectedOutput)
  })

  test('should handle array values in query parameters correctly', () => {
    const baseUrl = 'https://api.example.com'
    const query = { tags: ['tech', 'science'], limit: 5 }

    const expectedOutput =
      'https://api.example.com?tags=tech&tags=science&limit=5'

    expect(formatQueryString(baseUrl, undefined, query)).toEqual(expectedOutput)
  })
})

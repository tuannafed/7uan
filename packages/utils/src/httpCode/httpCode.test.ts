/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, expect, test } from 'vitest'

import codes from './codes.json'
import {
  getReasonPhrase,
  getStatusCode,
  ReasonPhrases,
  StatusCodes,
} from './httpCode'

describe('functions', () => {
  test('StatusCodes', () => {
    expect(Object.keys(StatusCodes).length / 2).toBe(codes.length)
    codes.forEach(o => {
      expect((<any>StatusCodes)[o.constant]).toBe(o.code as number)
    })
  })

  test('ReasonPhrases', () => {
    expect(Object.keys(ReasonPhrases).length).toBe(codes.length)
    codes.forEach(o => {
      expect((<any>ReasonPhrases)[o.constant]).toBe(o.phrase)
    })
  })

  test('getReasonPhrase', () => {
    codes.forEach(o => {
      expect(getReasonPhrase(o.code)).toBe(o.phrase)
    })
  })

  test('getStatusCode', () => {
    codes.forEach(o => {
      expect(getStatusCode(o.phrase)).toBe(o.code)
    })
  })

  test('getReasonPhrase nonexistent phrase', () => {
    expect(() => getReasonPhrase(9999999)).toThrowError(
      /Status code does not exist: 9999999/,
    )
  })

  test('getStatusCode nonexistent code', () => {
    expect(() => getStatusCode('blah blah')).toThrowError(
      /Reason phrase does not exist: blah blah/,
    )
  })
})

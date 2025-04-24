/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Convert object keys to snake case.
 * @param {T extends Record<string, unknown> | Record<string, unknown>[]} data The object or array of objects to process. It can be any object or array of objects.
 * @returns ConvertObjectKeysToSnakeCaseReturnType The transformed result, which is a string.
 * @see [Documentation](https://domain.com/utility/convert-object-keys-to-snake-case)
 * @public
 * @example
 * ```tsx
 * const result = convertObjectKeysToSnakeCase([{ snake_case_key: 'value' }]);
 *
 * console.log(result); // "Processed output"
 * ```
 */
export function convertObjectKeysToSnakeCase<
  T extends Record<string, unknown> | Record<string, unknown>[],
>(data: T): T {
  if (data === null || data === undefined) {
    return data
  }

  // ✅ If data is a primitive (string, number, boolean, null), return it as-is
  if (typeof data !== 'object' || data === null) {
    return data
  }

  if (Array.isArray(data)) {
    return data.map(item =>
      convertObjectKeysToSnakeCase(item as Record<string, unknown>),
    ) as T
  }

  if (typeof data === 'object') {
    const newObject: Record<string, unknown> = {}

    Object.keys(data).forEach(key => {
      const newKey = key.replace(/[A-Z]/g, match => `_${match.toLowerCase()}`)
      newObject[newKey] = convertObjectKeysToSnakeCase(data[key] as any)
    })

    return newObject as T
  }

  // ❌ This should never be hit anymore!
  throw new TypeError('Input must be an object or an array of objects.')
}

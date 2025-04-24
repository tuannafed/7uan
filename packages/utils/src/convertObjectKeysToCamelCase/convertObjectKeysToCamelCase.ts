/**
 * Convert object keys from snake_case to camelCase.
 * @param {T extends Record<string, unknown> | Record<string, unknown>[]} data The object or array of objects to process. It can be any object or array of objects.
 * @returns ConvertObjectKeysToCamelCaseReturnType The transformed result, which is a string.
 * @see [Documentation](https://domain.com/utility/convert-object-keys-to-camel-case)
 * @public
 * @example
 * ```tsx
 * const result = convertObjectKeysToCamelCase([{ snake_case_key: 'value' }]);
 *
 * console.log(result); // "Processed output"
 * ```
 */
export function convertObjectKeysToCamelCase<
  T extends Record<string, unknown> | Record<string, unknown>[],
>(data: T): T {
  if (data === null || data === undefined) {
    return data
  }

  if (Array.isArray(data)) {
    return data.map(item =>
      convertObjectKeysToCamelCase(item as Record<string, unknown>),
    ) as T
  }

  if (data && typeof data === 'object') {
    const newObject: Record<string, unknown> = {}

    Object.keys(data).forEach(key => {
      const newKey = key.replace(/_([a-z])/g, (_, match) => match.toUpperCase())

      // Ensure that we recursively handle objects or arrays correctly
      const value = data[key]
      newObject[newKey] =
        value && typeof value === 'object'
          ? convertObjectKeysToCamelCase(value as Record<string, unknown>)
          : value
    })

    return newObject as T
  }

  throw new TypeError('Input must be an object or an array of objects.')
}

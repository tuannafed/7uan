/**
 * Convert a string to a slug.
 * @param {string} text The text to be transformed.
 * @returns {string} The slug.
 * @see [Documentation](https://domain.com/utility/convert-to-slug)
 * @public
 * @example
 * ```tsx
 * const text = 'Hello World';
 * const slug = convertToSlug(text);
 * console.log(slug); // hello-world
 * ```
 */
export const convertToSlug = (text: string): string => {
  if (!text) return ''

  text = text.toLowerCase()
  text = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  text = text.replace(/[đĐ]/g, 'd')
  text = text.replace(/([^0-9a-z-\s])/g, '')
  text = text.replace(/(\s+)/g, '-')
  text = text.replace(/-+/g, '-')
  text = text.replace(/^-+|-+$/g, '')

  return text
}

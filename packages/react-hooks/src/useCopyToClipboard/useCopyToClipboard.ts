/* eslint-disable no-console */
import { useCallback, useState } from 'react'

/**
 * The copied text as `string` or `null` if nothing has been copied yet.
 */
type CopiedValue = string | null

/**
 * Function to copy text to the clipboard.
 * @param text - The text to copy to the clipboard.
 * @returns {Promise<boolean>} A promise that resolves to `true` if the text was copied successfully, or `false` otherwise.
 */
type CopyFn = (text: string) => Promise<boolean>

/**
 * Custom hook that copies text to the clipboard using the [`Clipboard API`](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API).
 * @returns {[CopiedValue, CopyFn]} An tuple containing the copied text and a function to copy text to the clipboard.
 * @public
 * @see [Documentation](https://domain.com//use-copy-to-clipboard)
 * @example
 * ```tsx
 * const [copiedText, copyToClipboard] = useCopyToClipboard();
 * const textToCopy = 'Hello, world!';
 *
 * // Attempt to copy text to the clipboard
 * copyToClipboard(textToCopy)
 *   .then(success => {
 *     if (success) {
 *       console.log(`Text "${textToCopy}" copied to clipboard successfully.`);
 *     } else {
 *       console.error('Failed to copy text to clipboard.');
 *     }
 *   });
 * ```
 */
export function useCopyToClipboard(): [CopiedValue, CopyFn] {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null)

  const copy: CopyFn = useCallback(async text => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported')

      return false
    }

    // Try to save to clipboard then save it in the state if worked
    try {
      await navigator.clipboard.writeText(text)
      setCopiedText(text)

      return true
    } catch (error) {
      console.warn('Copy failed', error)
      setCopiedText(null)

      return false
    }
  }, [])

  return [copiedText, copy]
}

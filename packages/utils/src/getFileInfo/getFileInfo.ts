/** Type for file information result */
type FileInfo = {
  name: string
  extension: string
  size: string
  width: number
  height: number
}

/** Type definition for getFileInfo utility object */
type GetFileInfoReturnType = {
  name: (filePath: string) => string
  extension: (fileName: string) => string
  size: (bytes: number) => string
  dimensions: (file: File) => Promise<{ width: number; height: number }>
  all: (file: File) => Promise<FileInfo>
}

/**
 * Utility functions for getting information about files.
 * @public
 * @example
 * ```tsx
 * const file = new File(['content'], 'example.jpg');
 * const fileName = getFileInfo.name(file.name);
 * const extension = getFileInfo.extension(file.name);
 * const size = getFileInfo.size(file.size);
 * const { width, height } = await getFileInfo.dimensions(file);
 * const info = await getFileInfo.all(file);
 *
 * console.log(info); // { name: 'example', extension: 'jpg', size: '8 Bytes', width: 0, height: 0 }
 * ```
 */
export const getFileInfo: GetFileInfoReturnType = {
  name: (filePath: string): string => {
    if (!filePath) return ''

    return filePath.split('/').pop() || ''
  },

  extension: (fileName: string): string => {
    if (!fileName) return ''

    const parts = fileName.split('.')

    return parts.length > 1 ? parts.pop() || '' : ''
  },

  size: (bytes: number): string => {
    if (!bytes) return '0 Bytes'

    const units = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    const i = Math.floor(Math.log(bytes) / Math.log(1024))

    return `${(bytes / 1024 ** i).toFixed(1)} ${units[i]}`
  },

  dimensions: async (
    file: File,
  ): Promise<{ width: number; height: number }> => {
    return new Promise(resolve => {
      if (!file || !file.type.startsWith('image/')) {
        return resolve({ width: 0, height: 0 })
      }

      // In Node.js environment or when Image API is not available
      if (typeof Image === 'undefined') {
        return resolve({ width: 0, height: 0 })
      }

      try {
        const img = new Image()
        const src = URL.createObjectURL(file)

        img.onload = () => {
          URL.revokeObjectURL(src)
          resolve({ width: img.width, height: img.height })
        }

        img.onerror = () => {
          URL.revokeObjectURL(src)
          resolve({ width: 0, height: 0 })
        }

        img.src = src
      } catch (error) {
        resolve({ width: 0, height: 0 })
      }
    })
  },

  all: async (file: File): Promise<FileInfo> => {
    if (!file) {
      return {
        name: '',
        extension: '',
        size: '0 Bytes',
        width: 0,
        height: 0,
      }
    }

    const fullName = getFileInfo.name(file.name)
    const name = fullName.split('.')[0] || ''
    const extension = getFileInfo.extension(file.name)
    const size = getFileInfo.size(file.size)
    const { width, height } = await getFileInfo.dimensions(file)

    return { name, extension, size, width, height }
  },
}

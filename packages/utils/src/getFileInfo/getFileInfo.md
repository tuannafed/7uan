# getFileInfo

A utility function to extract information from a file path or URL.

## 💫 Introduction

The `getFileInfo` function provides a convenient way to extract various pieces of information from a file path or URL, such as:

- File name
- File extension
- Base name (name without extension)
- Directory path
- Full path
- File size (if available)
- MIME type (if available)

## 🚀 Installation

This utility is part of the `@7uan/utils` package. To use it, install the package:

```bash
npm install @7uan/utils
# or
yarn add @7uan/utils
# or
pnpm add @7uan/utils
```

## 📖 Usage

```typescript
import { getFileInfo } from '@7uan/utils'

// Example with a file path
const fileInfo = getFileInfo('/path/to/document.pdf')
console.log(fileInfo)
// Output:
// {
//   name: 'document.pdf',
//   extension: 'pdf',
//   baseName: 'document',
//   directory: '/path/to',
//   fullPath: '/path/to/document.pdf',
//   size: 1024, // in bytes
//   mimeType: 'application/pdf'
// }

// Example with a URL
const urlInfo = getFileInfo('https://example.com/images/photo.jpg')
console.log(urlInfo)
// Output:
// {
//   name: 'photo.jpg',
//   extension: 'jpg',
//   baseName: 'photo',
//   directory: 'https://example.com/images',
//   fullPath: 'https://example.com/images/photo.jpg',
//   size: null, // size not available for URLs
//   mimeType: 'image/jpeg'
// }
```

## 📚 Features

- **Path Parsing**: Extracts file information from both local paths and URLs
- **MIME Type Detection**: Automatically detects MIME type based on file extension
- **Size Information**: Includes file size when available
- **TypeScript Support**: Fully typed with comprehensive type definitions
- **Cross-Platform**: Works on both Windows and Unix-like systems

## 🛠️ API

### Parameters

- `path` (string): The file path or URL to analyze

### Returns

An object containing the following properties:

- `name` (string): The full file name with extension
- `extension` (string): The file extension (without the dot)
- `baseName` (string): The file name without extension
- `directory` (string): The directory path
- `fullPath` (string): The complete path
- `size` (number | null): File size in bytes (null if not available)
- `mimeType` (string | null): MIME type of the file (null if not available)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This utility is part of the `@7uan/utils` package and is licensed under the ISC License.

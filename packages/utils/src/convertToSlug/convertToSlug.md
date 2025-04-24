# `convertToSlug` Function Documentation

## Overview

The `convertToSlug` function is used to convert a string into a slug-friendly format. This includes converting the string to lowercase, removing special characters, and replacing spaces with hyphens. It is especially useful for generating SEO-friendly URLs or consistent slugs for blog posts, articles, or any content that requires URL-friendly strings.

## Function Signature

```typescript
convertToSlug(text: string): string | undefined
```

### Parameters

- **`text`** (`string`): The input string to be converted into a slug.

### Returns

- **`string | undefined`**: A slugified version of the input string. If the input string is empty or undefined, it returns `undefined`.

## Usage Examples

### Example 1: Basic Text Conversion

```tsx
const result = convertToSlug('Hello World! This is a Test.')
console.log(result)
// Output: hello-world-this-is-a-test
```

### Example 2: Handling Special Characters

```tsx
const result = convertToSlug('Đây là một đoạn văn!')
console.log(result)
// Output: day-la-mot-doan-van
```

### Example 3: Removing Leading and Trailing Spaces

```tsx
const result = convertToSlug('   Hello   World   ')
console.log(result)
// Output: hello-world
```

### Example 4: Replacing Multiple Spaces with a Single Hyphen

```tsx
const result = convertToSlug('Hello     World')
console.log(result)
// Output: hello-world
```

### Example 5: Handling Empty Input

```tsx
const result = convertToSlug('')
console.log(result)
// Output: undefined
```

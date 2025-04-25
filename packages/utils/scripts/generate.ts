import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Define the utils folder
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const utilsDir = path.join(__dirname, '..', 'src')

// Function to clean up JSDoc comments
function cleanJSDocComment(comment: string): {
  description: string
  params: string[]
  returns: string
  example: string
} {
  const cleanComment = comment
    .replace(/\/\*\*|\*\//g, '') // Remove /** and */
    .split('\n')
    .map(line => line.trim().replace(/^\*\s*/, ''))
    .join('\n')
    .trim()

  // Extract example if it exists
  const exampleMatch = cleanComment.match(/@example\s*(```[^`]*```)/s)
  const example = exampleMatch?.[1]?.trim() || ''

  // Extract params
  const params = [
    ...cleanComment.matchAll(/@param\s+(?:\{[^}]+\})?\s*([^\n]+)/g),
  ]
    .map(match => match[1]?.trim() || '')
    .filter(Boolean)

  // Extract return
  const returnMatch = cleanComment.match(
    /@returns?\s+(?:\{[^}]+\})?\s*([^\n]+)/s,
  )
  const returns = returnMatch?.[1]?.trim() || ''

  // Remove @tags and their content for description
  let description = cleanComment
    .replace(/@\w+\s*(```[^`]*```|\{[^}]+\}|[^\n]*)/g, '')
    .replace(/\{[^}]+\}/g, '')
    .split('\n')
    .map(line => line.trim())
    .filter(line => line && !params.includes(line) && line !== returns)
    .join('\n')
    .trim()

  // Clean up any remaining markdown code blocks and type definitions
  description = description
    .replace(/```[^`]*```/g, '')
    .replace(/type\s+\w+\s*=[\s\S]*?(?=\n\n|\n$|$)/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim()

  return { description, params, returns, example }
}

// Function to extract function names and descriptions from TypeScript files
function extractFunctionDetails(filePath: string): {
  name: string
  description: string
  params: string[]
  returns: string
  example: string
}[] {
  const content = fs.readFileSync(filePath, 'utf-8')
  const functionDetails: {
    name: string
    description: string
    params: string[]
    returns: string
    example: string
  }[] = []

  // Match exported functions with JSDoc comments
  const functionMatches = [
    ...content.matchAll(
      /\/\*\*([\s\S]*?)\*\/\s*export\s+(?:function|const)\s+(\w+)/g,
    ),
  ]

  functionDetails.push(
    ...functionMatches.map(match => {
      const { description, params, returns, example } = cleanJSDocComment(
        match[1] || '',
      )
      const name = match[2] || ''
      return { name, description, params, returns, example }
    }),
  )

  // Match exported functions without JSDoc comments
  const plainFunctionMatches = [
    ...content.matchAll(
      /export\s+(?:function|const)\s+(\w+)(?:\s*=\s*(?:async\s*)?\([^)]*\)|[^=]*=>)/g,
    ),
  ]

  plainFunctionMatches.forEach(match => {
    const name = match[1]
    if (name && !functionDetails.some(fn => fn.name === name)) {
      functionDetails.push({
        name,
        description: '',
        params: [],
        returns: '',
        example: '',
      })
    }
  })

  // Match re-exports from index.ts
  if (filePath.endsWith('index.ts')) {
    const reExports = [
      ...content.matchAll(/export\s*\*\s*from\s*['"]\.\/([^'"]+)['"]/g),
    ]
    reExports.forEach(match => {
      const moduleName = match[1]
      const moduleFile = path.join(path.dirname(filePath), moduleName + '.ts')
      if (fs.existsSync(moduleFile)) {
        functionDetails.push(...extractFunctionDetails(moduleFile))
      }
    })
  }

  return functionDetails
}

// Function to scan all files in the utils folder
function getAllFunctionDetails(): {
  name: string
  description: string
  params: string[]
  returns: string
  example: string
}[] {
  const functionDetails: {
    name: string
    description: string
    params: string[]
    returns: string
    example: string
  }[] = []

  function scanDirectory(dir: string) {
    const items = fs.readdirSync(dir)

    items.forEach(item => {
      const fullPath = path.join(dir, item)
      const stat = fs.statSync(fullPath)

      if (stat.isDirectory()) {
        // Skip node_modules and other non-source directories
        if (!['node_modules', '.git', 'dist', '.turbo'].includes(item)) {
          scanDirectory(fullPath)
        }
      } else if (
        item.endsWith('.ts') &&
        !item.endsWith('.test.ts') &&
        !item.endsWith('.d.ts') &&
        !item.endsWith('.config.ts')
      ) {
        try {
          const details = extractFunctionDetails(fullPath)
          if (details.length > 0) {
            functionDetails.push(...details)
          }
        } catch (error) {
          console.error(`Error processing file ${fullPath}:`, error)
        }
      }
    })
  }

  scanDirectory(utilsDir)
  return functionDetails
}

// Function to generate README content dynamically
function generateReadme(
  functionDetails: {
    name: string
    description: string
    params: string[]
    returns: string
    example: string
  }[],
) {
  // Remove duplicates and sort functions alphabetically
  const uniqueFunctions = Array.from(
    new Map(functionDetails.map(fn => [fn.name, fn])).values(),
  ).sort((a, b) => a.name.localeCompare(b.name))

  // Add default examples for functions without examples
  uniqueFunctions.forEach(fn => {
    if (!fn.example) {
      switch (fn.name) {
        case 'getReasonPhrase':
          fn.example =
            '```ts\nconst reasonPhrase = getReasonPhrase(404);\nconsole.log(reasonPhrase); // "Not Found"\n```'
          break
        case 'getStatusCode':
          fn.example =
            '```ts\nconst statusCode = getStatusCode("Not Found");\nconsole.log(statusCode); // 404\n```'
          break
      }
    }
  })

  const readmeContent = `# 📦 @7uan/utils

A collection of utility functions to simplify common JavaScript/TypeScript operations.

## 📑 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
${uniqueFunctions.map(fn => `  - [${fn.name}](#${fn.name.toLowerCase()})`).join('\n')}
- [Contributing](#contributing)
- [License](#license)

## ⚙️ Installation

\`\`\`sh
npm install @7uan/utils
\`\`\`

or using Yarn:

\`\`\`sh
yarn add @7uan/utils
\`\`\`

or using pnpm:

\`\`\`sh
pnpm add @7uan/utils
\`\`\`

## 🚀 Usage

\`\`\`ts
import { ${uniqueFunctions.map(fn => fn.name).join(', ')} } from '@7uan/utils';
\`\`\`

## 🔧 Functions

${uniqueFunctions
  .map(
    fn => `### ${fn.name}

${fn.description}

${
  fn.params.length > 0
    ? `**Parameters:**\n${fn.params.map(param => `- ${param}`).join('\n')}\n`
    : ''
}${fn.returns ? `\n**Returns:** ${fn.returns}\n` : ''}

${fn.example ? `**Example:**\n${fn.example}` : ''}
`,
  )
  .join('\n')}

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## 📄 License

MIT
`

  fs.writeFileSync('README.md', readmeContent, 'utf-8')
}

// Execute the script
const functionDetails = getAllFunctionDetails()
generateReadme(functionDetails)

// eslint-disable-next-line no-console
console.log('README.md has been generated successfully!')

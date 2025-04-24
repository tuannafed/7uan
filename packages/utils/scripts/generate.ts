import fs from 'fs'
import path from 'path'

// Define the utils folder
const utilsDir = path.join(__dirname, 'src')

// Function to extract function names and descriptions from TypeScript files
function extractFunctionDetails(
  filePath: string,
): { name: string; description: string }[] {
  const content = fs.readFileSync(filePath, 'utf-8')
  const functionMatches = [
    ...content.matchAll(
      /export\s+function\s+(\w+)\s*\([\s\S]*?\}\s*\/\*\*([\s\S]*?)\*\//g,
    ),
  ]

  return functionMatches.map(match => {
    const name = match[1] || ''
    const description = match[2]
      ? match[2]
          .trim()
          .split('\n')
          .map(line => line.trim())
          .join(' ') // Clean up multi-line description
      : ''

    return { name, description }
  })
}

// Function to scan all files in the utils folder
function getAllFunctionDetails(): { name: string; description: string }[] {
  const functionDetails: { name: string; description: string }[] = []
  const files = fs.readdirSync(utilsDir)

  files.forEach(file => {
    if (file.endsWith('.ts')) {
      const filePath = path.join(utilsDir, file)
      functionDetails.push(...extractFunctionDetails(filePath))
    }
  })

  return functionDetails
}

// Generate README content dynamically
function generateReadme(
  functionDetails: { name: string; description: string }[],
) {
  const readmeContent = `# utils

A collection of utility functions to simplify common JavaScript/TypeScript operations.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
${functionDetails.map(fn => `  - [${fn.name}](#${fn.name.toLowerCase()})`).join('\n')}
- [Contributing](#contributing)
- [License](#license)

## Installation

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

## Usage

\`\`\`ts
import { ${functionDetails.map(fn => fn.name).join(', ')} } from '@7uan/utils';
\`\`\`

## Functions

${functionDetails
  .map(
    fn => `### ${fn.name}

**Description:** ${fn.description}

\`\`\`ts
// Example usage of ${fn.name}
\`\`\`
`,
  )
  .join('\n')}

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

MIT
`

  fs.writeFileSync('README.md', readmeContent, 'utf-8')
}

// Execute the script
const functionDetails = getAllFunctionDetails()
generateReadme(functionDetails)

// eslint-disable-next-line no-console
console.log('README.md has been generated successfully!')

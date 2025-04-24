import { includeIgnoreFile } from '@eslint/compat'
import jsLint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tsLint from 'typescript-eslint'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ignorePath = path.resolve(__dirname, '.eslintignore')

export default [
  // Config parsers
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,jsx,tsx}'],
  },
  // Config envs
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  // Base Rules
  jsLint.configs.recommended,
  ...tsLint.configs.recommended,
  ...[eslintConfigPrettier],

  {
    plugins: {
      'simple-import-sort': pluginSimpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^\\u0000'], // Side effects (e.g., `import 'normalize.css'`)
            ['^react$'],
            ['^[^.]'], // Libs
            ['^../|^~/|^./'],
          ],
        },
      ],
    },
  },

  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
        },
      ],
      // Allow unused variables that start with an underscore.
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'no-console': 'error',
      'prefer-const': 'error',
      'no-useless-escape': 'off',
      'import/no-anonymous-default-export': 'off',
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: 'if', next: '*' },
        { blankLine: 'any', prev: '*', next: 'export' },
        { blankLine: 'always', prev: '*', next: 'function' },
        { blankLine: 'always', prev: ['case', 'default'], next: '*' },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
        { blankLine: 'always', prev: 'directive', next: '*' },
        { blankLine: 'any', prev: 'directive', next: 'directive' },
      ],
    },
  },

  includeIgnoreFile(ignorePath),
]

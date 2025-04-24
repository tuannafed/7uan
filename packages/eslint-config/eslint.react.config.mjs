import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import typescriptParser from '@typescript-eslint/parser'

export default [
  pluginReactConfig,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      ...pluginReactConfig.languageOptions,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'react/jsx-no-literals': 'off',
    },
  },
]

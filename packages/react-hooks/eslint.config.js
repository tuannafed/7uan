import eslintInternals from '@repo/eslint-config/eslint.base.config.mjs'
import reactInternals from '@repo/eslint-config/eslint.react.config.mjs'

/** @type {import("eslint").Linter.Config[]} */
export default [...eslintInternals, ...reactInternals]

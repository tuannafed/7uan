export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // New feature
        'fix', // Bug fix
        'docs', // Documentation changes
        'style', // Code style changes (formatting, etc.)
        'refactor', // Code refactoring
        'perf', // Performance improvements
        'test', // Adding or modifying tests
        'build', // Build system or external dependencies
        'ci', // CI configuration
        'chore', // Other changes that don't modify src or test files
        'revert', // Reverts a previous commit
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'always', 'sentence-case'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 72],
  },
  plugins: [
    {
      rules: {
        'prefix-backlog': ({ raw }) => {
          const prefixPattern =
            /^(feat|fix|hotfix|release|chore|refactor|update): [A-Z][A-Za-z0-9\s.,''()-]*$/

          return [
            prefixPattern.test(raw),
            `Your subject should follow the pattern: "feat|fix|hotfix|release|chore|refactor|update: Capitalized commit message" (e.g., "feat: Add dark mode")`,
          ]
        },
      },
    },
  ],
}

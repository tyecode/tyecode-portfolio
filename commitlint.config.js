export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Enforce the types defined in CONTRIBUTING.md
    'type-enum': [
      2,
      'always',
      [
        'feat', // New feature (correlates with MINOR version)
        'fix', // Bug fix (correlates with PATCH version)
        'docs', // Documentation only changes
        'style', // Changes that don't affect code meaning (formatting, missing semicolons)
        'refactor', // Code change that neither fixes a bug nor adds a feature
        'perf', // Performance improvements
        'test', // Adding or updating tests
        'chore', // Changes to build process or auxiliary tools
      ],
    ],
    // Enforce case (lowercase)
    'type-case': [2, 'always', 'lower-case'],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    // Enforce format
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    // Length limits
    'header-max-length': [2, 'always', 100],
    'subject-min-length': [2, 'always', 3],
  },
};

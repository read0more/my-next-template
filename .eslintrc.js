module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  plugins: ['simple-import-sort', 'unused-imports', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'import/extensions': ['error', 'never', { css: 'always' }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.ts',
          '**/*.test.tsx',
          'src/msw/*',
          'vitest.config.ts',
        ],
      },
    ],
    'no-unused-vars': ['error'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  ignorePatterns: ['./.yarn'],
  settings: {
    'import/resolver': 'node',
  },
};

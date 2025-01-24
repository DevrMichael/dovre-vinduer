module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next',
    'next/core-web-vitals', // Includes Next.js-specific rules for Core Web Vitals
  ],
  rules: {
    // Add any specific ESLint rules you want here
  },
};

import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';

const compat = new FlatCompat({
  baseDirectory: path.resolve(__dirname),
});

export default [
  {
    // 환경 설정
    env: {
      browser: true,
      es2021: true,
    },
    // 확장 설정
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'plugin:emotion/recommended',
      'plugin:import/typescript',
      'next/core-web-vitals',
    ],
    // 파서 설정
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    // 플러그인 설정
    plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'emotion', 'import'],
    // 규칙 설정
    rules: {
      quotes: ['error', 'single'],
      'no-duplicate-imports': 'error',
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'no-multiple-empty-lines': 'error',
      'react/jsx-props-no-spreading': 'off',
      'emotion/jsx-import': 'error',
      'emotion/no-vanilla': 'error',
      'emotion/import-from-emotion': 'off',
      'emotion/styled-import': 'error',
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
    },
    // 설정
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
      react: {
        version: 'detect',
      },
    },
  },
];

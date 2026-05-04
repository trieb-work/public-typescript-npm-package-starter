import tsPlugin from '@typescript-eslint/eslint-plugin';  // Changed to default import
import tsParser from '@typescript-eslint/parser';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const config = [
  {
    ignores: ['dist', 'node_modules'],
  },
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': {
        rules: tsPlugin.rules,
      },
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
    },
  },
];

export default config;

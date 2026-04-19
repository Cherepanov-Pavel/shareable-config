import { defineConfig } from 'eslint/config';
import { includeIgnoreFile } from '@eslint/compat';
import path from 'path';
import globals from 'globals';

const gitignorePath = path.join(process.cwd(), '.gitignore');

export default defineConfig([
  includeIgnoreFile(gitignorePath),
  {
    name: 'Additional .gitignore patterns',
    ignores: [
      'public/js/*',
      '**/*.code-snippets'
    ],
  },
  {
    files: ['**/*.*js', '**/*.*vue'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
]);

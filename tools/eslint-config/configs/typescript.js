import tsPlugin from '@typescript-eslint/eslint-plugin';
import stylisticPlugin from '@stylistic/eslint-plugin';

import { tsRules } from '../rules/typescript/index.js';
import { jsFormatting, tsFormatting } from '../rules/stylistic/index.js';

import tsParser from '@typescript-eslint/parser';
import { jsRules } from '../rules/javascript/index.js';

export default {
  files: ['**/*.*ts'],
  plugins: {
    '@typescript-eslint': tsPlugin,
    '@stylistic': stylisticPlugin,
  },
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      projectService: true,
    },
  },
  rules: {
    ...jsRules,
    ...jsFormatting,
    ...tsRules,
    ...tsFormatting,
  },
};

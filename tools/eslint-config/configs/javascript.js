import stylisticPlugin from '@stylistic/eslint-plugin';

import { jsRules } from '../rules/javascript/index.js';
import { jsFormatting } from '../rules/stylistic/index.js';

export default {
  files: ['**/*.*js'],
  plugins: {
    '@stylistic': stylisticPlugin,
  },
  languageOptions: {
    sourceType: 'module',
    parserOptions: {
      sourceType: 'module',
    },
  },
  rules: {
    ...jsRules,
    ...jsFormatting,
  },
};

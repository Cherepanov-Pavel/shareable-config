import { vueRules } from '../rules/vue/index.js';
import { jsRules } from '../rules/javascript/index.js';
import { tsRules } from '../rules/typescript/index.js';

import { jsFormatting, tsFormatting } from '../rules/stylistic/index.js';

import vuePlugin from 'eslint-plugin-vue';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import stylisticPlugin from '@stylistic/eslint-plugin';

import vueParser from 'vue-eslint-parser';
import tsParser from '@typescript-eslint/parser';
import { getEnvs } from '../../../utils/env.js';

// https://github.com/sveltejs/eslint-plugin-svelte/issues/152#issuecomment-1150803175
const {
  isRepositoryUseTypescript: isTs,
} = await getEnvs();

export default {
  files: ['**/*.vue'],
  plugins: {
    'vue': vuePlugin,
    '@stylistic': stylisticPlugin,

    ...(isTs ? { '@typescript-eslint': tsPlugin } : {}),
  },
  languageOptions: {
    parser: vueParser,
    parserOptions: {
      parser: isTs ? tsParser : 'espree',
      ...(isTs ? { projectService: true } : {}),
      extraFileExtensions: ['.vue'],
    },
  },
  rules: {
    ...jsRules,
    ...jsFormatting,
    ...(isTs ? tsRules : {}),
    ...(isTs ? tsFormatting : {}),
    ...vueRules,
  },
};

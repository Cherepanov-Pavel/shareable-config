import { INDENT_SIZE } from '../constants.js';
import { ERROR, OFF } from '../severity.js';

export const formattingRules = {
  'vue/block-tag-newline': [ERROR, {
    singleline: 'always',
    multiline: 'always',
    maxEmptyLines: 0,
  }],
  // https://github.com/vuejs/eslint-plugin-vue/issues/2380
  'vue/define-macros-order': [OFF],
  'vue/first-attribute-linebreak': [ERROR, {
    singleline: 'below',
    multiline: 'below',
  }],
  'vue/html-closing-bracket-newline': [ERROR],
  'vue/html-closing-bracket-spacing': [ERROR],
  'vue/html-comment-content-newline': [OFF],
  'vue/html-comment-content-spacing': [ERROR],
  'vue/html-comment-indent': [OFF],
  'vue/html-indent': [ERROR, INDENT_SIZE],
  'vue/html-quotes': [ERROR, 'double'],
  'vue/html-self-closing': [ERROR],
  'vue/max-attributes-per-line': [ERROR, {
    singleline: 1,
    multiline: 1,
  }],
  'vue/multiline-html-element-content-newline': [ERROR, {
    ignores: ['pre'],
  }],
  'vue/mustache-interpolation-spacing': [ERROR, 'always'],
  'vue/new-line-between-multi-line-property': [OFF],
  'vue/no-multi-spaces': [ERROR],
  'vue/no-spaces-around-equal-signs-in-attribute': [ERROR],
  'vue/padding-line-between-blocks': [ERROR, 'always'],
  'vue/padding-line-between-tags': [OFF],
  'vue/padding-lines-in-component-definition': [OFF],
  'vue/script-indent': [OFF],
  'vue/singleline-html-element-content-newline': [OFF],
  'vue/v-for-delimiter-style': [ERROR, 'in'],
};

import { ERROR, OFF } from '../severity.js';
import { MAX_LEN } from '../constants.js';

import { possibleProblemRules } from '../javascript/possible-problems.js';
import { suggestionRules } from '../javascript/suggestions.js';

import { jsFormatting } from '../stylistic/index.js';

export const extensionRules = {
  'vue/no-constant-condition': possibleProblemRules['no-constant-condition'],
  'vue/no-empty-pattern': possibleProblemRules['no-empty-pattern'],
  'vue/no-irregular-whitespace': possibleProblemRules['no-irregular-whitespace'],
  'vue/no-loss-of-precision': possibleProblemRules['no-loss-of-precision'],
  'vue/no-sparse-arrays': possibleProblemRules['no-sparse-arrays'],

  'vue/camelcase': suggestionRules.camelcase,
  'vue/dot-notation': suggestionRules['dot-notation'],
  'vue/eqeqeq': suggestionRules.eqeqeq,
  'vue/no-console': suggestionRules['no-console'],
  'vue/no-restricted-syntax': suggestionRules['no-restricted-syntax'],
  'vue/no-useless-concat': suggestionRules['no-useless-concat'],
  'vue/object-shorthand': suggestionRules['object-shorthand'],
  'vue/prefer-template': suggestionRules['prefer-template'],

  'vue/array-bracket-newline': jsFormatting['@stylistic/array-bracket-newline'],
  'vue/array-bracket-spacing': jsFormatting['@stylistic/array-bracket-spacing'],
  'vue/array-element-newline': jsFormatting['@stylistic/array-element-newline'],
  'vue/arrow-spacing': jsFormatting['@stylistic/arrow-spacing'],
  'vue/block-spacing': jsFormatting['@stylistic/block-spacing'],
  'vue/brace-style': jsFormatting['@stylistic/brace-style'],
  'vue/comma-dangle': jsFormatting['@stylistic/comma-dangle'],
  'vue/comma-spacing': jsFormatting['@stylistic/comma-spacing'],
  'vue/comma-style': jsFormatting['@stylistic/comma-style'],
  'vue/dot-location': jsFormatting['@stylistic/dot-location'],
  'vue/func-call-spacing': jsFormatting['@stylistic/function-call-spacing'],
  'vue/key-spacing': jsFormatting['@stylistic/key-spacing'],
  'vue/keyword-spacing': jsFormatting['@stylistic/keyword-spacing'],
  'vue/multiline-ternary': jsFormatting['@stylistic/multiline-ternary'],
  'vue/no-extra-parens': jsFormatting['@stylistic/no-extra-parens'],
  'vue/object-curly-newline': jsFormatting['@stylistic/object-curly-newline'],
  'vue/object-curly-spacing': jsFormatting['@stylistic/object-curly-spacing'],
  'vue/object-property-newline': jsFormatting['@stylistic/object-property-newline'],
  'vue/operator-linebreak': jsFormatting['@stylistic/operator-linebreak'],
  'vue/quote-props': jsFormatting['@stylistic/quote-props'],
  'vue/space-in-parens': jsFormatting['@stylistic/space-in-parens'],
  'vue/space-infix-ops': jsFormatting['@stylistic/space-infix-ops'],
  'vue/space-unary-ops': jsFormatting['@stylistic/space-unary-ops'],
  'vue/template-curly-spacing': jsFormatting['@stylistic/template-curly-spacing'],

  '@stylistic/max-len': [OFF],
  'max-len': [OFF],
  'vue/max-len': [ERROR, {
    ...MAX_LEN,

    ignoreHTMLAttributeValues: true,
    ignoreHTMLTextContents: true,
  }],
};

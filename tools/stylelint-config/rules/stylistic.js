const INDENT_SIZE = 2;
const MAX_EMPTY_LINES = 1;
// const MAX_LINE_LENGTH = 80;

const ALWAYS = 'always';
const ALWAYS_MULTI_LINE = 'always-multi-line';
const ALWAYS_SINGLE_LINE = 'always-single-line';

const NEVER = 'never';
const NEVER_MULTI_LINE = 'never-multi-line';
const NEVER_SINGLE_LINE = 'never-single-line';

const LOWER_CASE = 'lower';

export default {
  rules: {
    /* == common == */
    '@stylistic/indentation': INDENT_SIZE,
    '@stylistic/linebreaks': 'unix',
    '@stylistic/max-empty-lines': MAX_EMPTY_LINES,
    // '@stylistic/max-line-length': [MAX_LINE_LENGTH, { ignorePattern: '/^@(import|use)\\s+/' }],
    '@stylistic/no-empty-first-line': true,
    '@stylistic/no-eol-whitespace': true,
    '@stylistic/no-extra-semicolons': true,
    '@stylistic/no-missing-end-of-source-newline': true,
    '@stylistic/unicode-bom': NEVER,

    /* == color == */
    '@stylistic/color-hex-case': LOWER_CASE,

    /* == function == */
    '@stylistic/function-comma-newline-after': ALWAYS_MULTI_LINE,
    '@stylistic/function-comma-newline-before': NEVER_MULTI_LINE,
    '@stylistic/function-comma-space-after': ALWAYS_SINGLE_LINE,
    '@stylistic/function-comma-space-before': NEVER,
    '@stylistic/function-max-empty-lines': 0,
    '@stylistic/function-parentheses-space-inside': NEVER_SINGLE_LINE,
    '@stylistic/function-whitespace-after': ALWAYS,

    /* == number == */
    '@stylistic/number-leading-zero': ALWAYS,
    '@stylistic/number-no-trailing-zeros': true,

    /* == string == */
    '@stylistic/string-quotes': 'double',

    /* == unit == */
    '@stylistic/unit-case': LOWER_CASE,

    /* == value list == */
    '@stylistic/value-list-comma-newline-after': ALWAYS_MULTI_LINE,
    '@stylistic/value-list-comma-newline-before': NEVER_MULTI_LINE,
    '@stylistic/value-list-comma-space-after': ALWAYS_SINGLE_LINE,
    '@stylistic/value-list-comma-space-before': NEVER,
    '@stylistic/value-list-max-empty-lines': 0,

    /* == property == */
    '@stylistic/property-case': LOWER_CASE,

    /* == declaration == */
    '@stylistic/declaration-bang-space-after': NEVER,
    '@stylistic/declaration-bang-space-before': ALWAYS,
    '@stylistic/declaration-colon-newline-after': ALWAYS_MULTI_LINE,
    '@stylistic/declaration-colon-space-after': ALWAYS_SINGLE_LINE,
    '@stylistic/declaration-colon-space-before': NEVER,

    /* == declaration block == */
    '@stylistic/declaration-block-semicolon-newline-after': ALWAYS,
    '@stylistic/declaration-block-semicolon-newline-before': NEVER_MULTI_LINE,
    '@stylistic/declaration-block-semicolon-space-after': ALWAYS_SINGLE_LINE,
    '@stylistic/declaration-block-semicolon-space-before': NEVER,
    '@stylistic/declaration-block-trailing-semicolon': ALWAYS,

    /* == block == */
    '@stylistic/block-closing-brace-empty-line-before': NEVER,
    '@stylistic/block-closing-brace-newline-after': ALWAYS,
    '@stylistic/block-closing-brace-newline-before': ALWAYS,
    '@stylistic/block-closing-brace-space-after': ALWAYS_SINGLE_LINE,
    '@stylistic/block-closing-brace-space-before': ALWAYS_SINGLE_LINE,
    '@stylistic/block-opening-brace-newline-after': ALWAYS,
    '@stylistic/block-opening-brace-newline-before': null,
    '@stylistic/block-opening-brace-space-after': ALWAYS_SINGLE_LINE,
    '@stylistic/block-opening-brace-space-before': ALWAYS,

    /* == selector == */
    '@stylistic/selector-attribute-brackets-space-inside': NEVER,
    '@stylistic/selector-attribute-operator-space-after': NEVER,
    '@stylistic/selector-attribute-operator-space-before': NEVER,
    '@stylistic/selector-combinator-space-after': ALWAYS,
    '@stylistic/selector-combinator-space-before': ALWAYS,
    '@stylistic/selector-descendant-combinator-no-non-space': true,
    '@stylistic/selector-max-empty-lines': 0,
    '@stylistic/selector-pseudo-class-case': LOWER_CASE,
    '@stylistic/selector-pseudo-class-parentheses-space-inside': NEVER,
    '@stylistic/selector-pseudo-element-case': LOWER_CASE,

    /* == selector list == */
    '@stylistic/selector-list-comma-newline-after': ALWAYS,
    '@stylistic/selector-list-comma-newline-before': NEVER_MULTI_LINE,
    '@stylistic/selector-list-comma-space-after': ALWAYS_SINGLE_LINE,
    '@stylistic/selector-list-comma-space-before': NEVER,

    /* == media features == */
    '@stylistic/media-feature-colon-space-after': ALWAYS,
    '@stylistic/media-feature-colon-space-before': NEVER,
    '@stylistic/media-feature-name-case': LOWER_CASE,
    '@stylistic/media-feature-parentheses-space-inside': NEVER,
    '@stylistic/media-feature-range-operator-space-after': ALWAYS,
    '@stylistic/media-feature-range-operator-space-before': ALWAYS,

    /* == media query list == */
    '@stylistic/media-query-list-comma-newline-after': ALWAYS_MULTI_LINE,
    '@stylistic/media-query-list-comma-newline-before': NEVER_MULTI_LINE,
    '@stylistic/media-query-list-comma-space-after': ALWAYS_SINGLE_LINE,
    '@stylistic/media-query-list-comma-space-before': NEVER_SINGLE_LINE,

    /* == at rule == */
    '@stylistic/at-rule-name-case': LOWER_CASE,
    '@stylistic/at-rule-name-newline-after': ALWAYS_MULTI_LINE,
    '@stylistic/at-rule-name-space-after': ALWAYS,
    '@stylistic/at-rule-semicolon-newline-after': ALWAYS,
    '@stylistic/at-rule-semicolon-space-before': NEVER,
  },
};

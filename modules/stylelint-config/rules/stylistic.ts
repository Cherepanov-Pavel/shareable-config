import {
	INDENT_SIZE,
} from "../../eslint-config/constants/rules.js";

const maxEmptyLines = 1;
// const MAX_LINE_LENGTH = 80;

const always = "always";
const alwaysMultiLine = "always-multi-line";
const alwaysSingleLine = "always-single-line";

const never = "never";
const neverMultiLine = "never-multi-line";
const neverSingleLine = "never-single-line";

const lowerCase = "lower";

export const stylelintConfigStylistic = {
	plugins: [
		"@stylistic/stylelint-plugin",
	],
	rules: {
		/* == common == */
		"@stylistic/indentation": INDENT_SIZE,
		"@stylistic/linebreaks": "unix",
		"@stylistic/max-empty-lines": maxEmptyLines,
		// '@stylistic/max-line-length': [MAX_LINE_LENGTH, { ignorePattern: '/^@(import|use)\\s+/' }],
		"@stylistic/no-empty-first-line": true,
		"@stylistic/no-eol-whitespace": true,
		"@stylistic/no-extra-semicolons": true,
		"@stylistic/no-missing-end-of-source-newline": true,
		"@stylistic/unicode-bom": never,

		/* == color == */
		"@stylistic/color-hex-case": lowerCase,

		/* == function == */
		"@stylistic/function-comma-newline-after": alwaysMultiLine,
		"@stylistic/function-comma-newline-before": neverMultiLine,
		"@stylistic/function-comma-space-after": alwaysSingleLine,
		"@stylistic/function-comma-space-before": never,
		"@stylistic/function-max-empty-lines": 0,
		"@stylistic/function-parentheses-space-inside": neverSingleLine,
		"@stylistic/function-whitespace-after": always,

		/* == number == */
		"@stylistic/number-leading-zero": always,
		"@stylistic/number-no-trailing-zeros": true,

		/* == string == */
		"@stylistic/string-quotes": "double",

		/* == unit == */
		"@stylistic/unit-case": lowerCase,

		/* == value list == */
		"@stylistic/value-list-comma-newline-after": alwaysMultiLine,
		"@stylistic/value-list-comma-newline-before": neverMultiLine,
		"@stylistic/value-list-comma-space-after": alwaysSingleLine,
		"@stylistic/value-list-comma-space-before": never,
		"@stylistic/value-list-max-empty-lines": 0,

		/* == property == */
		"@stylistic/property-case": lowerCase,

		/* == declaration == */
		"@stylistic/declaration-bang-space-after": never,
		"@stylistic/declaration-bang-space-before": always,
		"@stylistic/declaration-colon-newline-after": alwaysMultiLine,
		"@stylistic/declaration-colon-space-after": alwaysSingleLine,
		"@stylistic/declaration-colon-space-before": never,

		/* == declaration block == */
		"@stylistic/declaration-block-semicolon-newline-after": always,
		"@stylistic/declaration-block-semicolon-newline-before": neverMultiLine,
		"@stylistic/declaration-block-semicolon-space-after": alwaysSingleLine,
		"@stylistic/declaration-block-semicolon-space-before": never,
		"@stylistic/declaration-block-trailing-semicolon": always,

		/* == block == */
		"@stylistic/block-closing-brace-empty-line-before": never,
		"@stylistic/block-closing-brace-newline-after": always,
		"@stylistic/block-closing-brace-newline-before": always,
		"@stylistic/block-closing-brace-space-after": alwaysSingleLine,
		"@stylistic/block-closing-brace-space-before": alwaysSingleLine,
		"@stylistic/block-opening-brace-newline-after": always,
		"@stylistic/block-opening-brace-newline-before": null,
		"@stylistic/block-opening-brace-space-after": alwaysSingleLine,
		"@stylistic/block-opening-brace-space-before": always,

		/* == selector == */
		"@stylistic/selector-attribute-brackets-space-inside": never,
		"@stylistic/selector-attribute-operator-space-after": never,
		"@stylistic/selector-attribute-operator-space-before": never,
		"@stylistic/selector-combinator-space-after": always,
		"@stylistic/selector-combinator-space-before": always,
		"@stylistic/selector-descendant-combinator-no-non-space": true,
		"@stylistic/selector-max-empty-lines": 0,
		"@stylistic/selector-pseudo-class-case": lowerCase,
		"@stylistic/selector-pseudo-class-parentheses-space-inside": never,
		"@stylistic/selector-pseudo-element-case": lowerCase,

		/* == selector list == */
		"@stylistic/selector-list-comma-newline-after": always,
		"@stylistic/selector-list-comma-newline-before": neverMultiLine,
		"@stylistic/selector-list-comma-space-after": alwaysSingleLine,
		"@stylistic/selector-list-comma-space-before": never,

		/* == media features == */
		"@stylistic/media-feature-colon-space-after": always,
		"@stylistic/media-feature-colon-space-before": never,
		"@stylistic/media-feature-name-case": lowerCase,
		"@stylistic/media-feature-parentheses-space-inside": never,
		"@stylistic/media-feature-range-operator-space-after": always,
		"@stylistic/media-feature-range-operator-space-before": always,

		/* == media query list == */
		"@stylistic/media-query-list-comma-newline-after": alwaysMultiLine,
		"@stylistic/media-query-list-comma-newline-before": neverMultiLine,
		"@stylistic/media-query-list-comma-space-after": alwaysSingleLine,
		"@stylistic/media-query-list-comma-space-before": neverSingleLine,

		/* == at rule == */
		"@stylistic/at-rule-name-case": lowerCase,
		"@stylistic/at-rule-name-newline-after": alwaysMultiLine,
		"@stylistic/at-rule-name-space-after": always,
		"@stylistic/at-rule-semicolon-newline-after": always,
		"@stylistic/at-rule-semicolon-space-before": never,
	},
};

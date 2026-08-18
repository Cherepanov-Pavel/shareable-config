import { defineConfig } from 'eslint/config';
import jsonc from 'eslint-plugin-jsonc';
import { ERROR } from '../rules/severity.js';
import { jsFormatting } from '../rules/stylistic/index.js';

const JSON_BUT_JSONC_FILES = [
	'**/.vscode/*.json',
	'**/.vscode/*.code-snippets',
	'**/tsconfig*.json',
];
const COMMON_RULES = {
	'jsonc/no-bigint-literals': ERROR,
	'jsonc/no-binary-expression': ERROR,
	'jsonc/no-binary-numeric-literals': ERROR,
	'jsonc/no-escape-sequence-in-identifier': ERROR,
	'jsonc/no-hexadecimal-numeric-literals': ERROR,
	'jsonc/no-nan': ERROR,
	'jsonc/no-number-props': ERROR,
	'jsonc/no-numeric-separators': ERROR,
	'jsonc/no-octal-numeric-literals': ERROR,
	'jsonc/no-parenthesized': ERROR,
	'jsonc/no-plus-sign': ERROR,
	'jsonc/no-regexp-literals': ERROR,
	'jsonc/no-template-literals': ERROR,
	'jsonc/no-undefined-value': ERROR,
	'jsonc/no-unicode-codepoint-escapes': ERROR,
	'jsonc/array-bracket-newline': jsFormatting['@stylistic/array-bracket-newline'],
	'jsonc/array-bracket-spacing': jsFormatting['@stylistic/array-bracket-spacing'],
	'jsonc/array-element-newline': jsFormatting['@stylistic/array-element-newline'],
	'jsonc/indent': [
		jsFormatting['@stylistic/indent'][0],
		jsFormatting['@stylistic/indent'][1],
	],
	'jsonc/comma-dangle': jsFormatting['@stylistic/comma-dangle'],
};
const JSON_RULES = {
	'jsonc/no-comments': ERROR,
	'jsonc/comma-dangle': [
		ERROR,
		'never',
	],
};
const JSON_JSONC_RULES = {
	'jsonc/no-infinity': ERROR,
};


export default defineConfig([
	{
		plugins: {
			jsonc,
		},
	},

	{
		files: ['**/*.json'],
		ignores: [
			...JSON_BUT_JSONC_FILES,
			'package-lock.json',
		],
		language: 'jsonc/json',
		rules: {
			...COMMON_RULES,
			...JSON_JSONC_RULES,
			...JSON_RULES,
		},
	},

	{
		files: [
			'**/*.jsonc',
			...JSON_BUT_JSONC_FILES,
		],
		language: 'jsonc/jsonc',
		rules: {
			...COMMON_RULES,
			...JSON_JSONC_RULES,
		},
	},

	{
		files: ['**/*.json5'],
		language: 'jsonc/json5',
		rules: {
			...COMMON_RULES,
		},
	},
	{
		files: ['**/*.vue'],
		rules: {
			'jsonc/vue-custom-block/no-parsing-error': ERROR,
		},
	},
]);

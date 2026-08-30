import { defineConfig } from "eslint/config";
import jsonc from "eslint-plugin-jsonc";
import { ERROR } from "../rules/severity.js";
import { jsFormatting } from "../rules/stylistic/index.js";
import { possibleProblemRules } from "../rules/javascript/possible-problems.js";
import { suggestionRules } from "../rules/javascript/suggestions.js";
import stylisticPlugin from "@stylistic/eslint-plugin";

const JSON_BUT_JSONC_FILES = [
	"**/.vscode/*.json",
	"**/.vscode/*.code-snippets",
	"**/tsconfig*.json",
];
const COMMON_RULES = {
	"@stylistic/eol-last": jsFormatting["@stylistic/eol-last"],
	"jsonc/no-bigint-literals": ERROR,
	"jsonc/no-binary-expression": ERROR,
	"jsonc/no-binary-numeric-literals": ERROR,
	"jsonc/no-escape-sequence-in-identifier": ERROR,
	"jsonc/no-hexadecimal-numeric-literals": ERROR,
	"jsonc/no-nan": ERROR,
	"jsonc/no-number-props": ERROR,
	"jsonc/no-numeric-separators": ERROR,
	"jsonc/no-octal-numeric-literals": ERROR,
	"jsonc/no-parenthesized": ERROR,
	"jsonc/no-plus-sign": ERROR,
	"jsonc/no-regexp-literals": ERROR,
	"jsonc/no-template-literals": ERROR,
	"jsonc/no-undefined-value": ERROR,
	"jsonc/no-unicode-codepoint-escapes": ERROR,
	"jsonc/array-bracket-newline": jsFormatting["@stylistic/array-bracket-newline"],
	"jsonc/array-bracket-spacing": jsFormatting["@stylistic/array-bracket-spacing"],
	"jsonc/array-element-newline": jsFormatting["@stylistic/array-element-newline"],
	"jsonc/comma-dangle": jsFormatting["@stylistic/comma-dangle"],
	"jsonc/comma-style": jsFormatting["@stylistic/comma-style"],
	"jsonc/indent": [
		jsFormatting["@stylistic/indent"][0],
		jsFormatting["@stylistic/indent"][1],
	],
	"jsonc/key-spacing": jsFormatting["@stylistic/key-spacing"],
	"jsonc/no-dupe-keys": possibleProblemRules["no-dupe-keys"],
	"jsonc/no-floating-decimal": jsFormatting["@stylistic/no-floating-decimal"],
	"jsonc/no-irregular-whitespace": possibleProblemRules["no-irregular-whitespace"],
	"jsonc/no-octal-escape": suggestionRules["no-octal-escape"],
	"jsonc/no-octal": suggestionRules["no-octal"],
	"jsonc/no-sparse-arrays": ERROR,
	"jsonc/no-useless-escape": suggestionRules["no-useless-escape"],
	"jsonc/object-curly-newline": [
		jsFormatting["@stylistic/object-curly-newline"][0],
		{
			"ObjectExpression": { multiline: false, minProperties: 1 },
			"ObjectPattern": { multiline: false, minProperties: 1 },
			"ImportDeclaration": { multiline: false, minProperties: 1 },
			"ExportDeclaration": { multiline: false, minProperties: 1 },
		}
		// Object.fromEntries(
		// 	[
		// 		"ObjectExpression",
		// 		"ObjectPattern",
		// 		"ImportDeclaration",
		// 		"ExportDeclaration"
		// 	].map(key => [key, ["@stylistic/object-curly-newline"][1][key]])
		// )
	],
	"jsonc/object-curly-spacing": [
		jsFormatting["@stylistic/object-curly-spacing"][0],
		jsFormatting["@stylistic/object-curly-spacing"][1],
		{
			"arraysInObjects": true,
			"objectsInObjects": true,
			"emptyObjects": jsFormatting["@stylistic/object-curly-spacing"][1]
		}
	],
	"jsonc/object-property-newline": jsFormatting["@stylistic/object-property-newline"],
	"jsonc/quote-props": ERROR,
	"jsonc/quotes": jsFormatting["@stylistic/quotes"],
	"jsonc/space-unary-ops": ERROR
};
const JSON_RULES = {
	"jsonc/no-comments": ERROR,
	"jsonc/comma-dangle": [
		ERROR,
		"never",
	],
};
const JSON_JSONC_RULES = {
	"jsonc/no-infinity": ERROR,
	"jsonc/no-multi-str": suggestionRules["no-multi-str"],
};


export default defineConfig([
	{
		plugins: {
			"@stylistic": stylisticPlugin,
			jsonc,
		},
	},

	{
		files: [
			"**/*.json",
		],
		ignores: [
			...JSON_BUT_JSONC_FILES,
			"package-lock.json",
		],
		language: "jsonc/json",
		rules: {
			...COMMON_RULES,
			...JSON_JSONC_RULES,
			...JSON_RULES,
		},
	},

	{
		files: [
			"**/*.jsonc",
			...JSON_BUT_JSONC_FILES,
		],
		language: "jsonc/jsonc",
		rules: {
			...COMMON_RULES,
			...JSON_JSONC_RULES,
		},
	},

	{
		files: [
			"**/*.json5",
		],
		language: "jsonc/json5",
		rules: {
			...COMMON_RULES,
		},
	},
	{
		files: [
			"**/*.vue",
		],
		rules: {
			"jsonc/vue-custom-block/no-parsing-error": ERROR,
		},
	},
]);

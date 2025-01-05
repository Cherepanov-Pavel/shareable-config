import json from "@eslint/json";
import js from "@eslint/js";

const jsonRules = {
	...json.configs.recommended.rules
}

export default [
	{
    ignores: ['dist/', '**/icons/', '.vscode/'],
  },

	{
		files: ["**/*.js"],
		...js.configs.recommended
	},

	{
		plugins: {
			json,
		},
	},
	{
		files: ["**/*.json"],
		ignores: ["package-lock.json"],
		language: "json/json",
		rules: jsonRules
	},
	{
		files: ["**/*.jsonc", ".vscode/*.json"],
		language: "json/jsonc",
		rules: jsonRules
	},
	{
		files: ["**/*.json5"],
		language: "json/json5",
		rules: jsonRules
	},

	// @stylistic/arrow-spacing
];
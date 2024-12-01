import json from "@eslint/json";

export default [
	{
    ignores: ['dist/', '**/icons/'],
  },

	{
		plugins: {
			json,
		},
	},
	{
		files: ["**/*.json"],
		language: "json/json",
		rules: {
			...json.configs.recommended.rules,
		},
	},
	{
		files: ["**/*.jsonc", ".vscode/*.json"],
		language: "json/jsonc",
		rules: {
			...json.configs.recommended.rules,
		},
	},
	{
		files: ["**/*.json5"],
		language: "json/json5",
		rules: {
			...json.configs.recommended.rules,
		},
	},
];
